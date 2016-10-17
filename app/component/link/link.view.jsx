import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.link');

export default class View extends AbstractComponent {
	render() {
		if (!!this.props.routeName) {
			let linkToDeal = this.utils.$Router.link(this.props.routeName);
			return (
				<a 
					href={ linkToDeal } 
					className={ this.props.classPrefix + 'link' } 
					title={ !!this.props.seoTitle ? this.props.seoTitle : this.props.title }>
					{ this._renderIcon() }
					<span className={ this.props.classPrefix + 'link__title' }>{ this.props.title }</span>
				</a>
			);
		} else {
			return (
				<button
					type="button"
					className={ this.props.classPrefix + 'link' } 
					title={ !!this.props.seoTitle ? this.props.seoTitle : this.props.title }>
					{ this._renderIcon() }
					<span className={ this.props.classPrefix + 'link__title' }>{ this.props.title }</span>
				</button>
			);
		}
	}

	_renderIcon() {
		if (!!this.props.isIcon) {
			return (
				<span className={ this.props.classPrefix + 'link__icon' }></span>
			);
		}
	}

}

ns.app.component.link.View = View;