# SEO Runbook — Promtagram Landing

## Статус

`GOOGLE_SEARCH_CONSOLE_VERIFIED / GOOGLE_SITEMAP_SUBMITTED_SUCCESS / URL_INSPECTION_REQUIRED`

## Основной URL

https://promtagram.ru/

## Что уже добавлено

- `canonical` на `https://promtagram.ru/`
- `robots.txt`
- `sitemap.xml`
- Open Graph / Twitter Card metadata
- локальный `assets/og-cover.svg`
- JSON-LD structured data:
  - `Organization`
  - `WebSite`
  - `Service`
  - `FAQPage`
- `robots` meta: `index, follow, max-image-preview:large`
- SEO cluster pages:
  - `/frp/`
  - `/msp/`
  - `/subsidies/`
  - `/export/`
  - `/leasing/`
  - `/apk/`
  - `/automation/`
- homepage internal links to SEO cluster pages

## Что не трогать

- DNS TXT verification record for Google Search Console
- DNS / Reg.ru records unless required for new verification
- GitHub Pages settings
- Google Form URL
- CRM
- backend / Apps Script

## Google Search Console

Статус:

- право собственности подтверждено через провайдера доменных имён / DNS;
- sitemap отправлен в Google Search Console;
- sitemap обработан успешно;
- выявлено страниц: `8`;
- выявлено видео: `0`.

Важно: не удалять DNS TXT-запись, иначе подтверждение может перестать действовать.

Следующие шаги:

1. Открыть Google Search Console.
2. Перейти в `Проверка URL` / `URL Inspection`.
3. Проверить и запросить индексирование главной страницы:
   - `https://promtagram.ru/`
4. Затем проверить и запросить индексирование приоритетных SEO-страниц:
   - `https://promtagram.ru/frp/`
   - `https://promtagram.ru/subsidies/`
   - `https://promtagram.ru/msp/`
   - `https://promtagram.ru/automation/`
5. Остальные страницы отправлять после приоритетных:
   - `https://promtagram.ru/apk/`
   - `https://promtagram.ru/export/`
   - `https://promtagram.ru/leasing/`

## Яндекс Вебмастер

1. Открыть Яндекс Вебмастер.
2. Добавить сайт:
   - `https://promtagram.ru/`
3. Подтвердить права через DNS TXT или HTML-файл.
4. Добавить sitemap:
   - `https://promtagram.ru/sitemap.xml`
5. Запросить переобход главной страницы.

## Primary keywords

- господдержка бизнеса
- господдержка бизнеса с ИИ
- меры господдержки для бизнеса
- предварительный скоринг господдержки
- субсидии для бизнеса
- льготное финансирование бизнеса
- ФРП МСП РЭЦ поддержка
- карта мер поддержки
- маршрут документов для господдержки
- проверка рисков господдержки

## Priority URLs for indexing

1. `https://promtagram.ru/`
2. `https://promtagram.ru/frp/`
3. `https://promtagram.ru/subsidies/`
4. `https://promtagram.ru/msp/`
5. `https://promtagram.ru/automation/`
6. `https://promtagram.ru/apk/`
7. `https://promtagram.ru/export/`
8. `https://promtagram.ru/leasing/`

## Risk QA

Запрещено:

- гарантируем получение господдержки
- 100% одобрение
- получим деньги от государства
- гарантированный результат
- точно получите субсидию

Разрешено:

- предварительная оценка
- скоринг применимости
- карта возможных мер
- маршрут документов
- проверка рисков
- решение принимает оператор программы

## READY gate

SEO-контур считается отправленным в Google после:

- открытия `https://promtagram.ru/` с HTTPS;
- доступности `https://promtagram.ru/robots.txt`;
- доступности `https://promtagram.ru/sitemap.xml`;
- подтверждения сайта в Google Search Console;
- успешной отправки sitemap в Google Search Console;
- выявления 8 страниц в sitemap;
- запроса индексирования главной страницы.

Следующий внешний контур:

- подтверждение сайта в Яндекс Вебмастере;
- отправка sitemap в Яндекс Вебмастер.

Общий статус лендинга `READY_PUBLIC_LANDING` возможен только после тестовой заявки в CRM.
