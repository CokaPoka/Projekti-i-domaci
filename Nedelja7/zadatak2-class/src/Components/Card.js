import React from 'react';
import Desc from './Description'
import Emoji from './Emoji';

class Card extends React.Component {
    render() {
        return (
           <div>
               <Desc desc={this.props.text}></Desc>
               <Emoji></Emoji>
           </div>
        )
    }
}

export default Card;