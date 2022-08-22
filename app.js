const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {

    keys_map = {
        '0':  'c-3',
        '1':  'd-3',
        '2':  'f-3',
        '3':  'g-3',
        '4':  'a-4',
        '5':  'c-4',
        '6':  'd-4',
        '7':  'f-4',
        '8':  'g-4',
        '9':  'a-5',
        '10': 'c-5',
        '11': 'd-5',
        '12': 'f-5',
        '13': 'g-5',
        '14': 'c3',
        '15': 'd3',
        '16': 'e3',
        '17': 'f3',
        '18': 'g3',
        '19': 'a4',
        '20': 'b4',
        '21': 'c4',
        '22': 'd4',
        '23': 'e4',
        '24': 'f4',
        '25': 'g4',
        '26': 'a5',
        '27': 'b5',
        '28': 'c5',
        '29': 'd5',
        '30': 'e5',
        '31': 'f5',
        '32': 'g5'
    }

    const audioFile = 'audio/' + keys_map[i] + '.mp3'
    pianoKey.addEventListener('click', () => playSound(audioFile))
})
