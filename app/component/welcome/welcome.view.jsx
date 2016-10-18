import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.welcome');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;
		let Link = ns.app.component.link.View;

		return (
			<section className="welcome">
				<p className="welcome__pretext">Welcome to</p>
				<h1 className="welcome__title">
					<Link 
						classPrefix="welcome__"
						title="Product Reaction Cards"
						seoTitle="Product Reaction Cards – an online tool for user research"
						routeName="home"
						$Utils={ this.utils } />
				</h1>
				<hr className="welcome__divider" />
				<p className="welcome__subtitle">Let&prime;s shuffle and deal some cards&#33;</p>
				<Button 
					classPrefix="welcome__"
					title="Deal Cards"
					routeName="deal"
					routeParams={ this._getFirstCard() }
					$Utils={ this.utils } />
			</section>
		);
	}

	_getFirstCard() {
		if (!!this.props.shuffled) {
			return { card: this.props.shuffled[0] };
		}
	}
}

ns.app.component.welcome.View = View;
