'use strict'

import { question03 } from "./03.js"

const handlekeypress02 = (event) => {
    if (event.key == 'Enter') {
        const inputNameFilm = document.getElementById('input_data')
        const nameInput = inputNameFilm.value
        const nameReal = inputNameFilm.name

        if (nameInput.includes(nameReal)) {
            question03()
        }
        else{
            alert('essa é tão fácil, amor...')

            inputNameFilm.value = ''
        }
    }

}

const question02 = function() {
    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '2'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'um filme de qualidade incrivelmente duvidosa...'

    const respostas = document.getElementById('resposta')

    const inputData = document.createElement('input')
    inputData.classList.add('input__data')
    inputData.id = 'input_data'
    inputData.type = 'text'
    inputData.name = 'chapeuzinho'

    const inputsQ01 = document.getElementById('inputs_container')
    
    respostas.replaceChild(inputData, inputsQ01)

    document.getElementById('input_data').addEventListener('keypress', handlekeypress02)

}

export { question02 }