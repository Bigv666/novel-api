import { Context } from 'egg';

// 这里是你自定义的中间件
export default function errorHandle(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      let error = '';
      if (status === 500 && ctx.app.config.env === 'prod') {
        error = 'Internal Server Error';
      } else {
        error = err.message;
      }
      ctx.body = {
        code: status,
        message: error,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      if (status === 404) {
        ctx.status = status;
      }
    }
  };
}
