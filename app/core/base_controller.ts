import { Controller } from 'egg';

class BaseController extends Controller {

  get user() {
    return this.ctx.session.user;
  }
  success(data, message = '操作成功') {
    this.ctx.body = {
      code: 200,
      data,
      message,
    };
  }
  error(message = '操作失败') {
    this.ctx.body = {
      code: 500,
      message,
    };
  }
  notAuth(message = '未经授权的') {
    this.ctx.body = {
      code: 403,
      message,
    };
  }
  notLogin(message = '未登录') {
    this.ctx.body = {
      code: 401,
      message,
    };
  }
  notFound(message = 'not found') {
    this.ctx.body = {
      code: 404,
      message,
    };
  }
}
module.exports = BaseController;
