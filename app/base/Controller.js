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
	 * Initializes the deal page controller.
	 *
	 * @method constructor
	 * @constructor
	 * @param {app.model.reaction.Service} reactionService
	 * @param {ima.storage.CookieStorage} cookieStorage
	 * @param {ima.router.Router} router
	 */
	constructor(reactionService, cookieStorage, router) {
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
		 * Router
		 *
		 * @property router
		 * @private
		 * @type {ima.router.Router}
		 */
		this._router = router;

		/**
		 * Session Storage
		 *
		 * @property storage
		 * @private
		 * @type {ima.storage.CookieStorage} cookieStorage
		 */
		this._storage = cookieStorage;

		/**
		 * Storage Key – shuffle
		 *
		 * @property _shuffleKey
		 * @private
		 * @type {string} _shuffleKey
		 */
		this._shuffleKey = 'shuffled';

		/**
		 * Storage Key – decision
		 *
		 * @property _decisionKey
		 * @private
		 * @type {string} _decisionKey
		 */
		this._decisionKey = 'decided';

		/**
		 * Storage Key – choice
		 *
		 * @property _decisionKey
		 * @private
		 * @type {string} _decisionKey
		 */
		this._choiceKey = 'choice';


		/**
		 * Storage Separator
		 *
		 * @property _storageSeparator
		 * @private
		 * @type {string} _storageSeparator
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
		var id = !!this._id ? this._id : 'welcome';
		var title = dictionary.get(this._id + '.seoTitle');
		var description = dictionary.get(this._id + '.seoDescription');
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
	 * @method _shuffle
	 */
	_shuffle(arr) {
		// only if we haven't shuffled cards yet
		if (!!this._storage && !this._storage.has(this._shuffleKey)) {

			// create shuffled list of indexes
			for (var i = 0, shuffled = [], randomIndex = 0; i < arr.length; i++) {
		        randomIndex = Math.floor(Math.random() *  arr.length);
				// If an item of this index already exists in the shuffled array, regenrate index.
		        while (shuffled.indexOf(arr[randomIndex]) !== -1) {
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

		// possible information about choice
		if (!!this._storage && !!this._storage.has(this._decisionKey)) {
			
			// decided
			let storageContent = this._storage.get(this._decisionKey);
			if (!!storageContent && storageContent.indexOf(this._storageSeparator) > -1) {
				let decided = storageContent.split(this._storageSeparator).map(Number);
				this.setState({ decided: decided });
			}
		}

	    return arr;
	}
}

ns.app.base.Controller = Controller;

