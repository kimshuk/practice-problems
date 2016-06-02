/**
 * Created by andrewkim on 5/30/16.
 */
var input_array = [5,3,2,5,1];
function randomize_list(input_array) {
    var numCap = input_array.length;
    for(var i = 0; i < numCap; i++) {
        var output_array = [];
        var randomI = Math.floor((Math.random()*numCap));   //generate random num between 1 and 10
        console.log("numCap: " + numCap);
        console.log("random num: " + randomI);
        console.log("input element: " + input_array.pop());
        output_array[randomI] = input_array.pop();
    }
    return output_array;
}

console.log(randomize_list(input_array));