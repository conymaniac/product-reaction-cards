import ns from 'ima/namespace';
import BaseEntity from 'app/base/Entity';

ns.namespace('app.model.reaction');

/**
 * Entity of reaction. It is collecting all other entities or entity lists from reaction.
 *
 * @class Entity
 * @extends app.base.Entity
 * @namespace app.model.reaction
 * @module app
 * @submodule app.model
 */
class Entity extends BaseEntity {
	/**
	 * @constructor
	 * @method constructor
	 * @param {Object} data
	 */
	constructor(data) {
		super(data);

		/**
		 * Unique entity id.
		 *
		 * @property _id
		 * @private
		 * @type {Mixed}
		 * @default id
		 * */
		this._id = data.id;

		/**
		 * Entity title – title of reaction
		 *
		 * @property items
		 * @type {Array<app.model.item.ItemEntity>}
		 */
		this._title = data.title;
	}

	/**
	 * Return entity title.
	 *
	 * @method getId
	 * @return {Mixed}
	 * */
	getTitle() {
		return this._title;
	}
}

ns.app.model.reaction.Entity = Entity;
