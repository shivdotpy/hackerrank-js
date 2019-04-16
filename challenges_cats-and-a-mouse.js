// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let diffA = Math.abs(x - z)
    let diffB = Math.abs(y - z)

    if (diffA < diffB) {
        return 'Cat A'
    } else if (diffA > diffB) {
        return 'Cat B'
    } else {
        return 'Mouse C'
    }
}

catAndMouse(1, 2, 3)
catAndMouse(1, 3, 2)