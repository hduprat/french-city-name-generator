import { Rule } from "./rules";

export const random100 = (): number => Math.floor(Math.random() * 100);

export const getRuleThresholds = (rule: Rule): number[] => {
  let thresholds: number[] = [];

  for (const ruleCase in rule) {
    thresholds.push(Number(ruleCase));
  }

  return thresholds;
};
