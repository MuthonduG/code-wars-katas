function flickSwitch(arr){
    let flag = true
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'flick'){
        flag == false ? flag = true : flag = false
      } 
      arr[i] = flag
    }
    return arr
  }

// Example usage
flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']);
flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']);
flickSwitch(['codewars', 'flick', 'code', 'wars']);
