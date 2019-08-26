import { frenchCityNameGenerator } from "./src/generator";

function main() {
  const frenchCityNames = frenchCityNameGenerator();
  for (let i = 0; i < 70; i++) {
    const word = frenchCityNames.next().value;
    console.log(word);
  }
}

main();
