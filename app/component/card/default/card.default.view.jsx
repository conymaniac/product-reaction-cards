import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.card.default');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;
		let Link = ns.app.component.link.View;

		return (
			<div className="card card--default">
				<p className="card__title">{ this.props.title }</p>
				<p className="card__actions">
					<Button 
						classPrefix="card__"
						title="Pick Card"
						routeName="deal"
						routeParams={ this.props.routeParams }
						$Utils={ this.utils } />
					<Link 
						classPrefix="card__"
						title="Next Card"
						seoTitle="Show me the next card"
						routeName="deal"
						routeParams={ this.props.routeParams }
						$Utils={ this.utils } />
				</p>
			</div>
		);
	}
}

ns.app.component.card.default.View = View;
