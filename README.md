# webt-log

#### Использование:
```javascript
log($text, $type);
```

#### Типы логов:
Ошибка = 'error'
Предупреждение = 'warning'
Успех = 'success'
Обычный вывод = 'default'

#### Примеры:
```javascript
log('Функция выполнена успешно!', 'success'); // Output: [SUCCESS] Функция выполнена успешно!
log('Функция не выполнена!', 'error'); // Output: [ERROR] Функция не выполнена!
```
