// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++
        } else if(arr[i] < 0) {
            neg++
        }
    }

    // calc
    const precision_pos = (pos/arr.length).toFixed(6)
    const precision_neg = (neg/arr.length).toFixed(6)
    const precision_nutral = ((arr.length - neg - pos)/arr.length).toFixed(6)

    console.log(precision_pos)
    console.log(precision_neg)
    console.log(precision_nutral)

}

plusMinus([-4, 3, -9, 0, 4, 1])