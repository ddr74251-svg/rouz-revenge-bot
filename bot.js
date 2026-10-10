const { Telegraf, Markup } = require('telegraf');

// Токен подставлен напрямую вместо process.env.BOT_TOKEN
const token = '8915309564:AAEqBy7mq7t_vo0rP_L5fTT9i80cIfJDfpg';

if (!token) {
  console.error('Добавь BOT_TOKEN в настройках Render');
  process.exit(1);
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  return ctx.reply(
    '👑 ROUZ REVENGE\n\nДобро пожаловать на форум семьи!',
    Markup.inlineKeyboard([
      [Markup.button.callback('📜 Правила', 'rules')],
      [Markup.button.callback('👥 Состав семьи', 'members')],
      [Markup.button.callback('📝 Вступить в семью', 'apply')],
      [Markup.button.callback('🏆 Ранги', 'ranks')],
      [Markup.button.callback('📢 Новости', 'news')]
    ])
  );
});

bot.action('rules', (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    '📜 ПРАВИЛА СЕМЬИ\n\n' +
    '1. Уважай участников.\n' +
    '2. Соблюдай правила проекта.\n' +
    '3. Не провоцируй конфликты.\n' +
    '4. Соблюдай решения руководства.'
  );
});

bot.action('members', (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply('👥 СОСТАВ СЕМЬИ\n\nСкоро здесь появится список участников.');
});

bot.action('apply', (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    '📝 ЗАЯВКА В ROUZ REVENGE\n\n' +
    'Напиши свой игровой ник, опыт игры и причину вступления.'
  );
});

bot.action('ranks', (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    '🏆 РАНГИ СЕМЬИ\n\n' +
    '1. Новичок\n2. Участник\n3. Проверенный\n' +
    '4. Заместитель\n5. Основатель'
  );
});

bot.action('news', (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply('📢 НОВОСТИ СЕМЬИ\n\nПока новостей нет.');
});

bot.catch((err) => console.error('Ошибка:', err.message));

bot.launch()
  .then(() => console.log('ROUZ REVENGE запущен!'))
  .catch((err) => console.error('Ошибка запуска:', err.message));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
