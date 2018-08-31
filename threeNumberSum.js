function threeNumberSum (array,target) {
    
    //first need to sort array
    array.sort((a,b)=> a - b)
    let result = [] // this will hold all of our elements that add up to target
    for(let i = 0; i < array.length-2; i++){ // we do not want to loop through the whole array, we will stop at the third to last
        let num1 = array[i]
        let point1 = i + 1 // second pointer will always be one ahead of i
        let point2 = array.length - 1 // the third pointer will be the last element in the array

        while(point1 < point2){
            let num2 = array[point1] // we will get all the element in the in the array
            let num3 = array[point2]
            let sum = num1 + num2 + num3 // sum up all the element 
            if(sum === target){ // check if the sum is our target
            result.push([num1,num2,num3]) // if sum is target we will push it inside our array. since our array is sorted we will simply put the element in order
            point1++; // once we have a match we will move both pointer
            point2--;
            }else if (sum < target){ // if the sum is smaller we will move our second pointer to move to a bigger number
                point1++
            }else if (sum > target){
                point2--; // if our sum is too big we will move our last pointer to the left to a smaller number
            }

        }
    }
    return result // return our result, if we do not have any matches result will be an empty array
} 

exports.threeNumberSum = threeNumberSum