import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <a href={this.props.href} data-lightbox="inline" className="button button-medium button-rounded">
                {this.props.text}
            </a>
        );
    }
}