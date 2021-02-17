#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# git

git add .

git commit -m '整理了图片'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push gitee master

git push github master