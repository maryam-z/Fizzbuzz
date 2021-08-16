"use strict";

for (let i = 0; i <= 50; i++) {
  if ([i] % 5 === 0 && [i] % 3 === 0) {
    console.log("FizBuzFizBuz");
  } else if ([i] % 5 === 0) {
    console.log("Buzzzzzzz");
  } else if ([i] % 3 === 0) {
    console.log("Fizzzzzzz");
  } else {
    console.log(`${[i]}Oh No!`);
  }
}
