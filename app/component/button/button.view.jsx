import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.button');

export default class View extends AbstractComponent {
	render() {
		return (
			<button 
				type="button" 
				className={ this.props.classPrefix + 'button' } 
				onClick={ this.props.onClick }
				disabled={ !!this.props.disabled }>
				{ this._renderContent() }
			</button>
		);
	}

	_renderContent() {
		if (!!this.props.routeName) {
			let Link = ns.app.component.link.View;

			return (
				<Link 
					classPrefix={ this.props.classPrefix + 'button__'}
					title={ this.props.title }
					seoTitle={ !!this.props.seoTitle ? this.props.seoTitle : this.props.title }
					routeName={ this.props.routeName }
					routeParams={ this.props.routeParams }
					$Utils={ this.utils } />
			);
		} else {
			return (
				<span className={ this.props.classPrefix + 'button__title' }>{ this.props.title }</span>
			);
		}
	}
}

ns.app.component.button.View = View;