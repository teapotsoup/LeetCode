var isPalindrome = function(x) {
    const arr = x.toString().split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !==  arr[right]) {
        return false
        } else  {
            right --;
            left ++;
        }
    }
    return true
};