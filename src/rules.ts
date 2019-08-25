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

const firstSyllableSet = ["Tor", "Tr", "Arb", "Omb", "Flor", "Veg", "Ur"];
const middleSyllableSet = ["oz", "i", "onz", "ilh", "er"];
const lastSyllableSet = ["ac", "ay", "émont", "ès", "éville"];
const laSuffixSet = ["Forêt", "Ville", "Belle", "Vieille", "Mine", "Plaine"];
const lesSuffixSet = ["Roses", "Monts", "Bains", "Champs"];

const startRule: Rule = {
  70: {
    valueInSet: firstSyllableSet,
    next: "endRule"
  },
  95: {
    valueInSet: firstSyllableSet,
    next: "middleRule"
  },
  100: {
    value: "Paris"
  }
};

const middleRule: Rule = {
  100: {
    valueInSet: middleSyllableSet,
    next: "endRule"
  }
};

const endRule: Rule = {
  5: {
    valueInSet: lastSyllableSet,
    next: "stopRule"
  },
  100: {
    valueInSet: lastSyllableSet
  }
};

const stopRule: Rule = {
  40: {
    value: "-les-",
    next: "lesRule"
  },
  100: {
    value: "-la-",
    next: "laRule"
  }
};

const laRule: Rule = {
  100: {
    valueInSet: laSuffixSet
  }
};

const lesRule: Rule = {
  100: {
    valueInSet: lesSuffixSet
  }
};

export const rules = {
  startRule,
  middleRule,
  endRule,
  laRule,
  lesRule,
  stopRule
};

export type RuleType = keyof typeof rules;
