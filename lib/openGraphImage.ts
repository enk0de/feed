import { BASE_URL } from './../constants/common';
import fs from 'fs';
import { createHash } from 'crypto';
import { chromium } from 'playwright';

export async function getOpenGraphImage(path: string) {
  /* production에서만 사용합니다 */
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const baseUrl = BASE_URL;
  const url = `${baseUrl}${path}`;
  const hash = createHash('md5').update(url).digest('hex');

  const ogImageDir = `./public/assets/og`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${baseUrl}/assets/og/${hash}.png`;

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (e) {
    console.log(`generating og image for ${path}`);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();
  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer);
  return publicPath;
}
