import { Context } from 'egg';

// 这里是你自定义的中间件
export default function checkUser(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log(ctx.request);
    const authorization: any = ctx.request.header.authorization;
    if (authorization) {
      const token = authorization.split(' ')[1];
      let decoded;
      try {
        decoded = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
        ctx.session.user = decoded.user_id;
        console.log(decoded);
      } catch (error) {
        ctx.throw(401, '用户登录信息失效');
      }
    } else {
      ctx.throw(401, '用户未登录');
    }
    await next();
  };
}
