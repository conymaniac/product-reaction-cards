import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.table');

export default class View extends AbstractComponent {
	render() {
		let DefaultCard = ns.app.component.card.default.View;
		let TakenCard = ns.app.component.card.taken.View;
		let EmptyCard = ns.app.component.card.empty.View;

		return (
			<section className="table table--layout-1">
				<div className="table__stock">
					<div className="table__box">
						<DefaultCard 
							title="Hard to Use"
							$Utils={ this.utils } />
						
					</div>
				</div>
				<div className="table__stock">
					<div className="table__box table__box--help">
						<p className="table__instructions">Pick the words that best describe the product or  <br className="table__break" />how using the product made you feel.</p>
					</div>
				</div>
				<div className="table__stock">
					<div className="table__box">
						<EmptyCard 
							title="Your Deck"
							$Utils={ this.utils } />
					</div>
				</div>
			</section>
		);
	}
}

ns.app.component.table.View = View;
