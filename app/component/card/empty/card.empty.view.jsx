import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.card.empty');

export default class View extends AbstractComponent {
	render() {
		let Link = ns.app.component.link.View;

		return (
			<div className={ 'card card--empty' + (!!this.props.medium ? ' card--medium' : '') }>
				<p className="card__title">{ this.props.title }</p>
				{ this._renderNumber() }
				{ this._renderAction() }
			</div>
		);
	}

	_renderNumber() {
		if (this.props.hasOwnProperty('number') && (!!this.props.number || this.props.number === 0)) {
			return(
				<p className="card__number">{ this._transferNumber(this.props.number) }</p>
			);
		}
	}

	_renderAction() {
		if (!!this.props.isAll) {
			let Button = ns.app.component.button.View;

			return(
				<p className="card__actions">
					<Button 
						classPrefix="card__"
						title="Next Step"
						seoTitle="I'm ready for next step"
						routeName="decision"
						$Utils={ this.utils } />
				</p>
			);
		}
	}

	_transferNumber(num) {
		switch (num) {
			case 0:
				return "1st";
			case 1:
				return "2nd";
			case 2:
				return "3rd";
			case 3:
				return "4th";
			case 4:
				return "5th";
			default:
				break;
		}
	}
}

ns.app.component.card.empty.View = View;
