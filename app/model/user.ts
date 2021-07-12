// import moment from 'moment';
import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';
export default (app: Application) => {
  const sequelize = app.model;
  const User = sequelize.define('user', {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(20),
      allowNull: false,
    },
    create_time: {
      type: DATE,
      allowNull: false,
    },
    update_time: {
      type: DATE,
      allowNull: false,
    },
  });
  return User;
};
