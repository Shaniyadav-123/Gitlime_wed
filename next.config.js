/* eslint-disable no-labels */
const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
	TrailingSlash: true,
	images: {
		disableStaticImages: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	exportPathMap() {
		return {
			'/': { page: '/' },
			'/contact': { page: '/contact' },
			'/blank-page': { page: '/blank-page' },
			'/branding': { page: '/branding' },
			'/uxdesign': { page: '/uxdesign' },
			'/digitalmarketing': { page: '/digitalmarketing' },
			'/websitedevelopment': { page: '/websitedevelopment' },
			'/applicationdeployment': { page: '/applicationdeployment' },
			'/productdesign': { page: '/productdesign' },
			'/erpdevelopment': { page: '/erpdevelopment' },
			'/privacypolicy': { page: '/privacypolicy' },
			'/termsofuse': { page: '/termsofuse' },
		};
	},
	publicRuntimeConfig: {
		localeSubpaths:
			typeof process.env.LOCALE_SUBPATHS === 'string'
				? process.env.LOCALE_SUBPATHS
				: 'none',
	},
	webpack: (config, options) => {
		// eslint-disable-next-line no-restricted-syntax
		true,
			config.plugins.push(
				new ESLintPlugin({
					exclude: ['node_modules'],
				}),
			);
		config.node = {};
		return config;
	},
});
