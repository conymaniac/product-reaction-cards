import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.header');

export default class View extends AbstractComponent {
	render() {
		return (
			<header className="header"></header>
		);
	}
}

ns.app.component.header.View = View;