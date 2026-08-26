"use client";

/**
 * Sista skyddsnätet: fel i rot-layouten. Den ersätter hela dokumentet, så
 * den måste rendera html och body själv och kan inte använda sajtens CSS.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="sv">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#12171a",
          color: "#f3efe7",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ padding: "0 clamp(20px, 6vw, 80px)" }}>
          <p
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2fa98f",
            }}
          >
            Fel
          </p>
          <h1 style={{ margin: "16px 0 0", fontSize: "clamp(2rem, 6vw, 3rem)" }}>
            Något gick snett.
          </h1>
          <p style={{ maxWidth: 460, lineHeight: 1.6, color: "#b7c1c6" }}>
            Sidan kunde inte visas. Ladda om sidan och försök igen.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              border: 0,
              borderRadius: 999,
              padding: "13px 26px",
              fontSize: 14,
              cursor: "pointer",
              background: "#2fa98f",
              color: "#12171a",
            }}
          >
            Försök igen
          </button>
        </div>
      </body>
    </html>
  );
}
