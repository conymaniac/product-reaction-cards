import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.page.thanku');

export default class View extends AbstractComponent {
	render() {
		let Header = ns.app.component.header.View;
		let Footer = ns.app.component.footer.View;
		let Content = ns.app.component.content.View;
		let Thanku = ns.app.component.thanku.View;

		return (
			<div className='page page--thanku'>
				<Header />
				<Content>
					<Thanku
						$Utils={ this.utils } />
				</Content>
				<Footer />
			</div>
		);
	}
}

ns.app.page.thanku.View = View;
