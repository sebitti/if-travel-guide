#!/usr/bin/env sh

# зупинити публікацію при помилках
set -e

# сборка
yarn build

# перехід в каталог збірки
cd dist

# якщо ви публікуєте на призначений для користувача домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# якщо ви публікуєте за адресою https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# якщо ви публікуєте за адресою https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
