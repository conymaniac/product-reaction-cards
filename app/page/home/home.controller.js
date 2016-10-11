import ns from 'ima/namespace';
import BaseController from 'app/base/Controller';

ns.namespace('app.page.home');

/**
 * Controller for the home page
 *
 * @class Controller
 * @extends app.base.BaseController
 * @namespace app.page.home
 * @module app
 * @submodule app.page
 */
class Controller extends BaseController {

	/**
	 * Initializes the home page controller.
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
	 * Load all needed data.
	 *
	 * @method load
	 * @return {Object} object of promise
	 */
	load() {
		return {
			reactions: this._reactionService.load()
		}
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

ns.app.page.home.Controller = Controller;
