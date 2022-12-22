'use strict'

import { question04 } from "./04.js"

const frasesJSON = [
    {
        id: '01',
        parte01: 'Eu',
        resposta: 'gosto de',
        parte02: 'você, mano.'
    },
    {
        id: '02',
        parte01: 'Qual a coisa mais',
        resposta: 'gay',
        parte02: 'que eu já fiz?'
    },
    {
        id: '03',
        parte01: 'Você acredita em',
        resposta: 'de',
        parte02: '?'
    }
]

const handlekeypress03 = (event) => {
    if (event.key == 'Enter') {
        let contadorAcertos = 0

        const result = frasesJSON.map(element => {

            const input = document.getElementById(`input_${element.id}`)
            const inputData = input.value
            const inputResposta = inputData.toLowerCase()
            const respostaCerta = input.name

            if (inputResposta.includes(respostaCerta)) {
                contadorAcertos += 1
            }

            return contadorAcertos

        });

        console.log(result)
        if (result[2] == 3) {
            question04()
        }
        else {
            alert('poxa, vida :(')

            const input01 = document.getElementById('input_01')
            input01.value = ''

            const input02 = document.getElementById('input_02')
            input02.value = ''

            const input03 = document.getElementById('input_03')
            input03.value = ''
        }
    }

}

const question03 = function() {
    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '3'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'preencha as frases:'

    const respostas = document.getElementById('resposta')

    const frases = document.createElement('div')
    frases.id = 'frases_Q03'

    const inputQ02 = document.getElementById('input_data')

    frasesJSON.forEach(element => {
        if (element.id == '02') {
            const frase = document.createElement('div')
            frase.classList.add('frase')
            frase.id = 'frase2'

            const frase02 = document.createElement('div')
            frase02.classList.add('frase02')
    
            const label01 = document.createElement('label')
            label01.classList.add('text__question')
            label01.textContent = element.parte01
    
            const inputData = document.createElement('input')
            inputData.classList.add('input__data')
            inputData.id = `input_${element.id}`
            inputData.type = 'text'
            inputData.name = element.resposta
    
            const label02 = document.createElement('label')
            label02.classList.add('text__question')
            label02.textContent = element.parte02
    
            frase02.appendChild(label01)
            frase02.appendChild(inputData)
            frase.appendChild(frase02)
            frase.appendChild(label02)
    
            frases.appendChild(frase)
        }
        else {
            const frase = document.createElement('div')
            frase.classList.add('frase')

            const label01 = document.createElement('label')
            label01.classList.add('text__question')
            label01.textContent = element.parte01

            const inputData = document.createElement('input')
            inputData.classList.add('input__data')
            inputData.id = `input_${element.id}`
            inputData.type = 'text'
            inputData.name = element.resposta

            const label02 = document.createElement('label')
            label02.classList.add('text__question')
            label02.textContent = element.parte02

            frase.appendChild(label01)
            frase.appendChild(inputData)
            frase.appendChild(label02)

            frases.appendChild(frase)
        }
    });

    respostas.replaceChild(frases, inputQ02)

    document.getElementById('input_03').addEventListener('keypress', handlekeypress03)

}

export { question03 }