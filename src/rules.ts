interface BaseRuleCase {
  next?: RuleType;
}

interface RuleCaseValue extends BaseRuleCase {
  value: string;
}

interface RuleCaseValueInSet extends BaseRuleCase {
  valueInSet: string[];
}

type RuleCase = RuleCaseValue | RuleCaseValueInSet;

export const hasFixedValue = (
  ruleCase: RuleCase
): ruleCase is RuleCaseValue => {
  return !!(ruleCase as RuleCaseValue).value;
};

export interface Rule {
  [n: number]: RuleCase;
}

const firstSyllableSet = ["tor", "tarn", "arb"];

const startRule: Rule = {
  95: {
    valueInSet: firstSyllableSet,
    next: "endRule"
  },
  100: {
    value: "paris"
  }
};

const endRule: Rule = {
  50: {
    value: "ac"
  },
  100: {
    value: "ay"
  }
};

export const rules = {
  startRule,
  endRule
};

export type RuleType = keyof typeof rules;
