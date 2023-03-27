module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["plugin:nuxt/recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"vue/multi-word-component-names": [0],
		"no-extraneous-dependencies": [0],
		"no-console": [1],
		"vue/require-default-prop": [0],
		"vue/attribute-hyphenation": [0],
		"vue/v-on-event-hyphenation": [0],
		"vue/require-explicit-emits": [0],
	},
};
