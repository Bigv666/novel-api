import { Controller } from 'egg';

interface IUserInfo {
  id: number,
  name: string,
  create_time: number,
  update_time: number
}

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    // console.log('ctx.model >>', ctx.model);
    const userInfo: Array<IUserInfo> = await ctx.model.User.findAll({});
    ctx.body = userInfo;
  }
}
