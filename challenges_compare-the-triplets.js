// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++
        } else if (a[i] < b[i]) {
            bob++
        }
    }
    console.log(alice + ' ' + bob)
}

compareTriplets([17, 28, 30], [99, 16, 8])
compareTriplets([5, 6, 7], [3, 6, 10])