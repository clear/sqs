const clearConfig = require("@clear/eslint-config/js");
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
