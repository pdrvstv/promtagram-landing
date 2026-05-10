# SEO Runbook — Promtagram Landing

## Статус

`SEO_BASELINE_APPLIED_STATIC_V0_3`

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
- `robots` meta: `index, follow, max-image-preview:large`

## Что не трогать

- DNS / Reg.ru
- GitHub Pages settings
- Google Form URL
- CRM
- backend / Apps Script

## Google Search Console

1. Открыть Google Search Console.
2. Добавить ресурс типа `Domain`:
   - `promtagram.ru`
3. Если Google попросит TXT-запись — добавить её в DNS Reg.ru.
4. После подтверждения отправить sitemap:
   - `https://promtagram.ru/sitemap.xml`
5. В URL Inspection проверить:
   - `https://promtagram.ru/`
6. Нажать `Request indexing`.

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

SEO-база считается применённой, но не READY до:

- открытия `https://promtagram.ru/` с HTTPS;
- доступности `https://promtagram.ru/robots.txt`;
- доступности `https://promtagram.ru/sitemap.xml`;
- подтверждения сайта в Google Search Console;
- отправки sitemap;
- тестовой заявки в CRM для общего статуса лендинга.
