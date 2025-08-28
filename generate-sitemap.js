const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");
const fs = require("fs");

const hostname = "https://www.whizzsystems.com/";

// ✅ Ensure public folder exists
const path = require('path');
const sitemapPath = path.join(__dirname, 'dist/whizz/sitemap.xml');

// Define static routes here (add your actual routes)
const staticRoutes = [
  "/",
  "/about",
  "/featured-products",
  "/news-&-insights",
  "/services",
  "/services/engineering-design/system-schematic-services",
  "/services/engineering-design/fpga-design-services",
  "/services/engineering-design/firmware-software-development",
  "/services/engineering-design/pcb-layout",
  "/services/engineering-design/3d-modeling-mechanical-design",
  "/services/engineering-design/signal-integrity-simulation-services",
  "/services/engineering-design/power-delivery-network-simulation",
  "/services/engineering-design/thermal-management-solutions",
  "/services/npi",
  "/services/npi#system-level-architecture",
  "/services/npi#schematic-design",
  "/services/npi#computer-aided-manufacturing",
  "/services/npi#Prototyping",
  "/services/npi#Testing",
  "/services/npi#Compliance",
  "/services/advanced-manufacturing",
  "/services/advanced-manufacturing#process-engineering",
  "/services/advanced-manufacturing#manufacturing-testing",
  "/services/advanced-manufacturing#Locations",
  "/services/advanced-manufacturing#environmental-testing",
  "/services/services/advanced-manufacturing#fix-spacing",
  "/services/advanced-manufacturing#box-build",
  "/services/lab-testing-solutions",
  "/services/lab-testing-solutions#board-bring-up",
  "/services/lab-testing-solutions#Validation",
  "/services/lab-testing-solutions#Characterization",
  "/services/supply-chain-management",
  "/services/supply-chain-management#components-procurement-and-planning",
  "/services/supply-chain-management#prototype-build-coordination",
  "/services/supply-chain-management#global-sourcing-and-broker-ecosystem",
  "/services/supply-chain-management#inventory-and-storage",
  "/services/sustainable_engineering",
  "/featured-products/whizz-kintex-7FPGA-WH705",
  "/featured-products/whizz-zyn-7000-wz706",
  "/news-&-insights/whitepaper-invensify",
  "/news-&-insights/whitepaper-5g-oru",
  "/news-&-insights/whitepaper-heatsink",
  "/news-&-insights/whitepaper-pcle6",
  "/news-&-insights/future-architecture-performance",
  "/news-&-insights/high-power-demand",
  "/news-&-insights/hardware-design",
  "/featured-products/whizz-virtex-7-fpga-wh707-a",
  "/featured-products/whizz-virtex-7-fpga-ws707",
  "/featured-products/whizz-virtex-7-fpga-ws709",
  "/featured-products/xilinx-virtex-7-fpga-ws7203-a",
  "/featured-products/xilinx-kintex-7-fpga-kc724",
  "/featured-products/xilinx-virtex-7-fpga-ws7203-b",
];

(async () => {
  sitemap.pipe(writeStream);

  staticRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap successfully generated at:", sitemapPath);
})();
