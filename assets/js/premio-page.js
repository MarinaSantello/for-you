'use strict'

const alternativasJSON = [
    {
        id: '01',
        alternativa: 'New Order - Singularity',
        text: 'você conquistou os polaroids de singularity.',
        img: '../img/polaroids-premio.png'
    },
    {
        id: '02',
        alternativa: 'MCR - Helena',
        text: 'você conquistou os escritos de helena.',
        buttonText: 'clique aqui para desbloquiá-los',
        messageText: 'Ops... você não possui o equipamento necessário para desbloquear os escritos. Volte quando os tiver.'
    },
    {
        id: '03',
        alternativa: "Ira! - Tarde vazia",
        text: 'vocÊ conquistou a PLAYLIST DO SOL.',
        img: '../img/playlist-code.svg'
    },
    {
        id: '04',
        bonus: 'Ramones - Blitzkrieg Bop',
        text: 'vocÊ conquistou os fones de Bop (finge surpresa).',
        buttonText: 'clique aqui para voltar',
        messageText: 'agora você pode desbloquar os escritos'
    }
]

const newOrder = function() {
    const textCong = document.getElementById('congratulations_text')
    textCong.textContent = alternativasJSON[0].text

    const imgPolaroid = document.getElementById('premio_container').style
    imgPolaroid.height = '210px'
    imgPolaroid.width = '250px'
    imgPolaroid.background = `url(${alternativasJSON[0].img})`
    imgPolaroid.backgroundSize = 'cover'
    imgPolaroid.backgroundPosition = 'center'
    imgPolaroid.backgroundRepeat = 'no-repeat'
}

const myChem = function() {
    const textCong = document.getElementById('congratulations_text')
    textCong.textContent = alternativasJSON[1].text

    const premioContainer = document.getElementById('premio_container')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button__container')

    const linkGetPremio = document.createElement('a')
    const buttonGetPremio = document.createElement('button')
    buttonGetPremio.textContent = alternativasJSON[1].buttonText

    linkGetPremio.appendChild(buttonGetPremio)
    
    premioContainer.appendChild(linkGetPremio)

    const statusFones = window.localStorage.getItem('fones')
    
    if (statusFones == 'desativado') {

        const cssButton = buttonGetPremio.style
        cssButton.border = 'none'
        cssButton.backgroundColor = '#45B8FF59'
        cssButton.color = 'var(--white)'
        cssButton.padding = '12px 50px'
        cssButton.fontSize = '1.3rem'
        cssButton.fontWeight = '500'
        cssButton.fontFamily = "'League Spartan', sans-serif"
        cssButton.borderRadius = '50px'
        cssButton.border = 'solid 4px var(--white)'

        buttonGetPremio.addEventListener('click', () => {
            window.localStorage.setItem('ramones', 'desbloqueado')

            const messageAlert = document.createElement('span')
            messageAlert.classList.add('mensagem__alerta')

            messageAlert.textContent = alternativasJSON[1].messageText

            const buttonBack = document.createElement('a')
            buttonBack.classList.add('alternativa')
            buttonBack.id = 'button_back'
            buttonBack.href = '../pages/question05.html'
            buttonBack.textContent = 'voltar'

            premioContainer.appendChild(messageAlert)
            premioContainer.appendChild(buttonBack)

            console.log(window.localStorage.getItem('ramones'))
        })
    }

    else if (statusFones == 'ativado') {
        const cssButton = buttonGetPremio.style
        cssButton.border = 'none'
        cssButton.backgroundColor = 'var(--blue)'
        cssButton.color = 'var(--white)'
        cssButton.padding = '12px 50px'
        cssButton.fontSize = '1.3rem'
        cssButton.fontWeight = '500'
        cssButton.fontFamily = "'League Spartan', sans-serif"
        cssButton.borderRadius = '50px'

        linkGetPremio.href = '../presente/for-my-mullberry.mp3'
        linkGetPremio.download = 'for-you'
    }
}

const ira = function() {
    const premioContainer = document.getElementById('premio_container')

    const textCong = document.getElementById('congratulations_text')
    textCong.textContent = alternativasJSON[2].text

    const linkPlaylist = document.createElement('a')
    linkPlaylist.href = 'https://open.spotify.com/playlist/6j8OT9nC5t0o4inzdXOMzM?si=1389c5694a7e4c39'
    linkPlaylist.target = '_blank'

    const imgPolaroid = document.createElement('div')
    const cssPolaroid = imgPolaroid.style
    cssPolaroid.height = '50px'
    cssPolaroid.width = '240px'
    cssPolaroid.borderRadius = '15px'
    cssPolaroid.background = `url(${alternativasJSON[2].img})`
    cssPolaroid.backgroundSize = 'cover'
    cssPolaroid.backgroundPosition = 'center'
    cssPolaroid.backgroundRepeat = 'no-repeat'

    linkPlaylist.appendChild(imgPolaroid)

    premioContainer.appendChild(linkPlaylist)
}

const ramones = function() {
    const textCong = document.getElementById('congratulations_text')
    textCong.textContent = alternativasJSON[3].text

    const premioContainer = document.getElementById('premio_container')

    const message = document.createElement('span')
    message.classList.add('mensagem__desbloqueada')
    message.textContent = alternativasJSON[3].messageText

    const linkGetPremio = document.createElement('a')
    const buttonGetPremio = document.createElement('button')
    buttonGetPremio.textContent = alternativasJSON[3].buttonText

    const cssButton = buttonGetPremio.style
    cssButton.border = 'none'
    cssButton.backgroundColor = 'var(--blue)'
    cssButton.color = 'var(--white)'
    cssButton.padding = '12px 30px'
    cssButton.fontSize = '1.15rem'
    cssButton.fontWeight = '500'
    cssButton.fontFamily = "'League Spartan', sans-serif"
    cssButton.borderRadius = '50px'

    linkGetPremio.appendChild(buttonGetPremio)

    buttonGetPremio.addEventListener('click', () => {
        window.localStorage.setItem('fones', 'ativado')

        window.location.href = '../pages/question05.html'
    })

    premioContainer.appendChild(message)
    premioContainer.appendChild(linkGetPremio)

}

const url = window.location.search.substring(1)
const idAlt = url.split('=')[1]

switch (idAlt) {
    case '01':
        newOrder()
        break;

    case '02':
        myChem()
        break;

    case '03':
        ira()
        break;

    case '04':
        ramones()
        break;

    default:
        console.log('deu problema. sifodeukkkk')
        break;
}