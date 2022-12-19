//  Предоставим функцию распознаватель для полей схемы
module.exports = {
  notes: async (parent, args, { models }) => {
    return await models.Note.find();
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  user: async (parent, { username }, { models }) => {
    // Находим пользователя по имени
    return await models.User.findOne({ username });
  },
  users: async (parent, args, { models }) => {
    // Находим всех пользователей
    return await models.User.find({});
  },
  me: async (parent, args, { models, user }) => {
    // Находим пользователя по текущему пользовательскому контенту
    return await models.User.findById(user.id);
  }
};
