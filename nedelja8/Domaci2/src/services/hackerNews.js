import axios from 'axios'

export const BASE_URL = `https://hacker-news.firebaseio.com/v0`
export const newStoriesUrl = `${BASE_URL}/newstories.json`
export const storyUrl = `${BASE_URL}/item`

export const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then(({ data }) => data)

}

export const getStory = async (id) => {
    return await axios.get(`${storyUrl}/${id}.json`)
        .then(({ data }) => {
            if (data) {
                return ({ by: data.by, time: data.time, url: data.url, title: data.title })
            }
            else {
                return null
            }
        })
}

