#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init

git add -A
 
git commit -m '版本发布测试10.3'

git push -f https://gitee.com/wFeia/comxxx.git master:Blog

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

rm -rf docs/.vitepress/dist
 
rm -rf docs/node_modules