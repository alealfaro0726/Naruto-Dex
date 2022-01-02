const input = document.getElementById('input')
const form = document.getElementById('naruto-form')


form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const apiData = {
        url: 'https://naruto-api.herokuapp.com/api/v1/characters',
        name: input.value
    }
    
    const apiUrl = `${apiData.url}/?name=${apiData.name}`

    fetch(apiUrl)
    .then((data) => data.json())
    .then( (character) => generateHTML(character))

    const generateHTML =(data) =>{

        console.log(data[0].name)
        
        const html = `
            <div class="name">${data[0].name}</div>
            <img src = ${data[0].images[0]}
            <div class = "about"
                <span>Sex: ${data[0].info.Sexo}</span>
            </div>
            <input id = "info" type="submit" value = "Click to read more about ${data[0].name}">
        `
        const output = document.getElementById('output')
        output.innerHTML = html

        let info = document.getElementById('info')
        info.classList.add('button')
        info.addEventListener('click', function(){
            let more = document.createElement('p')
    
            more.innerHTML = data[0].about
            output.appendChild(more)
            info.hidden = true
            let hide = document.createElement('button')
            hide.classList.add('button')
            hide.innerHTML = "Hide"
            output.appendChild(hide)
            hide.addEventListener('click', function(){
                more.hidden = true
                hide.hidden = true
                info.hidden = false
            })
        })

    }




    let about = document.createElement('div')

    about.innerHTML = input.value


    
})







