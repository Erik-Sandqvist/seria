import { ImageResponse } from "next/og";
import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/routes";
import { site } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — webbutveckling & digitala lösningar`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Hämtar en skärning av rubriktypsnittet vid bygget. ImageResponse kan inte
 * använda next/font, så filen måste in som binärdata.
 */
async function fetchFace(italic: boolean): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@${
        italic ? 1 : 0
      }`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => (r.ok ? r.text() : ""));

    // Google svarar med ett @font-face per teckenomfång. Latin ligger sist.
    const urls = [...css.matchAll(/src:\s*url\((https:[^)]+)\)/g)];
    const url = urls.at(-1)?.[1];
    if (!url) return null;

    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Båda skärningarna eller ingen — annars blandas serif och systemsans. */
async function displayFaces() {
  const [normal, italic] = await Promise.all([fetchFace(false), fetchFace(true)]);
  return normal && italic ? { normal, italic } : null;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "sv";
  const dict = getDictionary(locale);
  const faces = await displayFaces();

  const ink = "#12171a";
  const bone = "#f3efe7";
  const muted = "#93a0a7";
  const signal = "#2fa98f";
  const display = faces ? "Display" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ink,
          padding: "72px 80px",
          fontFamily: display,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 7 }}>
            <div style={{ width: 12, height: 24, background: bone }} />
            <div style={{ width: 12, height: 38, background: bone }} />
            <div style={{ width: 12, height: 52, background: bone }} />
            <div style={{ width: 12, height: 68, background: signal }} />
          </div>
          <div style={{ display: "flex", fontSize: 58, color: bone }}>seria</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.06,
              color: bone,
              letterSpacing: "-0.021em",
              maxWidth: 920,
            }}
          >
            {dict.hero.titleLead}
          </div>
          {/* Betoningen ligger i kursiven, precis som i hero. */}
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.06,
              color: bone,
              fontStyle: "italic",
              letterSpacing: "-0.021em",
              maxWidth: 920,
            }}
          >
            {dict.hero.titleAccent}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #273035",
            paddingTop: 28,
            fontSize: 24,
            color: muted,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>{dict.hero.location}</div>
          <div style={{ display: "flex" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: faces
        ? [
            {
              name: "Display",
              data: faces.normal,
              weight: 400 as const,
              style: "normal" as const,
            },
            {
              name: "Display",
              data: faces.italic,
              weight: 400 as const,
              style: "italic" as const,
            },
          ]
        : undefined,
    },
  );
}
