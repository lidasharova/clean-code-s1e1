'use strict';

module.exports = {
  // Добавим описание на русском языке ко всем типам
  types: [
    {
      value: 'build',
      name: 'build:     Сборка проекта или изменения внешних зависимостей',
    },
    { value: 'init', name: 'init:       Начало проекта/таска' },
    {
      value: 'feat',
      name: 'feat:        Добавление нового функционала из технического задания',
    },
    { value: 'fix', name: 'fix:         Исправление ошибок' },
    {
      value: 'refactor',
      name: 'refactor:    Новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности.\n',
    },
    { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
    { value: 'docs', name: 'docs:     Обновление документации/README проекта' },
    ,
    {
      value: 'perf',
      name: 'perf:      Изменения направленные на улучшение производительности',
    },
    { value: 'revert', name: 'revert:    Откат на предыдущие коммиты' },
    {
      value: 'style',
      name: 'style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
    },
    { value: 'test', name: 'test:      Добавление тестов' },
  ],

  // Правило по которому прошел рефакторинг.
  scopes: [
    { name: 'basic-1.1' },
    { name: 'basic-1.2' },
    { name: 'basic-1.3' },
    { name: 'basic-2.1' },
    { name: 'basic-2.2' },
    { name: 'basic-2.3' },
    { name: 'basic-2.4' },
    { name: 'basic-2.5' },
    { name: 'basic-3.1' },
    { name: 'basic-3.2' },
    { name: 'basic-3.3' },
    { name: 'basic-3.4' },
    { name: 'basic-3.5' },
    { name: 'basic-3.6' },
    { name: 'basic-3.7' },
    { name: 'basic-3.8' },
    { name: 'extended-1.1' },
    { name: 'extended-1.2' },
    { name: 'extended-2.1' },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */



  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите правило рефакторинга:',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свое правило по которому был рефакторинг:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА ДАННЫЕ:',

  // limit subject length
  subjectLimit: 72,
};
