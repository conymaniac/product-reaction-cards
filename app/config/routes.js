export var init = (ns, oc, config) => {
	var router = oc.get('$Router');
	var ROUTER_CONSTANTS = oc.get('$ROUTER_CONSTANTS');

	router
		.add('home', '/', ns.app.page.welcome.Controller, ns.app.page.welcome.View)
		.add('welcome', '/', ns.app.page.welcome.Controller, ns.app.page.welcome.View)
		.add('deal-empty', '/card-deal', ns.app.page.welcome.Controller, ns.app.page.welcome.View)
		.add('deal', '/card-deal/:card', ns.app.page.deal.Controller, ns.app.page.deal.View)
		.add('decision', '/card-decision', ns.app.page.decision.Controller, ns.app.page.decision.View)
		.add('thanku', '/thank-you', ns.app.page.thanku.Controller, ns.app.page.thanku.View)
		.add(ROUTER_CONSTANTS.ROUTE_NAMES.ERROR, '/error', ns.app.page.error.Controller, ns.app.page.error.View)
		.add(ROUTER_CONSTANTS.ROUTE_NAMES.NOT_FOUND, '/not-found', ns.app.page.notFound.Controller, ns.app.page.notFound.View)
};
