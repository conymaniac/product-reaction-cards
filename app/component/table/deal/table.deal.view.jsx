import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.table.deal');

export default class View extends AbstractComponent {
	render() {
		return (
			<div className="table table--deal">
				<section className="table__row">
					<div className="table__stock">
						{ this._renderStock() }
					</div>
					<div className="table__stock">
						<p className="table__instructions">Pick the words that best describe the product or  <br className="table__break" />how using the product made you feel.</p>
					</div>
					<div className="table__stock">
						{ this._renderDecision() }
					</div>
				</section>
			</div>
		);
	}

	/**
	 * Render stock
	 *
	 * @method _renderStock
	 */
	_renderStock() {
		if (!!this.props.reactions && !!this.props.shuffled) {

			// params
			let routeInfo = this.utils.$Router.getCurrentRouteInfo();
			let currentReactionIndex = !!routeInfo && !!routeInfo.params && routeInfo.params.card;

			// index in shuffled list
			let currentShuffledIndex = this.props.shuffled.indexOf(Number(currentReactionIndex));
			let nextShuffledIndex = (currentShuffledIndex + 1) < this.props.shuffled.length ? this.props.shuffled[currentShuffledIndex + 1] : false;

			// check current reaciton entity
			if (this.props.reactions.length > currentReactionIndex) {

				// current reaciton entity
				let currentReaction = this.props.reactions[currentReactionIndex];
				if (!!currentReaction && !!currentReaction.getId()) {

					// components
					let DefaultCard = ns.app.component.card.default.View;
					return (
						<DefaultCard 
							title={ currentReaction.getTitle() }
							routeParams={ { card: nextShuffledIndex } }
							onClick={ (e) => this._pickCard(e, currentReactionIndex, nextShuffledIndex) }
							$Utils={ this.utils } />
					)
				}
			}
		}
	}


	/**
	 * Render decided
	 *
	 * @method _renderDecision
	 */
	_renderDecision() {
		if (!!this.props.reactions && !!this.props.decided) {

			// index in shuffled list
			let lastDecisionIndex = this.props.decided[this.props.decided.length - 1];

			// check current reaciton entity
			if (this.props.reactions.length > lastDecisionIndex) {

				// current reaciton entity
				let lastDecision = this.props.reactions[lastDecisionIndex];
				if (!!lastDecision && !!lastDecision.getId()) {

					// components
					let TakenCard = ns.app.component.card.taken.View;
					return (
						<TakenCard 
							title={ lastDecision.getTitle() }
							onClick={ (e) => this._returnCard(e, lastDecisionIndex) }
							$Utils={ this.utils } />
					)
				}
			}

		} else {

			// components
			let EmptyCard = ns.app.component.card.empty.View;
			return (
				<EmptyCard 
					title="Your Deck"
					$Utils={ this.utils} />
			);

		}
	}

	/**
	 * Pick a card
	 *
	 * @method _pickCard
	 */
	_pickCard(e, reactionIndex, nextIndex) {
		e.preventDefault();
		e.stopPropagation();

		this.utils.$EventBus.fire(e.target, 'pickCard', {
			pickedIndex: reactionIndex,
			nextIndex: nextIndex,
			url: !!e.currentTarget && !!e.currentTarget.getAttribute("href") ? e.currentTarget.getAttribute("href") : null
		});
	}

	/**
	 * Return a card
	 *
	 * @method _pickCard
	 */
	_returnCard(e, returnIndex) {
		e.preventDefault();
		e.stopPropagation();

		this.utils.$EventBus.fire(e.target, 'returnCard', {
			returnIndex: returnIndex
		});
	}
}

ns.app.component.table.deal.View = View;
