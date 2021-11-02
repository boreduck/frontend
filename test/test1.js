let sum = window.prompt("Enter sum");
alert(getBills(sum))
function getBills(s) {
    let num = 0
    if(s == 0) return num

    while(s - 1000 >= 0){
        s -= 1000
        num++
    }
    while(s - 500 >= 0){
        s -= 500
        num++
    }
    while(s - 200 >= 0){
        s -= 200
        num++
    }
    while(s - 100 >= 0){
        s -= 100
        num++
    }
    while(s - 50 >= 0){
        s -= 50
        num++
    }
    if(s != 0)
        return -1;
    return num

}