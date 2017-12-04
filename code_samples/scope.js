// global scope
var tmpA = "Hello";

function world() {
  // functional scope
  var tmpB = "World";
  console.log(tmpA + " " + tmpB);
}

world();

console.log(typeof tmpB); // tmpB will be undefined outside of functional scope

function testFor() {
  for(let i = 0; i < 5; i++) {
    // block-level scope
    console.log("i = " + i);
  }
  console.log("i outside of loop: " + typeof i); // i will be undefined outside of block-level scope
}

testFor();

console.log("i outside of function: " + typeof i);