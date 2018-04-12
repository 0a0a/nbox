# nbox
npm and js utils box

[TOC]

# nbox.js

[![Build Status](https://travis-ci.org/bbxyard/nbox.svg?branch=master)](https://travis-ci.org/bbxyard/nbox)   [![NPM Version](https://img.shields.io/npm/v/nbox.svg?style=flat)](https://www.npmjs.org/package/nbox)   [![NPM Downloads](https://img.shields.io/npm/dm/nbox.svg?style=flat)](https://npmcharts.com/compare/nbox?minimal=true)



## 简介
### 心路历程

```mermaid
graph TB;
  nbox((nbox))
  wepy3rd((wepy-3rd))
  wxbase(原生态)
  labrador
  vue
  react

  wxapp --> wxbase
  wxapp --> labrador
  labrador -.- react

  wxapp --> wepy
  wepy -.- vue
  wepy --> wepy3rd
  wepy3rd --> nbox

  nbox === nbox-core
  nbox === nbox-kit
  nbox === nbox-cli
  nbox === nbox-wepy
```


### 实现细节
```mermaid
graph BT;
  nbox-core-src-.-|concat|nbox-core
  nbox-kit-src-.-|concat|nbox-kit
  nbox-cli-src-.-|concat|nbox-cli
  nbox-wepy-src-.-|concat|nbox-wepy
  nbox-core ===|require| nbox
  nbox-kit ===|require| nbox
  nbox-cli ===|require| nbox
  nbox-wepy ===|require| nbox
```

### 开源已接触
```mermaid
graph LR;
  CI[可持续集成]
  pkg((package.json))
  yml>.travis.yml]
  book>book.json]
  gruntF>Gruntfile.js]
  gulpF>gulpfile.js]
  npmig>.npmignore]
  webpackF>webpack.config.js]
  babelF>.babelrc]
  doc[文档]
  md[.md]
  build[构建]

  PreProc(预处理);
  ProcAuto(自动化);

  npm --> npmig
  npm --> pkg
  lerna --> pkg

  PreProc --> babel;
  babel-->babelF; babel-.-pkg

  ProcAuto --> grunt; grunt-->gruntF;
  ProcAuto --> gulp; gulp-->gulpF;

  build-->webpack; webpack-->webpackF;

  CI-->TravisCI; TravisCI --> yml;
  doc-->gitbook; gitbook-->book; gitbook-->md;
```


## 解决问题
 - [x] 前后端、各项目间公用代码
 - [x] 存放学习代码 nbox-core/test/{_in, _3rd}


## 参考
- [阮一峰 - 持续集成服务 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
- [wepy]()
- lerna
- gulp grunt
- babel
- node package
- react - labrada


## sub projects
- [**nbox**](packages/nbox/README.md)
- [**nbox-cli**](packages/nbox-cli/README.md)
- [**nbox-core**](packages/nbox-core/README.md)
- [**nbox-kit**](packages/nbox-kit/README.md)
- [**nbox-wepy**](packages/nbox-wepy/README.md)
