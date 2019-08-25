import { random100, getRuleThresholds, oneOf } from "./utils";
import { RuleType, rules, hasFixedValue } from "./rules";

export const generate = (
  ruleType: RuleType,
  currentValue: string = ""
): string => {
  const n = random100();
  const rule = rules[ruleType];
  const ruleThresholds = getRuleThresholds(rule);

  const selectedThreshold = ruleThresholds.find(threshold => n <= threshold);
  const selectedRuleCase = rule[selectedThreshold || ruleThresholds.length - 1];

  let newValue;
  if (hasFixedValue(selectedRuleCase))
    newValue = `${currentValue}${selectedRuleCase.value}`;
  else {
    newValue = `${currentValue}${oneOf(selectedRuleCase.valueInSet)}`;
  }

  if (!selectedRuleCase.next) return newValue;
  return generate(selectedRuleCase.next, newValue);
};
