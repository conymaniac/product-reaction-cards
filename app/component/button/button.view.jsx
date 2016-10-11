import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.button');

export default class View extends AbstractComponent {
	render() {
		return (
			<button type="button" className={ "button " + this.props.className }>
				{ this._renderContent() }
			</button>
		);
	}

	_renderContent() {
		if (!!this.props.link) {
			return (
				<a href={this.props.link} className="button__link" title={ this.props.title }>
					<span className="button__title">{ this.props.title }</span>
				</a>
			);
		} else {
			return (
				<span className="button__title">{ this.props.title }</span>
			);
		}
	}
}

ns.app.component.button.View = View;