function threeNumberSum (array,target) {
    
    //first need to sort array
    array.sort((a,b)=> a - b)
    let result = [] // this will hold all of our elements that add up to target
    for(let i = 0; i < array.length-2; i++){ 
        let num1 = array[i]
        let point1 = i + 1
        let point2 = array.length - 1

        while(point1 < point2){
            let num2 = array[point1]
            let num3 = array[point2]
            let sum = num1 + num2 + num3
            if(sum === target){
            result.push([num1,num2,num3])
            point1++;
            point2--;
            }else if (sum < target){
                point1++
            }else if (sum > target){
                point2--;
            }

        }
    }
    return result
}

exports.threeNumberSum = threeNumberSum