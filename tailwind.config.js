module.exports = {
    mode: "jit",
    purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.ts"],
    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {
            backgroundImage: {
                "main-texture": "url('@/assets/images/bg-stars.svg')",
            },
            colors: {
                "icon-default": {
                    DEFAULT: "var(--icon-default-color)",
                },
                "dark-blue": {
                    DEFAULT: "var(--dark-blue-default)",
                    light: "var(--dark-blue-light)",
                    dark: "var(--dark-blue-dark)",
                },
                "soft-red": {
                    DEFAULT: "var(--soft-red)",
                },
                blue: {
                    grayish: "var(--grayish-blue)",
                },
            },
            fontFamily: {
                "red-hat-text": ["Red Hat Text", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
