import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.page.welcome');

export default class View extends AbstractComponent {
	render() {
		let Header = ns.app.component.header.View;
		let Footer = ns.app.component.footer.View;
		let Content = ns.app.component.content.View;
		let Welcome = ns.app.component.welcome.View;

		return (
			<div className='page page--welcome'>
				<Header />
				<Content>
					<Welcome
						shuffled={ this.props.shuffled }
						$Utils={ this.utils } />
				</Content>
				<Footer />
			</div>
		);
	}
}

ns.app.page.welcome.View = View;
