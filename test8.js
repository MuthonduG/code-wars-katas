function countSalutes(hallway) {
    let count = 0
    for(let i = 0; i < hallway.length; i++) {
        for(let j = i+1; j < hallway.length; j++) {
            if(hallway[i] === '>' && hallway[j] === '<') {
                count += 2
            }
        }
    }
    return count;
}

countSalutes('<---<--->----<')
countSalutes('>----->-----<--<')