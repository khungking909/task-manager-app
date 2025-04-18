export default {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-class-pattern': null,
    'no-descending-specificity': null,
  },
};
