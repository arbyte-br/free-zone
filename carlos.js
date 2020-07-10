let rs = require('readline-sync')

let aprendeu = '';
    while(aprendeu !== 'S') {
        aprendeu = rs.question('Você aprendeu a fazer pull requests? S/N: ')
        if (aprendeu === 'S'){
            console.log('Parabéns!')
        }
    }

