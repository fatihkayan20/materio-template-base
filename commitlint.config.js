module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ["type", "subject", "ticket"],
      headerPattern: /^(\w+): (.*) (NXT-[1-9]\d*)$/,
    },
  },
  rules: {
    "references-empty": [0, "never"],
  },
};
