// Список гостей. Ссылка на приглашение: https://windinmoscow.github.io/wedding_invite/?g=<ключ>
//   greet — обращение в начале приглашения
//   name  — как подписать анкету
//   to    — надпись на конверте «Для …»
//   zags  — true: зовём в ЗАГС + ресторан, false: сразу в ресторан
window.GUESTS = {
  // Родители — ЗАГС + ресторан
  "anna-aleksey":  { greet: "Дорогие Анна и Алексей!", name: "Анна и Алексей", to: "Анны и Алексея", zags: true },
  "av-mv":         { greet: "Дорогие Александр Викторович и Мария Васильевна!", name: "Александр Викторович и Мария Васильевна", to: "Александра Викторовича и Марии Васильевны", zags: true },
  "roma":          { greet: "Дорогой Рома!", name: "Рома", to: "Ромы", zags: true },
  "vova":          { greet: "Дорогой Вова!", name: "Вова", to: "Вовы", zags: true },
  "liliya":        { greet: "Дорогая Лилия!", name: "Лилия", to: "Лилии", zags: true },

  // Гости родителей — сразу в ресторан
  "maryana":       { greet: "Дорогая Марьяна!", name: "Марьяна", to: "Марьяны", zags: false },
  "anastasia":     { greet: "Дорогая Анастасия!", name: "Анастасия", to: "Анастасии", zags: false },
  "marina-r":      { greet: "Дорогая Марина!", name: "Марина", to: "Марины", zags: false },
  "sasha-r":       { greet: "Дорогой Саша!", name: "Саша", to: "Саши", zags: false },
  "gennadiy":      { greet: "Дорогой Геннадий!", name: "Геннадий", to: "Геннадия", zags: false },
  "anna-r":        { greet: "Дорогая Анна!", name: "Анна", to: "Анны", zags: false },
  "tatyana":       { greet: "Дорогая Татьяна!", name: "Татьяна", to: "Татьяны", zags: false },

  // Девочки / ССт — ЗАГС + ресторан
  "alisa":         { greet: "Дорогая Алиса!", name: "Алиса", to: "Алисы", zags: true },
  "ira":           { greet: "Дорогая Ира!", name: "Ира", to: "Иры", zags: true },
  "nastya":        { greet: "Дорогая Настя!", name: "Настя", to: "Насти", zags: true },
  "alina":         { greet: "Дорогая Алина!", name: "Алина", to: "Алины", zags: true },
  "sasha":         { greet: "Дорогая Саша!", name: "Саша", to: "Саши", zags: true },
  "vika":          { greet: "Дорогая Вика!", name: "Вика", to: "Вики", zags: true },
  "ilya":          { greet: "Дорогой Илья!", name: "Илья", to: "Ильи", zags: true },
  "polina":        { greet: "Дорогая Полина!", name: "Полина", to: "Полины", zags: true },

  // Пацаны — ЗАГС + ресторан
  "lachin-polina": { greet: "Дорогие Лачин и Полина!", name: "Лачин и Полина", to: "Лачина и Полины", zags: true },
  "egor-anya":     { greet: "Дорогие Егор и Аня!", name: "Егор и Аня", to: "Егора и Ани", zags: true },
  "artem-adel":    { greet: "Дорогие Артём и Адель!", name: "Артём и Адель", to: "Артёма и Адель", zags: true },
  "feliks-marina": { greet: "Дорогие Феликс и Марина!", name: "Феликс и Марина", to: "Феликса и Марины", zags: true },
};
