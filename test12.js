function plusMinus(arr) {
    const n = arr.length
    let empty_list = []
    let positive_count = 0
    let negative_count = 0
    let zero_count = 0
    
    for(let i = 0; i < n; i++) {
        if(arr[i] > 0) {
            positive_count += 1
        } else if(arr[i] < 0) {
            negative_count += 1
        } else if(arr[i] === 0) {
            zero_count += 1
        }
    }

    let positive_ratio = (positive_count / n).toFixed(6)
    let negative_ratio = (negative_count / n).toFixed(6)
    let zero_ratio = (zero_count / n).toFixed(6)

    console.log(positive_ratio);
    console.log(negative_ratio);
    console.log(zero_ratio);
}
 
let arr = [1, 1, 0, -1, -1]
plusMinus(arr)