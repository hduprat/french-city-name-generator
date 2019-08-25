interface RuleCase {
  value: string;
  next?: RuleType;
}

export interface Rule {
  [n: number]: RuleCase;
}

const startRule: Rule = {
  50: {
    value: "tor",
    next: "endRule"
  },
  75: {
    value: "tarn",
    next: "endRule"
  },
  95: {
    value: "arb",
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
