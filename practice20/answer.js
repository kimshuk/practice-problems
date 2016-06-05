/**
 * Created by andrewkim on 5/30/16.
 */
var input_array = [5,3,2,5,1];
var output_array = [];

function randomize_list(input_array) {
    var numCap = input_array.length;
    for(var i = 0; i < numCap; i++) {
        var randomI = Math.floor((Math.random()*numCap-1));   //generate random num between 1 and random num
        console.log("random num: " + randomI);
        console.log("input array: " + input_array);
        var temp = input_array.pop();
        output_array.splice(randomI,0,temp);
        console.log("output array: " + output_array);
    }
    return output_array;
}

console.log(randomize_list(input_array));