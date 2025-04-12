import { presetWind, defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        Roboto: 'Roboto:300,500,600,800',
      },
    }),
  ],
});
