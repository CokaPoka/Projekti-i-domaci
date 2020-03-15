import React from 'react'
import Description from './Description'
import Emoji from './Emoji'

const Card = ({desc}) => {
    return (
        <div>
            <Description text={desc}></Description>
            <Emoji></Emoji>
        </div>
    )
}

export default Card