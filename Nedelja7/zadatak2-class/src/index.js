import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Components/Card';

class App extends React.Component {
    render() {
        return (
            <Card text={"OKO"}></Card>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


