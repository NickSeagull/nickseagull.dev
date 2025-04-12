// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config

export default defineConfig({
  site: 'https://nickseagull.dev',
  integrations: [
    starlight({
        title: 'RAMSYS',
        customCss: [
            './src/custom.css',
            '@fontsource/monaspace-krypton/400.css',
            '@fontsource/monaspace-krypton/600.css',
        ],
        social: {
            github: 'https://github.com/nickseagull/nickseagull',
        },
        sidebar: [
            {
                label: '0 - Foundations & Meta',
                autogenerate: { directory: '0_meta' },
                collapsed: true,
            },
            {
                label: '1 - Humanities',
                autogenerate: { directory: '1_humanities' },
                collapsed: true,
            },
            {
                label: '2 - Social Sciences',
                autogenerate: { directory: '2_social_sciences' },
                collapsed: true,
            },
            {
                label: '3 - Natural Sciences',
                autogenerate: { directory: '3_natural_sciences' },
                collapsed: true,
            },
            {
                label: '4 - Formal Sciences',
                autogenerate: { directory: '4_formal_sciences' },
                collapsed: true,
            },
            {
                label: '5 - Applied Sciences',
                autogenerate: { directory: '5_applied_sciences' },
                collapsed: true,
            },
            {
                label: '6 - Technology & Computing',
                autogenerate: { directory: '6_tech_computing' },
                collapsed: true,
            },
            {
                label: '7 - Creative Arts & Design',
                autogenerate: { directory: '7_creative_arts' },
                collapsed: true,
            },
            {
                label: '8 - Semiotics & Language',
                autogenerate: { directory: '8_semiotics' },
                collapsed: true,
            },
            {
                label: '9 - Epistemic Experimentation',
                autogenerate: { directory: '9_epistemic_experimentation' },
                collapsed: true,
            },
        ],
    }),
  ],
});
