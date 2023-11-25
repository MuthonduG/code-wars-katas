function isDigit(s) {
    //your code
    let num = Number(s)
    return(!isNaN(num))
}


isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")