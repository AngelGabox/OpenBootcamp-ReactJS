import React, { useState } from 'react'
import axios from 'axios'
import "../../styles/jokes.css"
import { Card } from '@mui/material';
import ButtonsJoke from '../pure/ButtonsJoke';

const Jokes = () =>{
   
    const [ allJokes, setAllJokes ] = useState([])
    const [ jokeInView, setJokeInView ] =  useState()
    const [ numberLikes, setNumberLikes] = useState(0)
    const [ numberDislikes, setNumberDislikes] = useState(0)

    const changeJoke =  () =>  axios.get(`https://api.chucknorris.io/jokes/random`)
            .then( (r) => {
                let joke = {
                    id: r.data.id,
                    value: r.data.value,
                    like: null
                }
                setAllJokes([...allJokes, joke])
                setJokeInView(joke)
            })   
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    
    const like = () => {
        let tempJoke = jokeInView
        if(jokeInView.like === null){ 
            tempJoke.like = true
            setNumberLikes( numberLikes + 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)
        }else if(jokeInView.like === true){
            tempJoke.like = null
            setNumberLikes( numberLikes - 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)
        }else{
            tempJoke.like = true
            setNumberLikes( numberLikes + 1)
            setNumberDislikes( numberDislikes - 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)
        }
    }

    const dislike = () => {
        let tempJoke = jokeInView
        if(jokeInView.like === null){ 

            tempJoke.like = false
            setNumberDislikes( numberDislikes + 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)

        }else if(jokeInView.like === false){

            tempJoke.like = null
            setNumberDislikes( numberDislikes - 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)

        }else{

            tempJoke.like = false
            setNumberLikes( numberLikes - 1)
            setNumberDislikes( numberDislikes + 1)
            setJokeInView(tempJoke)
            const tempAllJokes = allJokes.map( j => tempJoke.id === j.id? tempJoke : j)
            setAllJokes(tempAllJokes)
        }
    }


 React.useEffect(()=> {
    changeJoke()
 }, [])
  return (
    <section className='container'>
        <Card variant="outlined">
            <h1>{jokeInView?.value}</h1>
        </Card>
        <footer>
          <ButtonsJoke 
                changeJoke={changeJoke} 
                joke={jokeInView} 
                like={like} 
                dislike={dislike} 
                numberLikes={numberLikes}
                numberDislikes={numberDislikes} 
            ></ButtonsJoke>
        </footer>
    </section>
  )
}

export default Jokes