import ns from 'ima/namespace';
import BaseController from 'app/base/Controller';

ns.namespace('app.page.welcome');

/**
 * Controller for the welcome page
 *
 * @class Controller
 * @extends app.base.BaseController
 * @namespace app.page.welcome
 * @module app
 * @submodule app.page
 */
class Controller extends BaseController {

	/**
	 * Initializes the welcome page controller.
	 *
	 * @method constructor
	 * @constructor
	 * @param {app.model.reaction.Service} reactionService
	 * @param {ima.storage.SessionStorage} sessionStorage
	 */
	constructor(reactionService, sessionStorage) {
		super();

		/**
		 * ID
		 *
		 * @property id
		 * @private
		 * @type {string}
		 */
		this._id = 'welcome';

		/**
		 * Service providing the list of feed items loaded from the REST API.
		 *
		 * @property reactionService
		 * @private
		 * @type {app.model.reaction.Service}
		 */
		this._reactionService = reactionService;

		/**
		 * Session Storage
		 *
		 * @property storage
		 * @private
		 * @type {ima.storage.SessionStorage}
		 */
		this._storage = sessionStorage;

		/**
		 * Storage Key – shuffle
		 *
		 * @property _shuffleKey
		 * @private
		 * @type {string}
		 */
		this._shuffleKey = 'shuffled';

		/**
		 * Storage Separator
		 *
		 * @property _storageSeparator
		 * @private
		 * @type {string}
		 */
		this._storageSeparator = ':';

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
		var title = dictionary.get('welcome.seoTitle');
		var description = dictionary.get('welcome.seoDescription');
	}

	/**
	 * @inheritdoc
	 * @method init
	 */
	init() {
	}

	/**
	 * Load all needed data.
	 *
	 * @method load
	 * @return {Object} object of promise
	 */
	load() {
		return {
			reactions: this._reactionService.load().then(this._shuffle.bind(this))
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

	/**
	 * @method _shuffle
	 */
	_shuffle(arr) {
		// only if we haven't shuffled cards yet – for welcome page always true now
		if (!!this._storage && !this._storage.has(this._shuffleKey) || true) {

			// create shuffled list of indexes
			for (var i = 0, shuffled = [], randomIndex = 0; i < arr.length; i++) {
		        randomIndex = Math.floor(Math.random() *  arr.length);
				// If an item of this index already exists in the shuffled array, regenrate index.
		        while (shuffled.indexOf(randomIndex) !== -1) {
		            randomIndex = Math.floor(Math.random() *  arr.length);
		        }
		       shuffled.push(randomIndex);
		    }

		    // save to storage
		    this._storage.set(this._shuffleKey, shuffled.join(this._storageSeparator));
			this.setState({ shuffled: shuffled });

		} else if (!!this._storage && !!this._storage.has(this._shuffleKey)) {

			// shuffled
			let storageContent = this._storage.get(this._shuffleKey);
			if (!!storageContent && storageContent.indexOf(this._storageSeparator) > -1) {
				let shuffled = storageContent.split(this._storageSeparator).map(Number);
				this.setState({ shuffled: shuffled });
			}
		}

	    return arr;
	}
}

ns.app.page.welcome.Controller = Controller;
