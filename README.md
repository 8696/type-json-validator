# Type-JSON

#### 项目介绍

- JSON类型实现测试 - 一款深度校验JSON数据类型及结构的工具

#### 功能

- 支持浏览器和 node 端
- 深度检测
- 数组支持强测试数组长度
- 支持 JSON 所有数据类型

#### 安装

- (c)npm install type-json-validator -D


#### 使用
##### Browser
```javascript
<script src="lib/browser.min.js"></script>
const typeJsonValidator = new TypeJsonValidator({
    username: String,
    status: Boolean
  });
  try {
    typeJsonValidator.test({
      username: 'long',
      status: 1
    });
  } catch (e) {
    // Error 实例
    console.log(e);
    console.log(e.message); // 'status' error: expected value type is 'boolean'
}
```
##### ES6
```javascript
import TypeJsonValidator from 'type-json-validator';
const typeJsonValidator = new TypeJsonValidator();
typeJsonValidator.test();
```
##### node
```javascript
const TypeJsonValidator = require('type-json-validator/lib/node.lib');
const typeJsonValidator = new TypeJsonValidator();
typeJsonValidator.test();
```

#### API

- constructor
    - TypeJsonValidator
        - param
            - interface <Array | Object>
- methods
    - test
        - param
            - data <Array | Object>
        - return 
            - void
- example
    - constructor
        - new TypeJsonValidator([ String ])
        - new TypeJsonValidator({ username: String, list: [ String ] })
    - methods
        - typeJsonValidator.test([ 1, 2 ])       
        - typeJsonValidator.test({ username: 'long', list: [] })

#### 异常处理

由于使用深度递归检测、为保证更快的效率和检测继续，采用抛出一个 `Error` 对象来终止检测。需要使用 `try` 块里面来去执行代码

```javascript
const TypeJsonValidator = require('type-json-validator/lib/node.lib');
const typeJsonValidator = new TypeJsonValidator({
  username: String
});
try {
  typeJsonValidator.test({
    username: '2020'
  });
} catch (e) {
  console.log(e)
}
```
也可以提供一个封装函数+配合`ES6`来使代码看起来显得更加友好
```javascript
const TypeJsonValidator = require('type-json-validator/lib/node.lib');
const typeJsonValidator = new TypeJsonValidator({
  username: String
});
/**
 * @param typeJsonValidatorIns {Object}
 * @param jsonData {Object | Array}
 * */
function implementTest(typeJsonValidatorIns, jsonData) {
  return new Promise((resolve, reject) => {
    try {
      typeJsonValidatorIns.test(jsonData);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
implementTest(typeJsonValidator, {
  username: '2020'
})
  .then(() => {
    console.log('success')
  })
  .catch(error => {
    console.log(error)
  })
```
#### 其他

- 强测试数组长度
```javascript
const TypeJsonValidator = require('type-json-validator/lib/node.lib');
const typeJsonValidator = new TypeJsonValidator({
  list: [Number] // 该数组下只需实现数组的每一项都是 Number 类型即可
});
try {
  typeJsonValidator.test({
    list: [1, 2]
  });
  // 通过
} catch (e) {
  console.log(e)
}
// ---------------
const typeJsonValidator2 = new TypeJsonValidator({
  list: [Number, {
    age: 20
  }] // 该数组下需要实现第 0 项为 Number 类型、 第 1 项 为 Object 类型
});
try {
  typeJsonValidator2.test({
    list: [1, 2]
  });
} catch (e) {
  console.log(e) // 'list.1' error: expected value type is 'object'
}
try {
  typeJsonValidator2.test({
    list: [1, {
      age: 2020
    }]
  });
  // 通过
} catch (e) {
  console.log(e)
}
```
- 字面量表示接口类型

推荐使用 `Number`、`String`、`Boolean`、`null`、`Array`、`Object` 类型来约定。由于 `Array`、`Object` 是复杂数据类型，其可以包含其他数据就可以是用 `[]` 、`{}` 来约定
```javascript
const TypeJsonValidator = require('type-json-validator/lib/node.lib');
const typeJsonValidator = new TypeJsonValidator({
  a: Number,
  b: String,
  c: Boolean,
  d: null,
  e: Array,
  f: Object
});
try {
  typeJsonValidator.test({
    a: 1,
    b: 'string',
    c: true,
    d: null,
    e: [],
    f: {}
  });
  // 通过
} catch (e) {
  console.log(e)
}
```
也可以使用字面量方式约定，但是这样显得不太友好
```javascript
const typeJsonValidator = new TypeJsonValidator({
  a: 0,
  b: '',
  c: true,
  d: null,
  e: [],
  f: {}
});
```
也就是说在这里不管是构造函数和字面量值都能准确判断该值是什么类型，实现该判断的核心函数
```javascript
/**
 * @description 获取 JSON 可选值的数据类型
 * @param value {Null | Array | Object | Number | String | Boolean}
 * @return {Object<type: String, interface: Function>}
 * */
function getValueType(value) {
  const types = [
    { type: 'null', interface: null },
    { type: 'array', interface: Array },
    { type: 'object', interface: Object },
    { type: 'number', interface: Number },
    { type: 'string', interface: String },
    { type: 'boolean', interface: Boolean }
  ]
  if (typeof value === 'function') {
    return types.find(item => item.interface === value) || {}
  }
  const type = /\[object ([\w\W]+)\]/.exec(({}).toString.call(value))[1].toLowerCase()
  return types.find(item => item.type === type) || {}
}
// 测试
console.log(getValueType(String))           // { type: 'string', interface: [Function: String] }
console.log(getValueType('string'))         // { type: 'string', interface: [Function: String] }
console.log(getValueType(Number))           // { type: 'number', interface: [Function: Number] }
console.log(getValueType(2020))             // { type: 'number', interface: [Function: Number] }
console.log(getValueType(Boolean))          // { type: 'boolean', interface: [Function: Boolean] }
console.log(getValueType(true))             // { type: 'boolean', interface: [Function: Boolean] }
console.log(getValueType(Array))            // { type: 'array', interface: [Function: Array] }
console.log(getValueType([]))               // { type: 'array', interface: [Function: Array] }
console.log(getValueType(Object))           // { type: 'object', interface: [Function: Object] }
console.log(getValueType({}))               // { type: 'object', interface: [Function: Object] }
console.log(getValueType(null))             // { type: 'null', interface: null }
```
