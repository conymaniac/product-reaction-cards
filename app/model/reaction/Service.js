import ns from 'ima/namespace';
import BaseService from 'app/base/Service';

ns.namespace('app.model.reaction');

/**
 * Class for the reaction model.
 * It's a model of the reaction model.
 *
 * @class FeedService
 * @extends app.base.BaseService
 * @namespace app.model.reaction
 * @module app
 * @submodule app.model
 */
class Service extends BaseService {

	/**
	 * @method constructor
	 * @constructor
	 * @param {app.model.reaction.FeedResource} reactionResource
	 */
	constructor(reactionResource) {
		super();

		/**
		 * @property _reactionResource
		 * @private
		 * @type {app.model.reaction.FeedResource}
		 * @default reactionResource
		 * */
		this._reactionResource = reactionResource;
	}


	/**
	 * @method load
	 */
	load() {
		return this._reactionResource.getEntity();
	}
}

ns.app.model.reaction.Service = Service;
