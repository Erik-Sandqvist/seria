/**
 * Körs som inline-skript i <head> innan sidan målas.
 *
 * Reveal-animationen sköts helt utanför React: klassen .js slår på det dolda
 * utgångsläget i CSS, och en IntersectionObserver fäller in elementen när de
 * scrollas in. Poängen är att innehållet aldrig är beroende av att React
 * hinner hydrera — går något fel visas allt direkt i stället för att bli
 * osynligt. En MutationObserver fångar element som tillkommer vid
 * klientnavigering.
 */
export const revealScript = `
(function () {
  var root = document.documentElement;
  function show(el) {
    // Attributet är vårt eget. React renderar det aldrig, så hydreringen
    // ser ingen skillnad — till skillnad från att ändra className.
    el.setAttribute("data-reveal", "in");
  }
  function showAll() {
    var els = document.querySelectorAll(".reveal");
    for (var i = 0; i < els.length; i++) show(els[i]);
  }
  try {
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("js");

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            show(entries[i].target);
            io.unobserve(entries[i].target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    var queued = false;
    function scan() {
      queued = false;
      var els = document.querySelectorAll(".reveal:not([data-reveal])");
      for (var i = 0; i < els.length; i++) io.observe(els[i]);
    }
    function schedule() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(scan);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", scan);
    } else {
      scan();
    }

    new MutationObserver(schedule).observe(root, {
      childList: true,
      subtree: true,
    });

    // Skyddsnät: överst på sidan finns alltid minst ett element i vy, så har
    // ingenting fällts in efter en stund fungerar inte observern här. Då visar
    // vi allt hellre än att lämna sidan tom.
    setTimeout(function () {
      if (!document.querySelector(".reveal[data-reveal]")) showAll();
    }, 1200);
  } catch (e) {
    showAll();
  }
})();
`;
