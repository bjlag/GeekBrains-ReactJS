import React from 'react';
import ReactDOM from 'react-dom';

const StudentInfo = require( './components/StudentInfo' );
const ClickButton = require( './components/ClickButton' );

class App extends React.Component {
    render() {
        return <h1>Приложение на ReactJS</h1>;
    }
}

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
ReactDOM.render( <StudentInfo/>, document.getElementById( 'student' ) );
ReactDOM.render( <ClickButton/>, document.getElementById( 'button' ) );