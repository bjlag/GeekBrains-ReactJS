import React from 'react';

class ClickButton extends React.Component {
    constructor() {
        super();
    }

    press() {
        alert( 'Нажата кнопка' );
    }

    render() {
        return <button onClick={this.press}>Нажми</button>
    }
}

module.exports = ClickButton;