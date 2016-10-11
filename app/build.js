var mainjs = ['./app/main.js'];

var js = [
	'./app/!(assets|gulp)/**/!(*Spec).{js,jsx}'
];

var less = [
	'./app/assets/less/app.less',
	'./app/assets/less/colors.less',
	'./app/assets/less/base.less',
	'./app/assets/less/text.less',
	'./app/assets/less/page.less',
	'./app/component/**/*.less',
	'./app/page/**/*.less'
];

var languages = {
	en : [
		'./app/**/*EN.json'
	]
};

var vendors = {
	common: [
	],

	server: [
	],

	client: [
	],

	test: [
	]
};

var bundle = {
	js: [
		'./build/static/js/polyfill.js',
		'./build/static/js/shim.js',
		'./build/static/js/vendor.client.js',
		'./build/static/js/ima.client.js',
		'./build/static/js/app.client.js'
	],
	css: [
		'./build/static/css/app.css'
	]
};

module.exports = {
	js,
	mainjs,
	less,
	languages,
	vendors,
	bundle
};
