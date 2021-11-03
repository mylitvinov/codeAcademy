git init
Слово init означает инициализировать . Команда устанавливает все инструменты, необходимые Git для отслеживания изменений, внесенных в проект.

***************************************************************************************

Working Directory : где вы будете делать всю работу: создание, редактирование, удаление и организации файлов

Промежуточная область : где вы будете перечислять изменения, внесенные в рабочий каталог

Repository : где Git постоянно сохраняет эти изменения как различные версии проекта


***************************************************************************************

По мере написания сценария вы будете изменять содержимое рабочего каталога. Вы можете проверить статус этих изменений с помощью:

git status

***************************************************************************************
Чтобы Git начал отслеживать file-1.txt , файл необходимо добавить в область подготовки.

Мы можем добавить файл в область подготовки с помощью:

git add filename

***************************************************************************************

git commit
Совершить последний шаг в нашем рабочем процессе Git. Коммит постоянно сохраняет изменения из промежуточной области внутри репозитория.

git commitэто команда, которую мы сделаем следующей. Однако для фиксации требуется еще один фрагмент кода: параметр, -m за которым следует сообщение. Вот пример:

git commit -m "Complete first line of dialogue"
Стандартные соглашения для сообщений о фиксации:

Должен быть в кавычках
Написано в настоящем времени
Должен быть кратким (50 символов или меньше) при использовании -m


***************************************************************************************

Часто с Git вам нужно вернуться к более ранней версии проекта. Коммиты хранятся в репозитории в хронологическом порядке и могут быть просмотрены с помощью:

git log


***************************************************************************************

Git - это стандартная система управления версиями для веб-разработчиков.
Используйте команды Git, чтобы отслеживать изменения, внесенные в проект:
git init создает новый репозиторий Git
git status проверяет содержимое рабочего каталога и промежуточной области
git add добавляет файлы из рабочего каталога в область подготовки
git diff показывает разницу между рабочим каталогом и промежуточной областью
git commit постоянно сохраняет изменения файлов из промежуточной области в репозитории
git log показывает список всех предыдущих коммитов