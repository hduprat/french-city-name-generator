import { frenchCityNameGenerator } from "./src/generator";

function main() {
  const frenchCityNames = frenchCityNameGenerator();
  const repartition: { [key: string]: number } = {};
  for (let i = 0; i < 10; i++) {
    const word = frenchCityNames.next().value;
    if (repartition[word]) {
      repartition[word]++;
    } else {
      repartition[word] = 1;
    }
  }
  console.log(repartition);
}

main();
