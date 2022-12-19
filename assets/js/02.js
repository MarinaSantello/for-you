'use strict'

const handlekeypress02 = (event) => {
    if (event.key == 'Enter') {
        const inputNameFilm = document.getElementById('input_data')
        const nameInput = inputNameFilm.value
        const nameReal = inputNameFilm.name

        if (nameInput.includes(nameReal)) {
            console.log('certin')
        }
        else{
            alert('não acertou tudo? que decepção...')

            window.location.reload(true)
        }
    }

}

const question02 = function() {
    const numQuestion = document.getElementById('question_number')
    numQuestion.textContent = '2'

    const pergunta = document.getElementById('pergunta')
    pergunta.textContent = 'um filme de qualidade duvidosa'

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