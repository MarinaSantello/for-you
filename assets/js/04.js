'use strict'

const alternativasJSON = [
    {
        id: '01',
        alternativa: '12 de junho',
        correta: false
    },
    {
        id: '02',
        alternativa: '12 de outubro',
        correta: false
    },
    {
        id: '03',
        alternativa: '7 de setembro',
        correta: false
    },
    {
        id: '04',
        alternativa: '25 de dezembro',
        correta: true
    }
]

const question04 = function() {

    window.localStorage.setItem('fones', 'desativado')
    window.localStorage.setItem('ramones', 'bloqueado')

    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '4'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'Assinale a alternativa incorreta.'

    const respostas = document.getElementById('resposta')

    const alternativas = document.createElement('div')
    alternativas.classList.add('alternativas__container')
    alternativas.id = 'alternativas_container'

    const inputQ03 = document.getElementById('frases_Q03')

    alternativasJSON.forEach(element => {
        const alternativa = document.createElement('div')
        alternativa.classList.add('alternativa')
        alternativa.id = `alternativa_${element.id}`

        const text = document.createElement('label')
        text.classList.add('text__alternativa')
        text.textContent = element.alternativa

        alternativa.appendChild(text)

        alternativas.appendChild(alternativa)
    });

    respostas.replaceChild(alternativas, inputQ03)

    document.getElementById('alternativa_01').addEventListener('click', () =>
        alert('eu me recuso a acreditar que você clicou nessa.')
    )

    document.getElementById('alternativa_02').addEventListener('click', () =>
        alert('eu juro que não sou narcisista, mas não é essa.')
    )

    document.getElementById('alternativa_03').addEventListener('click', () =>
        alert('não vai me dizer que você não sabe o que aconteceu nesse dia.')
    )
    
    document.getElementById('alternativa_04').addEventListener('click', () =>
    window.location.href = '../pages/question05.html'
    )

}

export { question04 }