import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        background: "linear-gradient(180deg, #070a14 0%, #10172e 60%, #2b2547 100%)",
        color: "#ededec",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, color: "#f2a93b", letterSpacing: 2 }}>
        {site.name} · {site.title}
      </div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 600, lineHeight: 1.08 }}>
        I test AI until it breaks, then make it hold up.
      </div>
    </div>,
    size,
  );
}
