/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    colors: {
      "yellow-50": "rgba(255, 250, 231, 1)",
      "orange-50": "rgba(255, 245, 237, 1)",
      "orange-100": "rgba(255, 233, 211, 1)",
      "orange-200": "rgba(255, 207, 168, 1)",
      "orange-300": "rgba(255, 172, 113, 1)",
      "orange-400": "rgba(255, 127, 56, 1)",
      "orange-500": "rgba(254, 91, 17, 1)",
      "orange-600": "rgba(239, 63, 7, 1)",
      "orange-700": "rgba(198, 45, 8, 1)",
      "orange-800": "rgba(157, 38, 15, 1)",
      "orange-900": "rgba(126, 32, 15, 1)",
      "orange-950": "rgba(68, 12, 6, 1)",
      "yellow-100": "rgba(254, 243, 199, 1)",
      "yellow-200": "rgba(253, 229, 138, 1)",
      "yellow-300": "rgba(252, 210, 76, 1)",
      "yellow-400": "rgba(252, 188, 35, 1)",
      "yellow-500": "rgba(245, 156, 10, 1)",
      "yellow-600": "rgba(217, 117, 5, 1)",
      "yellow-700": "rgba(180, 82, 7, 1)",
      "yellow-800": "rgba(146, 63, 13, 1)",
      "yellow-900": "rgba(121, 52, 16, 1)",
      "yellow-950": "rgba(69, 25, 2, 1)",
      "green-50": "rgba(234, 255, 246, 1)",
      "green-100": "rgba(205, 254, 228, 1)",
      "green-200": "rgba(159, 250, 207, 1)",
      "green-300": "rgba(100, 242, 182, 1)",
      "green-400": "rgba(36, 226, 154, 1)",
      "green-500": "rgba(2, 183, 119, 1)",
      "green-600": "rgba(5, 163, 108, 1)",
      "green-700": "rgba(2, 131, 90, 1)",
      "green-800": "rgba(1, 103, 72, 1)",
      "green-900": "rgba(0, 85, 60, 1)",
      "green-950": "rgba(0, 48, 35, 1)",
      "brown-50": "rgba(249, 248, 241, 1)",
      "brown-100": "rgba(240, 235, 217, 1)",
      "brown-200": "rgba(221, 210, 170, 1)",
      "brown-300": "rgba(204, 184, 125, 1)",
      "brown-400": "rgba(192, 163, 94, 1)",
      "brown-500": "rgba(180, 139, 75, 1)",
      "brown-600": "rgba(159, 113, 64, 1)",
      "brown-700": "rgba(132, 88, 56, 1)",
      "brown-800": "rgba(109, 72, 50, 1)",
      "brown-900": "rgba(91, 60, 45, 1)",
      "brown-950": "rgba(51, 31, 21, 1)",
      "neutrals-50": "rgba(246, 246, 246, 1)",
      "neutrals-100": "rgba(231, 231, 231, 1)",
      "neutrals-200": "rgba(209, 209, 209, 1)",
      "neutrals-300": "rgba(176, 176, 176, 1)",
      "neutrals-400": "rgba(136, 136, 136, 1)",
      "neutrals-500": "rgba(109, 109, 109, 1)",
      "neutrals-600": "rgba(93, 93, 93, 1)",
      "neutrals-700": "rgba(79, 79, 79, 1)",
      "neutrals-800": "rgba(69, 69, 69, 1)",
      "neutrals-900": "rgba(61, 61, 61, 1)",
      "neutrals-950": "rgba(17, 17, 17, 1)",
    },
    /* Tilføj din egen farvepalette nedenfor */
    // colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     'farvenavn': {
    //         50: '#hexkode',
    //         100: '#hexkode',
    //         200: '#hexkode',
    //         300: '#hexkode',
    //         400: '#hexkode',
    //         500: '#hexkode',
    //         600: '#hexkode',
    //         700: '#hexkode',
    //         800: '#hexkode',
    //         900: '#hexkode',
    //     },
    //     'white': '#fff',
    //     'black': '#000',
    // },

    /* Tilføj din egen spacing nedenfor */
    // spacing: {
    //     'm': '40px',
    // },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    // fontFamily: {
    //     sans: ['Prompt', 'sans-serif'],
    //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
    // },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {
      /* Tilføj din egen spacing nedenfor */
      spacing: {
        "numberscale-2's-2": "2px",
        "numberscale-2's-4": "4px",
        "numberscale-2's-6": "6px",
        "numberscale-2's-8": "8px",
        "numberscale-2's-12": "12px",
        "numberscale-2's-16": "16px",
        "numberscale-2's-20": "20px",
        "numberscale-2's-24": "24px",
        "numberscale-2's-32": "32px",
        "numberscale-2's-40": "40px",
        "numberscale-2's-48": "48px",
        "numberscale-2's-56": "56px",
        "numberscale-2's-64": "64px",
        "numberscale-2's-full": "999px",
        "numberscale-1's-1": "1px",
        "numberscale-1's-2": "2px",
        "numberscale-1's-3": "3px",
        "numberscale-1's-4": "4px",
        "numberscale-1's-5": "5px",
        "numberscale-1's-6": "6px",
        "numberscale-1's-7": "7px",
        "numberscale-1's-8": "8px",
        "numberscale-1's-9": "9px",
        "numberscale-1's-10": "10px",
        1: "var(--numberscale-1's-1)",
        2: "var(--numberscale-1's-2)",
        3: "var(--numberscale-1's-3)",
        4: "var(--numberscale-1's-4)",
        "border_radius-10": "var(--numberscale-1's-10)",
        "border_radius-43": "43px",
        "border_radius-full": "var(--numberscale-2's-full)",
        xxs: "var(--numberscale-2's-4)",
        xs: "var(--numberscale-2's-8)",
        s: "var(--numberscale-2's-12)",
        sm: "var(--numberscale-2's-16)",
        m: "var(--numberscale-2's-20)",
        ml: "var(--numberscale-2's-32)",
        l: "var(--numberscale-2's-40)",
        xl: "var(--numberscale-2's-48)",
        "2xl": "var(--numberscale-2's-56)",
        "3xl": "var(--numberscale-2's-64)",
        "4xl": "72px",
        "5xl": "80px",
        "6xl": "88px",
        "7xl": "96px",
        "8xl": "104px",
        "9xl": "128px",
        "10xl": "213px",
        "11xl": "230px",
      },

      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },
      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },
      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
