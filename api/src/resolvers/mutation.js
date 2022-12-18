const mongoose = require('mongoose');
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
  newNote: async (parent, args, { models, user }) => {
    if (!user) {
      throw new AuthenticationError('You must be signed in to create a note');
    }
    return await models.Note.create({
      content: args.content,
      author: mongoose.Types.ObjectId(user.id)
    });
  },
  updateNote: async (parent, { content, id }, { models, user }) => {
    if (!user) {
      throw new AuthenticationError('You must be signed in to delete a note');
    }
    const note = await models.Note.findById(id);
    if (note && String(note.author) !== user.id) {
      // Если владелец заметки и текущий пользователь не совпадают,
      // выбрасываем запрет на действие
      throw new ForbiddenError("You dom't have permission to update the note");
    }
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
  deleteNote: async (parent, { id }, { models, user }) => {
    if (!user) {
      throw new AuthenticationError('You must be signed in to delete a note');
    }
    const note = await models.Note.findById(id);
    if (note && String(note.author) !== user.id) {
      // Если владелец заметки и текущий пользователь не совпадают,
      // выбрасываем запрет на действие
      throw new ForbiddenError("You dom't have permission to delete the note");
    }
    try {
      //await models.Note.findOneAndRemove({ _id: id });
      await note.remove();
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
