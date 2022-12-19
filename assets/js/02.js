'use strict'

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
}

const handlekeypress = (event) => {
    if (event.key == 'Enter') {

        let contadorAcertos = 0

        const result = filmesJSON.map(element => {

            const input = document.getElementById(`input_${element.ordem}`)
            const inputData = input.value

            if (inputData == element.ordem) {
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

document.getElementById('input_data').addEventListener('keypress', handlekeypress)

export { question02 }