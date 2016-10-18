import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.card.taken');

export default class View extends AbstractComponent {
	render() {
		let Link = ns.app.component.link.View;

		return (
			<div className={ 'card card--taken' + (!!this.props.medium ? ' card--medium' : '') }>
				<p className="card__title">{ this.props.title }</p>
				<p className="card__actions">
					<Link 
						classPrefix="card__"
						title="Discard Card"
						seoTitle="Discard card"
						$Utils={ this.utils } />
					</p>
			</div>
		);
	}
}

ns.app.component.card.taken.View = View;
