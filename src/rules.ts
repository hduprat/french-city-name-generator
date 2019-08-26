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
const middleSyllableSet = ["oz", "i", "onz", "ilh", "er", "us"];
const lastSyllableSet = ["ac", "ay", "émont", "ès", "éville", "on"];
const laSuffixSet = [
  "Forêt",
  "Ville",
  "Belle",
  "Vieille",
  "Mine",
  "Plaine",
  "Tour",
  "Garde"
];
const lesSuffixSet = ["Roses", "Monts", "Bains", "Champs", "Tours"];
const surSuffixSet = [
  "Rhône",
  "Garonne",
  "Saône",
  "Adour",
  "Loire",
  "le-Rhin",
  "Seine",
  "Marne",
  "Somme"
];

const startRule: Rule = {
  75: {
    valueInSet: firstSyllableSet,
    next: "endRule"
  },
  99: {
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
  7: {
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
  85: {
    value: "-la-",
    next: "laRule"
  },
  100: {
    value: "-sur-",
    next: "surRule"
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

const surRule: Rule = {
  100: {
    valueInSet: surSuffixSet
  }
};

export const rules = {
  startRule,
  middleRule,
  endRule,
  laRule,
  lesRule,
  surRule,
  stopRule
};

export type RuleType = keyof typeof rules;
