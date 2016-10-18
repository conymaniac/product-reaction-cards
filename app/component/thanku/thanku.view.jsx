import ns from 'ima/namespace';
import AbstractComponent from 'ima/page/AbstractComponent';
import React from 'react';

ns.namespace('app.component.thanku');

export default class View extends AbstractComponent {
	render() {
		let TableChoice = ns.app.component.table.choice.View;
		let Button = ns.app.component.button.View;
		let Link = ns.app.component.link.View;

		return (
			<div className="thanku">
				<section className="thanku__row">
					<p className="thanku__title">Thank you very much for describing <br />your feelings about our product.</p>
					<hr className="thanku__divider" />
				</section>
				<TableChoice
					$Utils={ this.utils } />
				<section className="thanku__row">
					<p className="thanku__subtitle">You can start again or tell us about your results.</p>
					<p className="thanku__actions">
						<Button 
							classPrefix="thanku__"
							title="Start Again"
							routeName="home"
							$Utils={ this.utils } />
						
					</p>
				</section>
			</div>
		);
	}

	/**
	 * Send results
	 *
	 * @method _sendResults
	 * @params {object} e
	 **/
	_sendResults(e) {
		// <Button 
		// 	classPrefix="thanku__"
		// 	title="Send Results"
		// 	onClick={ (e) => this._sendResults(e) }
		// 	$Utils={ this.utils } />

		// todo
	}
}

ns.app.component.thanku.View = View;
