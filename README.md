# Promtagram Landing

## Production

- **Production URL:** <https://promtagram.ru>
- **Backup GitHub Pages URL:** <https://pdrvstv.github.io/promtagram-landing/>
- **Positioning:** Promtagram — Лаборатория господдержки с ИИ.
 - **Current version:** `PUBLISHED_PR_V2_0_WHITE_REVIEW`

## Product focus

Promtagram — Ии‑лаборатория господдержки.  В версии v2.0 полностью переосмыслен
интерфейс: белый премиальный фон, Apple‑like композиция, минимум визуального
шума, большие продуктовые экраны, лёгкие карточки и много воздуха.  Первый
экран включает форму сбора данных и демонстрацию AI‑сканирования.  Сервис
предоставляет предварительную оценку мер поддержки, карту мер, маршрут
документов и проверку рисков для бизнеса.  Решение о предоставлении поддержки
принимает оператор программы.

## Stack

- Статический `index.html`
 - Статический `styles.css` – дизайн‑система на CSS‑переменных, белый фон,
  премиальные карточки, абстрактный рельеф без официальных символов
 - Минимальный `script.js` – плавная прокрутка, обработка кликов якорей и
  открытие полной формы заявки
- GitHub Pages деплой из корня репозитория

## Form URLs (must stay unchanged)

- **Public:** <https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform>
- **Embedded:** <https://docs.google.com/forms/d/e/1FAIpQLSdtvGqW4_buAn8EuVJVZmmUzlLziiUUR0Uc6cUfD08jxf19Og/viewform?embedded=true>

## SEO baseline

- Сохраняйте canonical, robots meta, Open Graph и Twitter Card.
- Поддерживайте JSON‑LD блоки `Organization`, `WebSite`, `Service` и `FAQPage`.
- Не удаляйте ссылки на SEO‑кластеры: `/frp/`, `/msp/`, `/subsidies/`,
  `/export/`, `/leasing/`, `/apk/`, `/automation/`.
- Не меняйте `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest`,
  `CNAME` или верификационные HTML‑файлы.

## QA checklist before merge

1. Изменены только разрешённые файлы (`index.html`, `styles.css`, `script.js`,
   `README.md`, `AGENTS.md`, файлы в `docs/`).
2. Hero имеет полноширинный заголовок и две равновысокие карточки; iframe
   отсутствует.
3. Bottom lead‑секция содержит встроенную форму и fallback‑кнопку.
4. URL Google Form остаётся неизменным.
5. FAQ показывает 5 вопросов и соответствует JSON‑LD FAQPage.
6. Отсутствуют обещания гарантированного одобрения, гербы и официальные логотипы.
7. Ссылки на SEO‑кластеры присутствуют и работают.
8. Нет горизонтальной прокрутки на мобильных устройствах.
9. `script.js` не внедряет основной интерфейс, а только улучшает поведение.

## Status rule

Статус PR может быть помечен как `READY` **только** после визуальной проверки
и тестовой отправки лида в CRM.