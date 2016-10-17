import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.footer');

export default class View extends AbstractComponent {
	render() {
		let date = this.props.date || new Date();

		return (
			<footer className="footer">
				<p className="footer__text">Product Reaction Cards &bull; Originally developed by and &copy;&nbsp;2002 Microsoft Corporation. &bull; Online tool designed, develop by and &copy;&nbsp;{ date.getFullYear() } Dominik Michna. &bull; All rights reserved.</p>
			</footer>
		);
	}
}

ns.app.component.footer.View = View;