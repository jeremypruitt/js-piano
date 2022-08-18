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

        '10': 'c3',
        '11': 'd3',
        '12': 'e3',
        '13': 'f3',
        '14': 'g3',
        '15': 'a4',
        '16': 'b4',
        '17': 'c4',
        '18': 'd4',
        '19': 'e4',
        '20': 'f4',
        '21': 'g4',
        '22': 'a5',
        '23': 'b5',
        '24': 'c5'
    }

    const keys =[
        '02','04','06',
        '09','11',
        '14','16','18',
        '21','23',
		'01','03','05','07','08','10','12','13','15','17','19','20','22','24']
const newUrl = '24-piano-keys/key'+ keys[i] + '.mp3'

    const audioFile = 'audio/' + keys_map[i] + '.mp3'
    pianoKey.addEventListener('click', () => playSound(audioFile))
})
