import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.welcome');

export default class View extends AbstractComponent {
	render() {
		let Button = ns.app.component.button.View;

		return (
			<section className="welcome">
				<p className="welcome__pretext">Welcome to</p>
				<h1 className="welcome__title">
					<a className="welcome__link" href="/" title="Product Reaction Cards – an online tool for user research">Product Reaction Cards</a>
				</h1>
				<hr className="welcome__divider" />
				<p className="welcome__subtitle">Let&prime;s shuffle and deal some cards&#33;</p>
				<Button 
					className="welcome__button"
					title="Deal Cards"
					/>
			</section>
		);
	}
}

ns.app.component.welcome.View = View;
