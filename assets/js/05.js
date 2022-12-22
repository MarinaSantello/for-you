'use strict'

const alternativasJSON = [
    {
        id: '01',
        alternativa: 'New Order - Singularity'
    },
    {
        id: '02',
        alternativa: 'MCR - Helena'
    },
    {
        id: '03',
        alternativa: "Ira! - Tarde vazia"
    },
    {
        id: '04',
        bonus: 'Ramones - Blitzkrieg Bop'
    }
]

const question05 = function() {
    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '5'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'Escolha uma música.'

    const respostas = document.getElementById('resposta')

    const alternativas = document.createElement('div')
    alternativas.classList.add('alternativas__container')

    alternativasJSON.forEach(element => {
        if (element.id != '04') {
            const alternativa = document.createElement('div')
            alternativa.classList.add('alternativa')
            alternativa.id = `alternativa_${element.id}`

            const text = document.createElement('label')
            text.classList.add('text__alternativa')
            text.textContent = element.alternativa

            alternativa.appendChild(text)

            alternativas.appendChild(alternativa)
        }
    })

    const statusRamones = window.localStorage.getItem('ramones')

    if (statusRamones == 'desbloqueado') {
        const bonus = document.createElement('div')
        bonus.classList.add('alternativa')
        bonus.id = `bonus_${alternativasJSON[3].id}`

        const text = document.createElement('label')
        text.classList.add('text__alternativa')
        text.textContent = alternativasJSON[3].bonus

        bonus.appendChild(text)

        alternativas.appendChild(bonus)

        console.log('teste bonus')
    }
    console.log(statusRamones)

    respostas.appendChild(alternativas)

    document.getElementById('alternativa_01').addEventListener('click', () =>
        window.location.href = '../pages/premio.html?id=01'
    )

    document.getElementById('alternativa_02').addEventListener('click', () =>
        window.location.href = '../pages/premio.html?id=02'
    )

    document.getElementById('alternativa_03').addEventListener('click', () =>
        window.location.href = '../pages/premio.html?id=03'
    )

    document.getElementById('bonus_04').addEventListener('click', () =>
        window.location.href = '../pages/premio.html?id=04'
    )
}

question05()