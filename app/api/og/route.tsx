import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Manikam Web Solutions";
  const subtitle = searchParams.get("subtitle") || "Izrada sajtova • Web shopovi • SEO • Google Ads";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(249, 115, 22, 0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(220, 38, 38, 0.06)",
            display: "flex",
          }}
        />

        {/* Content wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 80px",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: "22px",
              color: "#f97316",
              fontWeight: "700",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            MANIKAM WEB SOLUTIONS
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(to right, #f97316, #dc2626)",
              marginBottom: "36px",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          {/* Main title */}
          <div
            style={{
              fontSize: title.length > 30 ? "52px" : "64px",
              color: "#ffffff",
              fontWeight: "800",
              lineHeight: 1.15,
              marginBottom: "28px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>

          {/* URL badge */}
          <div
            style={{
              marginTop: "44px",
              padding: "10px 28px",
              background: "rgba(249, 115, 22, 0.12)",
              border: "1px solid rgba(249, 115, 22, 0.3)",
              borderRadius: "999px",
              fontSize: "18px",
              color: "#fb923c",
              fontWeight: "500",
              display: "flex",
            }}
          >
            manikamwebsolutions.com
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "5px",
            background: "linear-gradient(to right, #f97316, #ef4444, #dc2626)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
