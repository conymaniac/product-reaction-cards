import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.page.decision');

export default class View extends AbstractComponent {
	render() {
		let Header = ns.app.component.header.View;
		let Footer = ns.app.component.footer.View;
		let Content = ns.app.component.content.View;
		let Table = ns.app.component.table.decision.View;

		return (
			<div className='page page--decision'>
				<Header />
				<Content>
					<Table
						$Utils={ this.utils } />
				</Content>
				<Footer />
			</div>
		);
	}
}

ns.app.page.decision.View = View;
