import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const focus = ["LLMs", "AI Agents", "LangGraph", "RAG", "Evaluation", "Guardrails"];

export default async function OpenGraphImage() {
  // The share card shows the same photo as the site, read from public/ at build time.
  const photo = site.photo
    ? `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public", site.photo))).toString("base64")}`
    : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 90px",
        background: "linear-gradient(180deg, #070a14 0%, #10172e 60%, #2b2547 100%)",
        color: "#ededec",
      }}
    >
      {photo && (
        <img
          src={photo}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 9999, border: "6px solid #f2a93b", objectFit: "cover" }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", fontSize: 30, color: "#f2a93b", letterSpacing: 1 }}>
          {site.title} at TestGrid
        </div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 80, fontWeight: 700, lineHeight: 1 }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 26,
            fontSize: 38,
            lineHeight: 1.25,
            color: "#c9c9cc",
          }}
        >
          <span>I test AI until it breaks,</span>
          <span>then make it hold up.</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
          {focus.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "8px 18px",
                fontSize: 24,
                borderRadius: 9999,
                border: "2px solid #3a3d52",
                color: "#c8f751",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 24, color: "#8a8a8f" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}
