import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/hackerNews'
import './Story.css'
import { mapTimeString } from '../utils./mapTimeString'

export const Story = ({ storyId}) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // Lazy eval
    }, [])
   

    return (
        <>
         <div className="control-story">
            <a href={story.url} target="_blank">
                <h3>{story.title}</h3>
            </a>
            <p>Autor: {story.by}</p>
            <p>Objavljeno pre: {mapTimeString(story.time)}</p>
         </div>
        </>
    )
}