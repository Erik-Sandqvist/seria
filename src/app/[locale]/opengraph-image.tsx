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
 * Hämtar rubriktypsnittet vid bygget. ImageResponse kan inte använda
 * next/font, så filen måste in som binärdata. Misslyckas hämtningen faller
 * bilden tillbaka på systemets sans — hellre det än ett brutet bygge.
 */
async function displayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@700",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => (r.ok ? r.text() : ""));

    const url = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1];
    if (!url) return null;

    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "sv";
  const dict = getDictionary(locale);
  const font = await displayFont();

  const ink = "#12171a";
  const bone = "#f3efe7";
  const muted = "#93a0a7";
  const signal = "#2fa98f";

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
          fontFamily: font ? "Display" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 7 }}>
            <div style={{ width: 14, height: 24, borderRadius: 5, background: bone }} />
            <div style={{ width: 14, height: 38, borderRadius: 5, background: bone }} />
            <div style={{ width: 14, height: 52, borderRadius: 5, background: bone }} />
            <div style={{ width: 14, height: 68, borderRadius: 5, background: signal }} />
          </div>
          <div style={{ display: "flex", fontSize: 60, color: bone, letterSpacing: "-0.04em" }}>
            seria
            <span style={{ color: signal }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.04,
              color: bone,
              letterSpacing: "-0.045em",
              maxWidth: 900,
            }}
          >
            {dict.hero.titleLead}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.04,
              color: signal,
              letterSpacing: "-0.045em",
              maxWidth: 900,
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
            borderTop: `1px solid #273035`,
            paddingTop: 28,
            fontSize: 26,
            color: muted,
          }}
        >
          <div style={{ display: "flex" }}>{dict.hero.eyebrow}</div>
          <div style={{ display: "flex" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Display", data: font, weight: 700 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
