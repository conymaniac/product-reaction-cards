import ns from 'ima/namespace';
import BaseFactory from 'app/base/Factory';

ns.namespace('app.model.reaction');

/**
 * Factory to create reaction entity.
 *
 * @class Factory
 * @extends app.base.Factory
 * @namespace app.model.reaction
 * @module app
 * @submodule app.model
 */
class Factory extends BaseFactory {
	/**
	 * @constructor
	 * @method constructor
	 * @param {app.model.reaction.Entity} ReactionEntityConstructor
	 */
	constructor(ReactionEntityConstructor) {
		super(ReactionEntityConstructor);
	}
}

ns.app.model.reaction.Factory = Factory;
