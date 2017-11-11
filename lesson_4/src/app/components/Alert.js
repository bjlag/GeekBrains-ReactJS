import React, { Component } from 'react';

export default class Alert extends Component {
    render() {
        return (
            <div className="alert alert-success">
                <i className="icon-gift"/>{this.props.message}
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            </div>
        );
    }
}