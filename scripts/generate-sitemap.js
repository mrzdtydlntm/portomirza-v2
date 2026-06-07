const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const ROUTES_FILE = path.join(ROOT_DIR, "src", "route", "routes.js");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");
const ROBOTS_FILE = path.join(PUBLIC_DIR, "robots.txt");
const INDEX_HTML_FILE = path.join(PUBLIC_DIR, "index.html");

function getSiteUrl() {
  const siteUrlFromEnv = process.env.SITE_URL;
  if (siteUrlFromEnv) {
    return normalizeSiteUrl(siteUrlFromEnv);
  }

  if (fs.existsSync(INDEX_HTML_FILE)) {
    const html = fs.readFileSync(INDEX_HTML_FILE, "utf8");
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (canonicalMatch && canonicalMatch[1]) {
      return normalizeSiteUrl(canonicalMatch[1]);
    }
  }

  return "https://mrzdtydlntm.my.id/";
}

function normalizeSiteUrl(url) {
  const parsed = new URL(url);
  return parsed.href.endsWith("/") ? parsed.href : `${parsed.href}/`;
}

function extractRoutePaths(routeFileContent) {
  const pathRegex = /path\s*:\s*["'`]([^"'`]+)["'`]/g;
  const routePaths = new Set();

  for (const match of routeFileContent.matchAll(pathRegex)) {
    const routePath = match[1].trim();

    if (!routePath.startsWith("/")) {
      continue;
    }

    if (routePath.includes(":")) {
      continue;
    }

    if (routePath.includes("*")) {
      continue;
    }

    routePaths.add(routePath);
  }

  return Array.from(routePaths).sort();
}

function buildLoc(siteUrl, routePath) {
  if (routePath === "/") {
    return siteUrl;
  }

  return new URL(routePath.replace(/^\//, ""), siteUrl).href;
}

function buildSitemapXml(siteUrl, routePaths) {
  const today = new Date().toISOString().split("T")[0];

  const urlItems = routePaths
    .map((routePath) => {
      const loc = buildLoc(siteUrl, routePath);
      const priority = routePath === "/" ? "1.0" : "0.8";
      const changefreq = routePath === "/" ? "weekly" : "monthly";

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlItems,
    "</urlset>",
    "",
  ].join("\n");
}

function upsertRobotsSitemap(siteUrl) {
  const sitemapLine = `Sitemap: ${new URL("sitemap.xml", siteUrl).href}`;

  if (!fs.existsSync(ROBOTS_FILE)) {
    fs.writeFileSync(ROBOTS_FILE, `User-agent: *\nAllow: /\n${sitemapLine}\n`, "utf8");
    return;
  }

  const robotsRaw = fs.readFileSync(ROBOTS_FILE, "utf8");
  const robotsLines = robotsRaw.split(/\r?\n/);

  const existingLineIndex = robotsLines.findIndex((line) => /^\s*Sitemap\s*:/i.test(line));

  if (existingLineIndex >= 0) {
    robotsLines[existingLineIndex] = sitemapLine;
  } else {
    if (robotsLines.length > 0 && robotsLines[robotsLines.length - 1].trim() !== "") {
      robotsLines.push("");
    }
    robotsLines.push(sitemapLine);
  }

  const finalText = `${robotsLines.join("\n").replace(/\n*$/, "")}\n`;
  fs.writeFileSync(ROBOTS_FILE, finalText, "utf8");
}

function main() {
  if (!fs.existsSync(ROUTES_FILE)) {
    throw new Error(`Routes file not found: ${ROUTES_FILE}`);
  }

  const siteUrl = getSiteUrl();
  const routeFileContent = fs.readFileSync(ROUTES_FILE, "utf8");
  const routePaths = extractRoutePaths(routeFileContent);

  if (routePaths.length === 0) {
    routePaths.push("/");
  }

  const sitemapXml = buildSitemapXml(siteUrl, routePaths);
  fs.writeFileSync(SITEMAP_FILE, sitemapXml, "utf8");

  upsertRobotsSitemap(siteUrl);

  console.log(`Generated sitemap with ${routePaths.length} route(s): ${SITEMAP_FILE}`);
}

main();
