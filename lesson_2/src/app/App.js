import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import StudentInfo from './components/StudentInfo';
import ClickButton from './components/ClickButton';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Приложение на ReactJS</h1>
                <StudentInfo/>
                <ClickButton/>
            </div>
        );
    }
}

ReactDOM.render( <App/>, document.getElementById( 'root' ) );