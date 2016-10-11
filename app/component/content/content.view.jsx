import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.content');

export default class View extends AbstractComponent {

	render() {
		return (
			<main className="content">
				{ this.props.children }
			</main>
		);
	}
}

ns.app.component.content.View = View;