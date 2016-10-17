import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.table.decision');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;

		return (
			<div className="table table--decision">
				<section className="table__row">
					{ this._renderNarrowSet() }
				</section>
				<section className="table__row">
					<div className="table__stock--help">
						<div className="table__box table__box--help">
							<p className="table__instructions">Please narrow your set down to the 5 best that <br className="table__break" />best describe the product or how using the product made you feel.</p>
							<Button 
								classPrefix="table__"
								title="All Done!"
								seoTitle="I'm satisfied with my selection"
								routeName="thanku"
								disabled={ true && false }
								$Utils={ this.utils } />
						</div>
					</div>
				</section>
				<section className="table__row">
					{ this._renderPreSet() }
				</section>
			</div>
		);
	}

	_renderNarrowSet() {
		let EmptyCard = ns.app.component.card.empty.View;

		let narrowSetLength = 5;
		let narrowSet = [];

		for (let i = 0; i < narrowSetLength; i++) {
			narrowSet.push(
				<div className="table__stock" key={ "narrow-set-" + i }>
					<div className="table__box">
						<EmptyCard 
							title="Your Card"
							number={ i }
							medium={ true }
							$Utils={ this.utils } />
						
					</div>
				</div>
			);
		}

		return narrowSet;
	}

	_renderPreSet() {
		let MediumCard = ns.app.component.card.medium.View;
		let TakenCard = ns.app.component.card.taken.View;

		let tmpName = ["Comfortable", "Gets in the way", "Engaging", "Distracting", "Appealing", "Not Secure", "Integrated", "Reliable"];
		let preSetLength = 8;
		let preSet = [];

		for (let i = 0; i < preSetLength; i++) {
			preSet.push(
				<div className="table__stock" key={ "pre-set-" + i }>
					<div className="table__box">
						<MediumCard 
							title={ tmpName[i] }
							number={ i }
							medium={ true }
							$Utils={ this.utils } />
						
					</div>
				</div>
			);
		}

		return preSet;
	}
}

ns.app.component.table.decision.View = View;
