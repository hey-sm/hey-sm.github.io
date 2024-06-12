---
title: record
author:
createTime: 2024/05/31 18:45:38
permalink: /notes/Re-learning/develop/732df1jz/
---
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

## 输入框限制

```js
//输入值校验  只能输入两位小数
 <el-input
        v-model="input"
        style="width: 240px"
        placeholder="Please input"
        clearable
        @input="handleInput"
        @change="handleChange"
    />

const processInput = (value) => {
    const regex = /^-?\d*\.?\d{0,2}$/
    let newValue = ''
    for (let char of value) {
        if (regex.test(newValue + char)) {
            newValue += char
        }
    }
    return newValue
}

const handleInput = (value) => {
    input.value = processInput(value)
}
const handleChange = (value) => {
    input.value = Number(value)
}
```

el-input 只能输入正整数（包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\d]/g, ""); // 只能输入数字
      value = value.replace(/^0+(\d)/, "$1"); // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
      value = value.replace(/(\d{15})\d*/, '$1') // 最多保留15位整数
      this.height = value
}

```

el-input 只能输入正整数（不包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/^(0+)|[^\d]+/g,''); // 以0开头或者输入非数字，会被替换成空
      value = value.replace(/(\d{15})\d*/, '$1') // 最多保留15位整数
      this.height = value
}

```

el-input 只能输入负整数（包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\-\d]/g, ""); // 只能输入-和数字
      value = value.replace(/^[1-9]/g, ""); // 不能以1-9开头
      value = value.replace(/\-{2,}/g, "-"); // -只能保留一个
      value = value.replace(/(\d)\-/g, "$1"); // 数字后面不能接-，不能出现类似-11-2,12-，11-23
      value = value.replace(/-(0+)/g, "0"); // 不能出现-0,-001,-0001类似
      value = value.replace(/^0+(\d)/, "0"); // 第一位0开头，0后面为数字，则过滤掉，取0
      value = value.replace(/(-\d{15})\d*/, '$1') // 最多保留15位整数
      this.height = value
}

```

el-input 只能输入负整数（不包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\-\d]/g, ""); // 只能输入-和数字
      value = value.replace(/^\d/g, ""); // 不能以数字开头
      value = value.replace(/\-{2,}/g, "-"); // -只能保留一个
      value = value.replace(/(\d)\-/g, "$1"); // 数字后面不能接-，不能出现类似-11-2,12-，11-23
      value = value.replace(/(-)0+/g, "$1"); // 不能出现-0,-001,-0001类似
      value = value.replace(/(-\d{15})\d*/, '$1') // 最多保留15位整数
      this.height = value
}
```

el-input 只能输入整数（包括正整数、负整数、0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\-\d]/g, ""); // 只能输入-和数字
      value = value.replace(/\-{2,}/g, "-"); // -只能保留一个
      value = value.replace(/(\d)\-/g, "$1"); // 数字后面不能接-，不能出现类似-11-2,12-，11-23
      value = value.replace(/-(0+)/g, "0"); // 不能出现-0,-001,-0001类似
      value = value.replace(/^0+(\d)/, "$1"); // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
      value = value.replace(/(-?\d{15})\d*/, '$1') // 最多保留15位整数
      this.height = value
}

```

el-input 只能输入正小数（包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\d.]/g, '') // 只能输入数字和.
      value = value.replace(/^\./g, '')  //第一个字符不能是.
      value = value.replace(/\.{2,}/g, '.') // 不能连续输入.
      value = value.replace(/(\.\d+)\./g, '$1') // .后面不能再输入.
      value = value.replace(/^0+(\d)/, '$1') // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
      value = value.replace(/(\d{15})\d*/, '$1') // 最多保留15位整数
      value = value.replace(/(\.\d{2})\d*/, '$1')// 最多保留2位小数
      this.height = value
}

```

el-input 只能输入负小数（包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\-\d.]/g, ""); // 只能输入-和数字和.
      value = value.replace(/^[^\-0]/g, ""); // 只能-和0开头
      value = value.replace(/\-{2,}/g, "-"); // 不能连续输入-
      value = value.replace(/(-)\./g, "$1"); // -后面不能输入.
      value = value.replace(/\.{2,}/g, "."); // 不能连续输入.
      value = value.replace(/(\.\d+)\./g, "$1"); // .后面不能再输入.
      value = value.replace(/(\d+|\.)-/g, "$1"); // 数字和.后面不能接-,不能出现类似11-, 12.-
      value = value.replace(/(-)0+(\d+)/g, '$1$2') // 不能出现-01,-02类似
      value = value.replace(/^0+(\d|.)/, "0"); // 第一位0开头，0后面为数字或者.，则过滤掉，取0
      value = value.replace(/(\d{15})\d*/, '$1') // 最多保留15位整数
      value = value.replace(/(\.\d{2})\d*/, '$1')// 最多保留2位小数
      this.height = value
}

```

el-input 只能输入负小数（不包括 0）

```js
// 在 Input 值改变时触发
handleEdit(e) {
      let value = e.replace(/[^\-\d.]/g, ""); // 只能输入-和数字和.
      value = value.replace(/^[^\-]/g, ""); // 只能-开头
      value = value.replace(/\-{2,}/g, "-"); // 不能连续输入-
      value = value.replace(/(-)\./g, "$1"); // -后面不能输入.
      value = value.replace(/\.{2,}/g, "."); // 不能连续输入.
      value = value.replace(/(\.\d+)\./g, "$1"); // .后面不能再输入.
      value = value.replace(/(\d+|\.)-/g, "$1"); // 数字和.后面不能接-,不能出现类似11-, 12.-
      value = value.replace(/(-)0+(\d+)/g, '$1$2') // 不能出现-01,-02类似
      value = value.replace(/(\d{15})\d*/, '$1') // 最多保留15位整数
      value = value.replace(/(\.\d{2})\d*/, '$1')// 最多保留2位小数
      this.height = value
}
```

el-input 输入整数（包括正数、负数、0）和小数，保留 15 位整数和 2 位小数

```js
handleEdit(e) {
    let value = e.replace(/[^\d.-]/g, '') // 只能输入数字、小数点和负号
                 .replace(/^(-)\./g, '$1') // 第一个字符不能是.
                 .replace(/\.{2,}/g, '.') // 不能连续输入.
                 .replace(/(\.\d+)\./g, '$1') // .后面不能再输入.
                 .replace(/(-)\./g, '$1') // -后面不能输入.
                 .replace(/(\d+|\.)-/g, '$1') // 数字和.后面不能接-,不能出现类似11-, 12.-
                 .replace(/(-0+)(\d+)/g, '$1$2') // 不能出现-00,-001,-0001类似
                 .replace(/^0+(\d)/, '$1') // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
                 .replace(/(\d{16})\d*/, '$1') // 最多保留15位整数
                 .replace(/(\.\d{3})\d*/, '$1'); // 最多保留2位小数
    console.log(value, typeof value);
    this.height = value;
}
```

## 输入搜索 字母匹配汉字

> npm install pinyin-match --save
>
> import PinyinMatch from 'pinyin-match';

```js
<template>
  <div class="main">
    <input type="text" v-model="serchValue" placeholder="输入搜索">
    <div class="user" v-for="(user, index) in users" :key="user.no">{{ index }}# : {{ user.name }}</div>
  </div>
</template>
<script>
import userList from './data/user'
import PinyinMatch from 'pinyin-match'
let timer = null
export default {
  data() {
    return {
      serchValue: '',
      userListAll: [], // 所有数据
      users: [] // 展示的数据
    }
  },
  watch: {
    serchValue() {
      this.debounce(this.selectUser, 200)
    }
  },
  mounted(){
    this.getUserList()
  },
  methods:{
    // 模拟请求
    getUserList() {
      setTimeout(() => {
        this.userListAll = userList
        this.selectUser()
      }, 100)
    },

    // 防抖
    debounce(fn, wait) {
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.call(this)
        timer = null
      }, wait)
    },

    // 模糊查询条件
    selectUser() {
      this.users = []
      // 如果搜索框有值的话再去过滤，因为PinyinMatch.match第二个参数是空字符串的话会匹配不到，返回false，这不符合我们的预期
      // 搜索框没有值，我们要展示所有数据
      if(this.serchValue) {
        this.userListAll.forEach(user => {
          let matchIndexs = PinyinMatch.match(user.name, this.serchValue) // 如果匹配到返回 首尾的索引数组，如果匹配不到则返回false
          if(matchIndexs) {
            this.users.push(user)
          }
        })
      } else {
        this.users = this.userListAll
      }
    }
  }
}
</script>
<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  padding: 200px 0 0 200px;
  box-sizing: border-box;
}
.main input {
  margin-bottom: 5px;
}
</style>
```
