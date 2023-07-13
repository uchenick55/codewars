//What is between?
//https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/javascript
function between(a, b) {
    // your code here
    const Arr = []
    for (let i=a; i<=b; i++ ) {
        Arr.push(i)
    }
    console.log(Arr)
    return Arr
}

between(1,4)