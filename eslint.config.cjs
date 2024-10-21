const clearConfig = require("@clear/style/eslint/js");
const globals = require("globals");

module.exports = [
    // Add additional globals for mocha and node support
    {
        languageOptions: {
            globals: {
                ...globals.node,

                should: false,
            },
        },
    },
    ...clearConfig,
];
