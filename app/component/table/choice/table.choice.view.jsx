import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.table.choice');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;

		return (
			<div className="table table--choice">
				<section className="table__row">
					{ this._renderChoice() }
				</section>
			</div>
		);
	}

	_renderChoice() {
		let SmallCard = ns.app.component.card.small.View;

		let tmpName = ["Gets in the way", "Engaging", "Appealing", "Not Secure", "Reliable"];
		let choiceLength = 5;
		let choice = [];

		for (let i = 0; i < choiceLength; i++) {
			choice.push(
				<div className="table__stock" key={ "choice-" + i }>
					<div className="table__box">
						<SmallCard 
							title={ tmpName[i] }
							$Utils={ this.utils } />
						
					</div>
				</div>
			);
		}

		return choice;
	}
}

ns.app.component.table.choice.View = View;
