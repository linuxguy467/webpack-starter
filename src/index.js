import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

document.getElementById('laughImg').src = laughing

document.getElementById('jokeBtn').addEventListener('click', generateJoke)

generateJoke()
