import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.card.small');

export default class View extends AbstractComponent {
	render() {
		let Link = ns.app.component.link.View;

		return (
			<div className="card card--small">
				<p className="card__title">{ this.props.title }</p>
			</div>
		);
	}
}

ns.app.component.card.small.View = View;
