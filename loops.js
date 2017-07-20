// javascript-intro-to-looping-bootcamp-prep-000

function forLoop(arr){
  for(i=0;i<25;i++){
    if(i==1) { arr.push("I am 1 strange loop")}//{arr[i]="I am 1 strange loop"}
    else    {  arr.push(`I am ${i} strange loops`)}//{arr[i]=`I am ${i} strange loops`}

  }
    return arr;
}

// console.log(forLoop([]))



function whileLoop(num){
  while(num>0){
    console.log(num);
    num--;
  }
  return "done"// console.log("done")
}



function doWhileLoop(arr){
  function maybeTrue() {  return Math.random() >= 0.5}
  do {arr.pop(); console.log(arr)
  }
  // while(maybeTrue() &&( arr.length > 0))
  while(( arr.length > 0))
  return arr;
}
// console.log(maybeTrue());
// doWhileLoop([]);
// doWhileLoop([12,1,2,3,4,5,5])
// TODO: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function
//  (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue()
//  returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.
