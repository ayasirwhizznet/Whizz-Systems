const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const hostname = "https://www.whizzsystems.com/";

const sitemap = new SitemapStream({ hostname });
const sitemapPath = path.resolve(__dirname, "src/sitemap.xml");
const writeStream = createWriteStream(sitemapPath);

// Static routes across site
const staticRoutes = [
  "/",
  "/about",
  "/featured-products",
  "/news-&-insights",
  "/services",
  // Engineering & Design
  "/services/engineering-design/system-schematic-services",
  "/services/engineering-design/fpga-design-services",
  "/services/engineering-design/firmware-software-development",
  "/services/engineering-design/pcb-layout",
  "/services/engineering-design/3d-modeling-mechanical-design",
  "/services/engineering-design/signal-integrity-simulation-services",
  "/services/engineering-design/power-delivery-network-simulation",
  "/services/engineering-design/thermal-management-solutions",
  // NPI
  "/services/npi",
  // Advanced Manufacturing
  "/services/advanced-manufacturing",
  // Lab Testing Solutions
  "/services/lab-testing-solutions",
  // Supply Chain
  "/services/supply-chain-management",
  // Sustainable Engineering
  "/services/sustainable_engineering",
  // Featured products detail pages
  "/featured-products/whizz-kintex-7FPGA-wh705",
  "/featured-products/whizz-virtex-7-fpga-wh707-a",
  "/featured-products/whizz-virtex-7-fpga-ws707",
  "/featured-products/whizz-virtex-7-fpga-ws709",
  "/featured-products/xilinx-kintex-7-fpga-kc724",
  "/featured-products/xilinx-virtex-7-fpga-ws7203-a",
  "/featured-products/xilinx-virtex-7-fpga-ws7203-b",
  "/featured-products/whizz-zyn-7000-wz706",
  // Blogs/whitepapers
  "/news-&-insights/whitepaper-invensify",
  "/news-&-insights/whitepaper-5g-oru",
  "/news-&-insights/whitepaper-heatsink",
  "/news-&-insights/whitepaper-pcle6",
  "/news-&-insights/future-architecture-performance",
  "/news-&-insights/high-power-demand",
  "/news-&-insights/hardware-design",
];

(async () => {
  sitemap.pipe(writeStream);

  staticRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("Sitemap generated:", sitemapPath);
})();
