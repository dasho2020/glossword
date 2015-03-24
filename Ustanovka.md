## С локального компьютера на удаленный хостинг ##

  * Распакуйте архив `glossword-1.x.x.zip` на локальную машину. Используйте инструмент вроде [7-Zip](http://7-zip.org/) для извлечения архивных файлов.
  * Закачайте содержимое папки `/glossword/1.x` на удаленный хостинг.
  * Установите права доступа на запись для папки `/glossword/gw_temp` и нескольких вложенных папок. Это можно сделать с помощью любого FTP-клиента или командной строкой:
```
# cd /usr/local/apache/htdocs/glossword 
# chmod 0777 gw_temp
# chmod 0777 gw_temp/t
# chmod 0777 gw_temp/a
# chmod 0777 gw_temp/gw_cache_sql
# chmod 0777 gw_temp/gw_export
# chmod 0777 gw_temp/gw_logs
```

  * Установите права на запись для файла `/db_config.php`:
```
# chmod 0666 db_config.php
```
```
Содержимое папки /usr/local/apache/htdocs/glossword
Файл/Папка  Имя             Значение chmod Права доступа
*     [DIR] gw_addon        -
*     [DIR] gw_install      -
*     [DIR] gw_locale       -
*     [DIR] gw_temp         0777           drwxrwxrwx
*     [DIR] gw_xml          -
*     [DIR] img             -
*     [DIR] inc             -
*     [DIR] lib             -
*     [DIR] templates       -
*           .htaccess       -
*           favicon.ico     -
*           css.php         -
*           custom_vars.php -
*           db_config.php   0666           -rw-rw-rw-
*           gw_admin.php    -
*           gw_login.php    -
*           index.php       -
*           robots.txt      -
```

  * Теперь, если ваш сайт `domain.tld` и Glossword устанавливается в главный каталог, тогда ссылка на программу установки будет `http://domain.tld/gw_install/`.

Замечания:

  * Можно использовать и другую временную папку, но она должна быть читаема веб-сервером и должна быть дополнительно задана в файле `/inc/config.inc.php`.

  * Уровни chmod 0666 и 0777 требуются если система вашего хостера не использует другие права доступа. Например, если используется CGIWrap, который запускает PHP-скрипты под UID владельца файла, а не под UID веб-сервера, тогда установки chmod будут 0644 и 0755.

  * Если это возможно, отключите "безопасный режим" PHP (Safe mode). Glossword нуждается во временной директории для управления цветовыми схемами, аватарами, кешированными запросами к базе данных, лог-файлами и экспортированными данными.


## С локального компьютера на локальный ##

Установка Glossword на локальный компьютер с операционными системами MS Windows 2000/XP/2003:

  * Установите [Glossword-WAMP](KB2845625433rus.md).
  * Распакуйте содержимое файла `glossword-1.x.x.zip` в папку `С:\Program Files\Glossword-WAMP\htdocs`.
  * Откройте в браузере ссылку http://localhost:81/glossword/gw_install/.

Следуйте инструкциям программы установки. Она создаст все необходимые таблицы базы данных и учетную запись администратора.

Сейчас у вас должна появится возможность начать работу с Glossword.


: [eng](HowToInstall.md), [rus](Ustanovka.md), [spa](ComoInstalar.md)