console.log('Client Side js file is loading')

fetch('http://puzzle.mead.io/puzzle').then( (res) => {
    res.json().then((data) => {
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

msg1.textContent = ''


weatherForm.addEventListener('submit', (event) => {
    // it's for not reloading page after submit btn
    event.preventDefault()
    // retrieve val from input
    const search = document.querySelector('input').value
    if(!search) {
        return
    }
    fetch(`/weather?address=${search}`).then( res => {
        res.json().then(data => {
            //console.log(data)
            msg1.textContent = data.location + ' ' + data.forecastData
        }).catch( er => msg2.textContent =`Error with retrieving data ${er}`)
    }).catch(er => msg2.textContent = `Problem with senging req ${er}`)
})