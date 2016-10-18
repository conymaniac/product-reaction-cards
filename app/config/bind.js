export let init = (ns, oc, config) => {

	//*************START CONSTANT**************
	oc.constant('API_FAKE_URL', 'http://localhost:3001/static/api/reactions.json')
	//*************END CONSTANT****************

	//CategoryList Module
	oc.constant('ReactionEntity', ns.app.model.reaction.Entity);
	oc.bind('ReactionFactory', ns.app.model.reaction.Factory, ['ReactionEntity']);
	oc.bind('ReactionResource', ns.app.model.reaction.Resource, ['$Http', 'API_FAKE_URL', 'ReactionFactory', '$Cache']);
	oc.bind('ReactionService', ns.app.model.reaction.Service, ['ReactionResource']);

	// Pages
	oc.inject(ns.app.page.welcome.Controller, ['ReactionService', '$CookieStorage']);
	oc.inject(ns.app.page.deal.Controller, ['ReactionService', '$CookieStorage', '$Router']);
	oc.inject(ns.app.page.decision.Controller, ['ReactionService', '$CookieStorage']);
	oc.inject(ns.app.page.thanku.Controller, ['ReactionService', '$CookieStorage']);

	oc.inject(ns.app.page.error.Controller, []);
	oc.inject(ns.app.page.notFound.Controller, []);

	oc.constant('$Utils', {
		get $Router() { return oc.get('$Router'); },
		get $Dispatcher() { return oc.get('$Dispatcher'); },
		get $EventBus() { return oc.get('$EventBus'); },
		get $Dictionary() { return oc.get('$Dictionary'); },
		get $Settings() { return oc.get('$Settings'); },
		get $Window() { return oc.get('$Window'); },
		get $CookieStorage() { return oc.get('$CookieStorage'); }
	});
};
