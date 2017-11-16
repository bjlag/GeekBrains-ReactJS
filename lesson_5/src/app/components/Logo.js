import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                <a href="/" className="standard-logo"><img src={this.props.srcLogoStandard} alt={this.props.alt}/></a>
                <a href="/" className="retina-logo"><img src={this.props.srcLogoRetina} alt={this.props.alt}/></a>
            </div>
        );
    }
}