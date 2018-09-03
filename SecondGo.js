function threeNumberSum (array,target){
    array.sort((a,b)=> a - b)
    let result = []
    for(let i = 0; i < array.length - 2; i++){
        let num1 = array[i]
        let right = array.length-1
        let left = i + 1
        while (left < right){
            let num2 = array[left]
            let num3 = array[right]
            let sum = num1 + num2 + num3
            if (sum === target){
                result.push([num1,num2,num3])
                left++;
                right--;
            }else if (sum < target){
                left ++;
            }else if (sum > target){
                right --;
            }
        }
    }
    return result
}

exports.threeNumberSum = threeNumberSum