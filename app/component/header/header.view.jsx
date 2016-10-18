import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.header');

export default class View extends AbstractComponent {
	render() {
		let Link = ns.app.component.link.View;

		return (
			<header className="header">
				<nav className="header__nav">
					<div className="header__item header__item--back">
						{ this._renderBackLink() }
					</div>
					<div className="header__item header__item--home">
						<Link 
							classPrefix="home__"
							title="Product Reaction Cards"
							seoTitle="Product Reaction Cards | an online tool for user research"
							routeName="home"
							isIcon={ false }
							$Utils={ this.utils } />
					</div>
				</nav>
			</header>
		);
	}

	_renderBackLink() {
		let routeInfo = this.utils.$Router.getCurrentRouteInfo();
		if (!!routeInfo && !!routeInfo.route) {
			let Link = ns.app.component.link.View;
			if  (routeInfo.route.getName() == 'deal') {
				return (
					<Link 
						classPrefix="back__"
						title="Back"
						seoTitle="Product Reaction Cards | an online tool for user research"
						routeName="home"
						isIcon={ true }
						$Utils={ this.utils } />
				);
			} else if  (routeInfo.route.getName() == 'decision') {
				return (
					<Link 
						classPrefix="back__"
						title="Back"
						seoTitle="Product Reaction Cards | Pick the words that best describe the product or how using the product made you feel"
						routeName="deal"
						isIcon={ true }
						$Utils={ this.utils } />
				);
			} else if  (routeInfo.route.getName() == 'thanku') {
				return (
					<Link 
						classPrefix="back__"
						title="Back"
						seoTitle="Product Reaction Cards | Please narrow your set down to the 5 best that best describe the product or how using the product made you feel"
						routeName="decision"
						isIcon={ true }
						$Utils={ this.utils } />
				);
			}
		}
	}
}

ns.app.component.header.View = View;