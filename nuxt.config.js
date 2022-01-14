import theme from "@nuxt/content-theme-docs";

export default theme({
    loading: { color: "#48bb78" },
    generate: {
        fallback: "404.html", // for Netlify
        routes: ["/"], // give the first url to start crawling
    },
    i18n: {
        locales: () => [
            {
                code: "ja",
                iso: "ja-JP",
                file: "ja-JP.js",
                name: "日本語",
            }
        ],
        defaultLocale: "ja",
    },
});
