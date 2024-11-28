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
    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0px",
      "border_radius-10": "10px",
      "border_radius-43": "43px",
      "border_radius-full": "999px",
    },

    extend: {
      /* Tilføj din egen spacing nedenfor */
      spacing: {
        xxs: "4px",
        xs: "8px",
        s: "12px",
        sm: "16px",
        m: "20px",
        ml: "32px",
        l: "40px",
        xl: "48px",
        "2xl": "56px",
        "3xl": "64px",
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
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        display: ["Kanit", "sans-serif"],
      },
      /* Tilføj dit typografiske hierarki herunder */
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
        h1: ["7.25rem", { lineHeight: "10.875rem" }],
        h2: ["4.375rem", { lineHeight: "5.469rem" }],
        h3: ["1.813rem", { lineHeight: "2.719rem" }],
        h4: ["1.375rem", { lineHeight: "2.063rem" }],
        p: ["1rem", { lineHeight: "1.5rem" }],
        card_small: ["1.563rem", { lineHeight: "2.234rem" }],
        button_large: ["1.625rem", { lineHeight: "2,178rem" }],
        button_medium: ["1.313rem", { lineHeight: "1.969rem" }],
        button_small: ["1.125rem", { lineHeight: "1.688rem" }],
        link_large: ["1.375rem", { lineHeight: "2.063rem" }],
        link_small: ["1rem", { lineHeight: "1.5rem" }],
        header: ["1.125rem", { lineHeight: "1.688rem" }],
        footer: ["1.438rem", { lineHeight: "2.156rem" }],
      },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      fontWeight: {
        regular: "400",
        bold: "700",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
