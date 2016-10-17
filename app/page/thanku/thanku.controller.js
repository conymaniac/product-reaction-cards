import ns from 'ima/namespace';
import BaseController from 'app/base/Controller';

ns.namespace('app.page.thanku');

/**
 * Controller for the thanku page
 *
 * @class Controller
 * @extends app.base.BaseController
 * @namespace app.page.thanku
 * @module app
 * @submodule app.page
 */
class Controller extends BaseController {

	/**
	 * Initializes the thanku page controller.
	 *
	 * @method constructor
	 * @constructor
	 * @param {app.model.reaction.Service} reactionService
	 */
	constructor(reactionService) {
		super();

		/**
		 * Service providing the list of feed items loaded from the REST API.
		 *
		 * @property reactionService
		 * @private
		 * @type {app.model.reaction.Service}
		 */
		this._reactionService = reactionService;
	}

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
		var title = dictionary.get('thanku.seoTitle');
		var description = dictionary.get('thanku.seoDescription');
	}

	/**
	 * Load all needed data.
	 *
	 * @method load
	 * @return {Object} object of promise
	 */
	load() {
	}

	/**
	 * @method activate
	 */
	// @override
	activate() {

	}

	/**
	 * @method destroy
	 */
	// @override
	destroy() {
	}
}

ns.app.page.thanku.Controller = Controller;
