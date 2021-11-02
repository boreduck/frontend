let array = window.prompt("Enter massiv like: 1,2,3,5,6")
let result = sortZeroes(array.split(',')).join(',')
alert(result)

function sortZeroes(arr) {
    let newArray = [],
        zeroes = 0
    for (let elem of arr) {
        if(elem != 0)
            newArray[newArray.length] = elem
        else zeroes++
    }
    for (let i = 0; i < zeroes; i++) {
        newArray[newArray.length] = 0
    }
    return newArray
}
