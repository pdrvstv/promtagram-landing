# Promtagram Landing

## Production

- **Production URL:** <https://promtagram.ru>
- **Backup GitHub Pages URL:** <https://pdrvstv.github.io/promtagram-landing/>
- **Positioning:** Promtagram — Лаборатория господдержки с ИИ.
- **Current version:** `PUBLISHED_PR_V0_6_REVIEW`

## Product focus

Предварительный скоринг мер господдержки, карта возможных программ, маршрут
документов и проверка рисков для бизнеса.  В версии v0.6 добавлены компактный
hero, упрощённые карточки, обновлённые разделы с экономикой, контурами
поддержки, маршрутами и форматами работы.

## Stack

- Статический `index.html`
- Статический `styles.css` – дизайн‑система на CSS-переменных, сетки, тёмные и
  светлые сцены
- Минимальный `script.js` – плавная прокрутка, fallback логотипа и привязка
  формы
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