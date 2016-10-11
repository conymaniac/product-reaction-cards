import ns from 'ima/namespace';
import BaseResource from 'app/base/Resource';

ns.namespace('app.model.reaction');

/**
 * Resource for reactions.
 *
 * @class Resource
 * @extends app.base.BaseResource
 * @namespace app.model.reaction
 * @module app
 * @submodule app.model
 */
class Resource extends BaseResource {
	/**
	 * @method constructor
	 * @constructor
	 * @param {ima.http.HttpAgent} http
	 * @param {string} url - API URL (Base server + api specific path.)
	 * @param {app.model.reaction.Factory} reactionFactory
	 * @param {ima.cache.Cache} cache
	 * */
	constructor(http, url, reactionFactory, cache) {
		super(http, url, reactionFactory, cache);
	}
}

ns.app.model.reaction.Resource = Resource;
