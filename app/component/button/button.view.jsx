import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.button');

export default class View extends AbstractComponent {
	render() {
		if (!!this.props.routeName) {
			let Link = ns.app.component.link.View;
			let linkToDeal = this.utils.$Router.link(this.props.routeName, this.props.routeParams);
			return (
				<a 
					href={ linkToDeal } 
					className={ this.props.classPrefix + 'button' } 
					title={ !!this.props.seoTitle ? this.props.seoTitle : this.props.title }
					onClick={ this.props.onClick }
					disabled={ !!this.props.disabled }>
					<span className={ this.props.classPrefix + 'button__title' }>{ this.props.title }</span>
				</a>
			);
		} else {
			return (
				<button
					type="button" 
					className={ this.props.classPrefix + 'button' } 
					onClick={ this.props.onClick }
					disabled={ !!this.props.disabled }>
					<span className={ this.props.classPrefix + 'button__title' }>{ this.props.title }</span>
				</button>
			);
		}
	}
}

ns.app.component.button.View = View;