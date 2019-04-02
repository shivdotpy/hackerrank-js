function sockMerchant(n, ar) {
    const ar_set = [...new Set(ar)]
    let c = 0

    for (let i = 0; i < ar_set.length; i++) {
        const count = ar.filter(function(j) { return j == ar_set[i]}).length
        if (count % 2 == 0) {
            c = c + (count/2)
        } else if((count-1) % 2 == 0) {
            c = c + ((count-1)/2)
        } else {
            
        }
    }   
    console.log(c)
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])