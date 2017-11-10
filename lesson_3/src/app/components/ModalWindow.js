import React, { Component } from 'react';

export default class ModalWindow extends Component {
    render() {
        return (
            <div className="modal1 mfp-hide subscribe-widget" id="myModal1">
                <div className="block dark divcenter" data-height-lg="400">
                    <div>
                        <div className="heading-block nobottomborder bottommargin-sm">
                            <h3>Newsletter Subscribe</h3>
                            <span>Get Latest Fashion Updates &amp; Offers</span>
                        </div>
                        <div className="widget-subscribe-form-result"></div>
                        <form className="widget-subscribe-form2" action="include/subscribe.php" role="form" method="post">
                            <input type="email" id="widget-subscribe-form2-email" name="widget-subscribe-form-email" className="form-control input-lg not-dark required email" placeholder="Enter your Email"/>
                            <button className="button button-rounded button-border button-light noleftmargin" type="submit">Subscribe</button>
                        </form>
                        <p className="nobottommargin"><small><em>*We hate Spam &amp; Junk Emails.</em></small></p>
                    </div>
                </div>
            </div>
        );
    }
}