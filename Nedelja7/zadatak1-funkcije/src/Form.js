import React from 'react'

const Form =({string})=> {
        return (<form>
            <input type="text"></input>
            <input type="submit" value={string}></input>
        </form>)    
}

export default Form