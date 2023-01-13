module.exports = {
    // DOC: https://prettier.io/docs/en/index.html
    // 超过最大值换行
    printWidth: 180,
    // 缩进字节数
    tabWidth: 4,
    // 缩进不使用tab，使用空格
    useTabs: false,
    // 句尾添加分号
    semi: true,
    // 使用单引号代替双引号
    singleQuote: false,
    // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    proseWrap: "preserve",
    //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    arrowParens: "avoid",
    // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    bracketSpacing: true,
    // 指定换行符
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    // 在jsx中使用单引号代替双引号
    jsxSingleQuote: false,
    // 在对象或数组最后一个元素后面是否加逗号
    trailingComma: "es5",
    vueIndentScriptAndStyle: false,
    embeddedLanguageFormatting: "off",
};
