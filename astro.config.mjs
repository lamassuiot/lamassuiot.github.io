// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const isAppHosting = !!process.env.FIREBASE_APP_HOSTING;

// https://astro.build/config
export default defineConfig({
  output: isAppHosting ? 'server' : 'static',
  adapter: isAppHosting ? node({ mode: 'standalone' }) : undefined,
});
