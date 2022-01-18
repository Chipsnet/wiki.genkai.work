import theme from "@nuxt/content-theme-docs";

export default theme({
    loading: { color: "#48bb78" },
    i18n: {
        locales: () => [
            {
                code: "ja",
                iso: "ja-JP",
                file: "ja-JP.js",
                name: "日本語",
            },
            {
                code: "en",
                iso: "en-US",
                file: "en-US.js",
                name: "English",
            },
        ],
        defaultLocale: "ja",
    }
});
