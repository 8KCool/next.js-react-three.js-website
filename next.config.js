/* eslint-disable */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

const settings = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
  eslint: {
    dirs: ['src'],
  },
}


/** @type {import('next').NextConfig} */
module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
  eslint: {
    dirs: ['src'],
  },
  // pwa configuration
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public/pwa',
    importScripts: ['/worker.js'],
    runtimeCaching,
    buildExcludes: [
      /chunks\/images\/.*$/, // Don't precache files under .next/static/chunks/images this improves next-optimized-images behaviour
      /chunks\/pages\/api\/.*/, // Dont cache the API it needs fresh serverinfo
    ],
    exclude: [
      /\.map$/, // dont cache map files
      /^.*ts.*$/, // Dont let serviceworker touch the TS streams
      /-manifest.json$/, // exclude those pesky json files in _next root but still serve the ones we need from /_next/static
    ],
    skipWaiting: true, // installs new SW when available without a prompt, we only need to send a reload request to user.
    dynamicStartUrl: false, // recommend: set to false if your start url always returns same HTML document, then start url will be precached, this will help to speed up first load.
    reloadOnOnline: false, // Prevents reloads on offline/online switch
    sourcemap: false,
  }
})
