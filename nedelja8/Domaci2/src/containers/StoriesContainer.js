import React, { useState, useEffect} from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';
import './StoriesContainer.css'

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])
    const [count, setCount] = useState(21)

    useEffect(() => {
        getStoryIds().then(dunja => setStoryIds(dunja))
    }, [])

    // useEffect waits ...

    

    return (
        <>
            <div className="container-story">
                {storyIds.slice(0, count).map(storyId => <Story storyId={storyId} key={storyId} />)}
                <br></br>
            </div>
            <button onClick={() => setCount(count + 21)}>Jos vesti</button>
           
        </>
    )
}