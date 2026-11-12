// Список гостей. Ссылка на приглашение: https://wedding-misha-sasha.ru/?g=<ключ>
//   greet — обращение в начале приглашения
//   name  — как подписать анкету
//   to    — надпись на конверте «Для …»
//   zags  — true: зовём в ЗАГС + ресторан, false: сразу в ресторан
window.GUESTS = {
  // Семья — ЗАГС + ресторан
  "anna-aleksey":  { greet: "Дорогие родители!", name: "Анна и Алексей", to: "родителей", zags: true },
  "liliya":        { greet: "Дорогая мама!", name: "Лилия", to: "мамы", zags: true },
  "av-mv":         { greet: "Дорогие бабушка и дедушка!", name: "Мария Васильевна и Александр Викторович", to: "бабушки и дедушки", zags: true },
  "roma":          { greet: "Дорогой Рома!", name: "Рома", to: "Ромы", zags: true },
  "vova":          { greet: "Дорогой Вова!", name: "Вова", to: "Вовы", zags: true },

  // Гости родителей — сразу в ресторан
  "maryana":       { greet: "Дорогая Марьяна!", name: "Марьяна", to: "Марьяны", zags: false },
  "anastasia":     { greet: "Дорогая Анастасия!", name: "Анастасия", to: "Анастасии", zags: false },
  "marina-sasha":  { greet: "Дорогие Марина и Саша!", name: "Марина и Саша", to: "Марины и Саши", zags: false },
  "anna-gennadiy": { greet: "Дорогие Анна и Геннадий!", name: "Анна и Геннадий", to: "Анны и Геннадия", zags: false },
  "tatyana":       { greet: "Дорогая Таня!", name: "Таня", to: "Тани", zags: false },

  // Друзья — ЗАГС + ресторан
  "alisa":         { greet: "Дорогая Алиса!", name: "Алиса", to: "Алисы", zags: true },
  "ira":           { greet: "Дорогая Ира!", name: "Ира", to: "Иры", zags: true },
  "nastya":        { greet: "Дорогая Настя!", name: "Настя", to: "Насти", zags: true },
  "vika":          { greet: "Дорогая Вика!", name: "Вика", to: "Вики", zags: true },
  "alina":         { greet: "Дорогая Алина!", name: "Алина", to: "Алины", zags: true },
  "sasha":         { greet: "Дорогая Саша!", name: "Саша", to: "Саши", zags: true },
  "polina-ilya":   { greet: "Дорогие Полина и Илья!", name: "Полина и Илья", to: "Полины и Ильи", zags: true },
  "lachin-polina": { greet: "Дорогие Полина и Лачин!", name: "Полина и Лачин", to: "Полины и Лачина", zags: true },
  "egor-anya":     { greet: "Дорогие Аня и Егор!", name: "Аня и Егор", to: "Ани и Егора", zags: true },
  "artem-adel":    { greet: "Дорогие Аделия и Артём!", name: "Аделия и Артём", to: "Аделии и Артёма", zags: true },
  "feliks-marina": { greet: "Дорогие Марина и Феликс!", name: "Марина и Феликс", to: "Марины и Феликса", zags: true },

  // Ещё 4 гостя — имена пока не известны
};
