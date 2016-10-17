import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.card.medium');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;

		return (
			<div className="card card--medium">
				<p className="card__title">{ this.props.title }</p>
				<p className="card__actions">
					<Button 
						classPrefix="card__"
						title="Pick Card"
						$Utils={ this.utils } />
				</p>
			</div>
		);
	}
}

ns.app.component.card.medium.View = View;
