var romanToInt = function(s) {
    const arr = s.toString().split('');
    const numArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'I'){
            if (arr[i]+arr[i+1] === 'IV'){
                numArr.push(4)
                i=i+1
            }else if(arr[i]+arr[i+1] === 'IX'){
                numArr.push(9)
                i=i+1
            }
            else{
                numArr.push(1)
            }
        }else if(arr[i] === 'X'){
            if (arr[i]+arr[i+1] === 'XL'){
                numArr.push(40)
                i=i+1
            }else if(arr[i]+arr[i+1] === 'XC'){
                numArr.push(90)
                i=i+1
            }
            else{
                numArr.push(10)
            }
        }else if(arr[i] === 'C'){
            if (arr[i]+arr[i+1] === 'CD'){
                numArr.push(400)
                i=i+1
            }else if(arr[i]+arr[i+1] === 'CM'){
                numArr.push(900)
                i=i+1
            }else{
                numArr.push(100)
            }
        }
        else if(arr[i] === 'V'){
            numArr.push(5)
        }
        else if(arr[i] === 'L'){
            numArr.push(50)
        }
        else if(arr[i] === 'D'){
            numArr.push(500)
        }
        else if(arr[i] === 'M'){
            numArr.push(1000)
        }
    }
    let result = numArr.reduce((a,b)=>a+b,0)
    return result
};