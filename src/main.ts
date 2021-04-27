import {getValueType} from "./utils";

export default class {
  private readonly _interface: any
  /**
   * @description
   * @constructor
   * @param _interface {*}
   * */
  constructor(_interface) {
    if (!['array', 'object'].includes(<string>getValueType(_interface).type)) {
      throw new Error('The interface only supports arrays or objects')
    }
    this._interface = _interface
  }
  /**
   * @description 测试一个 JSON 是否符合接口
   * @param json {*}
   * @return void
   * */
  public test(json: any) {
    if (!['array', 'object'].includes(<string>getValueType(json).type)) {
      throw new Error('Only supports testing arrays or objects')
    }
    this._implement(json)
  }
  private _implement(json: any, _interface: any = undefined, errorPath: string = '') {
    _interface === undefined && (_interface = this._interface)
    if (getValueType(json).type !== getValueType(_interface).type) {
      !errorPath && (errorPath = json)
      errorPath = `'${String(errorPath).replace(/^\./, '')}' error: expected value type is '${getValueType(_interface).type}'`
      throw new Error(errorPath)
    }
    if (getValueType(_interface).type === 'object') {
      const keys = Object.keys(_interface)
      // 对象严格按照 接口 字段进行遍历匹配
      keys.forEach(key => {
        return this._implement(json[key], _interface[key], errorPath + '.' + key)
      })
    }
    if (getValueType(_interface).type === 'array') {
      if (_interface.length === 1) {
        // 接口 数组长度为 1 则实现数据的数组则每一项按照接口第 0 项匹配
        json.forEach((item, index) => {
          this._implement(item, _interface[0], errorPath + '.' + index)
        })
      } else {
        // 否则严格按照接口的 每一项 进行遍历匹配 、 实现数组的长度超过接口长度则进行忽略
        _interface.forEach((item, index) => {
          this._implement(json[index], _interface[index], errorPath + '.' + index)
        })
      }
    }
  }
}
