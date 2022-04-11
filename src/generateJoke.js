import axios from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('joke').innerHTML = `<p>${res.data.joke}</p>`
    })
}

export default generateJoke