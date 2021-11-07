
function addition(a, b) {
    return a + b
}

function soustraction(a, b) {
    return a - b
}

function mutipicasion(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function arrayToOperation(acc, character) {
    // Si le character est un nombre
    if (!isNaN(character)) {

        // On regarde si le dernier caratère est une operation
        let lastValue = acc[acc.length - 1]
        if (isNaN(lastValue) || lastValue == undefined) {
          // Si oui, on passe donc à l'oppérande suivante
          lastValue = ''
          acc.push(lastValue)
        }

        // Dans tout les cas, on ajoute le chiffre dans la dernière cellule du tableau
        acc[acc.length - 1] = lastValue + character
    }
    else {
        acc.push(character)
    }
    return acc;
}

let operateur = null;
function doOperation(resultat, operation) {
    // Si operation est un chiffre
    if (!isNaN(operation)) {
        // Si on est au premier terme de l'operation
        if (resultat == null) {
            // on renvoi l'operation dans resultat
            return parseInt(operation)
        }else{
            // On effectue l'operation demandée
            switch (operateur) {
                case '+':
                    operateur = null
                    return addition(resultat, parseInt(operation))
                case '-':
                    operateur = null
                    return soustraction(resultat, parseInt(operation))
                case '/':
                    operateur = null
                    return division(resultat, parseInt(operation))
                case '*':
                    operateur = null
                    return mutipicasion(resultat, parseInt(operation))
                default:
                    throw 'Erreur: Opération non connue'
            }
        }
    } else {
        // Sinon on a trouvé l'operateur de l'operation mathématique
        operateur = operation
        return resultat
    }
}

module.exports = {
    doOperation,
    arrayToOperation
}