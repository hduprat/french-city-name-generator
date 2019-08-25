import { generate } from "./src/generator";

function main() {
  for (let i = 0; i < 20; i++) {
    const word = generate("startRule");
    console.log(word);
  }
}

main();
