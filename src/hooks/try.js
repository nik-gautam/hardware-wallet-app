let arr = ["quin town", "def", "ab", "abd"];
arr = arr.filter(item => {
    return item.match("qu");
})
console.log(arr);