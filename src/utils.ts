import './polyfill'
/**
 * @description 获取 JSON 可选值的数据类型
 * @param value {Null | Array | Object | Number | String | Boolean}
 * @return {Object<type: String, interface: Function>}
 * */
export function getValueType(value) {
  const types = [
    { type: 'null', interface: null },
    { type: 'array', interface: Array },
    { type: 'object', interface: Object },
    { type: 'number', interface: Number },
    { type: 'string', interface: String },
    { type: 'boolean', interface: Boolean }
  ]
  if (typeof value === 'function') {
    return types.find(item => item.interface === value) || {
      type: undefined
    }
  }
  // @ts-ignore
  const type = /\[object ([\w\W]+)\]/.exec(({}).toString.call(value))[1].toLowerCase()
  return types.find(item => item.type === type) || {
    type: undefined
  }
}
