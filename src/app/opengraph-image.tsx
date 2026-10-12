/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let geist: Buffer | undefined;
  try {
    const fontPath = join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
    );
    geist = Buffer.from(await readFile(fontPath));
  } catch {}

  let logoData: string | undefined;
  try {
    const logoPath = join(process.cwd(), "public/logo.png");
    const buffer = await readFile(logoPath);
    logoData = `data:image/png;base64,${buffer.toString("base64")}`;
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#5d1011",
          color: "#ede8df",
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        {logoData ? (
          <img
            src={logoData}
            alt={SITE_NAME}
            style={{
              width: 160,
              height: "auto",
              marginBottom: 32,
              filter: "brightness(0) invert(1)",
            }}
          />
        ) : (
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: 32,
            }}
          >
            {SITE_NAME}
          </div>
        )}
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 20,
            opacity: 0.8,
            textAlign: "center",
            maxWidth: "640px",
            lineHeight: 1.5,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: geist
        ? [
            {
              name: "Geist",
              data: geist,
              style: "normal",
              weight: 400,
            },
          ]
        : [],
    },
  );
}
