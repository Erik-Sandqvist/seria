import { Fragment, type ReactNode } from "react";

/**
 * Ger *stjärnmarkerade* ord accentfärg.
 *
 * Markeringen ligger i ordboken i stället för i komponenten, så att svenska
 * och engelska kan betona olika ord — nyckelordet i en mening hamnar sällan
 * på samma ställe efter en översättning. Texten är fortfarande en vanlig
 * sträng och går att söka i, och en omarkerad sträng renderas oförändrad.
 */
export function highlight(
  text: string,
  className = "text-signal-400",
): ReactNode {
  // Delningen behåller innehållet i gruppen, så udda index är det markerade.
  const parts = text.split(/\*([^*]+)\*/g);

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
