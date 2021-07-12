// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheckUser from '../../../app/middleware/checkUser';
import ExportErrorHandle from '../../../app/middleware/errorHandle';

declare module 'egg' {
  interface IMiddleware {
    checkUser: typeof ExportCheckUser;
    errorHandle: typeof ExportErrorHandle;
  }
}
