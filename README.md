# Чат с контактами (React.js)
Приложение, которое отображает список чатов с контактами, а также мессенджер с ними (без серверной части) с сохранением сообщений в localStorage. Часть контактов автоматически будут открыты, большинство из них нужно добавить на "+" слева сверху. 

Информация о пользователях находится в ./src/App.js:
• chats (Заранее подготовленные открытые чаты)
• contacts (Контакты с которыми можно открыть чат и добавить их в чат-меню)
• defaultMessages (Массив со стандартными сообщениями, который будет передан пользователю если в localStorage его нет)

Выполненные цели и задачи:
1) Список чатов.
 - Содержит список сохраненных чатов отсортированных по дате получения\отправки сообщения.
 - Текущий выбранный чат выделяется фоном отличным от других (по умолчанию выделяется первый в списке).
 - При отправке сообщения, чат поднимается на первое место в списке.
 - В чат меню у каждого чата отображается последнее отправленное сообщение с датой (до 13 символов).
2) Создание чата.
 - По клику на иконку + в шапке списка чатов открывается модальное окно со списком предустановленных контактов (13 шт.).
 - Клик по контакту создает либо новый чат, либо выбирает уже существующий (с выбранным контактом).
 - При создании чата, он сохраняется локально. (Сохраняется до перезагрузки страницы, т.е. без localStorage)
3) История переписки.
 - При создании нового чата, содержит предустановленные сообщения (входящее\исходящее).
 - Содержит сообщения с выбранным контактом из списка чатов.
 - Список отсортирован по дате получения сообщения снизу вверх (в самом низу отображается последнее полученное сообщение от контакта).
4) Получение и отправка сообщений. 
 - История сообщений сохраняется локально (localStorage).
 - Отправленное сообщение появляется в истории переписки и сохраняется локально.

## Установка (Linux)
ВАЖНО: У вас должны быть установлены [зависимости проекта](https://github.com/dians1s/Chat-React.js-#зависимости)
1. Необходимо склонировать репозиторий

```git clone https://github.com/dians1s/Chat-React.js-.git```

2. Переход в директорию 'Chat-React.js-'

```cd Chat-React.js-```

3. Можете запускать проект

```npm run start```

## Поддержка
Если у вас возникли какие-либо проблемы или вопросы по использованию, создайте [обсуждение](https://github.com/dians1s/Chat-React.js-/issues/new/choose) в данном репозитории или напишите на электронную почту <danis11255@gmail.com>.

## Зависимости
Запускалось и разрабатывалось на React 18.3.1 (С использованием react-icons: 5.2.1, react-modal: 3.16.1). Если вы заметили, что данное ПО можно запустить на версии ниже, или он не работает на какой-либо версии, то напишите в [поддержку](https://github.com/dians1s/Chat-React.js-#поддержка)