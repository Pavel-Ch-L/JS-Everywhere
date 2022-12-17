const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  AuthenticationError,
  ForbiddenError
} = require('apollo-server-express');
require('dotenv').config({ path: __dirname + './../.env' });
const gravatar = require('../util/gravatar');

//  Предоставим функцию распознаватель для полей схемы
module.exports = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    });
  },
  updateNote: async (parent, { content, id }, { models }) => {
    return await models.Note.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          content
        }
      },
      {
        new: true
      }
    );
  },
  deleteNote: async (parent, { id }, { models }) => {
    try {
      await models.Note.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  signUp: async (parent, { username, email, password }, { models }) => {
    // Нормализуем email
    email = email.trim().toLowerCase();
    // Хэшируем пароль
    const hashed = await bcrypt.hash(password, 10);
    // Создаем url gravatar-изображение
    const avatar = gravatar(email);

    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed
      });
      // Создаем и возвращаем jwt web token
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      // Ошибка при регистрации
      throw new Error('Error creating accaunt');
    }
  },
  signIn: async (parent, { username, email, password }, { models }) => {
    email = email.trim().toLowerCase();
    const user = await models.User.findOne({
      $or: [{ email }, { username }]
    });
    // Если пользователь не найден
    if (!user) {
      throw new AuthenticationError('Error sign in');
    }
    // Если пароли не совпадают
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new AuthenticationError('Error sign in');
    }
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  }
};
