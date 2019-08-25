import { random100, getRuleThresholds, oneOf } from "./utils";
import { RuleType, rules, hasFixedValue, Rule } from "./rules";

const generate = (initialRuleType: RuleType): string => {
  let ruleType: RuleType | undefined = initialRuleType;
  let currentValue = "";
  do {
    const n = random100();
    const rule: Rule = rules[ruleType];
    const ruleThresholds = getRuleThresholds(rule);
    const selectedThreshold = ruleThresholds.find(threshold => n <= threshold);
    const ruleCase = rule[selectedThreshold || ruleThresholds.length - 1];

    if (hasFixedValue(ruleCase))
      currentValue = `${currentValue}${ruleCase.value}`;
    else {
      currentValue = `${currentValue}${oneOf(ruleCase.valueInSet)}`;
    }
    ruleType = ruleCase.next;
  } while (!!ruleType);
  return currentValue;
};

export function* frenchCityNameGenerator() {
  while (true) {
    yield generate("startRule");
  }
}
