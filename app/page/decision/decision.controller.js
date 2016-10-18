import ns from 'ima/namespace';
import BaseController from 'app/base/Controller';

ns.namespace('app.page.decision');

/**
 * Controller for the decision page
 *
 * @class Controller
 * @extends app.base.BaseController
 * @namespace app.page.decision
 * @module app
 * @submodule app.page
 */
class Controller extends BaseController {

	/**
	 * Initializes the decision page controller.
	 *
	 * @method constructor
	 * @constructor
	 * @param {app.model.reaction.Service} reactionService
	 */
	constructor(reactionService) {
		super();

		/**
		 * ID
		 *
		 * @property id
		 * @private
		 * @type {string}
		 */
		this._id = 'decision';

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

ns.app.page.decision.Controller = Controller;
