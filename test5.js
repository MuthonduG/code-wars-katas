function findNeedle(haystack) {
    // your code here
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === 'needle') {
            return(`found the needle at position ${i}`);
        }
    }
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])