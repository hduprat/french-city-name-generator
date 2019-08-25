import { random100, getRuleThresholds } from "./utils";
import { RuleType, rules } from "./rules";

export const generate = (
  ruleType: RuleType,
  currentValue: string = ""
): string => {
  const n = random100();
  const rule = rules[ruleType];
  const ruleThresholds = getRuleThresholds(rule);

  const selectedThreshold = ruleThresholds.find(threshold => n <= threshold);
  const selectedRule = rule[selectedThreshold || ruleThresholds.length - 1];

  const newValue = `${currentValue}${selectedRule.value}`;

  if (!selectedRule.next) return newValue;
  return generate(selectedRule.next, newValue);
};
