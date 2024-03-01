//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(i=0; i<dog_names.length; i++){
        let index = dog_string.indexOf  (dog_names[i]);
        if (index != -1){
            return `Matched ${dog_names[i]}`;
        }    
    }
    return "No Matches";
}
console.log(findWords());


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(var i=0; i < arr.length; i+=2) {
       arr.splice(i,1,"even index");
   }
   return arr;
}   
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));



//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Exercise 3 
// link: https://www.codewars.com/kata/5708f682c69b48047b000e07/solutions/javascript?filter=me&sort=best_practice&invalids=false


//Exercise 4 
// Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript?filter=me&sort=best_practice&invalids=false

//Exercise 5
//Link: https://www.codewars.com/kata/50654ddff44f800200000004/solutions/javascript?filter=all&sort=best_practice&invalids=false

//Exercise 6
//link: https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript?filter=me&sort=best_practice&invalids=false