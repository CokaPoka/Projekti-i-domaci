import React from 'react';


class Form extends React.Component {
       render() {
        return (
            <form>
                <input type="text"></input>
                <input type="submit" value={this.props.string}></input>
            </form>);
    }
}

export default Form;