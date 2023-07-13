//What is between?
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