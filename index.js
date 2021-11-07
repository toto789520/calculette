const { arrayToOperation, doOperation } = require('./utils/calcul.js')


var stdin = process.openStdin();
stdin.addListener("data", function(d) {

    let text = d.toString().trim()
    let textsplit = text.split('')

    const operation = textsplit.reduce(arrayToOperation, [])
    console.log(operation)

    const resultat = operation.reduce(doOperation, null)
    console.log(resultat)

    // let text = d.toString().trim();
    // if( text.includes('+')){
    //     let tablo = text.split('+')
    //     let a = parseInt(tablo[0])
    //     let b = parseInt(tablo[1])
    //     let value = addition(a, b)
    //     console.log(value)
    // }
    // else if( text.includes('-')){
    //     let tablo = text.split('-')
    //     let a = parseInt(tablo[0])
    //     let b = parseInt(tablo[1])
    //     let value = soustraction(a, b)
    //     console.log(value)


    // }
    // else if( text.includes('*')){
    //     let tablo = text.split('*')
    //     let a = parseInt(tablo[0])
    //     let b = parseInt(tablo[1])
    //     let value = mutipicasion(a, b)
    //     console.log(value)
    // }
    // else if( text.includes('/')){
    //     let tablo = text.split('/')
    //     let a = parseInt(tablo[0])
    //     let b = parseInt(tablo[1])
    //     let value = division(a, b).toFixed(2)
    //     console.log(value)
    // }



  })

