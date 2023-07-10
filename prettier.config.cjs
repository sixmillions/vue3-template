module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用 tab 缩进，而使用空格
  useTabs: false,
  // 行尾不需要有分号
  semi: false,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  // 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，'consistent': 保持一致 , preserve: 不限制，想用就用)
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
  trailingComma: 'all',
  // 确保对象的最后一个属性后有逗号
  // trailingComma: 'es5',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier 【是否严格按照文件顶部的特殊注释格式化代码】
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier 【是否在格式化的文件顶部插入Pragma标记，以表明该文件被prettier格式化过了】
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // html文件的空格敏感度，控制空格是否影响布局
  // "htmlWhitespaceSensitivity": "ignore",
  // 不对vue中的script和styple标签缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 【结尾是 \n \r \n\r auto】 "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
  endOfLine: 'lf',
  // 对引用代码进行格式化
  embeddedLanguageFormatting: 'auto',
}
