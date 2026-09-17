# SOP — Mobile Hero Clean v9

Дата: 17.09.2026
Статус: READY после merge.
Контур: 12_SOP / сайт Promtagram.

## Проблема
После Hero Responsive v8 мобильный декоративный слой использовал `/assets/hero-approved-reference-v7.webp`. Этот файл уже содержит desktop-интерфейс: логотип, навигацию, заголовок и CTA. В результате внутри mobile hero визуально появлялась уменьшенная копия desktop-обложки.

## Решение
- Desktop v8 не изменяется.
- На mobile декоративный `::before` переключён на чистый исходный фон `/assets/theme-production.webp`, который не содержит интерфейсного текста.
- Усилен верхний fade, чтобы декоративный слой не конкурировал с текстом и CTA.
- Для коротких экранов сохранён отдельный breakpoint.

## Риск
Низкий: override действует только при `max-width:800px` и только на псевдоэлементы первого экрана.

## Rollback
Удалить подключение `/assets/hero-mobile-clean-v9.css` из `index.html` и удалить файл `assets/hero-mobile-clean-v9.css`.
