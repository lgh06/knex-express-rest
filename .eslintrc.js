module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node":true
  },
  "extends": "kankan",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
  },
  "rules": {
    //多行if for 需要使用大括号括住,单行不限;一个整体内 如果有多行语句 则无论单行多行,都加大括号
    "curly": ["error", "multi-line", "consistent"],
    "no-console": ["off"],
    "no-trailing-spaces": ["off"]
  }
};
