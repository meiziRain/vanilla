#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# git

git add .

git commit -m 'home页layer, 全局黑夜模式亮度filter: brightness(0.7);'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push gitee master

git push github master