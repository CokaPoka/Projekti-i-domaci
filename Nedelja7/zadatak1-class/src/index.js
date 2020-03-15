import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';

class App extends React.Component {
    render() {
        return (
        <div>
            <Form string={'OK'}></Form>
        </div>);
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


