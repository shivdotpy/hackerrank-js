// Complete the miniMaxSum function below.
const add = (a, b) =>
  a + b

function miniMaxSum(arr) {
    const min = Math.min.apply(Math, arr)
    const max = Math.max.apply(Math, arr)

    const min_arr = [...arr]
    const max_arr = [...arr]

    min_arr.splice(arr.indexOf(max), 1)
    max_arr.splice(arr.indexOf(min), 1)


    console.log(min_arr.reduce(add), max_arr.reduce(add)) 
}

miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])