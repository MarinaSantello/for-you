'use strict'

import { question02 } from "./02.js"

const filmesJSON = [
    {
        nome: 'Donnie Darko',
        ordem: '8'
    },
    {
        nome: 'Zack & Cody: O Filme',
        ordem: '6'
    },
    {
        nome: 'Uncharted: Fora do Mapa',
        ordem: '1'
    },
    {
        nome: 'Elvis',
        ordem: '4'
    },
    {
        nome: 'Como Treinar o seu Dragão 3',
        ordem: '2'
    },
    {
        nome: 'Minions',
        ordem: '5'
    },
    {
        nome: 'Space Jam: O Jogo do Século',
        ordem: '10'
    },
    {
        nome: 'Lightyear',
        ordem: '3'
    },
    {
        nome: 'O Iluminado',
        ordem: '9'
    },
    {
        nome: 'Minority Report: A Nova Lei',
        ordem: '7'
    }
]

const question01 = function() {
    const imgFooter = document.getElementById('footer_img')
    imgFooter.style.opacity = '65%'

    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '1'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'enumere os filmes em ordem cronológica.'

    const respostas = document.getElementById('resposta')

    const inputs = document.createElement('div')
    inputs.classList.add('inputs__container')
    inputs.id = 'inputs_container'

    filmesJSON.forEach(element => {
        const filme = document.createElement('div')
        const inputOrdem = document.createElement('input')
        inputOrdem.classList.add('input__data')
        inputOrdem.type = 'number'
        inputOrdem.autocomplete = 'off'
        inputOrdem.name = element.ordem
        inputOrdem.id = `input_${element.ordem}`
    
        const nome = document.createElement('label')
        nome.textContent = `· ${element.nome}`
    
        filme.appendChild(inputOrdem)
        filme.appendChild(nome)

        inputs.appendChild(filme)
    })

    respostas.appendChild(inputs)
}

question01()

const handlekeypress = (event) => {
    if (event.key == 'Enter') {

        let contadorAcertos = 0

        const result = filmesJSON.map(element => {

            const input = document.getElementById(`input_${element.ordem}`)
            const inputData = input.value
            const resposta = element.ordem

            if (inputData == resposta) {
                contadorAcertos += 1
            }

            return contadorAcertos
        });

        console.log(result)
        if (result[9] == 10) {
            question02()
        }
        else {
            alert('não acertou tudo? que decepção...')

            window.location.reload(true)
        }
    }

}

document.getElementById('input_10').addEventListener('keypress', handlekeypress)

document.getElementById('input_7').addEventListener('keypress', handlekeypress)