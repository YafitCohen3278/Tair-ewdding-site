const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = class {
    encode(str) {
      const buf = Buffer.from(String(str), "utf8");
      return new Uint8Array(buf);
    }
  };
}

const BASE = (process.env.SITE_URL || "https://tair-ewdding-site.vercel.app").replace(
  /\/$/,
  ""
);
const OUTPUT_DIR = path.join(__dirname, "../public/qrcodes");

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  await QRCode.toFile(path.join(OUTPUT_DIR, "main-website.png"), BASE, {
    color: { dark: "#000000", light: "#ffffff" },
    width: 300,
    margin: 2,
  });

  for (let i = 1; i <= 31; i++) {
    const url = i === 31 ? BASE : `${BASE}/letter/${i}`;
    const svg = await QRCode.toString(url, {
      type: "svg",
      width: 328,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
      errorCorrectionLevel: "H",
    });
    fs.writeFileSync(path.join(OUTPUT_DIR, `letter-${i}.svg`), svg, "utf8");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
