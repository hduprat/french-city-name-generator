import { Rule } from "./rules";

// constructs random number with equal chance of picking.
const random = (max: number) => {
  let n;
  do {
    n = Math.floor(Math.random() * (max + 1));
  } while (n === max + 1);
  return n;
};

export const random100 = (): number => random(100);

export const getRuleThresholds = (rule: Rule): number[] => {
  let thresholds: number[] = [];

  for (const ruleCase in rule) {
    thresholds.push(Number(ruleCase));
  }

  return thresholds;
};

export const oneOf = <T>(array: T[]): T => {
  const index = random(array.length - 1);
  return array[index];
};
