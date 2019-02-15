export class SimplePromise{
  constructor(handler){
    this._status = "PENDING"
    handler(this._resolve.bind(this), this._reject.bind(this))//参数函数的作用域指向Class
  }

  _resolve(){}
  _reject(){}
}