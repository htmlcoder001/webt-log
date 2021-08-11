# webt-log

### Использование:
```javascript
log($text, $type);
```

### Типы логов:
- Ошибка = 'error'
- Предупреждение = 'warning'
- Успех = 'success'
- Обычный вывод = 'default'

### Примеры:
```javascript
log('Функция выполнена успешно!', 'success'); 
```
<img src="https://webtitov.ru/apps/webt-log/webt-log__success.svg?ver=6" />

```javascript
log('Функция не выполнена!', 'error'); 
```
<img src="https://webtitov.ru/apps/webt-log/webt-log__error.svg?ver=6" />

```javascript
log('В функции не указаны параметры!', 'warning'); 
```
<img src="https://webtitov.ru/apps/webt-log/webt-log__warning.svg?ver=6" />

```javascript
log('Это стандартный лог', 'default'); 
```
<img src="https://webtitov.ru/apps/webt-log/webt-log__default.svg?ver=7" />

