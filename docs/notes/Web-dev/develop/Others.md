---
title: Others
author:
createTime: 2024/05/31 18:45:38
permalink: /notes/Web-dev/develop/ea78n5is/
---

## 开源库

JavaScript 的框架语法对比
https://component-party.jason-liang.com/

前端文件预览
https://github.com/501351981/vue-office?mode=light

## Git

- **feat**: 新功能（feature）
- **fix**: 修复问题（bug fix）
- **docs**: 文档修改
- **style**: 代码样式修改（不影响代码含义的变化，比如空格、格式化等）
- **refactor**: 代码重构
- **perf**: 性能优化
- **test**: 测试相关的修改
- **chore**: 构建过程或辅助工具的修改

##### github 443

###### 使用 clash 配置时代理端口号

git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

git config --global --unset http.proxy
git config --global --unset https.proxy

## VsCode 快捷键

| 打开终端                                     | Ctrl + ~              |
| -------------------------------------------- | --------------------- |
| **新开 vscode**                              | **Ctrl + Shift + N**  |
| **关闭当前窗口**                             | **Ctrl + W**          |
| **关闭 vscode**                              | **Ctrl + Shift + W**  |
| **向上或向下复制一行**                       | **Shift + Alt+ Up**   |
| **回退上一步光标操作**                       | **Ctrl +U**           |
| **多行编辑**                                 | **Alt + Shift +鼠标** |
| **下一个匹配的也被选中**                     | **Ctrl +D**           |
| **移动到定义处**                             | **F12**               |
| **移动到行首**                               | **Home**              |
| **移动到行尾**                               | **End**               |
| **切换主题**                                 | **Ctrl +K Ctrl +T**   |
| 打开 VS Code 搜索栏                          | Ctrl +P               |
| 包装所选代码（添加`''`、`{}`、`[]`、`""`等） | shift + { [ ` '       |
| 选中当前单词                                 | **Ctrl +D**           |
|                                              |                       |

## Typora 快捷键

| 标题         | Ctrl + 1                            |
| ------------ | ----------------------------------- |
| **粗体**     | **Ctrl + B**                        |
| **斜体**     | **Ctrl + I**                        |
| **表格**     | **Ctrl + T**                        |
| **代码块**   | **``` + 回车** Ctrl + Shift + K\*\* |
| **引用**     | **> + 空格 Ctrl + Shift + Q**       |
| **无序列表** | **- + 空格 或 \* + 空格**           |
| **有序列表** | **1 + . + 空格**                    |
| 选中一行     | Ctrl + L                            |
| 分割线       | --- + 空格                          |
| 表格插入行   | Ctrl + Enter                        |

```

```

## 文件命名规范

### 文件命名规范

1. **文件名小写，用连字符分隔**
   - 例如：`user-profile.js`，`main-header.css`，`app-component.jsx`
2. **组件文件**
   - 使用大驼峰命名法（PascalCase），通常每个组件一个文件
   - 例如：`UserProfile.js`，`MainHeader.jsx`
3. **样式文件**
   - 通常使用连字符分隔的小写字母
   - 例如：`user-profile.css`，`main-header.scss`
4. **测试文件**
   - 通常与被测试文件同名，并加上 `.test` 或 `.spec`
   - 例如：`user-profile.test.js`，`main-header.spec.jsx`

### 函数命名规范

1. **小驼峰命名法（camelCase）**
   - 函数名应当描述其功能或用途
   - 例如：`fetchUserData`，`handleButtonClick`
2. **事件处理函数**
   - 通常以 `handle` 或 `on` 开头
   - 例如：`handleClick`，`onSubmit`
3. **通用函数**
   - 动词开头，描述具体操作
   - 例如：`calculateTotal`，`renderComponent`

### 变量命名规范

1. **小驼峰命名法（camelCase）**
   - 变量名应当描述其内容或用途
   - 例如：`userName`，`totalPrice`
2. **常量**
   - 使用全大写字母和下划线分隔
   - 例如：`MAX_LIMIT`，`API_KEY`
3. **布尔变量**
   - 以 `is`，`has`，`can` 开头，确保语义清晰
   - 例如：`isActive`，`hasPermission`，`canEdit`

# **前端命名**

### 常见 class 关键词：

- 布局类：header, footer, container, main, content, aside, page, section
- 包裹类：wrap, inner
- 区块类：region, block, box
- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
- 列表类：list, item, field
- 主次类：primary, secondary, sub, minor
- 大小类：s, m, l, xl, large, small
- 状态类：active, current, checked, hover, fail, success, warn, error, on, off
- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
- 星级类：rate, star
- 分割类：group, seperate, divider
- 等分类：full, half, third, quarter
- 表格类：table, tr, td, cell, row
- 图片类：img, thumbnail, original, album, gallery
- 语言类：cn, en
- 论坛类：forum, bbs, topic, post
- 方向类：up, down, left, right
- 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading...

| 单词       | 缩写 |
| ---------- | ---- |
| bottom     | btm  |
| button     | btn  |
| background | bg   |
| content    | cont |
| check      | chk  |
| current    | curr |
| delete     | del  |
| text       | txt  |
| disabled   | dis  |
| foot       | ft   |
| head       | hd   |
| hidden     | hide |
| input      | inp  |
| image      | img  |
| index      | idx  |
| message    | msg  |
| password   | pwd  |
| previous   | prev |
| radio      | rad  |
| register   | reg  |
| select     | sel  |
| tbody      | tbd  |
| thead      | thd  |
| tfoot      | tft  |
| wrap       | wp   |
