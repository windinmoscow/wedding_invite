// Приём ответов анкеты в Google Таблицу.
// Вставьте в: Таблица → Расширения → Apps Script, затем «Начать развертывание» → «Веб-приложение»
// (Выполнять как: Я; Доступ: Все). Полученный URL вставьте в index.html → const RSVP_URL = '...'.

const HEADERS = ['Дата ответа', 'ID гостя', 'Вариант', 'Имя', 'Присутствие', 'Алкоголь', 'Напитки', 'Песня', 'Аллергия'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  const p = e.parameter;
  sheet.appendRow([new Date(), p.guest_id, p.variant, p.name, p.attend, p.alcohol, p.drinks, p.song, p.allergy]);
  return ContentService.createTextOutput('ok');
}
