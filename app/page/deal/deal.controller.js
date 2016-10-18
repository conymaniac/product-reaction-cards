import ns from 'ima/namespace';
import BaseController from 'app/base/Controller';

ns.namespace('app.page.deal');

/**
 * Controller for the deal page
 *
 * @class Controller
 * @extends app.base.BaseController
 * @namespace app.page.deal
 * @module app
 * @submodule app.page
 */
class Controller extends BaseController {

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
		this._id = 'deal';

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
		 * Storage Separator
		 *
		 * @property _storageSeparator
		 * @private
		 * @type {string} _storageSeparator
		 */
		this._storageSeparator = ':';

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

	/**
	 * @method onPickCard
	 */
	onPickCard(params) {
		// state
		let state = this.getState();
		if (!state.decided) {
			state.decided = [params.pickedIndex]
		} else if (state.decided instanceof Array) {
			state.decided.push(params.pickedIndex);
		}

		// save to storage
	    this._storage.set(this._decisionKey, state.decided.join(this._storageSeparator));
	    this.setState(state);
		this._router.redirect(params.url, { onlyUpdate: true });
	}
}

ns.app.page.deal.Controller = Controller;
