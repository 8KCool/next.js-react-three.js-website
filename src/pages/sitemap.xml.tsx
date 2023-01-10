// import React from "react";
import glob from 'glob';
import pathLib from 'path'

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }: { res: any }) => {
    const BASE_URL = "https://trigan.org";

    const pagesDir = "src/pages/*.tsx";
    let pagesPaths = await glob.sync(pagesDir);

    pagesPaths = pagesPaths
        .filter((path) => !path.includes("["))
        .filter((path) => !path.includes("/_"))
        .filter((path) => !path.includes("admin"))
        .filter((path) => !path.includes("404"));

    let basePaths = pagesPaths.map((path) => pathLib.basename(path))

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${basePaths
            .map((url) => {
                console.log('url==>', url)
                return `
            <url>
              <loc>${BASE_URL}/${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;