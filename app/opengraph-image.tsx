import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hor Tola - Full-Stack Software Engineer & Tech Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08090C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #00F0FF, #10B981, #3B82F6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "36px",
              color: "#08090C",
            }}
          >
            HT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "52px", fontWeight: "bold" }}>
              Hor Tola
            </div>
            <div style={{ fontSize: "22px", color: "#00F0FF" }}>
              Full-Stack Software Engineer & ICT Trainer
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: "850px",
            lineHeight: 1.4,
          }}
        >
          Building Clean Systems. Empowering People. • National University of Battambang (NUBB) & Future Leader Center (FLC)
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "36px",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#E2E8F0",
            }}
          >
            Laravel & PHP
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#00F0FF",
            }}
          >
            Flutter & Dart
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#10B981",
            }}
          >
            €4k Grant Winner
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

