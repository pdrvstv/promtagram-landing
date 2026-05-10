# SEO QA Checklist — promtagram.ru

## Статус

`PRE_INDEX_SEO_HARDENING_APPLIED`

## Проверочные URL

- https://promtagram.ru/
- https://promtagram.ru/robots.txt
- https://promtagram.ru/sitemap.xml
- https://promtagram.ru/assets/og-cover.svg
- https://promtagram.ru/site.webmanifest
- https://promtagram.ru/404.html

## Technical SEO

- [ ] `https://promtagram.ru/` открывается с HTTPS.
- [ ] `http://promtagram.ru/` редиректит на HTTPS.
- [ ] canonical указывает на `https://promtagram.ru/`.
- [ ] `robots.txt` доступен.
- [ ] `sitemap.xml` доступен.
- [ ] `robots` meta: `index, follow, max-image-preview:large`.
- [ ] `404.html` доступна и брендирована.
- [ ] `site.webmanifest` доступен.

## Metadata

- [ ] Title содержит Promtagram и основной интент.
- [ ] Meta description содержит господдержку, скоринг, карту мер, документы, риски.
- [ ] Open Graph title заполнен.
- [ ] Open Graph description заполнен.
- [ ] Open Graph image доступна.
- [ ] Twitter Card metadata заполнена.

## Structured data

- [ ] JSON-LD валиден.
- [ ] `Organization` присутствует.
- [ ] `WebSite` присутствует.
- [ ] `Service` присутствует.
- [ ] `FAQPage` присутствует.

## Content SEO

- [ ] На странице есть H1.
- [ ] H1 один.
- [ ] H2 логично разбивают страницу.
- [ ] FAQ-секция присутствует.
- [ ] Тексты содержат безопасные поисковые кластеры.
- [ ] Нет keyword stuffing.

## Risk QA

Запрещённые формулировки не должны встречаться:

- [ ] гарантируем получение господдержки
- [ ] 100% одобрение
- [ ] получим деньги от государства
- [ ] одобрим займ
- [ ] точно получите субсидию
- [ ] безотказное финансирование
- [ ] гарантированный результат

Разрешённые рамки:

- предварительная оценка;
- скоринг применимости;
- карта возможных мер;
- маршрут документов;
- проверка рисков;
- решение принимает оператор программы.

## UX / Accessibility

- [ ] Меню скроллит к секциям.
- [ ] CTA ведут к форме.
- [ ] Кнопка открытия формы в отдельной вкладке работает.
- [ ] `skip-link` работает с клавиатуры.
- [ ] `details/summary` в FAQ раскрываются.
- [ ] Focus-visible виден.
- [ ] На мобильном нет горизонтального скролла.

## Search Console / Яндекс

- [ ] Google Search Console подключён.
- [ ] Sitemap отправлен в Google Search Console.
- [ ] Главная страница отправлена на индексацию.
- [ ] Яндекс Вебмастер подключён.
- [ ] Sitemap отправлен в Яндекс Вебмастер.

## READY gate

`READY_PUBLIC_LANDING` ставится только после:

- визуального QA;
- технического SEO QA;
- подтверждения тестовой заявки в CRM;
- отправки sitemap в Google Search Console и Яндекс Вебмастер.
