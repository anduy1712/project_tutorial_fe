// function reverseString(s) {
//     // Create the result list
//     const result = [];
//     // Start from the end of the string and iterate towards the start
//     for (let i = s.length-1; i >= 0; i -= 1) { //i=2 // 2 = 2 - 1
//     // Push the current char in the list
//     result.push(s[i]);
//     }
//     // Combine the result in a string
//     return result.join('');
//    }
   
//    // Examples
//    console.log(reverseString(""))
//    console.log(reverseString("abc"))
//    console.log(reverseString("aaabbbcccd"))

function linearSearch(arr, x) {
    let lo = 0;
    let hi = arr.length-1;
    // Iterate from start till end of list
    while (lo <= hi) {
    // If item was found then return index
    if (arr[lo] === x) {
    return lo;
    } else {
    lo += 1
    }
    }
    // Return -1 to denote the item was not found
    return -1;
   }
   
   let arr = [1,3,5,7,9,11,14,18,22];
   console.info("Item was found at index: " + linearSearch(arr, 22));