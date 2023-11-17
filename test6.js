// Return an array
function fizzbuzz(n){
  //
  let arr = []
  let count = 1

  for(let i = 0; i < n; i++){
    arr.push(count++)
    if(arr[i]%5 === 0 && arr[i]%3 === 0){
        arr[i] = 'FizzBuzz'
    }
    else if(arr[i]%3 === 0) {
        arr[i] = 'Fizz'
    } else if(arr[i]%5 === 0){
        arr[i] = 'Buzz'
    }
  }
  return arr
}

fizzbuzz(15)