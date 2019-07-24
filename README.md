# Шаблон ReactJS Frontend

## Для работы используется менеджер пакетов yarn

## Для полного развертывания необходимо:
1. Слить проект
1. Скопировать скрипт `pre-commit` из корня проекта в папку `.git/hooks/`
1. Выполнить команду `sudo chmod +x .git/hooks/pre-commit` из корня проекта, чтобы `pre-commit` стал исполняемым
1. Установить библиотеки командой `yarn install`
1. Запустить проект командой `yarn start`

## Дополнительные команды:
1. yarn build - сборка проекта
1. yarn lint - проверка валидности кода

## Структура проекта
1. `src/components`
В папке должны лежать глупые компоненты. Вся логика которых заключается в валидации данных и перемещении данных исключительно в рамках этого компонента.
1. `src/containers`
Папка с умными компонентами. Являются оберткой над глупыми компонентами и отвечают за взаимодействие со стором и инициализацией запросов.
1. `src/helpers`
Папка со всеми вспомогательными функциями, такими как билдер запросов, кодирование паролей и прочие специальные функции.
1. `src/modules`
Папка отвечающая за store приложения. В `index.tsx` в корне папке происходит сборка всех `reducers` и `sagas`. Каждая папка внутри - отдельный модуль для работы с конкретной группой объектов, т.е. к примеру auth, users, errors. В основном все запросы идут на бэкэнд системы, однако тут также осуществляется взаимодействие, которое ограничено исключительно frontend частью
1. `src/pages`
Папка с обертками на умные компоненты. По сути отвечает за группировку умных компонент.
1. `src/App.tsx`
Файл отвечает за подключение стора, роутинг, также здесь подключаются различные общие компоненты
