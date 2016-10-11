import ns from 'ima/namespace';
import AbstractController from 'ima/controller/AbstractController';

ns.namespace('app.base');

/**
 * Base controller for app.
 *
 * @class BaseController
 * @extends ima.controller.AbstractController
 * @namespace app.base
 * @module app
 * @submodule app.base
 */
export default class Controller extends AbstractController {

	/**
	 * Set meta params.
	 *
	 * @method setSeoParams
	 * @param {Object} resolvedPromises
	 * @param {ima.meta.MetaManager} metaManager
	 * @param {ima.router.Router} router
	 * @param {ima.dictionary.Dictionary} dictionary
	 * @param {Object} setting
	 */
	setMetaParams(resolvedPromises, metaManager, router, dictionary, setting) {
		var title = dictionary.get('home.seoTitle');
		var description = dictionary.get('home.seoDescription');
		// var image = router.getDomain() + setting.$Static.image + setting.Images.fbShare;

		var url = router.getUrl();

		metaManager.setTitle(title);

		metaManager.setMetaName('description', description);
		metaManager.setMetaName('keywords', 'user, research, study, product, reaction, cards');

		metaManager.setMetaName('twitter:title', title);
		metaManager.setMetaName('twitter:description', description);
		metaManager.setMetaName('twitter:card', 'summary');
		// metaManager.setMetaName('twitter:image', image);
		metaManager.setMetaName('twitter:url', url);

		metaManager.setMetaProperty('og:title', title);
		metaManager.setMetaProperty('og:description', description);
		metaManager.setMetaProperty('og:type', 'website');
		// metaManager.setMetaProperty('og:image', image);
		metaManager.setMetaProperty('og:url', url);
	}
}

ns.app.base.Controller = Controller;
