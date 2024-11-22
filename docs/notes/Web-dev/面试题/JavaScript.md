## *1. JS中本地对象、内置对象、宿主对象分别是什么，有什么区别？*

在 JavaScript 中，对象可以分为三类：本地对象（Native Objects）、内置对象（Built-in Objects）和宿主对象（Host Objects）。它们之间的区别如下：

### 1. 本地对象（Native Objects）
**定义**：本地对象是由 ECMAScript 规范定义的对象，它们是 JavaScript 语言本身的一部分。这些对象在任何环境中都是可用的，无论是在浏览器、Node.js 还是其他 JavaScript 运行时中。

**示例**：
- `Object`
- `Array`
- `String`
- `Number`
- `Boolean`
- `Function`
- `Date`
- `RegExp`
- `Error`

**特点**：
- 这些对象是 JavaScript 语言的核心部分，可以在任何 JavaScript 环境中使用。
- 它们的行为和功能是由 ECMAScript 规范定义的，因此在不同的环境中表现一致。

### 2. 内置对象（Built-in Objects）
**定义**：内置对象是本地对象的一个子集，它们在 JavaScript 引擎启动时就已经存在，并且可以直接使用，无需显式创建。

**示例**：
- `Object`
- `Array`
- `String`
- `Number`
- `Boolean`
- `Function`
- `Date`
- `RegExp`
- `Error`
- `Math`
- `JSON`

**特点**：
- 内置对象是本地对象的一部分，但它们在 JavaScript 引擎启动时就已经存在。
- 这些对象通常是全局对象的属性，可以直接使用。

### 3. 宿主对象（Host Objects）
**定义**：宿主对象是由 JavaScript 运行环境（如浏览器、Node.js 等）提供的对象。它们不是由 ECMAScript 规范定义的，而是由宿主环境（即 JavaScript 运行的地方）提供的。

**示例**（浏览器环境）：
- `window`
- `document`
- `XMLHttpRequest`
- `console`

**示例**（Node.js 环境）：
- `global`
- `process`
- `require`
- `module`

**特点**：
- 宿主对象的行为和功能是由宿主环境定义的，因此它们在不同的环境中可能会有所不同。
- 宿主对象通常用于与宿主环境进行交互，例如操作 DOM、发送网络请求、访问文件系统等。

### 总结
- **本地对象**：由 ECMAScript 规范定义，在任何 JavaScript 环境中都可用。
- **内置对象**：本地对象的一个子集，在 JavaScript 引擎启动时就已经存在。
- **宿主对象**：由宿主环境提供，用于与宿主环境进行交互，行为和功能由宿主环境定义。

理解这三类对象的区别有助于更好地理解 JavaScript 的工作原理，尤其是在不同的运行环境中。

## *2. Js 中，有哪些方法可以退出循环*

在 JavaScript 中，有几种方法可以退出循环：

### 1. `break` 语句
`break` 语句用于立即退出当前循环，不再执行循环中剩余的代码。

```javascript
for (let i = 0; i < 10; i++) {
if (i === 5) {
 break; // 当 i 等于 5 时退出循环
}
console.log(i);
}
```

### 2. `continue` 语句
`continue` 语句用于跳过当前循环的剩余代码，直接进入下一次循环。

```javascript
for (let i = 0; i < 10; i++) {
if (i % 2 === 0) {
 continue; // 跳过偶数，继续下一次循环
}
console.log(i);
}
```

### 3. `return` 语句
在函数内部，`return` 语句不仅可以返回值，还可以用于退出函数，从而间接退出循环。

```javascript
function findNumber(arr, target) {
for (let i = 0; i < arr.length; i++) {
 if (arr[i] === target) {
   return i; // 找到目标值后退出函数
 }
}
return -1; // 如果没有找到目标值，返回 -1
}
```

### 4. `throw` 语句
在某些情况下，可以使用 `throw` 语句抛出一个异常，从而退出循环。通常需要结合 `try...catch` 块来处理异常。

```javascript
try {
for (let i = 0; i < 10; i++) {
 if (i === 5) {
   throw new Error('Exit loop'); // 抛出异常以退出循环
 }
 console.log(i);
}
} catch (e) {
console.error(e.message); // 捕获异常并处理
}
```

### 5. `label` 语句
`label` 语句可以与 `break` 或 `continue` 结合使用，用于退出嵌套循环。

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
 if (i === 1 && j === 1) {
   break outerLoop; // 退出外层循环
 }
 console.log(`i: ${i}, j: ${j}`);
}
}
```

### 总结
- **`break`**：立即退出当前循环。
- **`continue`**：跳过当前循环的剩余代码，进入下一次循环。
- **`return`**：在函数内部退出函数，从而间接退出循环。
- **`throw`**：抛出异常以退出循环，通常结合 `try...catch` 使用。
- **`label`**：与 `break` 或 `continue` 结合使用，用于退出嵌套循环。

这些方法可以根据具体需求选择使用，以灵活控制循环的执行流程。

## *3. var、let、const之间有什么区别？*

在 JavaScript 中，`var`、`let` 和 `const` 是用于声明变量的关键字，它们之间有一些重要的区别，主要体现在作用域、变量提升、可变性和重复声明等方面。

### 1. 作用域（Scope）

- **`var`**：
  - `var` 声明的变量具有函数作用域（function scope），这意味着它们在声明它们的函数内部是可见的，而不是在块级作用域（block scope）内。
  - 如果在函数外部使用 `var` 声明变量，它将成为全局变量。

  ```javascript
  function example() {
    if (true) {
      var x = 10;
    }
    console.log(x); // 输出 10，因为 x 在函数作用域内
  }
  ```

- **`let`** 和 **`const`**：
  - `let` 和 `const` 声明的变量具有块级作用域（block scope），这意味着它们在声明它们的块（如 `if` 语句、`for` 循环等）内部是可见的。
  - 块级作用域使得变量的作用范围更加明确和可控。

  ```javascript
  function example() {
    if (true) {
      let x = 10;
    }
    console.log(x); // 报错：ReferenceError: x is not defined
  }
  ```

### 2. 变量提升（Hoisting）

- **`var`**：
  - `var` 声明的变量会被提升到其作用域的顶部，但初始化不会被提升。这意味着你可以在声明之前访问变量，但它的值会是 `undefined`。

  ```javascript
  console.log(x); // 输出 undefined
  var x = 10;
  ```

- **`let`** 和 **`const`**：
  - `let` 和 `const` 声明的变量也会被提升，但它们不会被初始化。在声明之前访问这些变量会导致 `ReferenceError`。

  ```javascript
  console.log(x); // 报错：ReferenceError: x is not defined
  let x = 10;
  ```

### 3. 可变性（Mutability）

- **`var`** 和 **`let`**：
  - `var` 和 `let` 声明的变量是可变的，即它们的值可以被重新赋值。

  ```javascript
  var x = 10;
  x = 20; // 合法
  
  let y = 10;
  y = 20; // 合法
  ```

- **`const`**：
  - `const` 声明的变量是不可变的，即它们的值在初始化后不能被重新赋值。
  - 注意：`const` 只保证变量引用不可变，如果变量是一个对象或数组，对象或数组的属性或元素仍然可以修改。

  ```javascript
  const x = 10;
  x = 20; // 报错：TypeError: Assignment to constant variable.
  
  const obj = { key: 'value' };
  obj.key = 'new value'; // 合法，因为对象的属性可以修改
  ```

### 4. 重复声明（Re-declaration）

- **`var`**：
  - `var` 允许在同一作用域内重复声明同一个变量，这可能会导致意外的行为。

  ```javascript
  var x = 10;
  var x = 20; // 合法，但可能导致问题
  ```

- **`let`** 和 **`const`**：
  - `let` 和 `const` 不允许在同一作用域内重复声明同一个变量，这有助于避免命名冲突和意外行为。

  ```javascript
  let x = 10;
  let x = 20; // 报错：SyntaxError: Identifier 'x' has already been declared
  
  const y = 10;
  const y = 20; // 报错：SyntaxError: Identifier 'y' has already been declared
  ```

### 总结

- **`var`**：函数作用域，可变，可重复声明，存在变量提升。
- **`let`**：块级作用域，可变，不可重复声明，存在暂时性死区。
- **`const`**：块级作用域，不可变（引用不可变），不可重复声明，存在暂时性死区。

在现代 JavaScript 开发中，推荐使用 `let` 和 `const` 来声明变量，因为它们提供了更严格的作用域和更少的意外行为。

## *4. get 请求的参数是否能够使用数组？*

在 HTTP GET 请求中，参数通常是通过 URL 的查询字符串（query string）传递的。查询字符串是由一系列键值对组成的，键和值之间用 `=` 分隔，多个键值对之间用 `&` 分隔。

### 使用数组作为 GET 请求参数

在 GET 请求中，可以使用数组作为参数值。有几种常见的方式来传递数组参数：

#### 1. 使用重复的键（Duplicate Keys）

在某些情况下，服务器端框架（如 PHP）可以识别重复的键，并将它们视为数组。例如：

```
http://example.com/api?key=value1&key=value2&key=value3
```

在这种情况下，服务器端可能会将 `key` 解析为一个数组 `['value1', 'value2', 'value3']`。

#### 2. 使用方括号（Brackets）

另一种常见的方式是在键名后面添加方括号 `[]`，表示这是一个数组。例如：

```
http://example.com/api?key[]=value1&key[]=value2&key[]=value3
```

在这种情况下，服务器端通常会将 `key` 解析为一个数组 `['value1', 'value2', 'value3']`。

#### 3. 使用逗号分隔（Comma-separated Values）

有些 API 设计允许使用逗号分隔的值来表示数组。例如：

```
http://example.com/api?key=value1,value2,value3
```

在这种情况下，服务器端可能会将 `key` 解析为一个数组 `['value1', 'value2', 'value3']`。

### 示例

假设我们有一个 API 端点 `http://example.com/api`，我们希望传递一个数组参数 `ids`，包含三个值 `1`, `2`, 和 `3`。我们可以使用以下几种方式：

1. **重复的键**：
   ```
   http://example.com/api?ids=1&ids=2&ids=3
   ```

2. **方括号**：
   ```
   http://example.com/api?ids[]=1&ids[]=2&ids[]=3
   ```

3. **逗号分隔**：
   ```
   http://example.com/api?ids=1,2,3
   ```

### 总结

在 GET 请求中，可以使用数组作为参数值，具体方式取决于服务器端如何解析查询字符串。常见的方式包括使用重复的键、方括号和逗号分隔的值。选择哪种方式取决于 API 的设计和服务器端的实现。

## *5. 说说你对 Promise 的了解？*

Promise 是 JavaScript 中用于处理异步操作的一种对象，它提供了一种更清晰、更可控的方式来处理异步代码。Promise 的出现解决了传统的回调函数嵌套过深（俗称“回调地狱”）的问题，使得异步代码更易于编写和维护。

### Promise 的基本概念

#### 1. **状态（State）**

Promise 有三种状态：
- **Pending（待定）**：初始状态，既未完成也未被拒绝。
- **Fulfilled（已完成）**：操作成功完成。
- **Rejected（已拒绝）**：操作失败。

Promise 的状态只能从 `Pending` 转变为 `Fulfilled` 或 `Rejected`，且一旦状态改变，就不会再变。

#### 2. **构造函数**

Promise 对象通过 `new Promise` 构造函数创建，构造函数接受一个执行器函数（executor function），该函数有两个参数：`resolve` 和 `reject`。

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (/* 操作成功 */) {
    resolve(value); // 将 Promise 状态变为 Fulfilled
  } else {
    reject(reason); // 将 Promise 状态变为 Rejected
  }
});
```

#### 3. **方法**

Promise 对象有以下几个主要方法：

- **`then(onFulfilled, onRejected)`**：
  - `onFulfilled`：当 Promise 状态变为 `Fulfilled` 时调用的回调函数。
  - `onRejected`：当 Promise 状态变为 `Rejected` 时调用的回调函数。
  - `then` 方法返回一个新的 Promise，可以链式调用。

  ```javascript
  promise.then(
    (value) => {
      // 操作成功时的处理
    },
    (reason) => {
      // 操作失败时的处理
    }
  );
  ```

- **`catch(onRejected)`**：
  - `catch` 方法是 `then(null, onRejected)` 的简写，用于捕获 Promise 的拒绝状态。

  ```javascript
  promise.catch((reason) => {
    // 操作失败时的处理
  });
  ```

- **`finally(onFinally)`**：
  - `finally` 方法在 Promise 状态变为 `Fulfilled` 或 `Rejected` 后都会执行，通常用于清理操作。

  ```javascript
  promise.finally(() => {
    // 无论成功还是失败都会执行的代码
  });
  ```

### Promise 的链式调用

由于 `then` 方法返回一个新的 Promise，因此可以进行链式调用，使得异步操作的顺序更加清晰。

```javascript
promise
  .then((value) => {
    // 第一个异步操作
    return value + 1;
  })
  .then((newValue) => {
    // 第二个异步操作
    return newValue + 2;
  })
  .then((finalValue) => {
    // 最终结果
    console.log(finalValue);
  })
  .catch((reason) => {
    // 捕获任何错误
    console.error(reason);
  });
```

### Promise 的静态方法

Promise 还提供了一些静态方法来处理多个 Promise：

- **`Promise.all(iterable)`**：
  - 接受一个包含多个 Promise 的可迭代对象（如数组），返回一个新的 Promise。
  - 当所有 Promise 都变为 `Fulfilled` 时，返回的 Promise 才会变为 `Fulfilled`，并返回一个包含所有结果的数组。
  - 如果任何一个 Promise 变为 `Rejected`，返回的 Promise 会立即变为 `Rejected`，并返回第一个被拒绝的原因。

  ```javascript
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // 所有 Promise 都成功时的处理
    })
    .catch((reason) => {
      // 任何一个 Promise 失败时的处理
    });
  ```

- **`Promise.race(iterable)`**：
  - 接受一个包含多个 Promise 的可迭代对象，返回一个新的 Promise。
  - 当任何一个 Promise 变为 `Fulfilled` 或 `Rejected` 时，返回的 Promise 会立即变为相同的状态，并返回对应的结果或原因。

  ```javascript
  Promise.race([promise1, promise2, promise3])
    .then((value) => {
      // 第一个完成的 Promise 成功时的处理
    })
    .catch((reason) => {
      // 第一个完成的 Promise 失败时的处理
    });
  ```

- **`Promise.resolve(value)`**：
  - 返回一个状态为 `Fulfilled` 的 Promise，并传递 `value` 作为结果。

  ```javascript
  Promise.resolve(42).then((value) => {
    console.log(value); // 输出 42
  });
  ```

- **`Promise.reject(reason)`**：
  - 返回一个状态为 `Rejected` 的 Promise，并传递 `reason` 作为拒绝原因。

  ```javascript
  Promise.reject(new Error('Something went wrong')).catch((reason) => {
    console.error(reason); // 输出 Error: Something went wrong
  });
  ```

### 总结

Promise 是 JavaScript 中处理异步操作的重要工具，它通过状态管理和链式调用，使得异步代码更加清晰和可控。Promise 提供了多种方法来处理单个或多个异步操作，并且可以通过静态方法来组合和处理多个 Promise。理解 Promise 的工作原理和使用方法，对于编写现代 JavaScript 应用程序至关重要。

## *6. async/await 原理， 手写 async 函数？*

`async/await` 是 ES2017 引入的一种语法糖，用于更方便地处理异步操作。它基于 Promise，使得异步代码看起来更像同步代码，从而提高了代码的可读性和可维护性。

### `async/await` 的原理

#### 1. `async` 函数

`async` 函数是一个返回 Promise 的函数。在 `async` 函数内部，可以使用 `await` 关键字来等待一个 Promise 的解析结果。

- **`async` 函数的返回值**：
  - `async` 函数总是返回一个 Promise。如果函数返回一个值，这个值会被包装成一个已解决的 Promise。如果函数抛出异常，这个异常会被包装成一个被拒绝的 Promise。

  ```javascript
  async function example() {
    return 42;
  }
  
  example().then((value) => {
    console.log(value); // 输出 42
  });
  ```

#### 2. `await` 关键字

`await` 关键字用于等待一个 Promise 的解析结果。`await` 只能在 `async` 函数内部使用。

- **`await` 的工作原理**：
  - `await` 会暂停 `async` 函数的执行，直到 Promise 被解析（`Fulfilled` 或 `Rejected`）。
  - 如果 Promise 被解析为 `Fulfilled`，`await` 会返回 Promise 的结果。
  - 如果 Promise 被解析为 `Rejected`，`await` 会抛出异常，可以使用 `try...catch` 来捕获。

  ```javascript
  async function example() {
    try {
      const result = await someAsyncOperation();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  ```

### 手写 `async` 函数

虽然 `async/await` 是 JavaScript 语言的一部分，但我们可以通过模拟其行为来理解其原理。以下是一个简单的实现，展示了如何使用 Promise 和生成器（Generator）来模拟 `async/await` 的行为。

#### 1. 使用生成器模拟 `async/await`

生成器函数可以通过 `yield` 关键字暂停执行，并返回一个值。我们可以利用生成器来模拟 `await` 的行为。

```javascript
function asyncToGenerator(generatorFunc) {
  return function() {
    const generator = generatorFunc.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult;

        try {
          generatorResult = generator[key](arg);
        } catch (error) {
          return reject(error);
        }

        const { value, done } = generatorResult;

        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => step('next', val),
            (err) => step('throw', err)
          );
        }
      }

      step('next');
    });
  };
}

// 示例生成器函数
function* exampleGenerator() {
  try {
    const result1 = yield someAsyncOperation1();
    console.log(result1);
    const result2 = yield someAsyncOperation2();
    console.log(result2);
    return 'done';
  } catch (error) {
    console.error(error);
  }
}

// 将生成器函数转换为 async 函数
const exampleAsync = asyncToGenerator(exampleGenerator);

// 使用 async 函数
exampleAsync().then((result) => {
  console.log(result); // 输出 'done'
});
```

#### 2. 解释

- **`asyncToGenerator` 函数**：
  - 接受一个生成器函数作为参数，并返回一个新的函数。
  - 返回的函数内部创建了一个生成器实例，并返回一个 Promise。
  - `step` 函数用于驱动生成器的执行，处理 `yield` 返回的值，并递归调用自身以处理下一个 `yield`。

- **生成器函数**：
  - 生成器函数内部使用 `yield` 关键字来暂停执行，并返回一个 Promise。
  - `yield` 的值会被 `step` 函数捕获，并等待 Promise 的解析结果。

- **Promise 链**：
  - `step` 函数通过 `Promise.resolve(value).then(...)` 来处理 `yield` 返回的 Promise，并递归调用自身以继续生成器的执行。

### 总结

`async/await` 是基于 Promise 和生成器的语法糖，使得异步代码的编写更加简洁和直观。通过模拟 `async/await` 的行为，我们可以更好地理解其工作原理。虽然实际的 `async/await` 实现更为复杂，但上述示例展示了其核心思想：通过生成器和 Promise 的结合，实现异步代码的顺序执行。

## *7. 如何检测对象是否循环引用？*

检测对象是否存在循环引用是一个常见的问题，尤其是在处理复杂的数据结构（如树、图）或进行深拷贝时。循环引用会导致递归算法陷入无限循环，因此需要一种方法来检测和避免这种情况。

### 检测循环引用的方法

#### 1. 使用 `WeakMap` 或 `Set`

`WeakMap` 和 `Set` 是 JavaScript 中用于存储对象引用的数据结构。`WeakMap` 的键是弱引用，不会阻止垃圾回收，而 `Set` 的键是强引用。我们可以利用这些数据结构来跟踪已经访问过的对象，从而检测循环引用。

##### 使用 `WeakMap`

```javascript
function isCyclic(obj, seen = new WeakMap()) {
// 如果对象是原始值，直接返回 false
if (typeof obj !== 'object' || obj === null) {
 return false;
}

// 如果对象已经在 seen 中，说明存在循环引用
if (seen.has(obj)) {
 return true;
}

// 将当前对象添加到 seen 中
seen.set(obj, true);

// 递归检查对象的每个属性
for (let key in obj) {
 if (obj.hasOwnProperty(key) && isCyclic(obj[key], seen)) {
   return true;
 }
}

// 如果没有发现循环引用，返回 false
return false;
}

// 示例
const obj = { a: 1 };
obj.b = obj; // 创建循环引用

console.log(isCyclic(obj)); // 输出 true
```

##### 使用 `Set`

```javascript
function isCyclic(obj, seen = new Set()) {
// 如果对象是原始值，直接返回 false
if (typeof obj !== 'object' || obj === null) {
 return false;
}

// 如果对象已经在 seen 中，说明存在循环引用
if (seen.has(obj)) {
 return true;
}

// 将当前对象添加到 seen 中
seen.add(obj);

// 递归检查对象的每个属性
for (let key in obj) {
 if (obj.hasOwnProperty(key) && isCyclic(obj[key], seen)) {
   return true;
 }
}

// 如果没有发现循环引用，返回 false
return false;
}

// 示例
const obj = { a: 1 };
obj.b = obj; // 创建循环引用

console.log(isCyclic(obj)); // 输出 true
```

#### 2. 使用 `JSON.stringify` 的错误捕获

`JSON.stringify` 在遇到循环引用时会抛出错误，我们可以利用这一点来检测循环引用。

```javascript
function isCyclic(obj) {
try {
 JSON.stringify(obj);
 return false;
} catch (e) {
 return true;
}
}

// 示例
const obj = { a: 1 };
obj.b = obj; // 创建循环引用

console.log(isCyclic(obj)); // 输出 true
```

### 总结

检测对象是否存在循环引用可以通过以下几种方法实现：

1. **使用 `WeakMap` 或 `Set`**：
   - 通过递归遍历对象，并使用 `WeakMap` 或 `Set` 来跟踪已经访问过的对象，从而检测循环引用。

2. **使用 `JSON.stringify` 的错误捕获**：
   - 利用 `JSON.stringify` 在遇到循环引用时抛出错误的特性，来检测循环引用。

在实际应用中，使用 `WeakMap` 或 `Set` 的方法更为通用和灵活，因为它们可以处理更复杂的数据结构，并且不会受到 `JSON.stringify` 的限制。

## *8. postMessage 是如何解决跨域问题的？*

`postMessage` 是 HTML5 引入的一个 API，用于在不同窗口或 iframe 之间安全地传递消息。它主要用于解决跨域通信的问题，因为它允许在不同源（origin）之间进行安全的通信，而不会受到同源策略（Same-Origin Policy）的限制。

### `postMessage` 的基本用法

`postMessage` 方法可以在一个窗口或 iframe 中调用，向另一个窗口或 iframe 发送消息。接收方可以通过监听 `message` 事件来接收消息。

#### 发送消息

```javascript
// 在发送方窗口或 iframe 中
const targetWindow = window.parent || window.opener || document.getElementById('target-iframe').contentWindow;

targetWindow.postMessage(message, targetOrigin);
```

- **`message`**：要发送的消息，可以是任何 JavaScript 对象。
- **`targetOrigin`**：目标窗口的源（origin），可以是具体的 URL（如 `https://example.com`），也可以是通配符 `*`，表示不限制源。

#### 接收消息

```javascript
// 在接收方窗口或 iframe 中
window.addEventListener('message', (event) => {
  // 检查消息的来源是否可信
  if (event.origin !== 'https://trusted-origin.com') {
    return;
  }

  // 处理接收到的消息
  console.log(event.data);
});
```

- **`event.origin`**：发送消息的窗口的源（origin）。
- **`event.data`**：接收到的消息内容。

### 解决跨域问题的原理

`postMessage` 能够解决跨域问题的关键在于它提供了一种安全的、受控的方式来在不同源之间传递消息。具体来说，它通过以下方式实现：

#### 1. **源（Origin）检查**

`postMessage` 允许发送方指定目标窗口的源（origin），并且在接收方可以通过 `event.origin` 属性来检查消息的来源。这种机制确保了只有来自指定源的消息才会被处理，从而避免了跨站脚本攻击（XSS）。

```javascript
// 发送方
targetWindow.postMessage(message, 'https://example.com');

// 接收方
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://example.com') {
    return; // 忽略来自非信任源的消息
  }

  console.log(event.data);
});
```

#### 2. **消息传递的安全性**

`postMessage` 传递的消息内容可以是任何 JavaScript 对象，但通常建议传递简单的数据类型（如字符串、数字、布尔值）或序列化后的对象（如 JSON 对象）。这样可以避免传递复杂的对象或函数，从而减少潜在的安全风险。

#### 3. **事件驱动的通信**

`postMessage` 是基于事件驱动的通信机制，发送方发送消息后，接收方通过监听 `message` 事件来接收消息。这种异步通信方式使得跨域通信更加灵活和安全。

### 示例

假设有两个不同源的页面：

- `https://example.com/page1.html`
- `https://example.com/page2.html`

我们希望在 `page1.html` 中向 `page2.html` 发送消息。

#### `page1.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page 1</title>
</head>
<body>
  <iframe id="target-iframe" src="https://example.com/page2.html"></iframe>
  <script>
    const iframe = document.getElementById('target-iframe');
    iframe.onload = () => {
      iframe.contentWindow.postMessage('Hello from Page 1', 'https://example.com');
    };
  </script>
</body>
</html>
```

#### `page2.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page 2</title>
</head>
<body>
  <script>
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://example.com') {
        return;
      }

      console.log(event.data); // 输出 "Hello from Page 1"
    });
  </script>
</body>
</html>
```

### 总结

`postMessage` 通过源（origin）检查、消息传递的安全性和事件驱动的通信机制，提供了一种安全的跨域通信方式。它允许在不同源之间传递消息，同时避免了同源策略的限制，从而解决了跨域通信的问题。

## *9. js 对象可以使用 for...of 迭代吗？*

在 JavaScript 中，`for...of` 循环是用于迭代可迭代对象（iterable objects）的语法。可迭代对象包括数组、字符串、`Map`、`Set`、`TypedArray` 等。然而，普通的 JavaScript 对象（`Object`）默认情况下并不是可迭代对象，因此不能直接使用 `for...of` 循环进行迭代。

### 为什么普通的对象不能使用 `for...of` 迭代？

普通的 JavaScript 对象（`Object`）没有实现 `Symbol.iterator` 方法，而 `for...of` 循环依赖于这个方法来获取迭代器（iterator）。因此，直接对对象使用 `for...of` 循环会导致错误。

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key of obj) { // 报错：TypeError: obj is not iterable
console.log(key);
}
```

### 如何使对象可迭代？

要让对象可以使用 `for...of` 循环进行迭代，可以通过实现 `Symbol.iterator` 方法来使对象可迭代。`Symbol.iterator` 方法返回一个迭代器对象，该对象包含一个 `next` 方法，用于返回迭代结果。

#### 示例：使对象可迭代

```javascript
const obj = {
a: 1,
b: 2,
c: 3,
[Symbol.iterator]() {
 const keys = Object.keys(this);
 let index = 0;

 return {
   next: () => {
     if (index < keys.length) {
       const key = keys[index++];
       return { value: this[key], done: false };
     } else {
       return { value: undefined, done: true };
     }
   }
 };
}
};

for (const value of obj) {
console.log(value); // 输出 1, 2, 3
}
```

#### 解释

- **`Symbol.iterator` 方法**：
  - 该方法返回一个迭代器对象，包含一个 `next` 方法。
  - `next` 方法返回一个对象，包含 `value` 和 `done` 两个属性。
    - `value`：当前迭代的结果。
    - `done`：布尔值，表示迭代是否完成。

- **迭代器的工作原理**：
  - 每次调用 `next` 方法时，返回当前属性的值，并将索引递增。
  - 当所有属性都被迭代完毕时，返回 `{ value: undefined, done: true }`，表示迭代结束。

### 使用 `Object.keys`、`Object.values` 或 `Object.entries`

虽然普通的对象不能直接使用 `for...of` 循环进行迭代，但可以通过 `Object.keys`、`Object.values` 或 `Object.entries` 方法来获取对象的键、值或键值对数组，然后使用 `for...of` 循环进行迭代。

#### 示例：使用 `Object.keys`

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key of Object.keys(obj)) {
  console.log(key); // 输出 'a', 'b', 'c'
}
```

#### 示例：使用 `Object.values`

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const value of Object.values(obj)) {
  console.log(value); // 输出 1, 2, 3
}
```

#### 示例：使用 `Object.entries`

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value); // 输出 'a' 1, 'b' 2, 'c' 3
}
```

### 总结

- 普通的 JavaScript 对象（`Object`）默认情况下不是可迭代对象，因此不能直接使用 `for...of` 循环进行迭代。
- 可以通过实现 `Symbol.iterator` 方法来使对象可迭代。
- 也可以使用 `Object.keys`、`Object.values` 或 `Object.entries` 方法来获取对象的键、值或键值对数组，然后使用 `for...of` 循环进行迭代。

通过这些方法，可以灵活地处理对象的迭代需求。

## *10. 解释一下原型、构造函数、实例、原型链 之间的关系？*

在 JavaScript 中，原型（Prototype）、构造函数（Constructor）、实例（Instance）和原型链（Prototype Chain）是理解对象和继承机制的核心概念。它们之间的关系如下：

### 1. 构造函数（Constructor）

构造函数是一个用于创建和初始化对象的特殊函数。通过 `new` 关键字调用构造函数可以创建一个新的对象实例。

```javascript
function Person(name, age) {
this.name = name;
this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
```

- **构造函数的特点**：
  - 构造函数通常以大写字母开头，以区别于普通函数。
  - 构造函数内部使用 `this` 关键字来引用新创建的对象。
  - 通过 `new` 关键字调用构造函数时，会创建一个新的对象实例。

### 2. 实例（Instance）

实例是通过构造函数创建的具体对象。每个实例都有自己的属性和方法，但它们共享构造函数的原型对象。

```javascript
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // 输出 'Alice'
console.log(person2.name); // 输出 'Bob'
```

- **实例的特点**：
  - 实例是构造函数的具体实现，具有构造函数定义的属性和方法。
  - 每个实例都有自己的属性值，但共享构造函数的原型对象。

### 3. 原型（Prototype）

每个 JavaScript 对象都有一个内部属性 `[[Prototype]]`，指向它的原型对象。原型对象是一个普通的对象，包含共享的属性和方法。

```javascript
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

person1.sayHello(); // 输出 'Hello, my name is Alice'
person2.sayHello(); // 输出 'Hello, my name is Bob'
```

- **原型的特点**：
  - 原型对象是构造函数的 `prototype` 属性。
  - 实例通过 `[[Prototype]]` 链接到构造函数的原型对象。
  - 原型对象中的属性和方法可以被所有实例共享。

### 4. 原型链（Prototype Chain）

原型链是 JavaScript 中实现继承的机制。每个对象都有一个原型对象，原型对象也有自己的原型对象，形成一个链式结构。当访问对象的属性或方法时，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或方法，或到达原型链的末端（`null`）。

```javascript
console.log(person1.toString()); // 输出 '[object Object]'
```

- **原型链的特点**：
  - 当访问对象的属性或方法时，JavaScript 引擎首先在对象本身查找。
  - 如果对象本身没有该属性或方法，引擎会沿着 `[[Prototype]]` 链向上查找，直到找到该属性或方法，或到达原型链的末端。
  - 原型链的末端是 `Object.prototype`，它的原型是 `null`。

### 关系总结

- **构造函数**：用于创建和初始化对象的函数。
- **实例**：通过构造函数创建的具体对象，具有构造函数定义的属性和方法。
- **原型**：构造函数的 `prototype` 属性，包含共享的属性和方法。
- **原型链**：通过 `[[Prototype]]` 链接形成的链式结构，用于实现继承。

### 示例

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

person1.sayHello(); // 输出 'Hello, my name is Alice'
person2.sayHello(); // 输出 'Hello, my name is Bob'

console.log(person1.toString()); // 输出 '[object Object]'
```

### 总结

- **构造函数**：用于创建对象的模板。
- **实例**：通过构造函数创建的具体对象。
- **原型**：构造函数的 `prototype` 属性，包含共享的属性和方法。
- **原型链**：通过 `[[Prototype]]` 链接形成的链式结构，用于实现继承。

理解这些概念之间的关系，有助于更好地掌握 JavaScript 的面向对象编程和继承机制。

## *11. JS 内存泄露的问题该如何排查？*

JavaScript 内存泄漏是指程序中不再需要的内存没有被及时释放，导致内存占用不断增加，最终可能导致程序性能下降或崩溃。排查和解决内存泄漏问题是前端开发中的一个重要任务。以下是一些常见的排查方法和工具：

### 1. 常见的内存泄漏场景

在排查内存泄漏之前，了解一些常见的内存泄漏场景有助于更快地定位问题：

- **全局变量**：未使用 `var`、`let` 或 `const` 声明的变量会成为全局变量，如果这些变量引用了大量数据，会导致内存泄漏。
- **闭包**：闭包会持有外部函数的变量，如果闭包被长期引用，可能导致外部变量无法被垃圾回收。
- **定时器和回调函数**：未清除的定时器（如 `setInterval`、`setTimeout`）或未解绑的事件监听器会导致内存泄漏。
- **DOM 引用**：即使 DOM 元素被移除，如果 JavaScript 中仍然持有对该元素的引用，会导致内存泄漏。
- **缓存**：使用对象或数组作为缓存时，如果没有适当的清理机制，会导致缓存不断增长，占用大量内存。

### 2. 使用 Chrome DevTools 排查内存泄漏

Chrome DevTools 提供了强大的工具来帮助排查内存泄漏问题。以下是一些常用的方法：

#### 2.1. 内存面板（Memory Panel）

内存面板可以查看内存使用情况，并生成内存快照（Heap Snapshot）。

- **生成内存快照**：
  1. 打开 Chrome DevTools（按 `F12` 或 `Ctrl+Shift+I`）。
  2. 选择 `Memory` 面板。
  3. 点击 `Take heap snapshot` 按钮，生成当前内存快照。
  4. 在快照列表中选择生成的快照，查看内存使用情况。

- **分析内存快照**：
  - 使用 `Summary` 视图查看对象的类型和数量。
  - 使用 `Comparison` 视图比较两个快照，找出内存增长的原因。
  - 使用 `Containment` 视图查看对象的引用关系，找出未被释放的对象。

#### 2.2. 性能面板（Performance Panel）

性能面板可以记录和分析页面的性能，包括内存使用情况。

- **记录性能**：
  1. 打开 Chrome DevTools，选择 `Performance` 面板。
  2. 点击 `Record` 按钮开始记录。
  3. 执行可能导致内存泄漏的操作。
  4. 点击 `Stop` 按钮停止记录。

- **分析性能记录**：
  - 查看 `Memory` 部分，观察内存使用情况的变化。
  - 使用 `Heap Snapshot` 和 `Allocation Timeline` 分析内存分配和释放情况。

#### 2.3. 分配时间线（Allocation Timeline）

分配时间线可以实时记录内存分配情况，帮助找出内存泄漏的源头。

- **使用分配时间线**：
  1. 打开 Chrome DevTools，选择 `Memory` 面板。
  2. 选择 `Record allocation timeline` 选项。
  3. 执行可能导致内存泄漏的操作。
  4. 停止记录，查看内存分配情况。

### 3. 使用 Node.js 的内存分析工具

如果你在 Node.js 环境中遇到内存泄漏问题，可以使用以下工具：

#### 3.1. `process.memoryUsage()`

`process.memoryUsage()` 方法可以获取当前 Node.js 进程的内存使用情况。

```javascript
const memoryUsage = process.memoryUsage();
console.log(memoryUsage);
```

#### 3.2. `heapdump` 模块

`heapdump` 模块可以生成 V8 堆快照，用于分析内存使用情况。

```bash
npm install heapdump
```

```javascript
const heapdump = require('heapdump');

heapdump.writeSnapshot((err, filename) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Heap dump written to ${filename}`);
  }
});
```

生成的堆快照可以使用 Chrome DevTools 的 `Memory` 面板进行分析。

### 4. 代码审查和优化

除了使用工具，代码审查和优化也是排查内存泄漏的重要手段：

- **避免全局变量**：尽量使用局部变量，避免不必要的全局变量。
- **及时清除定时器和事件监听器**：确保在不需要时清除定时器和事件监听器。
- **使用弱引用**：在某些情况下，使用 `WeakMap` 或 `WeakSet` 可以避免内存泄漏。
- **优化缓存**：确保缓存有适当的清理机制，避免缓存无限增长。

### 总结

排查 JavaScript 内存泄漏问题需要结合工具和代码审查。使用 Chrome DevTools 的内存面板、性能面板和分配时间线可以帮助分析内存使用情况，找出内存泄漏的源头。同时，优化代码，避免常见的内存泄漏场景，也是预防和解决内存泄漏的重要手段。

## *12. 说说 axios 的拦截器原理及应用，并简单手写核心逻辑*

`axios` 是一个基于 Promise 的 HTTP 客户端，广泛用于浏览器和 Node.js 环境中。它提供了拦截器（interceptors）功能，允许在请求或响应被处理之前或之后拦截它们，从而实现一些通用的处理逻辑，如请求头设置、错误处理、日志记录等。

### 拦截器的原理

拦截器的原理是通过在请求和响应的处理链中插入自定义的回调函数，从而在请求或响应被处理之前或之后执行一些操作。`axios` 的拦截器分为两种：请求拦截器和响应拦截器。

#### 1. 请求拦截器（Request Interceptors）

请求拦截器在请求被发送之前执行，可以用于修改请求配置、添加请求头、显示加载动画等。

#### 2. 响应拦截器（Response Interceptors）

响应拦截器在响应被处理之前执行，可以用于统一处理响应数据、错误处理、隐藏加载动画等。

### 拦截器的应用

拦截器在实际开发中有广泛的应用，以下是一些常见的应用场景：

- **请求头设置**：在请求拦截器中统一设置请求头，如 `Authorization`、`Content-Type` 等。
- **请求参数处理**：在请求拦截器中对请求参数进行统一处理，如序列化、加密等。
- **错误处理**：在响应拦截器中统一处理错误，如显示错误提示、记录日志等。
- **加载动画**：在请求拦截器中显示加载动画，在响应拦截器中隐藏加载动画。
- **权限控制**：在请求拦截器中检查用户权限，如果权限不足则阻止请求。

### 手写核心逻辑

以下是一个简化的 `axios` 拦截器实现，展示了请求拦截器和响应拦截器的基本原理。

```javascript
class Axios {
  constructor() {
    this.interceptors = {
      request: [],
      response: []
    };
  }

  // 添加请求拦截器
  useRequestInterceptor(fulfilled, rejected) {
    this.interceptors.request.push({ fulfilled, rejected });
  }

  // 添加响应拦截器
  useResponseInterceptor(fulfilled, rejected) {
    this.interceptors.response.push({ fulfilled, rejected });
  }

  // 发送请求
  request(config) {
    const chain = [this.sendRequest.bind(this), undefined];

    // 将请求拦截器插入到 chain 的前面
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    // 将响应拦截器插入到 chain 的后面
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    // 创建一个初始的 Promise 对象
    let promise = Promise.resolve(config);

    // 依次执行拦截器链
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }

  // 实际发送请求的方法
  sendRequest(config) {
    return new Promise((resolve, reject) => {
      // 模拟请求
      setTimeout(() => {
        const response = {
          config,
          data: 'response data',
          status: 200,
          statusText: 'OK'
        };
        resolve(response);
      }, 1000);
    });
  }
}

// 创建 axios 实例
const axios = new Axios();

// 添加请求拦截器
axios.useRequestInterceptor(
  config => {
    console.log('Request Interceptor: Before Request');
    config.headers = { 'X-Custom-Header': 'foobar' };
    return config;
  },
  error => {
    console.error('Request Interceptor: Error', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.useResponseInterceptor(
  response => {
    console.log('Response Interceptor: Before Response');
    response.data = response.data.toUpperCase();
    return response;
  },
  error => {
    console.error('Response Interceptor: Error', error);
    return Promise.reject(error);
  }
);

// 发送请求
axios.request({ url: '/api/data' })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Request Error:', error);
  });
```

### 解释

- **`Axios` 类**：
  - 包含 `interceptors` 对象，用于存储请求拦截器和响应拦截器。
  - `useRequestInterceptor` 和 `useResponseInterceptor` 方法用于添加拦截器。
  - `request` 方法用于发送请求，内部通过 `chain` 数组将拦截器和实际请求方法串联起来。
  - `sendRequest` 方法模拟实际的请求发送过程。

- **拦截器链**：
  - 请求拦截器被插入到 `chain` 数组的前面，响应拦截器被插入到 `chain` 数组的后面。
  - 通过 `Promise` 链依次执行拦截器链，最终执行实际的请求方法。

### 总结

`axios` 的拦截器机制通过在请求和响应的处理链中插入自定义的回调函数，实现了灵活的请求和响应处理。拦截器在实际开发中有广泛的应用，可以用于请求头设置、错误处理、加载动画、权限控制等场景。通过手写核心逻辑，可以更好地理解 `axios` 拦截器的工作原理。

## *13. WebWorker、SharedWorker 和 ServiceWorker 有哪些区别？*

在现代 Web 开发中，Web Worker、Shared Worker 和 Service Worker 是用于处理后台任务和提高 Web 应用性能的重要工具。它们各自有不同的用途和特点，以下是它们的区别：

### 1. Web Worker

**Web Worker** 是一种在后台线程中运行 JavaScript 代码的机制，它允许在主线程之外执行计算密集型任务，从而避免阻塞用户界面。

#### 特点：

- **独立线程**：Web Worker 运行在一个独立的线程中，与主线程（UI 线程）并行执行。
- **单例**：每个 Web Worker 实例都是独立的，只能与创建它的页面通信。
- **通信机制**：通过 `postMessage` 方法和 `onmessage` 事件进行通信。
- **限制**：Web Worker 无法直接访问 DOM，只能访问部分 Web API（如 `XMLHttpRequest`、`WebSocket` 等）。

#### 示例：

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage('Hello from main thread');

worker.onmessage = function(event) {
  console.log('Message received from worker:', event.data);
};

// worker.js
self.onmessage = function(event) {
  console.log('Message received from main thread:', event.data);
  self.postMessage('Hello from worker');
};
```

### 2. Shared Worker

**Shared Worker** 是一种可以在多个浏览器上下文（如多个标签页、iframe 等）之间共享的 Web Worker。它允许多个页面共享同一个后台线程，从而减少资源消耗。

#### 特点：

- **共享线程**：Shared Worker 可以在多个页面之间共享同一个后台线程。
- **通信机制**：通过 `port` 对象进行通信，使用 `postMessage` 方法和 `onmessage` 事件。
- **限制**：与 Web Worker 类似，Shared Worker 无法直接访问 DOM，只能访问部分 Web API。

#### 示例：

```javascript
// main1.js
const worker = new SharedWorker('shared-worker.js');

worker.port.postMessage('Hello from main1');

worker.port.onmessage = function(event) {
  console.log('Message received from shared worker:', event.data);
};

// main2.js
const worker = new SharedWorker('shared-worker.js');

worker.port.postMessage('Hello from main2');

worker.port.onmessage = function(event) {
  console.log('Message received from shared worker:', event.data);
};

// shared-worker.js
self.onconnect = function(event) {
  const port = event.ports[0];

  port.onmessage = function(event) {
    console.log('Message received from main:', event.data);
    port.postMessage('Hello from shared worker');
  };
};
```

### 3. Service Worker

**Service Worker** 是一种在浏览器后台运行的脚本，它充当 Web 应用、浏览器和网络之间的代理服务器。Service Worker 主要用于实现离线缓存、推送通知和后台同步等功能。

#### 特点：

- **代理服务器**：Service Worker 充当 Web 应用和网络之间的代理，可以拦截和处理网络请求。
- **生命周期**：Service Worker 有独立的生命周期，包括 `install`、`activate` 和 `fetch` 等事件。
- **离线缓存**：通过 `Cache API` 和 `fetch` 事件，Service Worker 可以实现离线缓存功能。
- **推送通知**：Service Worker 可以接收推送通知，并在用户设备上显示通知。
- **后台同步**：Service Worker 可以在后台执行同步任务，即使页面关闭也能继续运行。

#### 示例：

```javascript
// main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

// service-worker.js
self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  console.log('Fetch event:', event.request.url);
  event.respondWith(fetch(event.request));
});
```

### 总结

- **Web Worker**：在后台线程中运行 JavaScript 代码，避免阻塞主线程，适用于计算密集型任务。
- **Shared Worker**：在多个页面之间共享同一个后台线程，适用于需要共享资源的场景。
- **Service Worker**：在浏览器后台运行的代理服务器，用于实现离线缓存、推送通知和后台同步等功能。

通过合理使用这些 Worker，可以显著提高 Web 应用的性能和用户体验。

## *14. js 中对于超过 Number 最大值的数怎么处理？*

在 JavaScript 中，`Number` 类型使用双精度浮点数表示，其最大安全整数是 `2^53 - 1`，即 `9007199254740991`。如果需要处理超过这个范围的整数，JavaScript 提供了一些方法和库来处理大数。

### 1. 使用 `BigInt`

`BigInt` 是 ES2020 引入的一种新的数据类型，用于表示任意精度的整数。`BigInt` 可以处理超过 `Number` 最大值的整数。

#### 创建 `BigInt`

可以通过在整数后面加上 `n` 来创建 `BigInt`，或者使用 `BigInt` 构造函数。

```javascript
const bigInt1 = 9007199254740991n; // 直接创建 BigInt
const bigInt2 = BigInt(9007199254740991); // 使用构造函数创建 BigInt
```

#### 运算

`BigInt` 支持常见的数学运算，如加法、减法、乘法、除法等。

```javascript
const a = 9007199254740991n;
const b = 1n;

const sum = a + b; // 9007199254740992n
const difference = a - b; // 9007199254740990n
const product = a * b; // 9007199254740991n
const quotient = a / b; // 9007199254740991n
```

#### 注意事项

- `BigInt` 不能与 `Number` 类型直接混合运算，需要进行类型转换。
- `BigInt` 不支持浮点数运算，只能表示整数。

```javascript
const bigInt = 9007199254740991n;
const number = 1;

const result = bigInt + BigInt(number); // 9007199254740992n
```

### 2. 使用第三方库

如果需要处理更复杂的数学运算或需要兼容旧版浏览器，可以使用第三方库，如 `BigNumber.js`、`bignumber.js`、`decimal.js` 等。

#### 示例：使用 `bignumber.js`

```javascript
// 安装 bignumber.js
// npm install bignumber.js

const BigNumber = require('bignumber.js');

const a = new BigNumber('9007199254740991');
const b = new BigNumber('1');

const sum = a.plus(b); // 9007199254740992
const difference = a.minus(b); // 9007199254740990
const product = a.times(b); // 9007199254740991
const quotient = a.dividedBy(b); // 9007199254740991
```

#### 示例：使用 `decimal.js`

```javascript
// 安装 decimal.js
// npm install decimal.js

const Decimal = require('decimal.js');

const a = new Decimal('9007199254740991');
const b = new Decimal('1');

const sum = a.plus(b); // 9007199254740992
const difference = a.minus(b); // 9007199254740990
const product = a.times(b); // 9007199254740991
const quotient = a.dividedBy(b); // 9007199254740991
```

### 3. 使用字符串处理

如果只需要处理大数的显示或简单的比较，可以使用字符串来表示大数，并手动实现加法、减法等运算。

#### 示例：字符串加法

```javascript
function addStrings(num1, num2) {
  let carry = 0;
  let result = '';
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i--]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j--]) : 0;
    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  return result;
}

const num1 = '9007199254740991';
const num2 = '1';
const sum = addStrings(num1, num2); // '9007199254740992'
```

### 总结

- **`BigInt`**：ES2020 引入的新数据类型，用于表示任意精度的整数，适用于现代浏览器。
- **第三方库**：如 `bignumber.js`、`decimal.js` 等，提供更丰富的数学运算功能，适用于需要兼容旧版浏览器的场景。
- **字符串处理**：手动实现大数的加法、减法等运算，适用于简单的显示和比较。

根据具体需求选择合适的方法来处理超过 `Number` 最大值的数。

## *15. 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？*

在全局作用域中，使用 `const` 和 `let` 声明的变量不会像使用 `var` 声明的变量那样直接附加到 `window` 对象上。这是因为 `const` 和 `let` 声明的变量属于块级作用域，而不是函数作用域或全局作用域。

### 变量的存储位置

在全局作用域中，使用 `const` 和 `let` 声明的变量实际上存储在全局对象（global object）上，但在不同的 JavaScript 环境中，全局对象的名称可能不同：

- 在浏览器环境中，全局对象是 `window`。
- 在 Node.js 环境中，全局对象是 `global`。

然而，`const` 和 `let` 声明的变量并不会直接附加到全局对象上，而是存储在一个称为“词法环境（Lexical Environment）”的内部结构中。

### 如何获取这些变量

虽然 `const` 和 `let` 声明的变量不会直接附加到全局对象上，但它们仍然可以通过全局作用域访问。以下是几种获取这些变量的方法：

#### 1. 直接访问

在全局作用域中，可以直接访问使用 `const` 和 `let` 声明的变量。

```javascript
const myConst = 'Hello, const';
let myLet = 'Hello, let';

console.log(myConst); // 输出 'Hello, const'
console.log(myLet);   // 输出 'Hello, let'
```

#### 2. 使用 `this` 关键字

在全局作用域中，`this` 指向全局对象。虽然 `const` 和 `let` 声明的变量不会直接附加到 `this` 上，但可以通过 `this` 访问全局对象上的其他属性。

```javascript
const myConst = 'Hello, const';
let myLet = 'Hello, let';

console.log(this.myConst); // 输出 undefined
console.log(this.myLet);   // 输出 undefined

console.log(this.window === window); // 输出 true（在浏览器环境中）
console.log(this.global === global); // 输出 true（在 Node.js 环境中）
```

#### 3. 使用 `globalThis`

`globalThis` 是一个标准化的全局对象，在不同的 JavaScript 环境中都可用。它指向当前的全局对象，无论是在浏览器、Node.js 还是其他环境中。

```javascript
const myConst = 'Hello, const';
let myLet = 'Hello, let';

console.log(globalThis.myConst); // 输出 undefined
console.log(globalThis.myLet);   // 输出 undefined

console.log(globalThis.window === window); // 输出 true（在浏览器环境中）
console.log(globalThis.global === global); // 输出 true（在 Node.js 环境中）
```

### 总结

- 在全局作用域中，使用 `const` 和 `let` 声明的变量不会直接附加到全局对象（如 `window` 或 `global`）上。
- 这些变量存储在词法环境中，可以通过全局作用域直接访问。
- 虽然不能通过全局对象直接访问这些变量，但可以通过 `this` 或 `globalThis` 访问全局对象上的其他属性。

理解这些概念有助于更好地掌握 JavaScript 的作用域和变量存储机制。

## *16. [3, 15, 8, 29, 102, 22].sort()，结果是多少，为什么？*

在 JavaScript 中，数组的 `sort()` 方法默认会将数组元素转换为字符串，然后按照字符串的 Unicode 码点进行排序。因此，`[3, 15, 8, 29, 102, 22].sort()` 的结果并不是按照数值大小排序，而是按照字符串的 Unicode 码点排序。

### 结果

`[3, 15, 8, 29, 102, 22].sort()` 的结果是 `[102, 15, 22, 29, 3, 8]`。

### 解释

1. **字符串转换**：
   - 数组中的每个元素首先被转换为字符串。
   - 例如，`3` 转换为字符串 `"3"`，`15` 转换为字符串 `"15"`，`8` 转换为字符串 `"8"`，依此类推。

2. **Unicode 码点排序**：
   - 字符串按照 Unicode 码点进行排序。
   - 例如，`"102"` 的第一个字符是 `"1"`，其 Unicode 码点是 `49`；`"15"` 的第一个字符也是 `"1"`，其 Unicode 码点也是 `49`；`"22"` 的第一个字符是 `"2"`，其 Unicode 码点是 `50`；依此类推。

3. **排序顺序**：
   - 按照字符串的 Unicode 码点排序，结果是 `["102", "15", "22", "29", "3", "8"]`。
   - 由于 `"102"` 的第一个字符是 `"1"`，它排在最前面；`"15"` 的第一个字符也是 `"1"`，但它排在 `"102"` 后面，因为 `"102"` 的第二个字符是 `"0"`，其 Unicode 码点是 `48`，小于 `"5"` 的 Unicode 码点 `53`。

### 正确的数值排序

如果需要按照数值大小进行排序，可以传入一个比较函数给 `sort()` 方法。

```javascript
const arr = [3, 15, 8, 29, 102, 22];
arr.sort((a, b) => a - b);

console.log(arr); // 输出 [3, 8, 15, 22, 29, 102]
```

### 总结

- `[3, 15, 8, 29, 102, 22].sort()` 的结果是 `[102, 15, 22, 29, 3, 8]`，因为 `sort()` 方法默认按照字符串的 Unicode 码点进行排序。
- 如果需要按照数值大小排序，需要传入一个比较函数 `(a, b) => a - b` 给 `sort()` 方法。

## *17. 箭头函数为何不能作为构造函数使用？*

箭头函数（Arrow Functions）是 ES6 引入的一种新的函数语法，它提供了更简洁的语法和更直观的作用域绑定。然而，箭头函数不能作为构造函数使用，主要有以下几个原因：

### 1. 没有 `prototype` 属性

箭头函数没有 `prototype` 属性。构造函数通常会通过 `prototype` 属性来定义实例的方法和属性。由于箭头函数没有 `prototype` 属性，因此不能用于创建实例。

```javascript
const ArrowFunction = () => {};
console.log(ArrowFunction.prototype); // undefined
```

### 2. 没有自己的 `this`

箭头函数没有自己的 `this` 值，它会捕获其所在上下文的 `this` 值。这意味着箭头函数中的 `this` 是词法作用域的 `this`，而不是动态绑定的。构造函数通常需要动态绑定 `this`，以便在创建实例时正确地初始化实例的属性和方法。

```javascript
const ArrowFunction = () => {
this.value = 42; // 这里的 `this` 不是新创建的实例
};

const instance = new ArrowFunction(); // TypeError: ArrowFunction is not a constructor
```

### 3. 没有 `arguments` 对象

箭头函数没有自己的 `arguments` 对象。构造函数通常会使用 `arguments` 对象来处理传入的参数。由于箭头函数没有 `arguments` 对象，因此不能用于构造函数。

```javascript
const ArrowFunction = () => {
console.log(arguments); // 箭头函数中没有 `arguments` 对象
};

ArrowFunction(1, 2, 3); // ReferenceError: arguments is not defined
```

### 4. 没有 `new.target`

箭头函数没有 `new.target` 元属性。构造函数通常会使用 `new.target` 来判断函数是否通过 `new` 关键字调用。由于箭头函数没有 `new.target`，因此不能用于构造函数。

```javascript
const ArrowFunction = () => {
console.log(new.target); // 箭头函数中没有 `new.target`
};

ArrowFunction(); // undefined
```

### 总结

箭头函数不能作为构造函数使用，主要是因为它没有 `prototype` 属性、没有自己的 `this` 值、没有 `arguments` 对象，以及没有 `new.target` 元属性。这些特性使得箭头函数不适合用于创建实例和定义实例的方法和属性。如果你需要定义一个构造函数，应该使用传统的函数声明或函数表达式。

```javascript
function ConstructorFunction() {
this.value = 42;
}

const instance = new ConstructorFunction();
console.log(instance.value); // 42
```



## *18. 对象取值中 a.b.c.d 和 a['b']['c']['d'] 有何区别？*

在 JavaScript 中，`a.b.c.d` 和 `a['b']['c']['d']` 的差异主要体现在 **属性访问方式** 和 **属性名称的灵活性** 上，以下是具体区别：

1. **属性访问的方式**：
   - `a.b.c.d` 是 **点符号**（dot notation）访问属性。只能用于符合变量命名规则的属性名称（例如：不含空格或特殊符号，不能以数字开头等）。
   - `a['b']['c']['d']` 是 **方括号符号**（bracket notation）访问属性。方括号内可以使用字符串，因此可以访问不符合变量命名规则的属性名，比如 `a['b-c']['d e']`。

2. **动态属性名称**：
   - 点符号（`a.b.c.d`）只能用于静态、已知的属性名，因此不能用在动态属性名称的情况下。
   - 方括号符号（`a['b']['c']['d']`）允许动态访问属性，方括号内可以使用变量表示属性名称。例如，`let key = 'b'; a[key]` 可以动态获取 `a.b` 的值。这种特性在属性名未知或需要动态计算时非常有用。

3. **性能**：
   - 在现代 JavaScript 引擎中，两者性能差异极小，一般情况下不会明显影响性能。

**示例**：

```javascript
const a = {
  b: {
    c: {
      'd': 'hello',
      'd e': 'world'  // 属性名包含空格
    }
  }
};

// 点符号
console.log(a.b.c.d);      // 输出 'hello'
// 只能访问符合命名规则的属性，以下会报错
// console.log(a.b.c.d e);

// 方括号符号
console.log(a['b']['c']['d']);    // 输出 'hello'
console.log(a['b']['c']['d e']);  // 输出 'world'

const key = 'b';
console.log(a[key].c.d);          // 动态属性访问，输出 'hello'
```

### 总结
- `a.b.c.d` 适合用于属性名称是已知且符合命名规则的情况。
- `a['b']['c']['d']` 更灵活，可用于包含特殊字符的属性名和动态属性访问场景。

## *19. 为什么普通 for 循环的性能高于 forEach ？*

在 JavaScript 中，`for` 循环和 `forEach` 循环是两种常见的数组遍历方式。虽然它们都可以用于遍历数组，但在性能上有一些差异。通常情况下，`for` 循环的性能高于 `forEach`，原因主要有以下几点：

### 1. 函数调用开销

`forEach` 是一个数组方法，它接受一个回调函数作为参数，并在每次迭代时调用这个回调函数。每次调用回调函数都会产生一定的开销，包括函数调用的堆栈操作、参数传递等。

相比之下，`for` 循环直接在当前作用域中执行代码，没有额外的函数调用开销。

```javascript
const arr = [1, 2, 3, 4, 5];

// 使用 forEach
arr.forEach((item) => {
console.log(item);
});

// 使用 for 循环
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
```

### 2. 作用域链和闭包

`forEach` 的回调函数是一个闭包，它在每次迭代时都会创建一个新的作用域。闭包的创建和作用域链的查找都会带来一定的性能开销。

`for` 循环没有闭包，作用域链的查找开销较小。

```javascript
const arr = [1, 2, 3, 4, 5];

// 使用 forEach
arr.forEach((item) => {
console.log(item);
});

// 使用 for 循环
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
```

### 3. 数组长度缓存

在 `for` 循环中，数组的长度可以被缓存起来，避免在每次迭代时都访问数组的长度属性。

```javascript
const arr = [1, 2, 3, 4, 5];

// 使用 for 循环，缓存数组长度
for (let i = 0, len = arr.length; i < len; i++) {
console.log(arr[i]);
}
```

而在 `forEach` 中，数组长度每次都会被访问，没有缓存机制。

```javascript
const arr = [1, 2, 3, 4, 5];

// 使用 forEach
arr.forEach((item) => {
console.log(item);
});
```

### 4. 中断循环

`for` 循环可以通过 `break` 或 `continue` 语句来中断或跳过迭代，而 `forEach` 无法中断循环，只能通过抛出异常来模拟中断，这会导致额外的性能开销。

```javascript
const arr = [1, 2, 3, 4, 5];

// 使用 for 循环，中断循环
for (let i = 0; i < arr.length; i++) {
if (arr[i] === 3) {
 break;
}
console.log(arr[i]);
}

// 使用 forEach，无法中断循环
try {
arr.forEach((item) => {
 if (item === 3) {
   throw new Error('Break');
 }
 console.log(item);
});
} catch (e) {
// 捕获异常以模拟中断
}
```

### 5. 编译器优化

现代 JavaScript 引擎（如 V8）对 `for` 循环进行了更多的优化，因为 `for` 循环的结构相对简单，更容易进行静态分析和优化。

`forEach` 的回调函数是动态的，引擎难以进行静态分析和优化。

### 总结

- **函数调用开销**：`forEach` 每次迭代都会调用回调函数，产生额外的开销。
- **作用域链和闭包**：`forEach` 的回调函数是闭包，创建和查找作用域链的开销较大。
- **数组长度缓存**：`for` 循环可以缓存数组长度，避免每次迭代都访问数组长度属性。
- **中断循环**：`for` 循环可以通过 `break` 或 `continue` 中断或跳过迭代，而 `forEach` 无法中断。
- **编译器优化**：`for` 循环的结构简单，更容易被编译器优化。

虽然 `for` 循环的性能通常高于 `forEach`，但在实际开发中，选择哪种方式还应考虑代码的可读性和维护性。在大多数情况下，性能差异可能并不显著，因此可以根据具体需求选择合适的遍历方式。

## *20. 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少？*

在 JavaScript 中，数组的索引访问是 **常数时间操作**（O(1)），因为数组元素是通过索引直接定位的，无论是访问第一个元素还是第10万个元素，时间复杂度都是相同的。因此，访问 `arr[0]` 和 `arr[99999]` 所需的时间差异可以忽略不计。

### 原因分析

JavaScript 的数组基于索引存储，底层实现通常是 **动态数组** 或 **稀疏数组**，这使得元素可以直接通过索引位置快速定位到内存地址。现代 JavaScript 引擎针对数组的这种数据结构进行了优化，因此在访问任意索引时速度非常快，不会因为索引的大小而有显著时间差。

### 测试代码示例

尽管理论上时间差异很小，以下是一个简单的测试代码，用于测量访问第一个元素和第10万个元素的时间差：

```javascript
const arr = new Array(100000).fill(0);

// 访问第一个元素
console.time("Access first element");
let first = arr[0];
console.timeEnd("Access first element");

// 访问第10万个元素
console.time("Access last element");
let last = arr[99999];
console.timeEnd("Access last element");
```

运行这个测试后，你通常会发现两个时间几乎相同，甚至可能无法观察到差异。实际执行时间主要受到其他因素（如系统负载、JavaScript 引擎优化等）影响，而非数组的索引位置。

## *21. JavaScript 对象的底层数据结构是什么？*

JavaScript 对象的底层数据结构是基于哈希表（Hash Table）实现的。哈希表是一种高效的数据结构，用于存储键值对，并支持快速的插入、删除和查找操作。JavaScript 对象的属性存储在哈希表中，通过属性名（键）来快速查找对应的值。

### 哈希表的基本原理

哈希表的核心思想是通过哈希函数将键映射到一个固定大小的数组索引，从而实现快速的查找。哈希表的主要操作包括：

1. **插入**：将键值对插入哈希表中。
2. **查找**：通过键查找对应的值。
3. **删除**：通过键删除对应的键值对。

### JavaScript 对象的实现

在 JavaScript 中，对象的属性存储在哈希表中，每个属性名（键）通过哈希函数映射到一个数组索引。哈希表的实现通常包括以下几个部分：

1. **哈希函数**：将属性名转换为数组索引。
2. **数组**：存储键值对的数组，数组的每个元素是一个桶（bucket），桶中存储了多个键值对。
3. **冲突解决**：当多个键映射到同一个索引时，需要解决冲突。常见的解决方法包括链地址法（Chaining）和开放地址法（Open Addressing）。

### 链地址法（Chaining）

在链地址法中，每个数组元素（桶）是一个链表，存储了所有映射到该索引的键值对。当发生冲突时，新的键值对会被添加到链表的末尾。

```javascript
// 示例：链地址法
const hashTable = [];

function hash(key) {
  return key.charCodeAt(0) % 10; // 简单的哈希函数
}

function insert(key, value) {
  const index = hash(key);
  if (!hashTable[index]) {
    hashTable[index] = [];
  }
  hashTable[index].push({ key, value });
}

function get(key) {
  const index = hash(key);
  if (!hashTable[index]) {
    return undefined;
  }
  for (const item of hashTable[index]) {
    if (item.key === key) {
      return item.value;
    }
  }
  return undefined;
}

insert('a', 1);
insert('b', 2);
console.log(get('a')); // 输出 1
console.log(get('b')); // 输出 2
```

### 开放地址法（Open Addressing）

在开放地址法中，当发生冲突时，会寻找下一个可用的空槽（数组索引）来存储键值对。常见的开放地址法包括线性探测、二次探测和双重哈希。

```javascript
// 示例：线性探测
const hashTable = Array(10).fill(null);

function hash(key) {
  return key.charCodeAt(0) % 10; // 简单的哈希函数
}

function insert(key, value) {
  let index = hash(key);
  while (hashTable[index] !== null) {
    index = (index + 1) % hashTable.length;
  }
  hashTable[index] = { key, value };
}

function get(key) {
  let index = hash(key);
  while (hashTable[index] !== null) {
    if (hashTable[index].key === key) {
      return hashTable[index].value;
    }
    index = (index + 1) % hashTable.length;
  }
  return undefined;
}

insert('a', 1);
insert('b', 2);
console.log(get('a')); // 输出 1
console.log(get('b')); // 输出 2
```

### 总结

- **JavaScript 对象的底层数据结构是基于哈希表实现的**。
- **哈希表的核心思想**：通过哈希函数将键映射到数组索引，实现快速的插入、查找和删除操作。
- **常见的冲突解决方法**：链地址法和开放地址法。

理解 JavaScript 对象的底层数据结构有助于更好地掌握对象的性能特点和使用场景。

## *22. JavaScript 中的变量在内存中的具体存储形式是什么*

在 JavaScript 中，变量在内存中的存储形式取决于变量的类型。JavaScript 中的变量可以分为基本类型（Primitive Types）和引用类型（Reference Types）。不同类型的变量在内存中的存储方式有所不同。

### 1. 基本类型（Primitive Types）

基本类型包括以下几种：

- **Number**
- **String**
- **Boolean**
- **Null**
- **Undefined**
- **Symbol**（ES6 引入）
- **BigInt**（ES11 引入）

基本类型的变量直接存储在栈（Stack）内存中。栈内存是一种后进先出（LIFO）的数据结构，用于存储局部变量和函数调用的上下文。

#### 示例

```javascript
let num = 42;
let str = "Hello";
let bool = true;
let n = null;
let undef = undefined;
let sym = Symbol("foo");
let bigInt = 1234567890123456789012345678901234567890n;
```

- **存储形式**：
  - `num`、`str`、`bool`、`n`、`undef`、`sym`、`bigInt` 这些变量的值直接存储在栈内存中。
  - 栈内存中的变量存储的是实际的值，而不是引用。

### 2. 引用类型（Reference Types）

引用类型包括以下几种：

- **Object**
- **Array**
- **Function**
- **Date**
- **RegExp**
- **Map**
- **Set**
- **WeakMap**
- **WeakSet**

引用类型的变量存储在堆（Heap）内存中。堆内存是一种动态分配的内存区域，用于存储复杂的数据结构。

#### 示例

```javascript
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3];
let func = function() { console.log("Hello"); };
let date = new Date();
let map = new Map();
let set = new Set();
```

- **存储形式**：
  - `obj`、`arr`、`func`、`date`、`map`、`set` 这些变量的值存储在堆内存中。
  - 栈内存中存储的是指向堆内存中实际数据的引用（指针）。

### 内存分配和垃圾回收

#### 栈内存

- **栈内存**：用于存储基本类型的变量和函数调用的上下文。
- **特点**：栈内存的分配和释放是自动的，遵循后进先出（LIFO）的原则。
- **生命周期**：栈内存中的变量在作用域结束时自动释放。

#### 堆内存

- **堆内存**：用于存储引用类型的变量。
- **特点**：堆内存的分配和释放是动态的，需要手动管理或通过垃圾回收机制自动管理。
- **生命周期**：堆内存中的变量在没有任何引用指向它们时，会被垃圾回收机制回收。

### 示例分析

```javascript
let num = 42; // 基本类型，存储在栈内存中
let obj = { name: "Alice", age: 30 }; // 引用类型，存储在堆内存中，栈内存中存储指向堆内存的引用

function foo() {
  let localVar = "local"; // 基本类型，存储在栈内存中
  console.log(localVar);
}

foo(); // 函数调用，栈内存中存储函数调用的上下文
```

- **`num`**：存储在栈内存中，值为 `42`。
- **`obj`**：存储在堆内存中，栈内存中存储指向堆内存中 `{ name: "Alice", age: 30 }` 的引用。
- **`foo` 函数调用**：栈内存中存储函数调用的上下文，`localVar` 存储在栈内存中，值为 `"local"`。

### 总结

- **基本类型**：直接存储在栈内存中，存储的是实际的值。
- **引用类型**：存储在堆内存中，栈内存中存储的是指向堆内存中实际数据的引用（指针）。
- **栈内存**：用于存储基本类型的变量和函数调用的上下文，自动分配和释放。
- **堆内存**：用于存储引用类型的变量，动态分配和释放，通过垃圾回收机制管理。

理解 JavaScript 变量在内存中的存储形式有助于更好地掌握变量的生命周期和内存管理机制。

## *23. 说说你对 eval 的理解*

`eval` 是 JavaScript 中的一个内建函数，用于执行一段字符串形式的 JavaScript 代码。这段代码会被当作脚本进行求值，并且在当前的作用域中执行。这意味着，`eval` 函数可以动态地运行任意的 JavaScript 代码，从而具有非常强大的功能，但同时也带来了一些潜在的风险和性能问题。

### 基本语法

```javascript
eval(string);
```

- `string`：包含 JavaScript 代码的字符串。这些代码会在 `eval` 调用时被执行。

### `eval` 的执行机制

1. **在当前作用域中执行代码**：当你传入一个 JavaScript 代码字符串时，`eval` 会解析并执行它。在执行时，代码会在调用 `eval` 的上下文环境中运行，而不是在全局或独立的作用域中运行。

   ```javascript
   let x = 10;
   eval('x = x + 5');
   console.log(x);  // 输出 15
   ```

2. **可以声明和修改变量**：由于 `eval` 会在当前作用域中执行代码，它能够修改作用域中的变量或声明新的变量。

   ```javascript
   let a = 1;
   eval('let b = 2; a = a + b');
   console.log(a);  // 输出 3
   console.log(b);  // 输出 2
   ```

3. **返回值**：`eval` 会返回最后一个表达式的值。如果 `eval` 执行的是一个表达式，它会返回该表达式的结果；如果执行的是一段语句，它会返回 `undefined`。

   ```javascript
   let result = eval('3 + 4');
   console.log(result);  // 输出 7
   ```

### 安全性问题

尽管 `eval` 在某些情况下非常有用，但它存在严重的安全问题，尤其是当它用来执行动态生成的代码时。例如，如果从不信任的源（如用户输入或外部 API）传入字符串给 `eval`，恶意用户可能构造出有害的代码，从而引发 **XSS（跨站脚本攻击）** 或其他安全漏洞。

#### 例子：
```javascript
let userInput = 'alert("Hello!")';
eval(userInput);  // 执行了恶意代码
```

在这个例子中，用户输入的代码被 `eval` 执行，可能会导致不安全的行为。为了避免这种问题，通常建议避免使用 `eval`，或者至少对输入进行严格的验证和清理。

### 性能问题

`eval` 会使 JavaScript 引擎放弃优化，特别是在现代引擎中，许多优化技术依赖于代码的静态分析，而 `eval` 的使用让引擎无法对代码进行优化，因为它无法预知将要执行的代码内容。这会导致性能下降。

- **失去优化机会**：JavaScript 引擎的很多优化手段（如内联缓存、JIT 编译等）依赖于静态分析，`eval` 让这些优化变得不可用。

  ```javascript
  let result = eval('3 + 4');  // 会跳过一些性能优化
  ```

### 替代方案

由于 `eval` 的安全性和性能问题，许多开发者选择避免使用 `eval`，并使用更安全的替代方案：

1. **`JSON.parse()`**：如果你只是需要解析 JSON 字符串，可以使用 `JSON.parse()` 来代替 `eval`，它既安全又高效。

   ```javascript
   let jsonString = '{"name": "Alice", "age": 30}';
   let obj = JSON.parse(jsonString);
   console.log(obj.name);  // 输出 Alice
   ```

2. **`Function` 构造函数**：如果确实需要动态创建并执行代码，可以考虑使用 `Function` 构造函数，它比 `eval` 更加安全，因为它不会访问外部作用域。

   ```javascript
   let fn = new Function('a', 'b', 'return a + b');
   console.log(fn(3, 4));  // 输出 7
   ```

3. **模板字符串和现代语言特性**：使用 JavaScript 的模板字符串（template literals）和其他语言特性可以避免很多动态代码执行的需求。

### 总结

- `eval` 是一个非常强大的功能，允许动态执行 JavaScript 代码，但由于其带来的 **安全风险** 和 **性能问题**，应尽量避免使用。
- 在可行的情况下，使用其他更安全、性能更好的方法来代替 `eval`，如 `JSON.parse()` 或 `Function` 构造函数等。

如果确实需要执行动态代码，应该小心使用，确保输入来源可信，并尽可能限制执行的范围和权限。

## *24. 说说对 new Fu2nction 的理解*

`new Function` 是 JavaScript 中用于动态创建函数的一个构造函数。它允许你通过字符串形式定义函数的主体，从而实现动态生成和执行 JavaScript 代码。与 `eval` 类似，`new Function` 也能执行动态代码，但与 `eval` 相比，它存在一些不同之处，尤其是在作用域和性能方面。

### 语法

```javascript
let func = new Function(arg1, arg2, ..., argN, functionBody);
```

- `arg1, arg2, ..., argN`：这是函数的参数列表（作为字符串传入），可以是任意数量的参数。你可以定义一个或多个参数。
- `functionBody`：这是包含函数主体的字符串，表示函数的实际代码。

### 示例

1. **简单函数创建**

   ```javascript
   let sum = new Function('a', 'b', 'return a + b');
   console.log(sum(3, 4));  // 输出 7
   ```

   在这个例子中，`new Function` 创建了一个接受两个参数 `a` 和 `b` 的函数，并返回它们的和。

2. **无参数函数**

   ```javascript
   let greet = new Function('return "Hello, World!"');
   console.log(greet());  // 输出 "Hello, World!"
   ```

   这个函数没有参数，返回一个固定的字符串 `"Hello, World!"`。

3. **多个参数和动态代码**

   ```javascript
   let multiplyAndAdd = new Function('x', 'y', 'z', 'return (x * y) + z');
   console.log(multiplyAndAdd(2, 3, 4));  // 输出 10
   ```

   这个例子定义了一个接收三个参数的函数，并在函数体内执行乘法和加法运算。

### 主要特点

1. **作用域限制**：
   `new Function` 创建的函数 **始终在全局作用域中执行**。它不访问定义它时的上下文作用域，这与 `eval` 不同。`eval` 会在当前作用域内执行代码，而 `new Function` 始终在全局作用域中执行，因此不能访问外部变量或局部变量。

   ```javascript
   let x = 10;
   let addX = new Function('y', 'return x + y');
   console.log(addX(5));  // 报错 ReferenceError: x is not defined
   ```

   由于 `new Function` 内部代码是全局作用域的，它无法访问 `x`，因为 `x` 定义在函数外部。

2. **字符串化代码**：
   `new Function` 的函数体是通过字符串定义的，类似于动态生成的代码。虽然它不会访问外部作用域，但它可以动态执行任何传入的字符串代码。

3. **性能问题**：
   与 `eval` 类似，`new Function` 也会影响 JavaScript 引擎的优化能力。由于 JavaScript 引擎无法预先知道将执行的代码，使用 `new Function` 时会失去一些静态优化机会。尽管如此，它比 `eval` 更加高效，因为它不会像 `eval` 那样修改当前作用域的变量。

4. **返回值**：
   `new Function` 创建的是一个函数，它始终返回这个函数的结果。如果字符串是有效的 JavaScript 代码，它会根据代码的逻辑返回一个值。

### 使用场景

`new Function` 主要用于以下几种情况：

1. **动态生成函数**：在某些需要根据用户输入或程序的运行时条件动态创建函数的场合，`new Function` 是一个有用的工具。例如，可以根据后台返回的数据动态创建函数。

2. **构建模板或宏**：当你需要根据某些参数来生成复杂的代码片段时，`new Function` 可以作为一个动态模板构建工具。

3. **从外部源执行代码**：如果你需要执行外部来源的代码（比如从服务器加载的 JavaScript 代码），`new Function` 可以作为替代方案来处理。

### 安全性和替代方案

与 `eval` 一样，`new Function` 也存在 **安全性问题**，因为它允许执行动态代码，这可能导致恶意代码的注入。因此，和 `eval` 一样，使用 `new Function` 时需要非常小心，尤其是当你从不可信的来源加载或生成代码时。

如果你只需要根据数据执行一些预定义的操作，最好避免使用 `new Function`，并使用其他更加安全的方式，如对象映射、函数回调、`JSON.parse()` 等。

### 总结

- `new Function` 是一种创建动态函数的方式，允许通过字符串定义函数的参数和主体。
- 它的作用域始终是全局的，无法访问当前上下文的局部变量。
- 虽然 `new Function` 比 `eval` 更加高效，但也有安全性和性能上的问题，特别是在处理外部数据时。
- 在大多数情况下，应该尽量避免使用 `new Function`，除非有特殊需求。

## *25. Javascript 数组中有哪些方法可以改变自身，哪些不可以？*

在 JavaScript 中，数组有很多方法可以操作其元素，有些方法会修改原始数组（即**改变自身**），而有些方法则不会改变原始数组，而是返回一个新的数组或值。以下是对这些方法的详细分类：

### 改变原数组的方法（Mutating Methods）
这些方法会直接修改原数组的内容。大多数情况下，它们会返回修改后的数组或某个值。

1. **`push()`**  
   向数组的末尾添加一个或多个元素，并返回新数组的长度。
   ```javascript
   let arr = [1, 2, 3];
   arr.push(4);  // arr 变成 [1, 2, 3, 4]
   ```

2. **`pop()`**  
   删除数组末尾的元素，并返回该元素。

   ```javascript
   let arr = [1, 2, 3];
   let removed = arr.pop();  // arr 变成 [1, 2], removed 是 3
   ```

3. **`shift()`**  
   删除数组开头的元素，并返回该元素。
   ```javascript
   let arr = [1, 2, 3];
   let removed = arr.shift();  // arr 变成 [2, 3], removed 是 1
   ```

4. **`unshift()`**  
   向数组开头添加一个或多个元素，并返回新数组的长度。
   ```javascript
   let arr = [1, 2, 3];
   arr.unshift(0);  // arr 变成 [0, 1, 2, 3]
   ```

5. **`splice()`**  
   从数组中添加或删除元素，并返回被删除的元素。如果删除元素并插入新元素，它可以同时修改数组。
   ```javascript
   let arr = [1, 2, 3, 4];
   let removed = arr.splice(1, 2, 'a', 'b');  // arr 变成 [1, 'a', 'b', 4], removed 是 [2, 3]
   ```

6. **`sort()`**  
   排序数组中的元素（默认按字符串顺序排序）。

   ```javascript
   let arr = [3, 1, 4, 2];
   arr.sort();  // arr 变成 [1, 2, 3, 4]
   ```

7. **`reverse()`**  
   反转数组中的元素顺序。
   ```javascript
   let arr = [1, 2, 3];
   arr.reverse();  // arr 变成 [3, 2, 1]
   ```

8. **`fill()`**  
   用指定的值填充数组的一部分（从起始索引到结束索引），并返回修改后的数组。

   ```javascript
   let arr = [1, 2, 3, 4];
   arr.fill(0, 1, 3);  // arr 变成 [1, 0, 0, 4]
   ```

9. **`copyWithin()`**  
   浅拷贝数组的一部分到数组的另一部分，修改原数组。
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   arr.copyWithin(0, 3);  // arr 变成 [4, 5, 3, 4, 5]
   ```

### 不改变原数组的方法（Non-Mutating Methods）
这些方法不会修改原数组，它们返回一个新数组或其他值。

1. **`concat()`**  
   合并两个或多个数组，返回一个新数组。
   ```javascript
   let arr1 = [1, 2];
   let arr2 = [3, 4];
   let result = arr1.concat(arr2);  // result 是 [1, 2, 3, 4], arr1 和 arr2 不变
   ```

2. **`slice()`**  
   返回数组的一部分（浅拷贝）。不修改原数组。
   ```javascript
   let arr = [1, 2, 3, 4];
   let result = arr.slice(1, 3);  // result 是 [2, 3], arr 不变
   ```

3. **`map()`**  
   返回一个新数组，其中每个元素是通过调用提供的函数对原数组的元素进行处理得到的结果。
   ```javascript
   let arr = [1, 2, 3];
   let result = arr.map(x => x * 2);  // result 是 [2, 4, 6], arr 不变
   ```

4. **`filter()`**  
   返回一个新数组，包含通过提供的函数过滤后的元素。
   ```javascript
   let arr = [1, 2, 3, 4];
   let result = arr.filter(x => x > 2);  // result 是 [3, 4], arr 不变
   ```

5. **`reduce()`**  
   对数组中的元素进行累加，返回一个单一的值。不会修改原数组。
   ```javascript
   let arr = [1, 2, 3];
   let sum = arr.reduce((acc, val) => acc + val, 0);  // sum 是 6, arr 不变
   ```

6. **`reduceRight()`**  
   从数组的右侧开始进行累加，返回一个单一值，不修改原数组。
   ```javascript
   let arr = [1, 2, 3];
   let sum = arr.reduceRight((acc, val) => acc + val, 0);  // sum 是 6, arr 不变
   ```

7. **`forEach()`**  
   对数组的每个元素执行提供的回调函数，但不返回新数组。它只是遍历数组，不改变原数组。
   ```javascript
   let arr = [1, 2, 3];
   arr.forEach(x => console.log(x));  // 输出 1, 2, 3, arr 不变
   ```

8. **`find()`**  
   返回数组中第一个满足提供的测试函数的元素，如果没有找到则返回 `undefined`。
   ```javascript
   let arr = [1, 2, 3];
   let result = arr.find(x => x > 2);  // result 是 3, arr 不变
   ```

9. **`findIndex()`**  
   返回数组中第一个满足提供的测试函数的元素的索引，如果没有找到则返回 `-1`。
   ```javascript
   let arr = [1, 2, 3];
   let index = arr.findIndex(x => x > 2);  // index 是 2, arr 不变
   ```

10. **`some()`**  
    检查数组中是否至少有一个元素满足提供的测试函数，返回布尔值。
    ```javascript
    let arr = [1, 2, 3];
    let result = arr.some(x => x > 2);  // result 是 true, arr 不变
    ```

11. **`every()`**  
    检查数组中是否所有元素都满足提供的测试函数，返回布尔值。
    ```javascript
    let arr = [1, 2, 3];
    let result = arr.every(x => x > 0);  // result 是 true, arr 不变
    ```

12. **`join()`**  
    将数组的所有元素连接成一个字符串，返回一个新的字符串。
    ```javascript
    let arr = [1, 2, 3];
    let result = arr.join('-');  // result 是 "1-2-3", arr 不变
    ```

### 总结

- **改变原数组的方法**：  
  `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`, `fill()`, `copyWithin()`

- **不改变原数组的方法**：  
  `concat()`, `slice()`, `map()`, `filter()`, `reduce()`, `reduceRight()`, `forEach()`, `find()`, `findIndex()`, `some()`, `every()`, `join()`

理解这些方法的区别非常重要，因为它们在实际开发中可能会对程序的性能和行为产生不同的影响。

## *26. 一直在 window 上面挂内容（数据，方法等等），是否有什么风险？*

将内容（如数据、方法等）挂载在 `window` 对象上，尤其是在浏览器环境中，确实存在一些潜在的风险和问题。`window` 对象代表浏览器的全局作用域，将内容挂载到 `window` 上可能会引发以下几种问题：

### 1. **命名冲突（Namespace Pollution）**
   - 将变量或函数挂到 `window` 上，意味着它们在全局作用域中都是可见的。随着项目的增大，如果不同的脚本或第三方库也将变量挂到 `window` 上，可能会发生**命名冲突**。这种冲突可能导致代码无法正常工作，或者意外覆盖已经存在的全局变量。

```javascript
   window.myVar = 123; // 假设其他地方也使用了 myVar
```
   这种情况下，如果其他脚本也声明了 `window.myVar`，则可能会覆盖它，导致一些意料之外的行为。

### 2. **安全性问题**
   - 由于 `window` 对象在浏览器的全局作用域中是可访问的，将敏感数据（如 API 密钥、用户信息等）直接挂载到 `window` 上，会导致这些数据暴露给潜在的攻击者。攻击者通过浏览器的控制台、脚本注入等方式可以轻松地访问到这些数据，带来严重的安全隐患。

```javascript
   window.apiKey = "my-secret-key";  // 不建议
```

### 3. **全局作用域污染**
   - 将太多的内容挂载到 `window` 上会导致**全局作用域污染**。在 JavaScript 中，访问全局作用域上的变量时会引发性能问题，尤其是当代码较为复杂时。过多的全局变量使得代码难以维护和调试。
   - 在大型项目中，尤其是在团队协作时，污染全局作用域不仅会增加 bug 的发生几率，还会使得不同模块之间的依赖和交互变得更加复杂。

### 4. **调试和维护的难度**
   - 如果一个变量或方法被挂载在 `window` 上且没有任何命名空间或结构，查找代码中的错误会变得更加困难。全局作用域中的变量可能会被意外修改，或者不同脚本之间的相互作用造成不可预期的副作用，导致问题的诊断更加复杂。

### 5. **无法使用模块化和封装**
   - 将内容挂到 `window` 对象上，通常意味着代码缺少模块化和封装。现代 JavaScript（尤其是使用 ES6 模块系统或像 Webpack 等打包工具）提倡将代码封装成模块，以便于管理和重用。将所有东西挂载在 `window` 上则与这种模块化开发模式相悖。
   - 使用模块化方法，可以避免全局变量的污染，并能更好地隔离功能和实现，提高代码的可维护性。

### 6. **可能会影响性能**
   - 虽然将内容挂载到 `window` 上本身不会直接导致性能问题，但全局作用域中的变量和方法会频繁地被访问，尤其是当这些内容非常复杂时，可能会导致一些性能下降。例如，全局对象上的属性查找比局部变量查找慢，而且全局状态的频繁变化也可能导致意外的性能问题。

### 7. **生命周期问题**
   - 将数据或方法挂载在 `window` 对象上时，其生命周期将与页面的生命周期绑定。用户在多个页面之间导航时，这些全局变量可能会被遗留在 `window` 中，造成内存泄漏。尤其在单页面应用（SPA）中，如果不适当管理全局状态，可能会导致内存泄漏，影响性能。

### 解决方案和最佳实践

1. **使用命名空间封装全局变量**  
   如果需要在全局作用域中保存数据或方法，最好将它们封装在一个命名空间对象中，避免直接挂载到 `window` 上。

   ```javascript
   window.myApp = window.myApp || {};  // 确保命名空间存在
   window.myApp.config = { key: 'value' };
   window.myApp.utils = {
     doSomething: function() { ... }
   };
   ```
   这样做可以避免与其他全局变量冲突，并提供了一定的结构性。

2. **使用 `let`、`const` 和模块化开发**
   - 尽量避免使用 `var` 来声明全局变量，而使用模块化方法（如 ES6 模块、CommonJS）来管理代码。通过模块化，我们可以将不同功能的代码分隔开，避免对 `window` 的直接操作。
   - 使用 `import` 和 `export` 语句，将代码分成多个小模块，每个模块有自己的作用域，减少对全局作用域的依赖。

   ```javascript
   // 在 moduleA.js 中
   export const config = { key: 'value' };
   
   // 在其他地方使用
   import { config } from './moduleA';
   ```

3. **避免存储敏感信息在全局作用域中**  
   对于敏感数据（如用户信息、API 密钥等），应避免将其存储在 `window` 对象上。可以使用浏览器的 **`localStorage`** 或 **`sessionStorage`** 存储数据，或者将数据保存在 JavaScript 内部的更安全的变量中。

   ```javascript
   // 不建议这样做
   window.userToken = "sensitiveToken";
   
   // 推荐使用 sessionStorage 或其他安全的存储方式
   sessionStorage.setItem("userToken", "sensitiveToken");
   ```

4. **使用现代框架和库**  
   现代 JavaScript 框架（如 React、Vue、Angular 等）使用组件化和模块化方式来组织代码，避免直接操作 `window` 对象。通过框架的生命周期管理，可以确保代码在不同生命周期的状态管理更加清晰和安全。

### 总结
将数据、方法等挂载到 `window` 上可能会带来一些风险，尤其是命名冲突、安全性问题、全局污染等。因此，建议避免直接将内容挂载到 `window` 上，除非必要。采用模块化开发、命名空间封装和框架提供的最佳实践，能够有效避免这些问题，提高代码的可维护性、安全性和性能。

## *27. Object.prototype.hasOwnProperty() 作用是什么？*

`Object.prototype.hasOwnProperty()` 是 JavaScript 中 `Object` 对象的一个方法，它用于判断一个对象是否具有某个**自身属性**，而不是从其原型链继承的属性。

### 语法
```javascript
obj.hasOwnProperty(prop)
```

- **`obj`**：要检查的对象。
- **`prop`**：要检查的属性名（字符串）。

### 返回值
- 如果对象具有指定的**自身属性**（即对象直接定义的属性，不是继承来的），返回 `true`。
- 如果对象没有该属性或该属性是从原型链继承来的，返回 `false`。

### 特性
- **只检查自身属性**：`hasOwnProperty()` 方法不会检查对象的原型链上的属性。它只返回对象本身的属性，而不考虑从原型继承的属性。
- **不可枚举的属性**：`hasOwnProperty()` 也会正确地返回 `false`，如果属性是不可枚举的。

### 示例

#### 1. 判断对象是否有某个属性
```javascript
const obj = {
  name: 'Alice',
  age: 30
};

console.log(obj.hasOwnProperty('name'));  // true
console.log(obj.hasOwnProperty('gender'));  // false
```

#### 2. 与 `in` 操作符对比
`in` 操作符检查对象及其原型链上的属性。与 `hasOwnProperty()` 不同，`in` 不会区分是否为对象自身的属性。
```javascript
const obj = {
  name: 'Alice',
};

console.log('name' in obj);  // true (因为 name 是 obj 的自身属性)
console.log('toString' in obj);  // true (因为 toString 是从 Object.prototype 继承来的)

console.log(obj.hasOwnProperty('name'));  // true (name 是 obj 自身的属性)
console.log(obj.hasOwnProperty('toString'));  // false (toString 是从原型继承来的)
```

#### 3. 继承的属性
```javascript
function Person() {
  this.name = 'John';
}
Person.prototype.age = 30;

const person = new Person();
console.log(person.hasOwnProperty('name'));  // true (name 是自身属性)
console.log(person.hasOwnProperty('age'));   // false (age 是从原型继承来的)
```

#### 4. 处理 `hasOwnProperty` 的覆盖问题
在某些情况下，如果对象覆盖了 `hasOwnProperty` 方法（例如，使用某些框架或库时），调用 `obj.hasOwnProperty()` 可能会失败。为了解决这个问题，可以直接使用 `Object.prototype.hasOwnProperty`：
```javascript
const obj = {
  hasOwnProperty: function() { return false; },
  name: 'Alice'
};

console.log(Object.prototype.hasOwnProperty.call(obj, 'name'));  // true
```
通过 `call()` 可以显式调用 `Object.prototype.hasOwnProperty`，避免覆盖导致的问题。

### 用途
1. **区分自身属性和继承属性**：最常见的用途是检查一个属性是否是对象的直接属性，而不是继承自其原型链上的属性。

2. **防止属性名称冲突**：在处理继承或混入（mixin）时，`hasOwnProperty()` 可以用来确保你只处理对象本身定义的属性，避免误操作继承的属性。

3. **迭代对象的自身属性**：在遍历对象的属性时，通常会使用 `hasOwnProperty()` 来过滤掉原型链上的属性。
   ```javascript
   const obj = { a: 1, b: 2 };
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       console.log(key, obj[key]);  // 只输出自身属性 a 和 b
     }
   }
   ```

### 总结
`Object.prototype.hasOwnProperty()` 是用来检查一个对象是否拥有某个**自身的属性**的方法，它是区分对象自身属性和原型继承属性的有用工具。在编写代码时，使用 `hasOwnProperty()` 可以避免误操作继承的属性，尤其在需要遍历对象或进行对象合并时尤为重要。

## *28. 哪些原因会导致js里this指向混乱？*

在 JavaScript 中，`this` 关键字的指向是动态的，取决于函数调用的上下文。错误或混乱的 `this` 指向常常会导致意外的行为，以下是一些常见的导致 `this` 指向混乱的原因：

### 1. **普通函数调用**
在普通函数调用时，`this` 的指向取决于调用该函数的上下文。在严格模式下，`this` 会被设置为 `undefined`，而在非严格模式下，`this` 会指向全局对象（在浏览器中是 `window`，在 Node.js 中是 `global`）。

**例子：**
```javascript
function show() {
  console.log(this); // 在浏览器中，这将输出 window 或 undefined（严格模式）
}

show(); // 普通函数调用，this 指向全局对象（浏览器中的 window）
```

### 2. **事件处理器中的 `this`**
在事件处理器中，`this` 的指向通常是触发该事件的 DOM 元素，而不是事件处理函数本身。尤其在匿名函数或箭头函数中，`this` 的指向可能会不同。

**例子：**
```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // this 指向 button 元素
});

// 如果使用箭头函数
button.addEventListener('click', () => {
  console.log(this); // this 在箭头函数中不会改变，指向外部上下文（通常是 window）
});
```

### 3. **方法调用时的 `this`**
当你在对象的方法中使用 `this` 时，`this` 默认指向该对象。但是，如果你将该方法作为回调传递（例如传递给 `setTimeout`、`map` 等），`this` 的指向可能会改变。

**例子：**
```javascript
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  }
};

obj.greet(); // this 指向 obj，输出 "Alice"

const greetFn = obj.greet;
greetFn(); // this 指向全局对象（浏览器中是 window），输出 undefined
```

这种情况通常称为 **方法脱离对象调用**，因为函数被作为普通函数调用时，`this` 不再指向原来的对象。

### 4. **箭头函数**
箭头函数没有自己的 `this`，它会捕获上下文中的 `this`（即词法作用域中的 `this`）。如果箭头函数在一个对象方法中定义，`this` 会指向方法定义时的上下文，而不是方法调用时的对象。

**例子：**
```javascript
const obj = {
  name: 'Alice',
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // this 会指向 obj，因为箭头函数捕获了外部的 this
    }, 1000);
  }
};

obj.greet(); // 输出 "Alice"
```

如果在其他上下文中使用箭头函数，`this` 仍然会指向其定义时的上下文。

### 5. **构造函数和 `new` 关键字**
在使用构造函数时，`this` 会指向新创建的对象。如果没有使用 `new` 关键字，`this` 会指向全局对象（非严格模式下）。

**例子：**
```javascript
function Person(name) {
  this.name = name;
}

const person1 = new Person('Alice'); // this 指向新创建的对象
console.log(person1.name); // "Alice"

const person2 = Person('Bob'); // 没有 new，this 会指向全局对象（浏览器中的 window）
console.log(name); // "Bob" 在非严格模式下，window.name = 'Bob'
```

这种情况可以通过在构造函数内部使用严格模式或强制要求使用 `new` 来避免。

### 6. **`call` 和 `apply` 方法**
使用 `call` 或 `apply` 可以显式地设置 `this` 的指向。`call` 和 `apply` 的第一个参数指定 `this` 指向的对象。

**例子：**
```javascript
function greet() {
  console.log(this.name);
}

const person = { name: 'Alice' };

greet.call(person); // this 指向 person，输出 "Alice"
```

`call` 和 `apply` 方法提供了灵活的方式来改变 `this` 的指向。

### 7. **`bind` 方法**
`bind` 方法返回一个新的函数，并将 `this` 显式绑定到指定的对象。该方法返回的函数不会改变 `this`，即使在调用时 `this` 被修改，绑定的值始终不变。

**例子：**
```javascript
function greet() {
  console.log(this.name);
}

const person = { name: 'Alice' };
const boundGreet = greet.bind(person);

boundGreet(); // this 永远指向 person，输出 "Alice"
```

### 8. **函数作为回调时的 `this`**
当函数作为回调传递时，`this` 的指向通常取决于调用回调的上下文。例如，在 `setTimeout`、`setInterval`、`map`、`forEach` 等方法中，`this` 可能不会指向预期的对象。

**例子：**
```javascript
const obj = {
  name: 'Alice',
  greet: function() {
    setTimeout(function() {
      console.log(this.name);  // this 指向全局对象（在浏览器中是 window）
    }, 1000);
  }
};

obj.greet(); // 输出 undefined，因为普通函数中的 this 指向全局对象
```

为了解决这种问题，可以使用箭头函数或 `bind` 来显式绑定 `this`。

### 9. **`eval()` 和 `setTimeout()` 中的 `this`**
在 `eval()` 或 `setTimeout()` 中执行的代码，如果没有显式绑定 `this`，也会指向全局对象（在浏览器中是 `window`）。

**例子：**
```javascript
setTimeout(function() {
  console.log(this); // this 指向 window（在浏览器中）
}, 1000);
```

如果是箭头函数，`this` 会保持外部作用域的 `this`。

### 10. **使用类（`class`）时的 `this`**
在类的构造函数和方法中，`this` 默认指向当前类的实例（即新创建的对象）。如果类方法被脱离类调用，`this` 可能会失去指向实例的能力。

**例子：**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const person = new Person('Alice');
const greetFn = person.greet;
greetFn(); // this 会指向全局对象，输出 undefined
```

解决方法是使用 `bind` 绑定 `this`，或者直接调用实例的方法。

### 总结
`this` 指向混乱的常见原因通常是因为函数调用的上下文不同。为了避免这些问题，可以使用以下方法：
- 使用箭头函数（它的 `this` 会捕获外部上下文）。
- 使用 `bind`、`call` 或 `apply` 显式绑定 `this`。
- 在对象方法调用时，确保方法不脱离对象调用。
- 在构造函数中始终使用 `new` 关键字。

## *29. 说说对 XMLHttpRequest 对象的了解*

`XMLHttpRequest`（简称 `XHR`）是浏览器提供的一个用于与服务器进行异步通信的接口，通常用于在网页上执行 AJAX 请求。它是实现前端与后端数据交换的重要工具，支持多种类型的 HTTP 请求（如 GET、POST、PUT、DELETE 等）以及响应处理，广泛应用于单页面应用（SPA）和动态网页中。

### 主要功能

1. **发送请求**：`XMLHttpRequest` 允许在不重新加载整个页面的情况下，发送 HTTP 请求并接收响应数据。通过它，开发者可以向服务器发送数据并处理服务器的响应，更新页面内容而无需刷新。

2. **支持异步操作**：`XMLHttpRequest` 支持异步操作，默认情况下，发送请求时不会阻塞 JavaScript 的执行。可以在请求完成时通过回调函数来处理响应数据。

3. **支持同步操作**：`XMLHttpRequest` 也支持同步操作，在请求完成之前会阻塞 JavaScript 的执行，但这种做法不推荐，因为它会导致页面卡顿，影响用户体验。

### 基本使用

以下是使用 `XMLHttpRequest` 发送请求和处理响应的基本步骤。

#### 1. 创建 `XMLHttpRequest` 实例
```javascript
let xhr = new XMLHttpRequest();
```

#### 2. 配置请求
使用 `open()` 方法配置请求，指定请求方法（GET、POST等）、URL、是否异步（true或false）。

```javascript
xhr.open('GET', 'https://api.example.com/data', true);
```

- 第一个参数：请求方法（`GET`、`POST`、`PUT`、`DELETE` 等）。
- 第二个参数：请求的 URL。
- 第三个参数：是否异步，`true` 表示异步，`false` 表示同步（不推荐使用同步）。

#### 3. 设置请求头（可选）
在发送请求之前，可以使用 `setRequestHeader()` 方法设置请求头，特别是在发送 `POST` 请求时，设置 `Content-Type` 非常常见。

```javascript
xhr.setRequestHeader('Content-Type', 'application/json');
```

#### 4. 监听请求状态
使用 `onreadystatechange` 或现代的 `onload`、`onerror` 等事件处理函数来监听请求的状态变化，处理服务器返回的数据。

```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText); // 请求成功，处理响应数据
  }
};
```

- `xhr.readyState`：表示请求的当前状态。常见的状态值有：
  - `0`: 请求未初始化
  - `1`: 服务器连接已建立
  - `2`: 请求已接收
  - `3`: 请求处理中
  - `4`: 请求完成，可以处理响应

- `xhr.status`：HTTP 响应状态码，如 `200` 表示请求成功，`404` 表示未找到资源，`500` 表示服务器错误。

#### 5. 发送请求
```javascript
xhr.send();  // 发送 GET 请求

// 发送 POST 请求时，通常需要传递请求体
xhr.send(JSON.stringify({ key: 'value' }));
```

#### 6. 处理响应数据
可以通过 `responseText`、`responseXML`（如果返回的是 XML 数据）或 `response`（根据请求的返回类型）来获取响应内容。

```javascript
xhr.onload = function() {
  if (xhr.status === 200) {
    // 处理响应数据
    console.log(xhr.responseText); // 获取文本响应
  } else {
    console.error('请求失败，状态码:', xhr.status);
  }
};
```

### 示例：发送 GET 请求
```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log('响应数据:', xhr.responseText);
  } else {
    console.error('请求失败，状态码:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('请求发生错误');
};

xhr.send();
```

### 示例：发送 POST 请求
```javascript
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
  if (xhr.status === 201) {
    console.log('数据已创建:', xhr.responseText);
  } else {
    console.error('请求失败，状态码:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('请求发生错误');
};

const data = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});

xhr.send(data);
```

### 常用属性和方法

- **`xhr.readyState`**：当前请求的状态。
- **`xhr.status`**：HTTP 响应状态码。
- **`xhr.statusText`**：HTTP 响应状态文本。
- **`xhr.responseText`**：响应的文本数据。
- **`xhr.responseXML`**：如果响应类型是 XML，这里返回 XML 文档。
- **`xhr.response`**：根据请求的返回类型，返回不同的数据类型。
- **`xhr.open(method, url, async)`**：初始化请求。
- **`xhr.setRequestHeader(name, value)`**：设置请求头。
- **`xhr.send(data)`**：发送请求。
- **`xhr.abort()`**：取消请求。

### `XMLHttpRequest` 的缺点

1. **API 复杂**：`XMLHttpRequest` 的 API 相对较为繁琐，特别是在处理不同类型的请求和响应时。对于复杂的异步操作，代码可能会显得冗长且不易管理。

2. **回调地狱**：`XMLHttpRequest` 本身并不直接支持 `Promise`，因此开发者需要通过回调函数来处理响应，这可能导致“回调地狱”问题。随着请求链的增加，代码会变得更加难以维护。

3. **跨域请求限制**：`XMLHttpRequest` 在浏览器中默认受到 **同源策略** 的限制。如果客户端和服务器不在同一域下，跨域请求会被浏览器阻止。解决方法通常是通过 JSONP 或服务器端代理。

4. **不支持 Promise**：`XMLHttpRequest` 本身不支持 `Promise`，但可以通过包装或使用 `async/await` 来解决这一问题（或使用 `fetch` API）。

### 现代替代方案：`fetch` API

现代浏览器已经推出了 `fetch` API，它是基于 Promise 的，具有更简洁、更强大的功能，比 `XMLHttpRequest` 更易于使用，并且避免了回调地狱。

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('请求失败:', error));
```

尽管 `XMLHttpRequest` 仍然在很多项目中被使用，但 `fetch` API 是现代开发中的推荐替代方案。

### 总结

`XMLHttpRequest` 是一个历史悠久且强大的对象，用于实现客户端与服务器之间的异步通信。它在早期的 AJAX 技术中扮演了核心角色，虽然 `fetch` API 在现代开发中逐渐取而代之，但 `XMLHttpRequest` 仍然是许多旧代码库和项目中的关键组成部分。理解它的工作原理和用法对于进行前端开发和调试仍然非常有帮助。

## *30. 判断数组的方式有哪些？*

判断数组的方式有多种，每种方法的适用场景和准确度略有不同。以下是 JavaScript 中常见的判断数组的几种方式及其优缺点。

### 1. **`Array.isArray()`**

#### 语法
```javascript
Array.isArray(value)
```

- **返回值**：如果 `value` 是一个数组，则返回 `true`，否则返回 `false`。
- **优点**：这是最可靠、最现代的方法。它是 JavaScript 标准化的 API，能正确判断所有类型的数组，包括通过 `Array` 构造函数创建的数组对象以及跨窗口/跨框架的数组。
- **缺点**：无。

#### 示例
```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({a: 1}));   // false
console.log(Array.isArray('string')); // false
```

### 2. **`instanceof` 运算符**

#### 语法
```javascript
value instanceof Array
```

- **返回值**：如果 `value` 是一个 `Array` 的实例，则返回 `true`，否则返回 `false`。
- **优点**：语法简洁，适用于大多数情况。
- **缺点**：在不同的执行环境（如不同的 iframe 或窗口）中，`Array` 的原型链可能不同，因此可能会导致 `instanceof` 判断失效。

#### 示例
```javascript
console.log([1, 2, 3] instanceof Array); // true
console.log({a: 1} instanceof Array);   // false
```

### 3. **`Object.prototype.toString.call()`**

#### 语法
```javascript
Object.prototype.toString.call(value)
```

- **返回值**：返回一个表示对象类型的字符串。对于数组，返回值是 `"[object Array]"`。
- **优点**：这种方法可以准确判断数据类型，即使在跨窗口或跨 iframe 的环境中也能有效判断。
- **缺点**：语法较为繁琐，且返回值是字符串，需要进行字符串比较。

#### 示例
```javascript
console.log(Object.prototype.toString.call([1, 2, 3]) === '[object Array]'); // true
console.log(Object.prototype.toString.call({a: 1}) === '[object Array]');   // false
console.log(Object.prototype.toString.call('string') === '[object Array]'); // false
```

### 4. **`Array.prototype.isPrototypeOf()`**

#### 语法
```javascript
Array.prototype.isPrototypeOf(value)
```

- **返回值**：如果 `value` 是 `Array` 的实例或从 `Array` 继承的对象，则返回 `true`，否则返回 `false`。
- **优点**：这种方法也可以用来检查一个对象是否是 `Array` 的实例。
- **缺点**：和 `instanceof` 一样，`isPrototypeOf()` 也可能在不同的环境下失效。

#### 示例
```javascript
console.log(Array.prototype.isPrototypeOf([1, 2, 3])); // true
console.log(Array.prototype.isPrototypeOf({a: 1}));   // false
```

### 5. **通过 `constructor` 属性判断**

#### 语法
```javascript
value.constructor === Array
```

- **返回值**：如果 `value` 的构造函数是 `Array`，则返回 `true`，否则返回 `false`。
- **优点**：判断简单，但适用范围有限。
- **缺点**：这个方法可能会受到对象原型链的影响，特别是在对象被修改或者在继承关系中使用时。如果对象的 `constructor` 被修改，可能会导致判断不准确。

#### 示例
```javascript
console.log([1, 2, 3].constructor === Array);  // true
console.log((function() {}).constructor === Array); // false
```

### 6. **通过 `typeof` 判断（不推荐）**

`typeof` 判断通常不适用于数组类型，因为它对于数组和普通对象都会返回 `"object"`。

#### 示例
```javascript
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof {a: 1});    // "object"
```

- **缺点**：`typeof` 无法区分数组和普通对象，因此无法准确判断数组类型。

### 总结

1. **推荐使用 `Array.isArray()`**：这是最准确、最现代化的方法，符合 ES5 标准，能够正确识别数组。
2. **`instanceof`** 和 **`Array.prototype.isPrototypeOf()`**：适用于一般情况，但在跨窗口或跨 iframe 环境中可能不可靠。
3. **`Object.prototype.toString.call()`**：这是一个兼容性强、可靠的老方法，尤其适用于跨环境检测。
4. **`constructor` 属性**：通常不推荐，除非你确保对象的 `constructor` 属性没有被修改。

总之，最推荐的方式是使用 `Array.isArray()`，因为它不仅简单而且在所有情况下都能正确判断数组类型。

## *31. typeof null 的结果是什么，为什么？*

`typeof null` 的结果是 `object`，这看起来是一个错误或设计上的问题，但它是 JavaScript 的一个特性。

### 为什么 `typeof null` 返回 `object`？

这个行为源自 JavaScript 的早期设计。JavaScript 在最初的实现中，将所有的值都表示为“标签”。在最早的 JavaScript 实现中，所有数据类型都通过一个标签来标识，而 `null` 被标识为 `object` 类型。为了兼容旧版代码，现代 JavaScript 保留了这一行为，尽管它已经被认为是一个设计缺陷。

### 具体解释：

1. **历史原因**：
   - 在 JavaScript 的早期版本中，`null` 是一个空的指针，指向“没有对象”的内存位置。在这种情况下，将其类型标记为 `object` 是有意义的，因为在内存中，`null` 可以被表示为空指针，而指针通常被认为是对象。
   - 然而，这一设计缺陷没有被修正，因为它会导致向后兼容性问题，很多代码已经依赖于这一行为。

2. **`typeof` 操作符的行为**：
   - JavaScript 的 `typeof` 操作符用于返回一个表示数据类型的字符串。当你对 `null` 使用 `typeof` 时，它会返回 `"object"`，这并不意味着 `null` 是一个真正的对象，而只是因为 JavaScript 中的一个历史问题。

3. **规范中的定义**：
   - 根据 ECMAScript 规范，`typeof null` 的返回值应该是 `object`，这是由于 JavaScript 在设计时的历史遗留问题。该行为已经被保留以保持向后兼容性，即使现在它被认为是一个错误。

### 示例：

```javascript
console.log(typeof null); // "object"
console.log(null === null); // true
console.log(null == null);  // true
```

### 总结：

- `typeof null` 返回 `object`，是 JavaScript 中的一个历史设计缺陷。
- 这种行为已经存在很长时间，并且没有被修复，以确保向后兼容性。
- `null` 实际上并不是一个对象，它是一个表示“无值”的特殊原始值。

要正确判断一个值是否为 `null`，应直接进行 `null` 的比较：

```javascript
console.log(value === null); // true 或 false
```

## *32. js 函数参数有默认值时，如果传递的参数是 undefined 那么会被默认值赋值吗？*

在 JavaScript 中，如果函数的参数具有默认值，并且你传递给该参数的是 `undefined`，那么该参数会使用默认值。这是因为 `undefined` 被视为“没有提供值”，因此会触发默认值的使用。

### 默认值的行为

JavaScript 在函数参数中设置默认值时，会检查传递的参数值。如果传递的是 `undefined`（即显式传递的值为 `undefined` 或者根本没有传值），则使用默认值。

#### 示例

```javascript
function greet(name = 'Guest') {
console.log('Hello, ' + name);
}

greet('Alice');  // 输出 "Hello, Alice"
greet();         // 输出 "Hello, Guest"
greet(undefined); // 输出 "Hello, Guest"
```

### 解释

- 在 `greet('Alice')` 中，传递了 `"Alice"`，因此默认值 `'Guest'` 不会生效。
- 在 `greet()` 中，未传递任何参数，`name` 会使用默认值 `'Guest'`。
- 在 `greet(undefined)` 中，尽管显式传递了 `undefined`，JavaScript 会将其视为没有提供有效参数，因此 `name` 也会使用默认值 `'Guest'`。

### 为什么传递 `undefined` 会使用默认值？

根据 ECMAScript 规范，**如果参数的值为 `undefined` 或未传递参数**，那么该参数会被赋予默认值。与此不同，如果显式传递了 `null`，则不会使用默认值，而是将 `null` 作为实际参数值传递。

#### 示例：`undefined` 和 `null` 的区别

```javascript
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet(undefined); // 使用默认值，输出 "Hello, Guest"
greet(null);      // 不使用默认值，输出 "Hello, null"
```

- `greet(undefined)`：因为 `undefined` 表示没有传递有效值，所以会使用默认值 `'Guest'`。
- `greet(null)`：`null` 是一个有效的值，它会直接赋值给 `name`，因此不会使用默认值，输出 `'Hello, null'`。

### 总结

- **传递 `undefined`**：会触发默认值的赋值。
- **传递 `null`**：不会触发默认值，参数会被赋值为 `null`。

因此，如果你希望某个参数在没有提供值时使用默认值，传递 `undefined` 会触发这一行为，而传递 `null` 会认为你已经明确指定了 `null` 作为值。

## *33. 什么是伪数组（类数组）？*

**伪数组**（或称为 **类数组**）是指一种具有类似数组结构的对象，它具有一些数组的特性，如 `length` 属性和可以通过下标访问元素，但它并不真正是数组，不能直接使用数组的方法（如 `push()`、`pop()`、`slice()` 等）。

伪数组和数组之间的主要区别是，伪数组并没有数组的原型链，即它没有 `Array.prototype` 上的方法，因此无法直接使用数组的方法。不过，伪数组的元素是通过下标索引访问的，并且具有一个 `length` 属性。

### 伪数组的特点

1. **`length` 属性**：伪数组通常具有一个 `length` 属性，表示数组的长度。
2. **下标索引**：可以像数组一样使用整数索引来访问其中的元素。
3. **不是数组**：伪数组并不是真正的数组，因此它没有数组的一些内置方法（如 `push()`、`pop()`、`shift()`、`unshift()` 等）。
4. **没有 `Array.prototype` 方法**：由于伪数组并没有继承 `Array.prototype`，它不能直接调用数组的方法。

### 常见的伪数组类型

1. **函数的 `arguments` 对象**
   - 每个 JavaScript 函数都会自动提供一个名为 `arguments` 的对象，它包含传递给函数的所有参数。`arguments` 是一个典型的伪数组，具有 `length` 属性和通过索引访问的能力。
   - **示例**：
     ```javascript
     function myFunction() {
       console.log(arguments.length); // 传递参数的数量
       console.log(arguments[0]);     // 访问第一个参数
     }
     
     myFunction(1, 2, 3);  // 输出：3 1
     ```
   - `arguments` 对象是一个伪数组，可以像数组一样通过下标访问元素，但它没有数组的方法。

2. **DOM 节点集合**
   - 在浏览器环境中，通过方法如 `document.getElementsByTagName()` 或 `document.querySelectorAll()` 获取的节点集合也是伪数组。它们包含元素的 `length` 属性和可以通过索引访问节点，但没有数组的方法。
   - **示例**：
     ```javascript
     let divs = document.getElementsByTagName('div');
     console.log(divs.length);  // 获取所有 div 元素的数量
     console.log(divs[0]);      // 获取第一个 div 元素
     ```
   - `divs` 是一个伪数组，不能直接调用数组方法（如 `push()`、`pop()` 等），但它可以通过索引访问元素。

3. **`NodeList` 和 `HTMLCollection`**
   - `NodeList`（如 `document.querySelectorAll()` 返回的对象）和 `HTMLCollection`（如 `document.getElementsByTagName()` 返回的对象）都是伪数组。它们类似数组，可以通过索引访问元素，并且有 `length` 属性，但并没有数组方法。

### 如何将伪数组转换为真正的数组

由于伪数组没有数组的原型方法，我们可以使用一些技巧将伪数组转换为真正的数组，以便使用数组的各种方法。

#### 1. **使用 `Array.prototype.slice.call()`**
   这种方法通过 `Array.prototype.slice` 来将伪数组转换为数组。`slice` 方法返回一个新数组，包含伪数组的元素。

```javascript
   function myFunction() {
     let args = Array.prototype.slice.call(arguments);
     console.log(args);  // 转换为真正的数组
     console.log(args.push); // 可以使用数组方法
   }

   myFunction(1, 2, 3);
```

#### 2. **使用 `Array.from()`**
   `Array.from()` 是 ES6 引入的一个静态方法，用于将类数组对象（如 `arguments`、`NodeList` 等）转换为真正的数组。

```javascript
   function myFunction() {
     let args = Array.from(arguments);
     console.log(args);  // 转换为真正的数组
     console.log(args.push); // 可以使用数组方法
   }

   myFunction(1, 2, 3);
```

#### 3. **使用扩展运算符（Spread Operator）**
   使用扩展运算符（`...`）也是将伪数组转换为数组的一种简便方法。

```javascript
   function myFunction() {
     let args = [...arguments];
     console.log(args);  // 转换为真正的数组
     console.log(args.push); // 可以使用数组方法
   }

   myFunction(1, 2, 3);
```

### 伪数组与数组的区别

| 特性                      | 伪数组                           | 数组                             |
| ------------------------- | -------------------------------- | -------------------------------- |
| **`length` 属性**         | 存在                             | 存在                             |
| **通过索引访问元素**      | 可以通过索引访问元素             | 可以通过索引访问元素             |
| **数组方法（如 `push`）** | 不支持（没有 `Array.prototype`） | 支持（继承自 `Array.prototype`） |
| **类型**                  | 不是 `Array` 类型                | 是 `Array` 类型                  |

### 结论

伪数组是那些具有 `length` 属性和索引访问元素特征的对象，但它们并不是真正的数组。最常见的伪数组包括函数中的 `arguments` 对象和一些 DOM 方法返回的节点集合。为了能够使用数组的方法，我们通常需要将伪数组转换为真正的数组。可以使用 `Array.prototype.slice.call()`、`Array.from()` 或扩展运算符（`...`）来实现这一转换。

## *34. escape、encodeURI、encodeURIComponent 有什么区别？*

`escape`、`encodeURI` 和 `encodeURIComponent` 都是 JavaScript 中用于对字符串进行编码的函数，它们的作用都是将某些字符转义为 URL 编码格式（即，替换为百分号编码的形式）。不过，它们的应用场景和处理方式有所不同。

### 1. `escape`

#### 介绍：
`escape()` 是一个较早的 JavaScript 函数，它将字符串中的非 ASCII 字符（包括汉字、符号等）以及一些保留字符（如 `+`、`&` 等）转义成百分号编码。

- **编码内容**：对所有非 ASCII 字符（包括 0x80 到 0xFF 范围内的字符）进行编码，同时也会对一些常见的特殊字符进行转义（如 `+`、`&`、`=` 等）。
- **不编码**：不会对 ASCII 字符（如字母、数字等）进行编码。

#### 示例：
```javascript
escape("你好，世界!"); // 输出："%u4F60%u597D%uFF0C%u4E16%u754C%21"
escape("hello&world"); // 输出："hello%26world"
```

#### 主要问题：
- `escape()` 已经被弃用，不推荐使用。它不能正确地处理 Unicode 字符，并且会对字符编码范围较广的字符进行转义，可能会导致一些问题。
- 对于 URL 编码时，建议使用 `encodeURI` 或 `encodeURIComponent`。

### 2. `encodeURI`

#### 介绍：
`encodeURI()` 用于对一个完整的 URI（Uniform Resource Identifier）进行编码，确保 URL 中的保留字符（如 `:`, `/`, `?`, `&`, `=`, `#` 等）不会被转义，以免破坏 URI 的结构。

- **编码内容**：会对 URL 中的非 ASCII 字符进行编码，如中文字符等。
- **不编码**：会保留 URL 中的分隔符和特殊字符，如 `:`, `/`, `?`, `&`, `=` 和 `#` 等。

#### 示例：
```javascript
encodeURI("https://example.com/你好?name=张三&age=25"); 
// 输出："https://example.com/%E4%BD%A0%E5%A5%BD?name=%E5%BC%A0%E4%B8%89&age=25"
```

#### 使用场景：
`encodeURI()` 适用于整个 URL 的编码，保留 URL 结构中的保留字符不被编码。

### 3. `encodeURIComponent`

#### 介绍：
`encodeURIComponent()` 用于对 URI 的组成部分（例如参数值）进行编码，它会对 URL 中的所有字符进行编码，包括保留字符（如 `:`, `/`, `?`, `&`, `=`, `#` 等），确保它们不会被误解。

- **编码内容**：会对 URL 中的所有非 ASCII 字符、保留字符进行编码。
- **不编码**：对于字母、数字和其他一些不需要转义的字符不会进行编码。

#### 示例：
```javascript
encodeURIComponent("https://example.com/你好?name=张三&age=25"); 
// 输出："https%3A%2F%2Fexample.com%2F%E4%BD%A0%E5%A5%BD%3Fname%3D%E5%BC%A0%E4%B8%89%26age%3D25"
```

#### 使用场景：
`encodeURIComponent()` 适用于 URL 中的参数部分，特别是需要对参数值进行编码时，确保不破坏 URL 的结构。

### 区别总结

| 函数                   | 适用场景                | 编码哪些字符                    | 不编码哪些字符                       |
| ---------------------- | ----------------------- | ------------------------------- | ------------------------------------ |
| `escape()`             | 已弃用，不推荐使用      | 所有非 ASCII 字符，某些特殊字符 | ASCII 字符（字母、数字）             |
| `encodeURI()`          | 对整个 URI 进行编码     | 非 ASCII 字符                   | URL 中的保留字符（如 `/`, `?`, `&`） |
| `encodeURIComponent()` | 对 URL 参数部分进行编码 | 所有非 ASCII 字符，所有保留字符 | 无                                   |

### 何时使用哪一个？

- **`escape()`**：不推荐使用，已被弃用。如果必须使用，考虑替代方案。
- **`encodeURI()`**：当你要编码整个 URL 时，保留 URL 中的结构符号（如 `:`, `/`, `?`, `&`, `=`）不变，其他字符（如中文、空格等）进行编码。
- **`encodeURIComponent()`**：当你要编码 URL 中的某个部分（尤其是参数值）时，确保对所有特殊字符（包括 `&`, `=`, `/`, `?` 等）进行编码，防止它们影响 URL 结构。

### 示例：
```javascript
let baseUrl = "https://example.com/search";
let query = "你好 世界";   // 包含中文
let queryString = "q=" + encodeURIComponent(query) + "&page=1";

let fullUrl = baseUrl + "?" + queryString;
console.log(fullUrl);
// 输出：https://example.com/search?q=%E4%BD%A0%E5%A5%BD%20%E4%B8%96%E7%95%8C&page=1
```

在这个例子中，`encodeURIComponent` 被用来编码查询参数部分，确保中文字符正确编码。

## *35. use strict是什么，有什么用？*

`"use strict"` 是 JavaScript 中的一种严格模式（Strict Mode），它通过在代码中启用严格的语法规则，使得 JavaScript 的行为更加规范和安全。

### 什么是 `"use strict"`？

- `"use strict"` 是一种字符串字面量，它并不是一个语法结构，而是一个指示符（pragma），用于告诉 JavaScript 引擎启用严格模式。
- 严格模式引入了很多新的规则，它会让一些不安全的行为变得不可用，或者抛出错误，从而帮助开发者避免一些潜在的 bug 和不良的编程习惯。

### 使用 `"use strict"`

- 可以在整个脚本中启用严格模式（放在文件顶部）。
- 也可以在函数中启用严格模式（只在该函数内有效）。

#### 示例：全局启用严格模式

```javascript
"use strict";

var x = 10;  // 正常
undeclaredVar = 20;  // 报错: 由于严格模式下不允许隐式声明变量
```

#### 示例：在函数中启用严格模式

```javascript
function myFunction() {
  "use strict";
  var x = 10;
  undeclaredVar = 20;  // 报错: 在严格模式下不允许隐式声明变量
}
```

### `"use strict"` 的作用和好处

1. **防止意外创建全局变量**  
   在严格模式下，如果你尝试为一个没有声明的变量赋值，JavaScript 会抛出错误。
   ```javascript
   "use strict";
   x = 10;  // 报错：x 没有声明，不能隐式创建全局变量
   ```

2. **禁止删除变量、函数或对象的属性**
   严格模式禁止对某些对象进行删除操作，尤其是不能删除变量、函数或对象的属性。
   ```javascript
   "use strict";
   var obj = { prop: 1 };
   delete obj.prop;  // 报错：不能删除不可配置的属性
   ```

3. **禁止重名参数**  
   在严格模式下，同一个函数不能有两个同名的参数。如果定义了两个同名的参数，JavaScript 会抛出错误。
   ```javascript
   "use strict";
   function test(a, a) {  // 报错：参数重复
     console.log(a);
   }
   ```

4. **不允许使用 `with` 语句**  
   `with` 语句会影响代码的可预测性，它允许你在指定的对象中查找属性并使用它们。严格模式下禁止使用 `with`。
   ```javascript
   "use strict";
   with (Math) {   // 报错：禁用 with 语句
     console.log(sqrt(16));
   }
   ```

5. **修正 `eval` 的行为**  
   严格模式下，`eval` 函数不会引入变量到外部作用域，而是保持自己独立的作用域。
   ```javascript
   "use strict";
   var x = 1;
   eval("var x = 2;");  // 在严格模式下，不会影响外部的 x
   console.log(x);  // 输出 1
   ```

6. **增加代码优化机会**  
   严格模式下，JavaScript 引擎可以进行更深入的优化，因为它知道某些不安全的行为已经被禁止。这有助于提高代码的执行效率。

7. **防止给只读属性赋值**
   在严格模式下，如果你尝试给只读属性赋值，会抛出错误。
   ```javascript
   "use strict";
   var obj = {};
   Object.defineProperty(obj, "prop", {
     value: 10,
     writable: false
   });
   obj.prop = 20;  // 报错：不能修改只读属性
   ```

### 严格模式对开发者的帮助

- **代码更安全**：通过禁止某些危险的功能（如隐式全局变量、`with` 语句等），代码更加可预测和安全。
- **更容易调试**：严格模式下的错误报告更加严格，能及时发现潜在的 bug。例如，变量的重复声明会抛出错误，而非默默地覆盖原有变量。
- **提升性能**：由于 JavaScript 引擎可以对严格模式下的代码做更多的优化，因此执行速度可能会有所提升。

### 总结

- `"use strict"` 是 JavaScript 的严格模式，它帮助开发者编写更安全、规范的代码。
- 它禁止了一些不安全的 JavaScript 行为（如隐式创建全局变量、`with` 语句、重复参数等），并对一些潜在的错误（如只读属性赋值、删除不可删除属性等）进行检查。
- 严格模式可以在整个脚本中启用，也可以在函数内局部启用。

## *36. JS 中的数组和函数在内存中是如何存储的？*

在 JavaScript 中，**数组**和**函数**是对象类型的特殊实例，它们在内存中的存储方式有一些共同点，但也有不同的地方。下面我将分别讲解数组和函数在内存中的存储方式。

#### 1. **JavaScript 数组的内存存储**

JavaScript 数组实际上是一个对象类型，它具有与普通对象不同的结构。数组在内存中存储时，主要有以下几个特性：

#### 数组的内存分配：

- **数组是对象**：JavaScript 中的数组本质上是一个对象。与普通对象一样，数组在内存中存储的是一组键值对，其中键是数组的索引（从 `0` 开始），值是数组中的元素。
- **稀疏数组（Sparse Array）**：数组不一定是连续的。尽管数组有一个 `length` 属性，但它不要求数组的所有索引位置都有值。例如，如果数组索引 `0` 和 `2` 有值，而索引 `1` 没有值，那么数组的长度仍然是 3，但它是稀疏的，这可能会影响内存分配和访问效率。

#### 数组存储方式：

- **数组是动态分配的**：JavaScript 的数组是动态调整大小的，具体取决于你往数组中添加多少元素。初始时，数组可能只分配了一小块内存，当你添加更多元素时，内存会自动增长。数组长度的调整和元素的添加通常是通过内存重新分配来完成的。
- **连续内存块**：对于比较紧凑的数组，JavaScript 引擎可能会分配一块连续的内存块，优化对数组元素的访问。这种方式的内存布局类似于其他语言中的数组。
- **性能优化**：现代 JavaScript 引擎（如 V8、SpiderMonkey）通常会对数组进行性能优化。对于小数组，可能会采取类似 "数组缓冲区"（Array Buffer）技术，将数组存储在一个连续的内存区域；而对于大的、稀疏的数组，可能会采用链表或其他形式的分配方式。

#### 数组的典型内存结构：

```javascript
let arr = [1, 2, 3];
```

- 数组 `arr` 是一个对象，它的键是 `0`, `1`, `2`，而值分别是 `1`, `2`, `3`。它会占用一块内存区域，`arr` 的 `length` 属性指示数组的长度（在这个例子中是 `3`）。

- 对于稀疏数组，可能有如下内存结构：

  ```javascript
  let sparseArr = [1, , 3];  // 第二个元素为空
  ```

  这里，`sparseArr` 占用的内存可能不是连续的，索引 `1` 可能没有分配内存，而是通过空洞的方式表示。

#### 2. **JavaScript 函数的内存存储**

函数在 JavaScript 中是对象类型的特殊实例，它们不仅包含执行的代码，还包括一些其他的属性（如 `name`、`length` 等）。函数在内存中的存储也有一些特殊之处。

#### 函数的内存分配：

- **函数是对象**：函数在 JavaScript 中本质上是一个对象，它具有函数对象的特性。除了可以调用执行外，函数对象还可以拥有属性和方法。
- **闭包（Closure）**：函数在定义时会创建一个与其执行上下文相关的闭包。闭包捕获函数定义时的作用域（即变量、参数等）。因此，函数内的变量（包括函数参数和局部变量）会在内存中长期保留，直到函数的引用被销毁。

#### 函数的存储方式：

- **函数声明和函数表达式**：
  - **函数声明**：当函数以声明的形式出现时，它的代码会被立即解析并加载到内存中，函数的名称会被添加到作用域链中。
  - **函数表达式**：当函数通过表达式创建时，只有在该表达式执行时，函数才会被创建并分配内存。

#### 函数的典型内存结构：

```javascript
function myFunction(a, b) {
  return a + b;
}
```

- `myFunction` 是一个函数对象，在内存中，它占用一块存储空间，包含：
  - 函数的代码（即 `return a + b;`）。
  - 与该函数相关的上下文（如局部变量 `a` 和 `b`）。
  - 可能有的闭包（即它引用的外部变量，虽然这个例子中没有）。

#### 闭包和内存管理：

当一个函数被定义在另一个函数的内部时，外部函数的局部变量会被内存保留，直到内部函数不再被引用。这就是所谓的 **闭包**，它允许内部函数访问外部函数的变量，甚至在外部函数已经执行完毕后。

#### 内存回收

在 JavaScript 中，内存管理是自动进行的。引擎使用 **垃圾回收机制** 来回收不再被引用的内存。对于数组和函数：

- **数组的内存回收**：如果数组不再被引用（例如，它被赋值为 `null` 或离开作用域），相关的内存就会被标记为可回收，垃圾回收器会在适当的时候释放这些内存。
- **函数的内存回收**：函数内的局部变量和闭包会在不再被引用时被垃圾回收。对于全局函数或长时间存在的函数，它们的内存不会立即回收，直到没有任何引用指向它们。

#### 总结

- **数组的存储**：数组是对象，因此它的元素存储在对象的属性中。对于稀疏数组，可能会使用不同的内存布局方式。数组是动态分配的，根据其元素数量自动调整内存。
- **函数的存储**：函数是对象类型，包含代码和与之相关的作用域。函数可能会有闭包，闭包中的变量会一直保留在内存中，直到闭包不再被引用。

JavaScript 引擎通过垃圾回收机制管理这些对象（数组和函数）的内存，自动释放不再使用的内存块，从而避免内存泄漏。

## *37. 普通函数动态参数 和 箭头函数的动态参数有什么区别？*

在 JavaScript 中，普通函数和箭头函数处理动态参数（如 `arguments` 对象）有显著的区别。主要的区别在于 **`arguments` 对象的存在与作用**，以及它们的 `this` 绑定方式。

### 1. **普通函数的动态参数：`arguments` 对象**

普通函数（即传统的函数声明或函数表达式）会提供一个 `arguments` 对象，该对象是一个类数组对象，包含了传递给函数的所有参数。即使在函数定义时未显式列出参数，`arguments` 对象也会记录所有传入的实参。

#### 特性：
- **`arguments` 是类数组对象**：它包含所有传递给函数的参数，可以通过索引访问，但它并不具备数组的方法（如 `push()`、`pop()` 等）。
- **`arguments` 对象会自动更新**：如果调用函数时传入的参数个数发生变化，`arguments` 对象会自动反映这些变化。

#### 示例：普通函数中的 `arguments` 对象

```javascript
function sum() {
  console.log(arguments);  // 输出传入的所有参数
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));  // 输出：6
```

在这个例子中，`arguments` 会保存传递给 `sum` 函数的所有参数，即使 `sum` 函数没有显式声明参数。`arguments` 会包含 `1`、`2` 和 `3`，并且可以通过 `arguments[i]` 访问。

### 2. **箭头函数的动态参数**

箭头函数并没有自己的 `arguments` 对象。箭头函数会 **继承** 它所在外部函数的 `arguments` 对象，而不是创建一个新的 `arguments` 对象。这是因为箭头函数不具备自己的 `this` 和 `arguments`，它们会从词法作用域继承这些值。

#### 特性：
- **箭头函数没有自己的 `arguments`**：它会从外部函数（即它被定义时所在的函数或上下文）继承 `arguments` 对象。
- **没有 `arguments` 动态参数**：如果你在箭头函数中直接访问 `arguments`，你得到的是外部函数的 `arguments` 对象，而不是箭头函数本身的参数。

#### 示例：箭头函数中的 `arguments` 对象

```javascript
function outer() {
  console.log(arguments);  // 记录传入 `outer` 函数的所有参数

  const arrowFunc = () => {
    console.log(arguments);  // 继承自外部函数 `outer` 的 `arguments`
  };

  arrowFunc(4);  // 箭头函数内的 `arguments` 仍然是外部函数 `outer` 的 `arguments`
}

outer(1, 2, 3);  // 输出： [1, 2, 3]
```

在这个例子中，尽管我们在箭头函数 `arrowFunc` 中传入了一个参数 `4`，但 `arrowFunc` 依然继承了外部函数 `outer` 的 `arguments` 对象，而不是使用它自己的 `arguments`。所以，`arguments` 中仍然包含了外部函数 `outer` 的参数 `[1, 2, 3]`，而没有箭头函数传入的 `4`。

### 3. **普通函数 vs 箭头函数的 `arguments` 对比**

| 特性                         | 普通函数                                    | 箭头函数                                                     |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| **是否有 `arguments` 对象**  | 有：每个普通函数都有自己的 `arguments` 对象 | 没有：箭头函数没有自己的 `arguments`，它会继承外部函数的 `arguments` |
| **`arguments` 的作用域**     | `arguments` 对象属于当前函数作用域          | 继承自外部函数作用域的 `arguments`                           |
| **是否可以修改 `arguments`** | 可以修改，`arguments` 是动态的              | 不可修改，因为箭头函数没有自己的 `arguments`                 |
| **传递参数的方式**           | 使用 `arguments` 可以获取所有传入的参数     | 无法直接访问自己的参数，但可以访问外部函数的 `arguments`     |

### 4. **示例：比较普通函数和箭头函数**

#### 普通函数示例

```javascript
function foo() {
  console.log(arguments);  // 直接使用 arguments
  arguments[0] = 99;
  console.log(arguments);  // arguments 会被修改
}

foo(1, 2, 3);  // 输出： [1, 2, 3] -> [99, 2, 3]
```

#### 箭头函数示例

```javascript
function bar() {
  console.log(arguments);  // 外部函数的 arguments

  const arrow = () => {
    console.log(arguments);  // 继承自外部函数的 arguments
  };

  arrow(4);  // 输出：[1, 2, 3]（继承外部函数 bar 的 arguments）
}

bar(1, 2, 3);  // 输出：[1, 2, 3]
```

### 总结

- **普通函数**：每个普通函数都有一个自己的 `arguments` 对象，可以通过该对象访问所有传入的参数，即使没有显式声明。
- **箭头函数**：箭头函数没有自己的 `arguments` 对象，它会继承外部函数的 `arguments` 对象。这意味着箭头函数无法像普通函数那样独立访问自己的动态参数。

因此，在需要动态参数和访问 `arguments` 对象的情况下，应该使用普通函数。如果你不需要 `arguments` 对象且希望更简洁的语法，可以使用箭头函数。

## *38. 函数声明与函数表达式有什么区别*

函数声明（**Function Declaration**）和函数表达式（**Function Expression**）是 JavaScript 中定义函数的两种常见方式。它们在语法、作用域处理、提升等方面存在一些区别。下面我将详细阐述这两者的区别：

### 1. **语法区别**

#### 函数声明（Function Declaration）

函数声明是通过 `function` 关键字直接声明一个命名函数。它通常位于代码块的顶部，并且具有一个函数名称。

```javascript
function myFunction() {
console.log('Hello, world!');
}
```

#### 函数表达式（Function Expression）

函数表达式是将一个匿名或命名函数赋值给变量。它可以是匿名的（即没有名字），也可以是命名的。函数表达式通常用于作为回调函数或在动态创建函数时使用。

```javascript
const myFunction = function() {
console.log('Hello, world!');
};
```

函数表达式可以是**匿名**的，也可以是**命名**的：

```javascript
const myFunction = function namedFunction() {
console.log('Hello, world!');
};
```

### 2. **提升（Hoisting）**

- **函数声明**：函数声明会被**提升**到当前作用域的顶部。这意味着你可以在声明函数之前调用它。

  ```javascript
  myFunction(); // 可以正常调用，因为函数声明会被提升

  function myFunction() {
    console.log('Hello, world!');
  }
  ```

  在这个例子中，尽管 `myFunction()` 被调用时函数声明还未出现在代码中，但由于函数声明的提升，代码仍然能够正常执行。

- **函数表达式**：函数表达式不会被提升，只有在函数表达式所在的行执行时，函数才会被创建并赋值给变量。因此，**在定义之前调用会导致错误**。

  ```javascript
  myFunction();  // TypeError: myFunction is not a function
  
  const myFunction = function() {
    console.log('Hello, world!');
  };
  ```

  在这个例子中，函数表达式被赋值给变量 `myFunction`，但因为函数表达式不会提升，所以在声明之前调用 `myFunction()` 会导致错误。

### 3. **命名与匿名**

- **函数声明**：函数声明是具名的，因为你必须为函数指定一个名称。这意味着它可以在函数体内或外部使用其名称进行递归调用或引用。

- **函数表达式**：函数表达式通常是匿名的，即没有名称，尽管你也可以为它命名（如上所示）。匿名函数表达式常用于回调函数或作为参数传递。

  ```javascript
  // 匿名函数表达式
  const myFunction = function() {
    console.log('Hello, world!');
  };
  
  // 命名函数表达式
  const myFunction = function namedFunction() {
    console.log('Hello, world!');
  };
  ```

### 4. **作用域**

- **函数声明**：函数声明会在函数所在的作用域内被提升，并且可以在作用域内任何地方调用它。

- **函数表达式**：函数表达式创建的是一个变量，并且这个变量只会在表达式执行后可用。因此，函数表达式的作用域更为有限，函数在声明之前是不可用的。

### 5. **递归**

- **函数声明**：可以在函数内部直接使用其名称进行递归调用。

  ```javascript
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(5));  // 输出 120
  ```

- **函数表达式**：如果你使用函数表达式来定义递归函数，你需要确保你在函数体内使用的是变量名，而不是 `function` 关键字。即使函数表达式是命名的，递归时必须使用变量名。

  ```javascript
  const factorial = function(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);  // 使用变量名进行递归
  };
  console.log(factorial(5));  // 输出 120
  ```

### 6. **事件处理和回调函数**

函数表达式经常用于回调函数和事件处理程序中，因为它们允许将函数作为参数传递并动态定义。

```javascript
setTimeout(function() {
  console.log('This is a callback!');
}, 1000);
```

在这种情况下，`setTimeout` 接受一个函数表达式作为回调函数。使用函数表达式的优势在于它们通常是匿名的，不需要预先定义函数名称。

### 7. **函数表达式的 IIFE（Immediately Invoked Function Expression）**

函数表达式也可以立即执行，这种模式称为 **IIFE**（立即调用的函数表达式）。这种模式在 JavaScript 中非常常见，尤其是用于创建私有作用域或模块。

```javascript
(function() {
  console.log('This is an IIFE!');
})();  // 立即调用
```

### 总结

| 特性         | 函数声明                                 | 函数表达式                              |
| ------------ | ---------------------------------------- | --------------------------------------- |
| **语法**     | `function myFunction() { ... }`          | `const myFunction = function() { ... }` |
| **提升**     | 会被提升到作用域顶部，可以在声明之前调用 | 不会提升，必须在定义后才能调用          |
| **命名**     | 必须有函数名                             | 可以是匿名函数或命名函数                |
| **作用域**   | 在作用域内任何地方都可以调用             | 只能在定义后调用，受限于表达式的位置    |
| **递归**     | 可以直接通过函数名递归调用               | 需要通过变量名来进行递归调用            |
| **常用场景** | 适用于定义常规函数和递归函数             | 适用于回调函数、匿名函数和 IIFE         |

### 何时使用哪种方式？

- **函数声明**：当你需要一个在作用域内任意地方都可以调用的函数时，使用函数声明。它支持提升，因此你可以在函数定义之前调用它。
- **函数表达式**：当你需要一个动态定义、作为参数传递的函数，或者需要一个即时执行的函数时，使用函数表达式。它适用于回调、事件处理、匿名函数等场景。

## *39. JS 创建对象的方式有哪些？*

在 JavaScript 中，创建对象有多种方式，每种方式在语法和使用场景上都有一定的区别。下面详细介绍几种常见的创建对象的方法：

### 1. **字面量方式（Object Literal）**

这是最常用且简洁的创建对象的方法。使用大括号 `{}` 来定义一个对象，可以直接初始化对象的属性和方法。

#### 示例：
```javascript
const person = {
name: 'John',
age: 30,
greet: function() {
 console.log('Hello, ' + this.name);
}
};

person.greet();  // 输出: Hello, John
```

- **优点**：简洁、直观，适合快速创建对象，且可以直接初始化属性。
- **缺点**：无法在运行时动态创建多个不同的对象实例。

### 2. **使用 `new Object()`**

通过 `new Object()` 创建一个空对象，通常与字面量方式相对。你可以使用 `.` 或 `[]` 语法给对象添加属性。

#### 示例：
```javascript
const person = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
  console.log('Hello, ' + this.name);
};

person.greet();  // 输出: Hello, John
```

- **优点**：可以通过构造函数来创建空对象并动态添加属性。
- **缺点**：相比字面量方式，它的语法冗长，不常用。

### 3. **构造函数方式（Constructor Function）**

通过构造函数来创建对象。构造函数是一种特殊的函数，用来创建具有相同结构和方法的多个实例。

#### 示例：
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

person1.greet();  // 输出: Hello, John
person2.greet();  // 输出: Hello, Jane
```

- **优点**：可以创建多个对象实例，适用于对象有共同属性和方法的情况。
- **缺点**：构造函数的每个实例都有自己的方法副本，导致内存占用增加。为了避免这种问题，可以将方法移到原型上（`prototype`）。

### 4. **使用 `Object.create()` 方法**

`Object.create()` 方法创建一个新对象，使用指定的原型对象和可选的属性来初始化它。它适合在需要指定对象原型时使用。

#### 示例：
```javascript
const personProto = {
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

const person = Object.create(personProto);
person.name = 'John';
person.age = 30;

person.greet();  // 输出: Hello, John
```

- **优点**：允许创建具有指定原型的新对象。可以更灵活地定义对象继承结构。
- **缺点**：语法稍微复杂一些，不像字面量方式直观。

### 5. **类（Class）语法（ES6+）**

从 ECMAScript 6（ES6）开始，JavaScript 引入了类（`class`）的概念。类本质上是构造函数的语法糖，但它使得对象的创建更加清晰和面向对象。

#### 示例：
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello, ' + this.name);
  }
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

person1.greet();  // 输出: Hello, John
person2.greet();  // 输出: Hello, Jane
```

- **优点**：语法更加简洁和清晰，支持继承，易于理解和维护。
- **缺点**：ES6+ 才支持此语法，旧浏览器不支持，需要 Babel 转译。

### 6. **使用 `new` 操作符与内建构造函数（如 `Date`, `RegExp`, `Array` 等）**

JavaScript 提供了一些内建构造函数，如 `Array`、`Date`、`RegExp` 等，可以通过 `new` 操作符来创建这些类型的对象。

#### 示例：
```javascript
const date = new Date();  // 创建一个日期对象
const arr = new Array(5); // 创建一个包含 5 个空元素的数组

console.log(date);  // 输出当前日期和时间
console.log(arr);   // 输出: [ <5 empty items> ]
```

- **优点**：可以用来创建日期、正则表达式、数组等内建对象。
- **缺点**：这些构造函数不是用来创建自定义对象的，主要是针对特定类型的对象。

### 7. **使用 `function` 创建“类”对象**

这种方式类似于构造函数，但通常我们把它用于表示一些更具体的功能，创建对象实例。

#### 示例：
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}

const john = new Person('John', 30);
john.greet();  // 输出: Hello, John
```

- **优点**：动态创建对象，适合用来创建多个实例。
- **缺点**：和普通构造函数一样，可能会重复创建方法。

---

### 总结

JavaScript 中创建对象的方式有很多，每种方式有其特定的适用场景：

1. **字面量方式**：简洁且常用，适合快速定义单一对象。
2. **`new Object()`**：不常用，相比字面量方式语法冗长。
3. **构造函数方式**：用于创建多个具有相同结构和方法的实例。
4. **`Object.create()`**：用于在创建对象时指定原型，灵活性更高。
5. **类语法**：ES6 引入的类语法，适合面向对象编程，简洁且强大。
6. **内建构造函数**：如 `Array`、`Date` 等，适用于创建内建类型对象。

通常，**字面量方式**是最常用的方式，因为它简洁且易于理解。如果需要创建多个对象实例，**构造函数**或**类**是更好的选择。

## *40. hasOwnProperty 与 instanceof 有什么区别*

`hasOwnProperty` 和 `instanceof` 都是 JavaScript 中用于检查对象的特性和类型的方法，但它们有不同的用途和工作原理。

### 1. **`hasOwnProperty`**

`hasOwnProperty` 是对象的一个方法，用来检查一个对象是否包含某个特定的属性，并且该属性是否是该对象自身的（而不是继承来的）。

- **返回值**：如果对象自身有指定的属性（即这个属性不是继承自原型链的），则返回 `true`，否则返回 `false`。
- **用途**：用于检查对象是否具有某个属性，尤其是防止检查继承自原型链上的属性。

#### 示例：
```javascript
const person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('toString'));  // false
```

- 在上面的例子中，`'name'` 是 `person` 对象自身的属性，所以 `hasOwnProperty` 返回 `true`，而 `'toString'` 是从 `Object` 原型继承来的属性，所以返回 `false`。

### 2. **`instanceof`**

`instanceof` 是一个运算符，用来检查一个对象是否是某个构造函数的实例，或者是否继承自某个构造函数的原型链。

- **返回值**：如果对象是构造函数的实例，或者是其原型链上的对象，返回 `true`，否则返回 `false`。
- **用途**：用于判断对象的类型或其构造函数是否匹配。

#### 示例：
```javascript
function Person(name) {
  this.name = name;
}

const john = new Person('John');

console.log(john instanceof Person);  // true
console.log(john instanceof Object);  // true
console.log(john instanceof Array);   // false
```

- 在上面的例子中，`john instanceof Person` 返回 `true`，因为 `john` 是通过 `Person` 构造函数创建的实例。`john instanceof Object` 返回 `true`，因为所有对象最终都继承自 `Object` 原型。`john instanceof Array` 返回 `false`，因为 `john` 不是 `Array` 的实例。

### 主要区别

| 特性           | `hasOwnProperty`                                         | `instanceof`                                             |
| -------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| **用途**       | 检查对象是否具有某个属性（不检查继承的属性）             | 检查对象是否是某个构造函数的实例或其原型链上的对象       |
| **检查的内容** | 检查对象自身的属性，忽略继承的属性                       | 检查对象是否是某个构造函数的实例或继承自其原型链上的对象 |
| **工作原理**   | 通过对象的原型链调用 `hasOwnProperty` 方法来检查自身属性 | 通过对象的原型链检查对象是否是构造函数的实例             |
| **返回值**     | `true` 或 `false`，表示对象是否拥有指定属性              | `true` 或 `false`，表示对象是否是某个类型的实例          |
| **常用场景**   | 确保属性是对象自身的，不是继承来的                       | 判断对象的类型或构造函数                                 |

### 何时使用哪种方式？

- **使用 `hasOwnProperty`**：当你需要确保一个属性是对象本身定义的，而不是从原型链继承来的时候。
- **使用 `instanceof`**：当你需要判断一个对象是否属于某个特定的类型或是否是某个构造函数的实例时。

两者有不同的应用场景，`hasOwnProperty` 更关注属性的存在与否，`instanceof` 更关注对象的类型和继承关系。

## *41. 原型链的终点是什么？*

在 JavaScript 中，原型链（**Prototype Chain**）是一个用于继承和共享属性和方法的机制。每个对象都有一个内部属性 `[[Prototype]]`，指向另一个对象，这个对象被称为该对象的原型。原型链的终点是 `null`，也就是说，每个对象的原型最终都会指向 `null`，这是原型链的终结者。

### 原型链的结构

当你访问对象的属性或方法时，JavaScript 会首先检查对象本身是否有该属性。如果没有，JavaScript 会查找该对象的原型对象。如果原型对象上也没有该属性，它就会继续查找原型对象的原型，直到找到该属性或者到达原型链的终点 `null` 为止。

### 原型链的终点

- **`null`**：所有 JavaScript 对象的原型链最终都会以 `null` 作为终点。当一个对象的原型指向 `null` 时，说明它已经到达了原型链的底部，再也没有其他的原型可以查找了。
- **`Object.prototype`**：大多数对象的原型链最终会指向 `Object.prototype`，这是所有对象的根原型。`Object.prototype` 本身的原型链终点是 `null`。

### 示例：原型链的示意图

```javascript
// 创建一个简单的对象
const person = {
  name: 'John'
};

// Object.prototype 是所有对象的最终原型
console.log(person.toString);  // 可以调用到 Object.prototype 的方法
console.log(person.__proto__); // 访问 person 的原型，即 Object.prototype

// Object.prototype 的原型是 null
console.log(person.__proto__.__proto__); // null
```

在上面的代码中：
1. `person` 是一个普通对象，它的原型是 `Object.prototype`。
2. `Object.prototype` 的原型是 `null`，这标志着原型链的结束。

### 总结

- 原型链的终点是 `null`，这意味着对象的原型链会一直追溯到 `Object.prototype`，然后到达 `null`。
- 每个对象都有一个 `[[Prototype]]` 内部属性，它指向其构造函数的 `prototype` 属性。
- 原型链通过继承机制使得对象可以访问原型对象上的属性和方法，直到找到为止，或者最终达到 `null`，表示原型链的终点。

原型链的终点是 `null`，这意味着当我们访问某个对象的属性或方法时，如果沿着原型链找不到这个属性或方法，最终会返回 `undefined`，并且我们不会再继续往下查找。

## *42. 如何冻结一个 JS 对象？*

在 JavaScript 中，冻结一个对象意味着使该对象变得**不可修改**，即不能新增、删除属性，也不能修改现有属性的值。冻结对象的主要方法是 `Object.freeze()`。

### `Object.freeze()` 方法

`Object.freeze()` 方法可以用来冻结一个对象，它返回冻结后的对象，并且该对象变为**不可变**。被冻结的对象将不能再进行以下操作：

- **添加新属性**
- **删除现有属性**
- **修改现有属性的值**
- **修改现有属性的可写性、可枚举性和配置性**

### 示例

```javascript
const person = {
  name: 'John',
  age: 30
};

Object.freeze(person);  // 冻结对象

// 尝试修改对象的属性
person.age = 35;  // 无效操作
person.name = 'Jane';  // 无效操作

console.log(person.age);  // 30
console.log(person.name);  // John

// 尝试添加新属性
person.gender = 'male';  // 无效操作

console.log(person.gender);  // undefined
```

在上面的示例中，我们使用 `Object.freeze(person)` 冻结了 `person` 对象。之后我们尝试修改 `person` 对象的属性（如 `age` 和 `name`），以及尝试添加一个新的属性（`gender`）。这些操作都不会生效，`person` 对象保持不变。

### 特点和限制

1. **浅冻结**：`Object.freeze()` 只会冻结对象本身的属性，但**不会递归冻结其嵌套的对象**。也就是说，如果对象的某个属性是一个对象，冻结操作不会影响该嵌套对象。

   ```javascript
   const person = {
     name: 'John',
     address: {
       city: 'New York',
       zip: '10001'
     }
   };

   Object.freeze(person);

   // person 是冻结的，但 address 对象仍然可以修改
   person.address.city = 'Los Angeles';
   console.log(person.address.city);  // 输出: 'Los Angeles'
   ```

   在这个例子中，虽然 `person` 对象被冻结了，但 `address` 属性指向的嵌套对象没有被冻结。因此，嵌套的 `address` 对象仍然可以被修改。

2. **不可修改的属性**：`Object.freeze()` 使对象的属性变为不可修改。对于现有的属性，它们将变得**不可写**，即尝试修改属性的值不会生效。

   ```javascript
   const car = {
     make: 'Toyota',
     model: 'Corolla'
   };

   Object.freeze(car);

   Object.defineProperty(car, 'make', { value: 'Honda' });
   console.log(car.make);  // 仍然是 'Toyota'
   ```

   通过 `Object.defineProperty()` 尝试重新定义属性也会被拒绝。

3. **不可删除属性**：冻结对象后，不能删除对象的属性。

   ```javascript
   const animal = {
     type: 'Dog'
   };
   
   Object.freeze(animal);
   
   delete animal.type;  // 删除属性失败
   console.log(animal.type);  // 输出: 'Dog'
   ```

### 冻结嵌套对象

如果你想冻结一个对象及其嵌套对象，可以使用递归冻结所有嵌套的对象。

```javascript
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
}

const person = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

deepFreeze(person);
person.address.city = 'Los Angeles';  // 无效操作
console.log(person.address.city);  // 输出: 'New York'
```

在这个示例中，`deepFreeze` 函数递归地冻结对象及其所有嵌套的属性，使得对象及其所有嵌套对象都变得不可变。

### 总结

- **`Object.freeze()`** 用于冻结一个对象，防止其被修改、添加或删除属性。
- **冻结是浅冻结**，即只冻结对象的直接属性，而不会冻结嵌套的对象。
- 如果需要冻结嵌套对象，可以使用递归冻结的方式。
- 冻结后的对象不能被修改属性值，添加新属性或删除现有属性。

## *43. 原生 js 如何进行监听路由的变化？*

在原生 JavaScript 中，可以通过监听路由变化的方式来实现对 URL 的监听，通常有以下几种方式：

### 1. **监听 `popstate` 事件**
`popstate` 事件是当浏览器的历史记录条目发生变化时触发的，适用于监听浏览器的前进、后退按钮以及通过 `history.pushState()` 和 `history.replaceState()` 方法修改的历史记录。

#### 用法：
```javascript
window.addEventListener('popstate', function(event) {
console.log('URL changed:', window.location.href);
});
```

- **触发条件**：`popstate` 事件会在浏览器的历史状态发生变化时触发，如点击前进、后退按钮，或者调用 `history.pushState()` 或 `history.replaceState()` 时。
- **监听内容**：`window.location.href` 或 `window.location.pathname` 等可以用来获取当前的 URL。

### 2. **监听 `hashchange` 事件**
如果你的路由是基于 URL 的 hash 部分（即 `#` 后面的部分）来进行的（例如 `#home`、`#about`），可以使用 `hashchange` 事件来监听 hash 值的变化。

#### 用法：
```javascript
window.addEventListener('hashchange', function() {
  console.log('Hash changed to:', window.location.hash);
});
```

- **触发条件**：`hashchange` 事件会在 URL 中的 hash 部分发生变化时触发（即 `#` 后面的部分改变）。
- **监听内容**：`window.location.hash` 可以用来获取当前的 hash 值。

### 3. **使用 `history.pushState()` 和 `history.replaceState()`**
这两个方法可以用来更新浏览器的历史记录，并且不会导致页面刷新。它们也可以触发 `popstate` 事件。

- `history.pushState(state, title, url)`：在历史记录栈中添加一个新的记录。
- `history.replaceState(state, title, url)`：替换当前历史记录。

#### 示例：
```javascript
// 改变路由
history.pushState({ page: 1 }, "Page 1", "/page1");

// 监听路由变化
window.addEventListener('popstate', function(event) {
  console.log('New state:', event.state);
});
```

### 4. **监听 `window.location` 变化**
虽然 `window.location` 变化时会触发页面重载，但你可以通过观察它的变化来检测 URL。

#### 示例：
```javascript
let lastLocation = window.location.href;

setInterval(function() {
  if (window.location.href !== lastLocation) {
    console.log('URL changed:', window.location.href);
    lastLocation = window.location.href;
  }
}, 100);
```

### 总结
- **`popstate`**：用于监听浏览器历史记录的变化，包括通过 JavaScript 修改 URL（`history.pushState()` 和 `history.replaceState()`）或者用户的浏览器后退、前进。
- **`hashchange`**：用于监听 URL 的 hash 部分变化，适用于基于 hash 的路由（如单页面应用中的路由）。
- **`pushState()` / `replaceState()`**：这两个方法可以动态修改 URL，同时触发 `popstate` 事件。
- **轮询 `location.href`**：虽然不推荐，但通过轮询 `location.href` 可以间接监听 URL 的变化。

这几种方式可以根据你的需求来选择使用，通常在现代单页面应用（SPA）中，`popstate` 和 `hashchange` 事件是最常用的方式。

## *44. onpopstate 可以监听到 pushstate 的事件吗？*

是的，`onpopstate` 可以监听到 `pushState` 和 `replaceState` 触发的事件，但其行为有一些需要注意的地方。

### 1. **`pushState()` 和 `replaceState()` 引发 `popstate` 事件**

- **`history.pushState()`** 和 **`history.replaceState()`** 都是用于修改浏览器历史记录的 API，它们会修改浏览器的 URL，但不会触发页面刷新。
- 这两个方法 **不会直接触发 `popstate` 事件**。`popstate` 事件通常在用户进行浏览器操作（如点击浏览器的后退或前进按钮）时触发。

### 2. **触发 `popstate` 的条件**

`popstate` 事件只会在浏览器的历史记录堆栈发生变化时触发，这通常是由以下几种情况引起的：

- 用户点击浏览器的后退或前进按钮时。
- 使用 `history.pushState()` 或 `history.replaceState()` 修改了浏览器的历史记录时，且在后续的历史记录栈变动时触发 `popstate` 事件。

虽然 `pushState` 和 `replaceState` 不直接触发 `popstate` 事件，但当你调用 `pushState` 或 `replaceState` 后，如果用户进行浏览器的历史记录操作（如后退、前进），`popstate` 事件就会触发。

### 示例

```javascript
// 监听 popstate 事件
window.onpopstate = function(event) {
  console.log('popstate event triggered:', event.state);
};

// 使用 pushState 修改历史记录
history.pushState({ page: 1 }, "Page 1", "/page1");
console.log('Current URL:', window.location.href);

// 使用 pushState 修改历史记录
history.pushState({ page: 2 }, "Page 2", "/page2");
console.log('Current URL:', window.location.href);

// 当用户点击浏览器的后退或前进按钮时，popstate 会被触发
```

### 3. **如何监听 `pushState` 或 `replaceState` 修改后的状态**

`popstate` 事件并不会直接告诉你什么时候调用了 `pushState()` 或 `replaceState()`，它只是告诉你历史记录状态发生了变化。如果你希望监听 `pushState` 或 `replaceState` 的调用并获取详细信息，你需要手动处理。

#### 手动触发自定义事件（例如：包装 `pushState` 和 `replaceState`）

为了捕捉 `pushState` 或 `replaceState` 调用，你可以包装这两个方法，并在调用时触发自定义事件，或者直接记录状态。

```javascript
// 保存原始的 pushState 和 replaceState
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

// 自定义 pushState 和 replaceState 方法
history.pushState = function(state, title, url) {
  console.log('pushState called with state:', state);
  originalPushState.apply(history, arguments);
};

history.replaceState = function(state, title, url) {
  console.log('replaceState called with state:', state);
  originalReplaceState.apply(history, arguments);
};

// 使用 pushState 修改历史记录
history.pushState({ page: 1 }, "Page 1", "/page1");
history.pushState({ page: 2 }, "Page 2", "/page2");

// popstate 事件会在用户点击后退、前进时触发
window.onpopstate = function(event) {
  console.log('popstate event triggered with state:', event.state);
};
```

### 总结

- **`onpopstate`** 可以监听用户操作导致的历史记录变化（如点击后退、前进按钮），也可以在 `pushState` 或 `replaceState` 修改历史记录后，由后续的浏览器历史记录操作触发。
- `pushState` 和 `replaceState` 不会直接触发 `popstate` 事件，只有在用户执行浏览器前进或后退操作时，`popstate` 事件才会触发。
- 如果你需要在调用 `pushState` 或 `replaceState` 时获取状态信息，可以通过包装这两个方法来手动触发事件或记录状态。

## *45. for...of、for...in、for 循环， 三者有什么区别？*

在 JavaScript 中，`for...of`、`for...in` 和 `for` 是三种常用的循环结构，它们有不同的使用场景和行为。以下是它们的区别：

### 1. **`for...of`**
`for...of` 循环用于遍历可迭代对象（如数组、字符串、`Map`、`Set` 等）。它会遍历对象中的**值**，而不是索引或属性名。

#### 语法：
```javascript
for (const item of iterable) {
// 对 item 执行操作
}
```

- **遍历对象**：`for...of` 用于遍历对象的**值**。
- **适用场景**：适合遍历数组、字符串、`Map`、`Set` 等可迭代对象。

#### 示例：
```javascript
const array = [1, 2, 3];
for (const value of array) {
  console.log(value); // 输出 1, 2, 3
}

const str = "hello";
for (const char of str) {
  console.log(char); // 输出 'h', 'e', 'l', 'l', 'o'
}
```

#### 注意：
- **不能用于对象的属性**，因为对象不是可迭代的。对于对象，`for...of` 无法遍历对象的属性。

### 2. **`for...in`**
`for...in` 循环用于遍历对象的**可枚举属性名**，包括继承的属性（如果没有使用 `hasOwnProperty` 检查的话）。它适用于对象和数组，但通常更适合用来遍历对象的属性。

#### 语法：
```javascript
for (const key in object) {
  // 对 key 执行操作
}
```

- **遍历对象的属性名**：`for...in` 循环遍历的是对象的**属性名**（键），而不是值。
- **适用场景**：适用于遍历对象的可枚举属性，对于数组，`for...in` 主要适合用来处理对象属性的遍历，不推荐用于数组遍历（会遍历数组的索引和原型链上的属性）。

#### 示例：
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key);  // 输出 a, b, c
  console.log(obj[key]); // 输出 1, 2, 3
}

const array = [10, 20, 30];
for (const index in array) {
  console.log(index); // 输出 0, 1, 2 (数组索引)
  console.log(array[index]); // 输出 10, 20, 30
}
```

#### 注意：
- `for...in` 遍历的是对象的**所有可枚举属性**，包括继承的属性。如果你只想遍历对象本身的属性，可以使用 `hasOwnProperty` 方法来过滤继承的属性。
- 对于数组，`for...in` 会遍历数组的索引，这可能会导致一些问题，因为数组的原型链也可能包含其他属性或方法（例如 `Array.prototype` 上的属性）。

### 3. **传统的 `for` 循环**
传统的 `for` 循环是最常见的循环形式，适用于任何需要基于索引进行迭代的场景。它允许你手动控制循环的起始点、条件和步长。

#### 语法：
```javascript
for (let i = 0; i < array.length; i++) {
  // 对 array[i] 执行操作
}
```

- **遍历方式**：`for` 循环通常用于按索引遍历数组或可迭代对象。
- **适用场景**：适合任何需要使用索引的场景，尤其是当你需要手动控制循环的条件时（如跳过某些元素，或自定义循环步长）。

#### 示例：
```javascript
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 输出 1, 2, 3, 4
}

const str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // 输出 'h', 'e', 'l', 'l', 'o'
}
```

#### 注意：
- 传统的 `for` 循环非常灵活，可以用于数组、字符串、对象等。
- 在遍历数组时，通常使用数组的 `length` 属性来控制循环次数。

---

### 总结对比

| 特性               | `for...of`                        | `for...in`                       | `for`（传统）                              |
| ------------------ | --------------------------------- | -------------------------------- | ------------------------------------------ |
| **作用**           | 遍历可迭代对象的**值**            | 遍历对象的**键（属性名）**       | 根据索引遍历数组或其他可迭代对象的**值**   |
| **适用对象**       | 数组、字符串、`Map`、`Set` 等     | 对象、数组（不推荐用于数组遍历） | 适用于任何可索引的结构（如数组、字符串等） |
| **是否遍历原型链** | 不遍历原型链                      | 会遍历原型链的可枚举属性         | 不遍历原型链                               |
| **典型用途**       | 遍历数组、字符串、`Map`、`Set` 等 | 遍历对象的属性名（键）           | 通用循环，适用于数组、字符串等遍历         |

### 选择使用哪种循环
- **数组或可迭代对象的值**：使用 `for...of`。
- **对象的属性名**：使用 `for...in`。
- **传统的索引控制**：使用 `for` 循环，特别是当需要手动控制循环的起始、终止条件，或者需要跳过某些元素时。

## *46. 引用类型有哪些，有什么特点*

在 JavaScript 中，数据类型可以分为两大类：**原始类型**（Primitive types）和 **引用类型**（Reference types）。引用类型指的是那些存储的是对象的引用（即内存地址）的数据类型，而原始类型则是直接存储具体的值。引用类型具有一些独特的特性，下面我会详细介绍。

### 引用类型（Reference Types）

#### 1. **对象（Object）**
   - **定义**：对象是由一组无序的键值对组成的数据集合，键是字符串，值可以是任意数据类型，包括其他对象。
   - **特点**：
     - 对象的值是存储在堆内存中，而对象的变量存储的是对象的引用（指针），而不是实际的值。
     - 对象可以动态添加或删除属性。
     - 对象是按引用传递的，即多个变量可以引用同一个对象。
   - **示例**：
     ```javascript
     const person = { name: "Alice", age: 25 };
     const anotherPerson = person; // 引用传递
     anotherPerson.age = 30;
     console.log(person.age); // 30，改变了引用的对象
     ```

#### 2. **数组（Array）**
   - **定义**：数组是一个有序的数据集合，它是一种特殊的对象，可以存储多个值，可以通过索引访问元素。
   - **特点**：
     - 数组也是一种对象，数组的元素存储在堆内存中。
     - 数组的索引是整数（从 0 开始），并且数组的长度是动态的，可以随时改变。
     - 数组也是按引用传递的。
   - **示例**：

     ```javascript
     const arr1 = [1, 2, 3];
     const arr2 = arr1;  // 引用传递
     arr2[0] = 10;
     console.log(arr1[0]); // 10，数组 arr1 和 arr2 引用的是同一个数组
     ```

#### 3. **函数（Function）**
   - **定义**：函数在 JavaScript 中也是一种对象。函数本质上是由可执行代码的对象，可以作为值传递、存储在变量、数组或对象中。
   - **特点**：
     - 函数是对象的一种特殊形式，可以像其他对象一样被传递和赋值。
     - 函数可以被调用执行，函数体内有 `this`，其指向会根据调用方式而不同。
     - 函数也是按引用传递的。
   - **示例**：
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     const sayHello = greet; // 引用传递
     sayHello();  // 输出 "Hello!"
     ```

#### 4. **日期（Date）**
   - **定义**：`Date` 对象用于处理日期和时间，提供了多种方法来获取和设置日期和时间。
   - **特点**：
     - `Date` 对象是引用类型，存储在堆内存中。
     - `Date` 对象的值是基于 UTC（协调世界时）时间的。
   - **示例**：
     ```javascript
     const date1 = new Date();
     const date2 = date1; // 引用传递
     date2.setFullYear(2025);
     console.log(date1.getFullYear()); // 2025，date1 和 date2 引用的是同一个 Date 对象
     ```

#### 5. **正则表达式（RegExp）**
   - **定义**：`RegExp` 对象用于定义并执行正则表达式匹配模式。
   - **特点**：
     - `RegExp` 对象是引用类型，存储在堆内存中。
     - `RegExp` 对象可以用于执行模式匹配、替换等操作。
   - **示例**：
     ```javascript
     const regex1 = /abc/;
     const regex2 = regex1; // 引用传递
     regex2.lastIndex = 5;
     console.log(regex1.lastIndex); // 5
     ```

### 引用类型的特点

1. **按引用传递**
   - 引用类型的变量存储的是对象在内存中的引用（内存地址），而不是对象的值。因此，当我们将一个引用类型的变量赋值给另一个变量时，两个变量实际上指向的是同一个对象。对其中一个变量的修改，会影响另一个变量。

   示例：
   ```javascript
   const obj1 = { name: "Alice" };
   const obj2 = obj1; // obj2 和 obj1 引用同一个对象
   obj2.name = "Bob";
   console.log(obj1.name); // 输出 "Bob"，obj1 和 obj2 引用的是同一个对象
   ```

2. **动态内存管理**
   - 引用类型的值是存储在堆内存中的，而堆内存的管理是动态的，这意味着可以随时添加、删除属性或元素。

3. **赋值操作**
   - 引用类型的赋值操作会复制引用，而不是复制对象的值。因此，多个变量可能引用同一个对象，改变一个变量的值会影响所有引用该对象的变量。

   示例：
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = arr1; // 引用传递
   arr2.push(4);
   console.log(arr1); // 输出 [1, 2, 3, 4]，arr1 和 arr2 引用同一个数组
   ```

4. **可以包含多种数据类型**
   - 引用类型的数据可以包含不同类型的数据，不仅仅是基本类型，还可以是其他引用类型的对象、数组、函数等。

5. **原型链**
   - 引用类型的对象有原型链（Prototype Chain），通过 `__proto__` 或 `Object.getPrototypeOf()` 可以访问到对象的原型对象。原型链是对象继承机制的基础，可以访问到继承自原型的属性和方法。

### 引用类型和原始类型的比较

| 特性             | 引用类型                       | 原始类型                                  |
| ---------------- | ------------------------------ | ----------------------------------------- |
| **存储位置**     | 存储在堆内存中                 | 存储在栈内存中                            |
| **赋值行为**     | 赋值时复制的是引用（内存地址） | 赋值时复制的是值                          |
| **比较方式**     | 比较的是引用是否相同（地址）   | 比较的是值是否相等                        |
| **修改对象的值** | 可以修改对象的内容（通过引用） | 不可改变，复制会得到新的值                |
| **类型示例**     | 对象、数组、函数、日期、RegExp | 数字、字符串、布尔值、`null`、`undefined` |

### 总结
引用类型的变量存储的是对象的引用（内存地址），而不是对象本身的值。这意味着多个变量可以引用同一个对象，修改其中一个变量的内容会影响其他引用该对象的变量。常见的引用类型有对象、数组、函数、日期和正则表达式等。

## *47. 箭头函数解决了什么问题*

箭头函数（Arrow Function）是 JavaScript ES6 引入的一种简洁的函数写法。它不仅简化了函数的语法，还解决了传统函数表达式中的一些问题，尤其是在 **`this` 的绑定** 上。以下是箭头函数解决的几个主要问题：

### 1. **简化函数的写法**

箭头函数提供了一个简洁的语法来定义函数。传统的函数表达式较为冗长，而箭头函数通过省略 `function` 关键字，提供了更简洁的写法。

#### 传统函数表达式：
```javascript
const sum = function(a, b) {
return a + b;
};
```

#### 箭头函数：
```javascript
const sum = (a, b) => a + b;
```

- 箭头函数的语法更简洁，特别是当函数体只有一行表达式时，甚至可以省略大括号和 `return` 关键字。

### 2. **`this` 的绑定问题**

箭头函数最显著的特点之一是它解决了传统函数中的 `this` 绑定问题。在传统函数中，`this` 的值是由函数的调用方式决定的，这常常导致 `this` 指向不明确。箭头函数则不同，它并不会创建自己的 `this`，而是**继承**外部上下文中的 `this`。

#### 传统函数中的 `this` 绑定问题
在传统函数中，`this` 的指向是根据调用的上下文来决定的。特别是在事件处理函数、回调函数或定时器中，`this` 很容易指向错误的对象。

```javascript
function Timer() {
  this.seconds = 0;
  setInterval(function() {
    this.seconds++;  // 这里的 `this` 不再指向 Timer 实例
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer();  // 输出 NaN 或者 TypeError
```

在上面的例子中，`setInterval` 内部的 `function` 是一个普通的函数，因此它的 `this` 会指向全局对象（在浏览器中是 `window`，在严格模式下是 `undefined`），而不是 `Timer` 实例。

#### 箭头函数的解决方案
箭头函数没有自己的 `this`，它会继承外部作用域的 `this`。因此，使用箭头函数时，`this` 就不会丢失，可以正确指向外部对象。

```javascript
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;  // 箭头函数继承外部的 `this`
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer();  // 正确输出 1, 2, 3, ...
```

在这个例子中，箭头函数继承了 `Timer` 构造函数中的 `this`，所以它可以正确访问并更新 `seconds`。

### 3. **不能用作构造函数**

箭头函数不能作为构造函数使用。由于箭头函数没有自己的 `this`，它不能用于创建新对象，因此它不能作为构造函数调用。

#### 传统函数可以作为构造函数：
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person('Alice');
console.log(person.name);  // Alice
```

#### 箭头函数不能作为构造函数：
```javascript
const Person = (name) => {
  this.name = name;  // 错误：箭头函数没有自己的 `this`
};

const person = new Person('Alice');  // TypeError: Person is not a constructor
```

### 4. **没有 `arguments` 对象**

箭头函数没有自己的 `arguments` 对象，它会从外部作用域继承 `arguments`。对于普通函数，`arguments` 对象包含了传递给函数的所有参数。但在箭头函数中，若需要访问函数参数，应该直接使用命名参数，而无法使用 `arguments`。

#### 普通函数的 `arguments` 对象：
```javascript
function sum() {
  console.log(arguments);  // 输出所有传递的参数
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4);  // 输出 [1, 2, 3, 4]
```

#### 箭头函数没有 `arguments`：
```javascript
const sum = () => {
  console.log(arguments);  // ReferenceError: arguments is not defined
  return 0;
};

sum(1, 2, 3, 4);
```

如果需要在箭头函数中访问参数，可以直接使用命名参数或使用 `rest` 参数。

```javascript
const sum = (...args) => {
  console.log(args);  // 输出 [1, 2, 3, 4]
  return args.reduce((a, b) => a + b, 0);
};

sum(1, 2, 3, 4);
```

### 5. **没有 `super` 和 `new.target`**

箭头函数没有自己的 `super` 和 `new.target`。这些是类和构造函数中的特性，`super` 用于调用父类的构造函数或方法，`new.target` 用于判断函数是否被 `new` 调用。

#### `super` 和 `new.target` 只能在传统函数或类中使用：
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    super.speak();  // 调用父类的 speak 方法
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak();
```

如果你在箭头函数中尝试使用 `super` 或 `new.target`，会抛出错误，因为箭头函数没有自己的 `super` 和 `new.target`。

### 总结：箭头函数解决了以下问题

1. **简化了函数的语法**：箭头函数省略了 `function` 关键字，提供了更简洁的写法。
2. **固定 `this` 绑定**：箭头函数不会创建自己的 `this`，它会继承外部上下文中的 `this`，避免了传统函数中的 `this` 指向混乱问题。
3. **不能用作构造函数**：箭头函数不能作为构造函数使用，它们不能使用 `new` 来实例化对象。
4. **没有 `arguments` 对象**：箭头函数没有自己的 `arguments` 对象，它继承外部作用域的 `arguments`，并且可以使用 rest 参数来替代。
5. **没有 `super` 和 `new.target`**：箭头函数没有自己的 `super` 和 `new.target`，不能用于类的方法或构造函数中。

箭头函数的主要优势在于简化了代码并解决了 `this` 绑定问题，特别适用于简短的回调函数和匿名函数。

## *48. 副作用是什么概念*

### 副作用（Side Effect）概念

**副作用（Side Effect）** 是指在执行某个操作时，除了返回结果或修改目标值以外，还会影响到外部环境或产生不可预测的状态变化的行为。换句话说，副作用是指操作不只是单纯的计算结果，还可能对程序的其他部分或外部环境（如全局变量、外部系统、IO 操作等）产生影响。

副作用可以发生在函数执行过程中，通常是指：

- 修改函数外部的变量或对象（比如全局变量或传入的参数）。
- 执行异步操作，如发送网络请求、更新 DOM、修改文件系统等。
- 执行输出（如 `console.log()`、打印到屏幕、写入文件等）。
- 修改数据库或调用 API。

### 副作用的例子

#### 1. **修改外部变量**
函数修改了外部作用域的变量，称为副作用，因为函数的行为不仅仅依赖于输入参数，还会影响到外部状态。

```javascript
let x = 10;

function addY(y) {
  x += y;  // 修改了外部的 x 变量
}

addY(5);
console.log(x); // 15，x 被修改了
```

这里，`addY` 函数的副作用是修改了外部变量 `x`。

#### 2. **修改函数参数**
函数改变传入的参数的值，称为副作用。

```javascript
function modifyArray(arr) {
  arr.push(1);  // 修改了传入的数组
}

const myArray = [];
modifyArray(myArray);
console.log(myArray);  // [1]
```

函数修改了传入的 `arr` 数组，这是一种副作用。

#### 3. **输出到外部环境**
任何输出操作（如打印到控制台、写入文件、更新 DOM）也都视为副作用，因为它们改变了外部环境的状态。

```javascript
function logMessage(message) {
  console.log(message);  // 输出到控制台
}

logMessage("Hello, world!");  // 控制台显示 "Hello, world!"
```

`console.log` 就是一个典型的副作用，它对外部的环境产生了影响（打印信息到控制台）。

#### 4. **异步操作**
像 AJAX 请求、网络请求、数据库操作等异步任务也算副作用，因为它们会影响外部环境，并且可能是不可预测的。

```javascript
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);  // 异步操作，副作用
    });
}
```

在这个例子中，`fetchData` 函数的副作用是通过网络请求访问外部 API，并将结果打印到控制台。

### 无副作用的函数（纯函数）

与有副作用的函数相对的是**纯函数**（Pure Function）。纯函数是指：
- **输出只依赖输入**：纯函数的返回值仅仅由输入参数决定，且不依赖于外部状态。
- **无副作用**：纯函数不会修改外部的状态，也不会对外部环境产生影响（比如不修改外部变量、不执行 I/O 操作）。

纯函数的例子：

```javascript
function add(a, b) {
  return a + b;  // 没有副作用
}
```

在这个例子中，`add` 函数只依赖于输入的 `a` 和 `b`，返回一个结果，但不会对外部状态或变量产生任何影响。

### 副作用的影响

副作用在程序设计中有时是必需的，但它们也可能导致以下问题：
- **难以测试**：带有副作用的函数很难单元测试，因为它们不仅依赖于输入，还可能影响全局状态或外部环境。
- **不确定性**：副作用可能导致程序行为不一致，尤其是在并发或异步执行时，副作用可能导致数据竞争或难以预测的结果。
- **状态管理复杂性**：副作用可能会使得程序的状态变得复杂，因为外部环境的变化可能影响程序的其他部分，导致程序难以维护。

### 为什么副作用很重要？

副作用并非总是坏的，它们在某些场景下是必需的。例如，修改 UI、向服务器发送请求、更新数据库、记录日志等都需要副作用。但在函数式编程和现代 JavaScript 开发中，我们通常尽量避免不必要的副作用，以便程序更易于理解、测试和维护。

#### **总结**：

- **副作用**是指除了返回值外，还会影响到外部环境的行为。
- 常见的副作用包括修改外部变量、输出、异步操作等。
- **纯函数**是没有副作用的函数，其输出仅依赖于输入，且不会影响外部状态。
- 在程序设计中，我们通常希望尽量避免不必要的副作用，尤其是在函数式编程中，因为它们增加了程序的复杂性和不可预测性。

## *49. JS 中如何实现大对象深度对比*

在 JavaScript 中，对比两个对象是否相等，尤其是嵌套或多层次的大对象，通常需要进行**深度对比**。深度对比的意思是递归地对比对象的所有属性，包括对象内部的嵌套对象，直到所有属性都被检查过。对于深度对比的实现，我们可以写一个递归函数来完成。这里有几个常见的实现方法：

### 1. **递归实现深度对比**
使用递归方式对两个对象的每个属性进行对比，直到所有嵌套的属性都被检查。

#### 示例代码：
```javascript
function deepEqual(obj1, obj2) {
// 如果两个对象引用的是同一个对象，直接返回 true
if (obj1 === obj2) {
 return true;
}

// 如果其中一个是 null 或 undefined，另一个不是，直接返回 false
if (obj1 == null || obj2 == null) {
 return false;
}

// 如果它们的类型不同，则不相等
if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
 return false;
}

// 获取对象的所有属性名
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

// 如果属性数量不同，说明对象不相等
if (keys1.length !== keys2.length) {
 return false;
}

// 递归地检查每个属性的值
for (let key of keys1) {
 if (!keys2.includes(key)) {
   return false; // obj2 不包含 obj1 的某个属性
 }

 // 递归比较属性值
 if (!deepEqual(obj1[key], obj2[key])) {
   return false;
 }
}

// 所有属性都相等
return true;
}
```

#### 使用示例：
```javascript
const obj1 = {
a: 1,
b: {
 c: 2,
 d: [1, 2, 3],
},
};

const obj2 = {
a: 1,
b: {
 c: 2,
 d: [1, 2, 3],
},
};

console.log(deepEqual(obj1, obj2));  // 输出: true

const obj3 = {
a: 1,
b: {
 c: 3,
 d: [1, 2, 3],
},
};

console.log(deepEqual(obj1, obj3));  // 输出: false
```

### 2. **使用 `JSON.stringify()` 进行简化对比**
如果对象中的所有属性值都是可以被 JSON 序列化的（即没有函数、`undefined` 或循环引用），可以通过将对象转换为 JSON 字符串来比较它们。这种方法简化了对比过程，但不适用于所有类型的对象（如包含函数或 `undefined` 的对象）。

#### 示例代码：
```javascript
function deepEqualJSON(obj1, obj2) {
return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

#### 使用示例：
```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqualJSON(obj1, obj2)); // 输出: true

const obj3 = { a: 1, b: { c: 3 } };
console.log(deepEqualJSON(obj1, obj3)); // 输出: false
```

#### 限制：
- **性能问题**：`JSON.stringify()` 会遍历整个对象并生成字符串，对于大型对象或复杂的嵌套结构可能效率较低。
- **丢失类型信息**：不能正确处理 `undefined`、`NaN`、`function`、`RegExp`、`Date` 等特殊值。
- **循环引用问题**：`JSON.stringify()` 会抛出错误，如果对象中存在循环引用。

### 3. **使用 `lodash` 的 `_.isEqual()` 函数**

`lodash` 库提供了一个强大的 `isEqual()` 函数，可以用来深度对比两个对象。`_.isEqual()` 方法考虑了各种边界情况（如函数、`undefined`、`NaN`、`Date`、`RegExp` 等），并且性能优化较好。

#### 示例代码：
```javascript
// 安装 lodash
// npm install lodash

const _ = require('lodash');

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

console.log(_.isEqual(obj1, obj2));  // 输出: true

const obj3 = { a: 1, b: { c: 3 } };
console.log(_.isEqual(obj1, obj3));  // 输出: false
```

### 4. **使用 `Map` 和 `Set` 对象进行深度对比**

如果对象中包含了 `Map` 或 `Set`，我们需要特殊处理它们的对比。可以通过递归的方式对比它们的元素或者键值对。

#### 示例代码：
```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  // 如果是 Map 或 Set，逐一比较其中的元素
  if (obj1 instanceof Map && obj2 instanceof Map) {
    if (obj1.size !== obj2.size) return false;
    for (let [key, value] of obj1) {
      if (!deepEqual(value, obj2.get(key))) return false;
    }
    return true;
  }

  if (obj1 instanceof Set && obj2 instanceof Set) {
    if (obj1.size !== obj2.size) return false;
    for (let value of obj1) {
      if (!obj2.has(value)) return false;
    }
    return true;
  }

  // 其他类型的对比，如普通对象
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}
```

### 总结

- **递归方法**：适合大多数对象的深度对比，能够处理嵌套对象，但实现较为复杂。
- **`JSON.stringify()` 方法**：简单快捷，但不适用于所有数据类型，无法处理循环引用或复杂数据类型。
- **`lodash.isEqual()` 方法**：是一个功能强大且高效的工具，适用于各种类型的对象，特别适合需要考虑各种边界情况时使用。
- **`Map` 和 `Set` 对比**：对于包含 `Map` 和 `Set` 等集合类型的对象，需要特殊处理。

对于大对象深度对比，建议使用 `lodash` 的 `isEqual` 函数，因其性能优化好并且可以处理多种边界情况。如果你需要自己实现深度对比，递归方法是最通用且灵活的方案。

## *50. 什么是匿名函数？*

**匿名函数**（Anonymous Function）是指没有函数名的函数。它通常用于作为参数传递给其他函数，或者在需要临时定义小型功能的地方使用。

在 JavaScript 中，匿名函数有很多应用场景，尤其是在回调函数、事件处理器和数组操作中非常常见。

### 1. **匿名函数的定义**

匿名函数没有名字，直接定义一个函数并将其传递或者赋值给变量。其语法通常是：

```javascript
const func = function() {
// 函数体
};
```

这是一种常见的匿名函数形式，通过将函数赋值给变量 `func`，虽然没有显式的名称，但依然可以通过变量名来调用它。

### 2. **匿名函数的应用**

#### 2.1 **作为回调函数传递**

匿名函数常常作为回调函数传递给其他函数，尤其在数组操作、事件监听等场景下。

```javascript
// 数组的 forEach 方法接受一个匿名函数作为回调
const arr = [1, 2, 3];
arr.forEach(function(element) {
console.log(element);  // 输出 1, 2, 3
});
```

#### 2.2 **立即执行函数（IIFE）**

匿名函数可以在定义时立即执行，这种方式称为 **立即调用的函数表达式**（IIFE）。通常这种方式用于创建私有作用域，避免污染全局命名空间。

```javascript
(function() {
console.log("This is an IIFE!");  // 输出：This is an IIFE!
})();
```

#### 2.3 **事件监听中的匿名函数**

在事件监听中，匿名函数经常作为回调来处理事件：

```javascript
document.getElementById("btn").addEventListener("click", function() {
console.log("Button clicked!");
});
```

#### 2.4 **箭头函数作为匿名函数**

在 ES6 中，箭头函数常用于定义匿名函数。箭头函数比传统匿名函数更简洁，同时也避免了 `this` 绑定的问题。

```javascript
const add = (a, b) => a + b;  // 箭头函数就是匿名函数
console.log(add(2, 3));  // 输出 5
```

### 3. **匿名函数的特点**

- **没有名称**：匿名函数定义时没有函数名。
- **常用于临时操作**：匿名函数通常是一次性使用的，不需要为其定义一个函数名。
- **函数表达式**：匿名函数通常是作为函数表达式使用，而不是声明。
- **灵活性高**：由于匿名函数可以在需要时创建并传递给其他函数，所以非常灵活，常见于回调函数、事件监听器等。

### 4. **匿名函数和命名函数的对比**

| 特点             | 匿名函数                       | 命名函数                       |
| ---------------- | ------------------------------ | ------------------------------ |
| **是否有函数名** | 没有函数名                     | 有函数名                       |
| **定义方式**     | 通常是通过函数表达式定义       | 使用 `function` 关键字定义     |
| **调用方式**     | 通过变量或回调函数调用         | 通过函数名直接调用             |
| **作用域**       | 不能在函数内直接访问自己       | 可以在函数内访问自己           |
| **常见用途**     | 回调函数、事件监听、立即执行等 | 普通函数、工具函数、构造函数等 |

### 5. **匿名函数的优缺点**

#### 优点：
- **简洁**：没有函数名，定义简单，可以快速传递给其他函数。
- **灵活性高**：适用于临时性操作，尤其是回调函数和事件处理器中。
- **避免污染全局命名空间**：匿名函数通常用于局部作用域（如 IIFE），避免了全局变量的污染。

#### 缺点：
- **难以调试**：没有名字的函数在调试时更难以追踪。调试工具通常显示的是 `[object Object]`，而不是函数名，这可能增加调试的复杂性。
- **无法递归调用**：匿名函数没有名字，所以不能在函数体内通过函数名进行递归调用。为了递归，需要为其赋予一个名字，或者通过外部变量调用。

### 总结：

**匿名函数**是一种没有名字的函数，常用于临时的函数处理，尤其是在回调函数、事件处理和立即执行函数等场景中。它们简洁而灵活，但也有一些调试和递归调用的限制。在 ES6 中，箭头函数提供了一种更加简洁和灵活的匿名函数写法。

## *51. splice 和 slice 有什么区别？*

`splice` 和 `slice` 都是 JavaScript 中数组的方法，它们有相似的名称和某些共同点，但实际上它们有着完全不同的行为和用法。

### 1. **`slice()` 方法**

`slice()` 用于从一个数组中**提取出一部分**并返回一个新的数组，**不会改变原数组**。它接受两个参数：`start` 和 `end`。

- `start`：起始索引（包括该索引），如果为负数，则从数组的尾部开始。
- `end`：结束索引（不包括该索引），如果省略，则表示从 `start` 一直到数组末尾。

#### 示例代码：
```javascript
let arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(1, 3);
console.log(newArr);  // 输出: [2, 3]
console.log(arr);     // 输出: [1, 2, 3, 4, 5]，原数组没有被改变
```

#### 特点：
- 返回一个新数组，原数组不受影响。
- 不修改原数组。
- 支持负数索引，负数表示从数组末尾开始计算索引。

### 2. **`splice()` 方法**

`splice()` 用于**修改数组**，可以通过它删除数组中的元素、添加新元素或两者结合。它是一个**会改变原数组**的方法。`splice()` 可以接受多个参数：

- `start`：起始索引，表示从该位置开始修改数组。
- `deleteCount`：表示要删除的元素个数（如果为 0，则不删除元素）。
- `item1, item2, ...`：要添加到数组的元素（可选）。

#### 示例代码：
```javascript
let arr = [1, 2, 3, 4, 5];

// 删除元素
let removedItems = arr.splice(1, 2);
console.log(removedItems);  // 输出: [2, 3]
console.log(arr);           // 输出: [1, 4, 5]

// 添加元素
arr.splice(1, 0, 6, 7);
console.log(arr);           // 输出: [1, 6, 7, 4, 5]

// 替换元素
arr.splice(2, 2, 8, 9);
console.log(arr);           // 输出: [1, 6, 8, 9, 5]
```

#### 特点：
- 会直接修改原数组。
- 可以同时删除和添加元素。
- 支持多种参数，可以删除指定范围的元素，也可以在指定位置插入元素。

### 3. **总结对比**

| **特性**             | **`slice()`**                      | **`splice()`**                            |
| -------------------- | ---------------------------------- | ----------------------------------------- |
| **是否修改原数组**   | 不修改原数组，返回一个新数组。     | 会修改原数组，原数组会被改变。            |
| **返回值**           | 返回一个新数组，包含提取的部分。   | 返回一个数组，包含删除的元素。            |
| **参数**             | `start`, `end`（可选）。           | `start`, `deleteCount`, `item1, item2...` |
| **常用场景**         | 获取数组的部分数据，不改变原数组。 | 删除、添加或替换数组中的元素。            |
| **是否支持负数索引** | 支持负数索引，表示从数组末尾开始。 | 不支持负数索引。                          |

### 4. **具体使用场景**

- **使用 `slice()`**：
  - 如果需要**提取数组的一部分**并返回新数组，且不改变原数组，使用 `slice()`。
  - 比如：从一个数组中提取子数组，或者需要生成一个新的数组，保留原数组不变。

- **使用 `splice()`**：
  - 如果需要**删除、添加或替换数组中的元素**，并希望**修改原数组**，使用 `splice()`。
  - 比如：删除不需要的元素、向数组中插入新元素，或者在数组中替换元素。

### 示例场景对比：

#### 1. 使用 `slice()`：
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4);  // 提取从索引 1 到 4 之间的元素
console.log(newArr);  // 输出: [2, 3, 4]
```

#### 2. 使用 `splice()`：
```javascript
let arr = [1, 2, 3, 4, 5];
// 删除从索引 1 开始的 2 个元素
let deletedItems = arr.splice(1, 2);
console.log(arr);  // 输出: [1, 4, 5]
console.log(deletedItems);  // 输出: [2, 3]
```

通过这些对比，可以清楚地看到 `slice` 和 `splice` 的区别：`slice` 用于提取数据而不修改原数组，而 `splice` 用于修改原数组，可以删除、添加或替换元素。

## *52. JavaScript 和 BOM、DOM 、ECMAScript、Nodejs 之间是什么关系*

JavaScript、BOM、DOM、ECMAScript 和 Node.js 是现代 web 开发中常见的技术，它们之间有着紧密的关系，但各自也有不同的作用和职责。下面是对这些概念及其关系的详细解释：

### 1. **JavaScript**

JavaScript 是一种广泛使用的编程语言，主要用于网页开发中，为网页提供动态交互和功能。JavaScript 是基于 ECMAScript 标准的实现，它既可以在浏览器端运行，也可以在服务器端运行（例如 Node.js 中）。

- **用途**：
  - **客户端脚本**：在浏览器中执行，用于动态更新网页内容、表单验证、事件处理等。
  - **服务器端脚本**：通过 Node.js，JavaScript 也可以运行在服务器端，处理 HTTP 请求、文件操作、数据库交互等。

- **作用**：
  JavaScript 为 Web 页面提供交互和动态功能，它通过与 DOM 和 BOM 交互来实现对网页内容和浏览器环境的操作。

---

### 2. **ECMAScript**

**ECMAScript** 是 JavaScript 的标准化规范，定义了 JavaScript 语言的语法、关键字、数据类型、语句、运算符等语言特性。JavaScript 是 ECMAScript 的一个实现，虽然常常被互换使用，但 ECMAScript 更侧重于语言本身的定义，而 JavaScript 则是其具体的实现。

- **标准化组织**：ECMAScript 是由 **ECMA 国际组织**（European Computer Manufacturers Association）制定的标准。
- **版本**：ECMAScript 的不同版本（如 ES3、ES5、ES6/ES2015、ES2020 等）为 JavaScript 引入了新特性和语法糖。

**ECMAScript** 定义了 JavaScript 中的核心语法和功能，例如：
  - **变量声明**：`let`、`const`、`var`
  - **函数**：函数声明、箭头函数、async/await 等
  - **数据结构**：数组、对象、集合、映射等
  - **ES6 特性**：模块化（import/export）、解构赋值、类（class）等。

---

### 3. **DOM (Document Object Model)**

**DOM** 是一种文档对象模型，它为 JavaScript 提供了与 HTML 和 XML 文档进行交互的接口。DOM 定义了一个结构化的文档树（即节点树），JavaScript 可以通过它来读取、修改、删除或添加网页中的 HTML 元素、属性和文本内容。

- **与 JavaScript 的关系**：
  - JavaScript 通过 DOM 来操控页面上的元素。
  - JavaScript 使用 DOM 来访问页面中的元素，修改它们的属性、样式和内容，并响应用户事件（如点击、输入等）。

- **常用操作**：
  - **获取元素**：`document.getElementById()`, `document.querySelector()` 等
  - **修改内容**：`element.innerHTML`, `element.textContent` 等
  - **添加/删除元素**：`element.appendChild()`, `element.removeChild()` 等

**DOM** 是浏览器为 JavaScript 提供的一个接口，允许开发者操作网页内容。DOM 结构是一个动态的对象模型，任何对 DOM 的修改都会立即反映在页面上。

---

### 4. **BOM (Browser Object Model)**

**BOM** 是浏览器对象模型，它提供了一些与浏览器本身交互的接口，允许 JavaScript 访问浏览器窗口、浏览器历史记录、屏幕、定位、性能等信息。

- **与 JavaScript 的关系**：
  - BOM 允许 JavaScript 与浏览器窗口进行交互，操作浏览器的特性，如打开新窗口、导航历史、获取屏幕信息等。
  - BOM 提供了一些常见对象，如 `window`、`navigator`、`location`、`history`、`screen` 等。

- **常用操作**：
  - **窗口控制**：`window.open()`, `window.close()`, `window.location.href` 等
  - **获取浏览器信息**：`navigator.userAgent`, `screen.width`, `screen.height` 等
  - **浏览器历史记录**：`history.back()`, `history.forward()`, `history.pushState()` 等

**BOM** 是 JavaScript 与浏览器之间的桥梁，提供了与浏览器窗口及浏览器环境相关的操作接口。

---

### 5. **Node.js**

**Node.js** 是一个基于 V8 引擎的 JavaScript 运行环境，它使得 JavaScript 可以运行在浏览器之外的环境中，特别是在服务器端。Node.js 提供了一系列内置模块来处理文件系统、网络请求、进程管理等，使得开发者可以用 JavaScript 编写服务器端应用。

- **与 JavaScript 的关系**：
  - Node.js 是 JavaScript 的执行环境，让 JavaScript 可以在服务器上运行，处理请求、读写文件、进行网络通信等。
  - Node.js 提供了自己的 API 和模块，不依赖于浏览器环境（如 DOM 和 BOM），而是提供了一些用于服务器端开发的功能，如 HTTP、文件系统、事件、流等。

- **常用模块**：
  - **`http` 模块**：处理 HTTP 请求和响应，创建 Web 服务器。
  - **`fs` 模块**：处理文件系统操作，读取和写入文件。
  - **`path` 模块**：处理文件路径。
  - **`events` 模块**：用于事件驱动编程。

```javascript
// Node.js 示例：创建一个简单的 HTTP 服务器
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, Node.js!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
```

### 6. **它们之间的关系**

- **ECMAScript**：JavaScript 的语言标准，定义了语法和语言特性。JavaScript 是 ECMAScript 的一个实现。
- **JavaScript**：是基于 ECMAScript 标准的编程语言，用于开发客户端和服务器端应用程序。
- **DOM**：在浏览器中，DOM 提供了一个与网页内容交互的模型，JavaScript 可以通过 DOM 操作网页内容。
- **BOM**：BOM 提供了与浏览器环境的交互接口，JavaScript 通过 BOM 控制浏览器窗口、访问浏览器信息等。
- **Node.js**：在浏览器之外，Node.js 使得 JavaScript 可以在服务器端运行，提供了用于服务器开发的丰富 API 和模块。

### 总结：
- **JavaScript** 是基于 **ECMAScript** 标准的编程语言，提供了核心的语法和功能。
- **DOM** 和 **BOM** 是在浏览器环境中，JavaScript 用来与网页内容和浏览器环境交互的接口。
- **Node.js** 使 JavaScript 能在服务器端运行，并提供了一些操作文件系统、网络请求等功能。

这些技术的共同点是，都是围绕 JavaScript 进行设计和扩展，使得开发者可以使用统一的语言（JavaScript）来开发多种不同类型的应用（浏览器端、服务器端等）。

 ## *53. JavaScript 是怎么做内存管理的？*

JavaScript 的内存管理主要通过 **自动垃圾回收**（GC, Garbage Collection）来进行，这意味着 JavaScript 引擎会自动管理内存的分配和释放，开发者不需要手动管理内存。然而，理解 JavaScript 如何进行内存管理，能够帮助我们编写更加高效的代码，避免内存泄漏等问题。

### 1. **内存分配**

在 JavaScript 中，内存分配是自动完成的。JavaScript 引擎在后台处理对象、数组、函数等数据结构的内存分配。通常，当你创建一个变量或对象时，内存会动态分配给这些变量，存储在堆（heap）或栈（stack）中。

#### **堆和栈**

- **栈内存**（Stack Memory）：用于存储基本数据类型（如数字、布尔值、字符串等）和函数调用的栈帧。栈内存的分配和回收非常高效，因为它遵循后进先出的原则（LIFO，Last In First Out）。栈上的变量一旦超出作用域，就会被立即销毁。

- **堆内存**（Heap Memory）：用于存储引用类型（如对象、数组、函数等）。堆内存的分配是动态的，当创建一个对象或数组时，内存会在堆中分配，这些对象的引用会保存在栈中。堆内存中的对象会受到垃圾回收机制的管理。

### 2. **垃圾回收机制**

JavaScript 使用 **自动垃圾回收**，意味着开发者不需要显式地释放内存。垃圾回收机制的核心任务是识别哪些内存不再被引用，并将其释放。JavaScript 引擎使用几种不同的策略来进行垃圾回收，常见的策略是 **引用计数**和**标记清除**。

#### **标记清除（Mark-and-Sweep）**

这是现代 JavaScript 引擎普遍采用的垃圾回收算法。

1. **标记阶段**：垃圾回收器从根对象（如全局对象、活动的函数调用栈等）开始，遍历所有可达的对象。对于每个可达的对象，标记为“存活”状态。

2. **清除阶段**：垃圾回收器遍历堆内存，检查哪些对象没有被标记为存活（即无法访问），并回收这些对象占用的内存。

这个过程通常是由 JavaScript 引擎在后台异步执行的，开发者无法直接控制。

#### **引用计数**

引用计数是早期垃圾回收机制的一部分，它通过跟踪每个对象被引用的次数来判断对象是否可以被销毁。当一个对象的引用计数变为零时，说明该对象不再被使用，可以被回收。

然而，引用计数存在一个问题：**循环引用**。如果两个对象互相引用，导致它们的引用计数永远不为零，即使它们不再被其他地方使用，也不会被回收。现代 JavaScript 引擎已经不再使用引用计数，而是采用标记清除算法来解决这个问题。

### 3. **内存泄漏**

内存泄漏是指程序中不再使用的内存没有被及时释放，导致内存占用不断增加。JavaScript 中常见的内存泄漏情况包括：

- **全局变量泄漏**：如果意外地创建了一个全局变量（如在函数中漏掉 `var`、`let` 或 `const` 声明），该变量会一直存在，导致内存不能被回收。

- **闭包中的泄漏**：闭包会保持对外部作用域的引用，如果闭包不再使用但仍然存在，可能导致外部作用域的内存无法被回收。

- **DOM 引用泄漏**：当 DOM 元素被删除时，如果 JavaScript 代码仍然持有该元素的引用，导致该 DOM 元素无法被回收，进而导致内存泄漏。

- **事件监听器泄漏**：如果事件监听器没有被移除，可能会导致内存泄漏，特别是在移除 DOM 元素后，仍然存在未清除的事件监听器引用。

### 4. **如何避免内存泄漏**

虽然 JavaScript 具有自动垃圾回收机制，但为了减少内存泄漏，开发者需要遵循一些最佳实践：

- **使用 `let` 和 `const` 来避免隐式的全局变量**：不要直接给全局对象（如 `window`）赋值。

- **清除不再使用的引用**：例如，移除事件监听器、解除 DOM 元素的引用等。

- **避免闭包滥用**：如果闭包中引用了大量不再使用的数据，应该及时释放引用。

- **使用 WeakMap 和 WeakSet**：这两种结构可以用来解决循环引用问题，因它们允许对象作为键，但不增加引用计数，从而避免内存泄漏。

### 5. **内存管理的调试工具**

JavaScript 引擎为开发者提供了多种调试和分析内存使用情况的工具：

- **浏览器开发者工具**：现代浏览器（如 Chrome）的开发者工具提供了内存分析器，允许开发者查看内存分配情况和潜在的内存泄漏。

- **`performance` API**：可以用来测量 JavaScript 执行过程中消耗的内存和性能数据，帮助开发者识别内存瓶颈。

- **垃圾回收调试**：一些浏览器的开发者工具允许你手动触发垃圾回收操作，并查看内存快照。

### 6. **总结**

JavaScript 的内存管理依赖于 **自动垃圾回收**，其中最常见的垃圾回收机制是 **标记清除**。JavaScript 引擎会自动处理大部分内存分配和回收工作，但开发者仍然需要小心内存泄漏问题。为了避免内存泄漏，需要注意避免不必要的引用、及时清理事件监听器和 DOM 元素的引用，并遵循良好的编码实践。

## *54. JavaScript 中， 隐藏类是什么概念？*

在 JavaScript 中，**隐藏类**（Hidden Classes）是与对象的内部实现相关的概念，它通常出现在 JavaScript 引擎的底层优化过程中。隐藏类是一种用于优化对象属性查找和存储的机制，特别是在 **V8 引擎**（Chrome 和 Node.js 使用的 JavaScript 引擎）中有明确的实现。

### 隐藏类的背景

JavaScript 对象是无序的集合，通常包含一组键值对（属性名和值）。JavaScript 引擎需要一种高效的方式来存储和访问这些属性。为了提高性能，现代 JavaScript 引擎（例如 V8 引擎）使用了 **隐藏类** 来优化属性访问。

### 隐藏类的工作原理

在 JavaScript 中，**每个对象**都有一个与之关联的隐藏类。这个隐藏类并不像普通的 JavaScript 类那样是一个显式的构造函数，而是 JavaScript 引擎在幕后生成的，用于追踪对象的结构（即对象的属性和属性的顺序）。当一个对象的结构变化时（比如，添加、删除、重新排序属性），JavaScript 引擎可能会为该对象生成新的隐藏类。

#### 主要特点：
1. **隐藏类是与对象的属性布局相关的**，即对象的所有属性名和属性值类型的组合。
2. **同类型对象共享同一个隐藏类**，而不同类型的对象通常具有不同的隐藏类。
3. **属性顺序非常重要**，对象的属性是按添加的顺序排列的，因此当属性的添加顺序不同，可能导致不同的隐藏类。

### 隐藏类的优化作用

隐藏类的主要目的是通过让 JavaScript 引擎快速识别和访问对象的属性，来提高性能。具体来说，隐藏类优化了对象属性查找过程，避免了每次查找时都进行全局遍历。

1. **缓存属性位置**：每个隐藏类记录了对象属性的内部表示，类似于 C++ 中的结构体。通过隐藏类，JavaScript 引擎可以直接访问某个属性的位置，而无需在每次访问时扫描整个对象。
2. **快速属性查找**：通过使用隐藏类，V8 引擎可以避免每次查找属性时都进行线性搜索，从而提高性能。
3. **减少内存开销**：通过对属性布局的优化，隐藏类有助于减少内存的浪费，特别是在多个对象拥有相同属性布局时。

### 隐藏类与对象的关系

JavaScript 引擎为每个对象维护一个 **隐藏类链**，隐藏类链表示了对象结构的变化。隐藏类的结构类似于状态机，每次对象的属性发生变化时（比如，添加新属性），隐藏类会发生改变，创建一个新的隐藏类，并将其链接到旧的隐藏类上。

#### 示例：隐藏类的变化

```javascript
function createPerson(name, age) {
  return { name: name, age: age };
}

let person1 = createPerson("Alice", 25);  // person1 有一个隐藏类，包含 "name" 和 "age"
let person2 = createPerson("Bob", 30);    // person2 也有一个相同的隐藏类

person1.gender = "female";  // person1 添加了新的属性 "gender"，它的隐藏类发生了变化
```

在上述代码中，`person1` 和 `person2` 初始时可能会有相同的隐藏类，因为它们的结构相同。当 `person1` 添加了 `gender` 属性时，`person1` 会产生一个新的隐藏类（即新的属性布局），与 `person2` 的隐藏类不同。这样，每个对象都具有不同的隐藏类。

### 隐藏类与性能

隐藏类的优化主要是为了 **提升性能**，特别是在频繁创建对象时。引擎通过优化对象的属性布局和快速访问机制，大大减少了性能开销。性能优化的关键点在于：

- **对象属性顺序一致性**：JavaScript 引擎希望在对象的生命周期内，尽可能避免属性的顺序和数量的变化，这样对象的隐藏类可以稳定，并且不需要频繁的重新计算。
- **避免稀疏对象**：如果你在 JavaScript 对象中间插入新属性，或者通过删除某些属性来改变对象结构，可能会导致隐藏类的频繁变化，这会影响性能。

### 何时会发生隐藏类的变化？

以下几种情况下，隐藏类会发生变化：

1. **新增属性**：当给对象添加新的属性时，可能会导致创建新的隐藏类，尤其是在对象的结构变化较大时。
2. **属性删除**：删除对象的属性也可能导致隐藏类的变化。
3. **属性顺序变化**：如果添加属性的顺序不同，可能会创建不同的隐藏类。
4. **继承关系变化**：当对象的原型链发生变化时，可能会影响隐藏类。

### 隐藏类的例子：V8 引擎优化

以 V8 引擎为例，它通过隐藏类和内联缓存（inline cache）技术来优化对象属性的访问。对于大量相同结构的对象，V8 可以为这些对象共享相同的隐藏类，从而快速地进行属性查找。

#### 示例：性能优化
```javascript
function createPerson(name, age) {
  return { name, age };
}

let person1 = createPerson("Alice", 25);
let person2 = createPerson("Bob", 30);
let person3 = createPerson("Charlie", 35);
```

在上面的代码中，`person1`、`person2` 和 `person3` 都具有相同的结构，因此它们会共享相同的隐藏类。这样 V8 引擎可以优化对这些对象的属性访问。

---

### 总结

- **隐藏类**是 JavaScript 引擎为了优化对象的属性访问而使用的一个内部机制。
- 隐藏类用于记录对象属性的布局，当对象的结构发生变化时，JavaScript 引擎会生成新的隐藏类。
- 隐藏类的主要目的是提高性能，特别是在频繁创建和访问对象时。
- 虽然开发者通常不直接与隐藏类交互，但理解其原理可以帮助我们编写更高效的代码，避免性能损失。

## *55. 实现一个函数， 计算两个日期之间的天数差*

要计算两个日期之间的天数差，可以使用 JavaScript 的 `Date` 对象来处理日期的转换和计算。这里的关键步骤是将日期转换为时间戳（即自 1970 年 1 月 1 日以来的毫秒数），然后计算两个时间戳的差值，并转换为天数。

### 实现步骤：
1. 将两个日期转换为 `Date` 对象。
2. 使用 `getTime()` 方法获取两个日期的时间戳。
3. 计算两个时间戳的差值，得到相差的毫秒数。
4. 将差值转换为天数（1 天 = 24 小时 × 60 分钟 × 60 秒 × 1000 毫秒）。

### 实现代码：

```javascript
function getDaysDifference(date1, date2) {
  // 确保传入的参数是有效的日期对象
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // 获取两个日期的时间戳
  const timeDiff = Math.abs(d1.getTime() - d2.getTime());

  // 转换毫秒为天数
  const dayDiff = timeDiff / (1000 * 3600 * 24);

  return dayDiff;
}

// 示例：
const date1 = "2024-11-01";
const date2 = "2024-11-14";

console.log(getDaysDifference(date1, date2)); // 输出: 13
```

### 解释：
1. `new Date(date1)` 和 `new Date(date2)` 将传入的日期字符串转换为 `Date` 对象。可以传入各种格式的日期字符串，或者直接传入 `Date` 对象。
2. `getTime()` 方法返回自 Unix 纪元（1970 年 1 月 1 日）以来的毫秒数。
3. `Math.abs()` 用于确保日期差为正数（即无论哪个日期在前，结果都是正数）。
4. 差值除以 `(1000 * 3600 * 24)` 将毫秒转换为天数。

### 注意事项：
- 该方法忽略了时区差异，假设输入的日期已经是同一时区。
- 如果传入的日期格式无效，`new Date()` 会返回一个无效的日期对象（`NaN`），需要额外的检查来处理无效日期的情况。

### 改进：处理无效日期

你可以增加一个检查，确保日期有效：

```javascript
function getDaysDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // 检查日期是否有效
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    throw new Error("Invalid date format");
  }

  const timeDiff = Math.abs(d1.getTime() - d2.getTime());
  const dayDiff = timeDiff / (1000 * 3600 * 24);

  return dayDiff;
}
```

这样，当传入无效日期时，会抛出一个错误。

## *56. 实现日期格式化 format 函数*

要实现一个 `format` 函数，用于格式化日期，可以参考 `dayjs` 或 `moment.js` 等库的格式化规则。我们可以根据自定义需求，使用 `Date` 对象的方法和一些常见的日期格式化字符来实现日期格式化功能。

### 日期格式化函数的设计

假设我们需要支持以下格式化字符：

- `YYYY` - 四位年份（如：2024）
- `MM` - 两位月份（如：03）
- `DD` - 两位日期（如：09）
- `HH` - 24小时制的小时（如：15）
- `mm` - 分钟（如：45）
- `ss` - 秒（如：59）
- `SSS` - 毫秒（如：123）

### 实现方式

我们可以通过 `Date` 对象的方法来获取年份、月份、日期、小时等信息，然后将其替换到格式字符串中。

### 实现代码：

```javascript
function formatDate(date, format) {
  const d = new Date(date);

  if (isNaN(d)) {
    throw new Error('Invalid Date');
  }

  const map = {
    'YYYY': d.getFullYear(),                  // 四位年份
    'MM': String(d.getMonth() + 1).padStart(2, '0'),  // 月份（从 0 开始，所以加 1）
    'DD': String(d.getDate()).padStart(2, '0'),       // 日期
    'HH': String(d.getHours()).padStart(2, '0'),      // 24小时制小时
    'mm': String(d.getMinutes()).padStart(2, '0'),    // 分钟
    'ss': String(d.getSeconds()).padStart(2, '0'),    // 秒
    'SSS': String(d.getMilliseconds()).padStart(3, '0')  // 毫秒
  };

  // 替换格式字符串中的模式
  return format.replace(/YYYY|MM|DD|HH|mm|ss|SSS/g, match => map[match]);
}

// 示例：
const date = '2024-11-14T15:45:30.123Z';
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss.SSS');
console.log(formattedDate);  // 输出：2024-11-14 15:45:30.123
```

### 解释：

1. **日期处理**：我们使用 `new Date(date)` 创建一个 `Date` 对象，`date` 可以是任何合法的日期格式字符串（例如 `'2024-11-14'` 或 `'2024-11-14T15:45:30.123Z'`）。如果日期无效，抛出一个错误。
2. **日期映射**：我们将日期的各个部分（年份、月份、日期、小时、分钟、秒、毫秒）映射到一个 `map` 对象中。这些映射与格式字符串中的占位符对应。
   - `String(d.getMonth() + 1).padStart(2, '0')`：由于 `getMonth()` 返回的是从 0 开始的月份（例如，0 表示 1 月），所以我们加 1 来调整正确的月份。并且使用 `padStart(2, '0')` 来确保月份和日期始终是两位数。
3. **格式替换**：我们通过正则表达式 `/YYYY|MM|DD|HH|mm|ss|SSS/g` 查找格式字符串中的占位符（如 `'YYYY'`、`'MM'` 等），然后使用 `map[match]` 替换成相应的日期部分。
4. **返回格式化后的日期**：最终返回格式化后的日期字符串。

### 扩展功能

你可以根据需求进一步扩展功能，比如：
- **支持自定义分隔符**（例如，`YYYY/MM/DD`）。
- **支持国际化**：处理月份和星期的本地化显示。
- **支持日期范围**：例如，支持显示中文日期等。

### 示例

```javascript
const date = '2024-11-14T15:45:30.123Z';
console.log(formatDate(date, 'YYYY-MM-DD HH:mm:ss.SSS')); // 2024-11-14 15:45:30.123
console.log(formatDate(date, 'MM/DD/YYYY'));             // 11/14/2024
console.log(formatDate(date, 'DD-MM-YYYY HH:mm'));       // 14-11-2024 15:45
```

这种实现方式非常灵活，可以根据不同的需求进行调整。

## *57. Object 对象有哪些场景 api ？*

JavaScript 中的 `Object` 对象是最基础的内置对象之一，它提供了一系列方法和属性来操作对象。`Object` 对象的方法用于创建、查询、修改、复制和操作对象及其属性。

### 常用的 `Object` 对象 API

#### 1. **`Object.create()`**
用于创建一个新对象，使用指定的原型对象和可选的属性。

```javascript
const person = { name: 'Alice' };
const newPerson = Object.create(person);
console.log(newPerson.name); // "Alice"
```

#### 2. **`Object.assign()`**
用于将一个或多个源对象的所有可枚举属性复制到目标对象中，并返回目标对象。

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

#### 3. **`Object.keys()`**
返回一个包含对象所有可枚举属性名称的数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

#### 4. **`Object.values()`**
返回一个包含对象所有可枚举属性值的数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

#### 5. **`Object.entries()`**
返回一个包含对象所有可枚举属性的 `[key, value]` 对的二维数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
```

#### 6. **`Object.freeze()`**
冻结一个对象，使得该对象的属性不能被修改、添加或删除。冻结后的对象是不可变的。

```javascript
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;  // 无效操作
console.log(obj); // { a: 1, b: 2 }
```

#### 7. **`Object.seal()`**
密封一个对象，使得对象的属性不能删除，但仍然可以修改现有的属性。

```javascript
const obj = { a: 1, b: 2 };
Object.seal(obj);
obj.a = 3;  // 成功
delete obj.b;  // 无效操作
console.log(obj); // { a: 3, b: 2 }
```

#### 8. **`Object.is()`**
用于比较两个值是否严格相等（比 `===` 更精确，处理特殊情况如 `+0` 和 `-0`，`NaN`）。

```javascript
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, '1')); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
```

#### 9. **`Object.getPrototypeOf()`**
返回指定对象的原型（即其内部 `[[Prototype]]` 属性的值）。

```javascript
const obj = {};
console.log(Object.getPrototypeOf(obj)); // Object.prototype
```

#### 10. **`Object.setPrototypeOf()`**
设置指定对象的原型（即设置其内部 `[[Prototype]]` 属性的值）。

```javascript
const obj = {};
const newProto = { greet: () => console.log('Hello') };
Object.setPrototypeOf(obj, newProto);
obj.greet(); // "Hello"
```

#### 11. **`Object.defineProperty()`**
用于直接在一个对象上定义一个新属性，或修改现有属性，并返回该对象。可以设置属性的描述符（如是否可枚举、是否可写、是否可配置等）。

```javascript
const obj = {};
Object.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: false,
  configurable: true
});
console.log(obj.name); // "Alice"
obj.name = 'Bob'; // 无效操作
console.log(obj.name); // "Alice"
```

#### 12. **`Object.defineProperties()`**
用于在一个对象上同时定义多个属性，可以批量定义多个属性的特性。

```javascript
const obj = {};
Object.defineProperties(obj, {
  name: {
    value: 'Alice',
    writable: true
  },
  age: {
    value: 25,
    writable: true
  }
});
console.log(obj.name); // "Alice"
console.log(obj.age); // 25
```

#### 13. **`Object.getOwnPropertyDescriptor()`**
返回对象自身属性的描述符。

```javascript
const obj = { name: 'Alice' };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor); // { value: "Alice", writable: true, enumerable: true, configurable: true }
```

#### 14. **`Object.getOwnPropertyNames()`**
返回一个包含对象所有自身属性名的数组（包括不可枚举的属性）。

```javascript
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
});
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]
```

#### 15. **`Object.getOwnPropertySymbols()`**
返回一个包含对象所有自身符号属性名的数组。

```javascript
const obj = {};
const sym = Symbol('foo');
obj[sym] = 'bar';
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)]
```

#### 16. **`Object.prototype.hasOwnProperty()`**
判断对象是否具有指定的自身属性（非继承属性）。

```javascript
const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('c')); // false
```

#### 17. **`Object.prototype.isPrototypeOf()`**
判断一个对象是否存在于另一个对象的原型链上。

```javascript
const obj1 = {};
const obj2 = Object.create(obj1);
console.log(obj1.isPrototypeOf(obj2)); // true
```

#### 18. **`Object.prototype.propertyIsEnumerable()`**
判断对象自身的某个属性是否可枚举。

```javascript
const obj = { a: 1 };
console.log(obj.propertyIsEnumerable('a')); // true
```

---

### 总结

JavaScript 中的 `Object` API 提供了丰富的功能来操作对象，从基本的属性操作到对象的深度操作，如获取原型链、定义属性、冻结对象等。它们是 JavaScript 编程中必不可少的工具，帮助开发者更加高效地管理和操作对象。

## *58. 如何拦截 web 应用的请求*

拦截 Web 应用的请求通常是指在发送 HTTP 请求和接收响应的过程中，对请求或响应进行修改、监控、记录或调试。这种操作通常用于调试、测试、安全分析、性能优化等场景。

在 Web 开发中，常见的拦截请求的方式包括使用 JavaScript 原生 API（如 `XMLHttpRequest` 和 `fetch`），以及借助第三方库或工具（如浏览器插件、代理工具等）。以下是几种常见的拦截 Web 应用请求的方式：

### 1. 使用 `XMLHttpRequest` 拦截请求
`XMLHttpRequest` 是一种老旧但广泛使用的浏览器 API，用于发送和接收 HTTP 请求。你可以通过重写 `XMLHttpRequest` 的方法来拦截请求和响应。

#### 示例：拦截 `XMLHttpRequest` 请求

```javascript
(function() {
// 保存原始的 open 和 send 方法
const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;

// 重写 open 方法，拦截请求的 URL
XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
 console.log(`Request method: ${method}`);
 console.log(`Request URL: ${url}`);
 this._url = url; // 将请求的 URL 存储在对象上，后续可以在 send 方法中访问

 // 调用原始的 open 方法
 originalOpen.apply(this, arguments);
};

// 重写 send 方法，拦截请求的数据
XMLHttpRequest.prototype.send = function(data) {
 console.log(`Request Data: ${data}`);
 // 在这里可以修改请求数据，或做其他处理
 originalSend.apply(this, arguments); // 调用原始的 send 方法
};

// 监听响应的 onload 事件
const originalOnload = XMLHttpRequest.prototype.onload;
XMLHttpRequest.prototype.onload = function() {
 console.log(`Response from: ${this._url}`);
 console.log(`Response Status: ${this.status}`);
 console.log(`Response Text: ${this.responseText}`);
 // 你可以在这里处理响应数据
 if (originalOnload) {
   originalOnload.apply(this, arguments);
 }
};
})();
```

### 2. 使用 `fetch` 拦截请求
`fetch` 是现代浏览器提供的 API，用于发送 HTTP 请求。你可以通过重写 `fetch` 函数来拦截请求和响应。

#### 示例：拦截 `fetch` 请求

```javascript
(function() {
const originalFetch = window.fetch;

// 重写 fetch 方法，拦截请求
window.fetch = function(input, init) {
 console.log(`Request URL: ${input}`);
 console.log(`Request Method: ${init ? init.method : 'GET'}`);
 console.log(`Request Headers: ${JSON.stringify(init ? init.headers : {})}`);

 // 可以修改请求参数或添加自定义的请求头等
 return originalFetch.apply(this, arguments)
   .then(response => {
     console.log(`Response Status: ${response.status}`);
     return response; // 可以在这里处理响应数据
   });
};
})();
```

### 3. 使用浏览器插件
浏览器插件（例如 [Tampermonkey](https://www.tampermonkey.net/)）可以帮助你更方便地拦截和修改 Web 应用的请求。

- **Tampermonkey**：允许你在浏览器中注入自定义的 JavaScript 脚本，从而拦截和修改页面上的请求。
- **Requestly**：允许用户创建拦截规则，可以通过该插件修改 HTTP 请求和响应。

### 4. 使用 Service Worker 拦截请求
`Service Worker` 是一种强大的浏览器技术，允许你在浏览器中拦截网络请求并缓存、修改、响应请求。它通常用于离线缓存和增强应用性能，但也可以用于请求拦截和修改。

#### 示例：使用 `Service Worker` 拦截请求

```javascript
// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('Service Worker registered:', registration);
  }).catch(function(error) {
    console.log('Service Worker registration failed:', error);
  });
}
```

然后，在 `service-worker.js` 文件中，你可以拦截请求并修改响应。

```javascript
self.addEventListener('fetch', function(event) {
  console.log('Intercepted request:', event.request.url);

  // 你可以修改请求，或从缓存中获取响应
  event.respondWith(
    fetch(event.request).then(function(response) {
      // 修改响应或缓存
      return response;
    }).catch(function(error) {
      console.log('Fetch failed:', error);
      return new Response('Network error');
    })
  );
});
```

### 5. 使用代理服务器拦截请求
你还可以使用代理服务器来拦截和修改 Web 请求和响应。常见的代理工具包括：

- **Charles**：一个强大的 HTTP 代理工具，可以捕获和修改 HTTP 请求和响应。
- **Fiddler**：另一个广泛使用的 HTTP 调试代理工具。
- **mitmproxy**：开源的中间人代理工具，支持自动化请求和响应的拦截和修改。

通过这些工具，你可以在网络层面上拦截和修改 Web 请求，不需要在代码中做任何改动。

### 6. 使用 WebSocket 拦截请求
WebSocket 连接与普通的 HTTP 请求不同，但你仍然可以拦截和修改通过 WebSocket 发送的消息。你可以通过重写 WebSocket 的 `send` 方法来实现这一点。

#### 示例：拦截 WebSocket 请求

```javascript
(function() {
  const originalSend = WebSocket.prototype.send;

  WebSocket.prototype.send = function(data) {
    console.log('WebSocket message:', data);

    // 可以修改数据或执行其他操作
    originalSend.apply(this, arguments); // 调用原始的 send 方法
  };
})();
```

### 总结
拦截 Web 应用的请求有多种方法，包括：

- **重写 `XMLHttpRequest` 和 `fetch`**：通过 JavaScript 动态拦截请求和响应。
- **Service Worker**：通过浏览器提供的 Service Worker API 拦截和处理网络请求。
- **浏览器插件**：使用像 Tampermonkey 或 Requestly 这样的插件更方便地拦截请求。
- **代理工具**：如 Charles、Fiddler 和 mitmproxy 等用于在网络层面拦截请求。
- **WebSocket**：重写 WebSocket 的 `send` 方法拦截 WebSocket 消息。

这些方法可以根据需求选择，能够有效地进行调试、测试或修改 Web 应用的网络请求。

## *59. 不会冒泡的事件有哪些？*

在 JavaScript 中，事件可以分为两类：**支持冒泡的事件**和**不支持冒泡的事件**。事件冒泡是指事件从目标元素（事件发生的元素）开始，逐步向其父元素、祖父元素等 DOM 树的根节点传播。在事件冒泡过程中，每个元素都可以对事件进行处理，称为事件的“冒泡”。

### 不会冒泡的事件

并不是所有事件都会冒泡，某些特定的事件类型在发生时不会冒泡。以下是一些常见的**不会冒泡的事件**：

1. **`focus` 和 `blur` 事件**
   - `focus` 和 `blur` 是输入元素（如 `<input>`、`<textarea>` 等）的特殊事件，它们在元素获取或失去焦点时触发。
   - 这两个事件不会冒泡，原因是浏览器设计上认为它们不需要冒泡以避免焦点的传递过程被阻塞。
   - 如果你想监听这些事件冒泡，可以使用 `focusin` 和 `focusout`（这两个事件是 `focus` 和 `blur` 的冒泡版）。

   ```javascript
   // 不会冒泡
   element.addEventListener('focus', function(event) {
     console.log('Focus event');
   });
   
   // 会冒泡
   element.addEventListener('focusin', function(event) {
     console.log('Focusin event');
   });
   ```

2. **`load` 和 `unload` 事件**
   - `load` 事件在页面或某个资源（如图片、脚本）加载完成时触发。`unload` 事件在页面卸载时触发。
   - 这两个事件不会冒泡，它们通常在页面加载和卸载时触发，直接作用于 `window` 或 `document`。

   ```javascript
   // 不会冒泡
   window.addEventListener('load', function() {
     console.log('Page loaded');
   });
   ```

3. **`resize` 和 `scroll` 事件**
   - `resize` 事件在浏览器窗口的大小变化时触发，`scroll` 事件在元素滚动时触发。
   - 这些事件不会冒泡，它们通常作用于特定的 DOM 元素，如 `window` 或带有滚动条的元素。

   ```javascript
   // 不会冒泡
   window.addEventListener('resize', function() {
     console.log('Window resized');
   });
   ```

4. **`change` 事件（在某些元素上）**
   - `change` 事件通常在表单元素（如 `<input>`、`<select>`、`<textarea>` 等）值发生变化时触发。
   - 对于 `input` 元素中的文本内容、`textarea` 等控件，`change` 事件不会冒泡。但是对于一些选择控件（如 `<select>` 元素中的选项选择变化），它的 `change` 事件会冒泡。

   ```javascript
   // 对于 input 元素，change 事件不会冒泡
   element.addEventListener('change', function(event) {
     console.log('Change event');
   });
   ```

5. **`pointer` 事件**
   - `pointerdown`、`pointerup`、`pointermove` 等指针事件是为支持触摸、鼠标和其他指针设备（如笔或触摸板）而设计的。
   - 在某些情况下，这些事件（例如 `pointerdown` 和 `pointerup`）可能不会冒泡，具体行为取决于浏览器的实现。通常 `pointermove` 会冒泡，但有时会有特殊行为。

6. **`drag` 事件（在某些情况下）**
   - `drag` 事件是与拖放操作相关的事件。虽然某些拖放事件会冒泡，如 `dragstart` 和 `dragend`，但在拖放过程中，其他与拖放相关的事件（如 `dragover` 和 `drop`）可能不会冒泡，特别是在处理浏览器默认行为时。

### 总结

总的来说，**不会冒泡的事件**包括：

- **`focus` 和 `blur`**（但有 `focusin` 和 `focusout` 替代）。
- **`load` 和 `unload`**。
- **`resize` 和 `scroll`**。
- **`change`**（特别是某些元素，如 `input` 和 `textarea`）。
- **`pointer` 事件**（在某些情况下）。
- **`drag` 事件**（在拖放操作过程中）。

如果你需要在这些事件上实现类似冒泡的效果，可以使用 `focusin`、`focusout` 或其他替代事件，或者通过事件代理的方式处理。

## *60. 如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功？*

要让 `var [a, b] = {a: 1, b: 2}` 这样的解构赋值成功，实际上需要了解 JavaScript 解构赋值的规则。

### 问题的本质：
- 对象的解构赋值与数组的解构赋值是不同的。
- 在 `var [a, b] = {a: 1, b: 2}` 中，左侧使用了数组的解构语法，但右侧是一个对象 `{a: 1, b: 2}`，这会导致解构失败，因为对象不会按照数组的顺序来解构。

### 解决方案
要让 `{a: 1, b: 2}` 成功解构到 `[a, b]`，有两种方式：

#### 1. 使用对象的解构赋值（需要修改左侧的解构方式）

对象的解构赋值应该使用对象的属性名来解构。因此，正确的做法是：

```javascript
var {a, b} = {a: 1, b: 2};
console.log(a); // 1
console.log(b); // 2
```

在这个例子中，`{a, b}` 语法表示从右侧的对象中取出 `a` 和 `b` 的值并赋给左侧的变量 `a` 和 `b`。

#### 2. 将对象转换为数组再解构

如果你强制希望使用数组的解构方式，可以先将对象转换为数组，然后再解构：

```javascript
var [a, b] = Object.values({a: 1, b: 2});
console.log(a); // 1
console.log(b); // 2
```

`Object.values()` 方法返回一个对象的所有可枚举属性值组成的数组。在这种情况下，`Object.values({a: 1, b: 2})` 返回 `[1, 2]`，然后可以成功地使用数组解构赋值。

#### 3. 使用 `Array` 解构的方式（数组顺序与对象无关）

如果你希望以某种顺序从对象的键值对中解构并赋值，可以使用 `Object.entries()` 配合数组解构：

```javascript
var [[aKey, a], [bKey, b]] = Object.entries({a: 1, b: 2});
console.log(a); // 1
console.log(b); // 2
```

在这个例子中，`Object.entries()` 返回一个二维数组 `[["a", 1], ["b", 2]]`，然后可以按顺序解构。

### 总结

- `var [a, b] = {a: 1, b: 2}` 会失败，因为对象不能直接按照数组的顺序进行解构赋值。
- 要解决问题，可以改为使用对象解构：`var {a, b} = {a: 1, b: 2};`
- 或者使用 `Object.values()` 将对象转为数组后再解构：`var [a, b] = Object.values({a: 1, b: 2});`

## *61. MessageChannel 是什么，有什么使用场景？*

`MessageChannel` 是 Web API 提供的一种机制，允许在不同的浏览器上下文之间进行高效的双向通信。它创建了一个新的消息通道，可以在两个 `MessagePort` 之间传递消息。通常用于在不同线程、iframe、或 Web Worker 等之间进行异步消息传递。

### `MessageChannel` 的基本概念

`MessageChannel` 是由两个 `MessagePort` 组成的对象。每个 `MessagePort` 都可以用来发送和接收消息，两个 `MessagePort` 通过这个通道进行通信。通过这种方式，你可以在不同的线程或不同的执行上下文之间进行消息传递。 

#### 语法

```javascript
let channel = new MessageChannel();
let port1 = channel.port1;
let port2 = channel.port2;
```

### `MessageChannel` 主要特点：
1. **双向通信**：`port1` 和 `port2` 都是可以发送和接收消息的端口。
2. **异步通信**：消息传递是异步的，即发送消息后，不需要等待接收端响应，可以继续执行其他任务。
3. **线程间通信**：通常用于 Web Worker、主线程与 iframe、以及不同的浏览上下文之间的通信。

### 使用 `MessageChannel`

`MessageChannel` 创建后，`port1` 和 `port2` 都可以用来发送和接收消息。消息通过 `postMessage()` 方法发送，接收到消息时通过 `onmessage` 事件进行处理。

#### 示例：主线程和 Worker 之间的通信

```javascript
// 主线程代码
const worker = new Worker('worker.js'); // 创建 Worker
const channel = new MessageChannel();

// 向 Worker 发送 port2，供 Worker 使用
worker.postMessage({port: channel.port2}, [channel.port2]);

// 在主线程监听 port1 的消息
channel.port1.onmessage = function(event) {
  console.log('Received message from worker:', event.data);
};

// 主线程发送消息到 Worker
channel.port1.postMessage('Hello from main thread');
```

在 `worker.js` 中：

```javascript
// Worker 代码
self.onmessage = function(event) {
  const port = event.data.port; // 获取主线程传来的 port2
  port.onmessage = function(e) {
    console.log('Received message from main thread:', e.data);
  };

  // 向主线程发送消息
  port.postMessage('Hello from worker');
};
```

### 使用场景

1. **主线程和 Web Worker 之间的通信**：
   - Web Worker 是 JavaScript 中的多线程机制，它允许在独立的线程中运行代码。`MessageChannel` 可以使主线程和 Web Worker 之间进行高效的双向通信，避免使用传统的 `postMessage()`，这样可以避免阻塞主线程。
   - 使用 `MessageChannel` 使得多个 Web Worker 之间可以直接交换消息，提高性能和响应性。

2. **跨窗口、跨 iframe 或跨 Tab 的通信**：
   - 在多页面应用中，不同的窗口、iframe 或标签页间可能需要进行通信。`MessageChannel` 提供了一个简单而高效的方式来实现这些窗口或标签页之间的消息传递。
   - 这种通信可以跨越同源策略限制，前提是父窗口或子窗口能够共享 `MessagePort`。

3. **跨线程的高效消息传递**：
   - 当需要在多个线程间进行大量数据传输时，`MessageChannel` 提供了一种非阻塞的异步方式，特别是在处理复杂的应用时，比如需要执行长时间计算并返回计算结果时。

4. **复杂的 Web Worker 管理**：
   - 如果有多个 Web Worker 需要彼此协作（例如并行计算），`MessageChannel` 可以用于在多个 Worker 之间传递消息，实现更复杂的并行任务调度和数据处理。

5. **性能优化**：
   - `MessageChannel` 提供了一个比 `postMessage()` 更高效的机制，尤其是在需要进行大量消息传递的情况下。由于它的异步特性，消息传递不会阻塞执行，适合在高性能需求的应用中使用。

### `MessageChannel` 和 `postMessage` 的区别

虽然 `postMessage()` 和 `MessageChannel` 都可以用于跨线程、跨窗口的消息传递，但它们有以下区别：

- **单向 vs 双向**：`postMessage()` 是单向的通信机制，发送方发送消息，接收方接收消息；而 `MessageChannel` 是双向的，通信双方可以互相发送和接收消息。
- **消息传递的灵活性**：`MessageChannel` 提供了更灵活的消息传递方式，可以在同一个通道中实现异步的双向通信，而 `postMessage()` 通常用于简单的一次性消息传递。
- **性能**：`MessageChannel` 在高频繁消息传递场景中，相比 `postMessage()` 更为高效，尤其是多线程或多进程的通信。

### 总结

`MessageChannel` 是一种高效的、双向的、异步的消息传递机制，用于在不同的执行上下文之间进行通信。它在主线程与 Web Worker、跨窗口、跨 iframe、以及跨 Tab 之间的通信中都有广泛的应用。通过提供灵活的、非阻塞的消息传递方式，它是实现高性能应用的重要工具。

## *62. try...catch 可以捕获到异步代码中的错误吗？*

`try...catch` 是 JavaScript 中用于捕获同步代码错误的机制，但它对异步代码中的错误的处理方式有所不同，取决于异步代码的执行方式。

### 1. **同步代码中的错误**

`try...catch` 可以正常捕获同步代码中的错误：

```javascript
try {
throw new Error("This is a synchronous error");
} catch (error) {
console.error(error.message);  // 输出：This is a synchronous error
}
```

### 2. **异步代码中的错误（Promise）**

对于基于 `Promise` 的异步代码，`try...catch` 无法直接捕获异步代码中的错误，因为异步操作是在 `try...catch` 执行之后才开始的。`catch` 只能捕获同步代码中的错误，不能捕获 `Promise` 的错误。

```javascript
function asyncFunction() {
return new Promise((resolve, reject) => {
 setTimeout(() => {
   reject(new Error("This is an asynchronous error"));
 }, 1000);
});
}

try {
asyncFunction();  // 异步代码没有被捕获
} catch (error) {
console.error(error.message);  // 这个不会被触发
}
```

上面的代码不会捕获到异步 `Promise` 中的错误，因为 `try...catch` 只处理同步错误，异步代码会在 `try...catch` 执行之后被异步地处理。

### 3. **异步代码中的错误（`async`/`await`）**

对于使用 `async/await` 的异步代码，`try...catch` 可以有效捕获其中的错误。原因是 `await` 会暂停当前函数的执行，直到 `Promise` 执行完成，因此你可以像处理同步代码一样使用 `try...catch` 来捕获异步函数中的错误。

```javascript
async function asyncFunction() {
throw new Error("This is an asynchronous error");
}

async function main() {
try {
 await asyncFunction();  // 这里可以捕获异步代码中的错误
} catch (error) {
 console.error(error.message);  // 输出：This is an asynchronous error
}
}

main();
```

### 4. **捕获 `Promise` 中的错误（`then/catch`）**

如果你使用 `then` 和 `catch` 来处理 `Promise`，可以直接在 `catch` 中捕获异步错误：

```javascript
asyncFunction()
.then(() => {
 // 正常处理
})
.catch(error => {
 console.error(error.message);  // 输出：This is an asynchronous error
});
```

### 总结

- **同步代码的错误**：`try...catch` 能够直接捕获。
- **基于 `Promise` 的异步代码**：`try...catch` 无法直接捕获异步代码中的错误，必须使用 `.catch()` 或 `async/await` 的 `try...catch` 来处理。
- **使用 `async/await`**：`try...catch` 可以捕获异步代码中的错误，因为 `await` 会等待 `Promise` 的结果，类似同步执行。

## *63. 虚拟dom渲染到页面的时候，框架会做哪些处理？*

当框架使用虚拟 DOM（Virtual DOM）将组件渲染到页面时，会经过一系列的处理步骤。这些步骤包括虚拟 DOM 的生成、差异化更新（Diffing）、最小化更新（Reconciliation），以及最终将更新的结果渲染到真实的 DOM 上。下面是这些处理步骤的详细解释：

### 1. **创建虚拟 DOM**
虚拟 DOM 是一个轻量级的 JavaScript 对象，它是对实际 DOM 树的抽象。它通常由一个框架（如 React、Vue）通过对组件状态（state）和模板（template）进行解析生成。每个虚拟 DOM 对象代表一个组件或 HTML 元素，包含该元素的类型、属性、子元素等信息。

#### 处理流程：
- 框架根据组件的状态和模板，创建虚拟 DOM 树（React 中是通过 `React.createElement` 创建，Vue 中是通过模板编译生成）。
- 虚拟 DOM 是不可变的，只是一个 JavaScript 对象，用来表示界面的结构和内容。

### 2. **虚拟 DOM 与真实 DOM 的对比（Diffing）**
当虚拟 DOM 树生成之后，框架会将其与当前渲染的虚拟 DOM 树进行比较，找出两者之间的差异，这个过程叫做 **Diffing（差异对比）**。

- **Diffing 算法**：框架会遍历新旧虚拟 DOM 树，逐个节点进行比对，找出哪些节点发生了变化、哪些节点被删除、哪些节点被添加。
- 一般来说，Diffing 是通过以下几个策略来优化的：
  - **按层次比较**：通过遍历树的结构来找出变化。
  - **最小化比较范围**：只对有变化的部分进行比对，而不是整个树。
  - **Key 的使用**（React 中的 `key` 属性）：通过为每个节点提供唯一的标识符，帮助框架在重排时减少不必要的 DOM 操作。

### 3. **生成差异补丁（Reconciliation）**
在完成 Diffing 之后，框架会将差异（差异补丁）记录下来，并决定如何将这些变化高效地应用到真实的 DOM 上。这个过程通常叫做 **Reconciliation（和谐更新）**。

#### 处理流程：
- 根据 Diffing 的结果，框架会生成一个“补丁”对象，记录下哪些节点发生了变化，哪些节点需要添加，哪些节点需要删除。
- 该补丁对象会被传递到更新的渲染引擎（如 React 的 Reconciler）进行处理。

### 4. **更新真实 DOM**
在完成虚拟 DOM 与真实 DOM 的差异比较和补丁生成后，框架会将差异应用到真实 DOM 上。这个过程通常由浏览器的渲染引擎进行处理。

- **最小化更新**：只更新需要变化的部分，避免直接重建整个 DOM 树。比如说，只更新文本内容、修改样式、添加或删除节点等。
- **批量更新**：为了提高性能，框架通常会将多个更新操作合并成一个批量更新，以减少 DOM 操作的频率。
- **事务管理**：一些框架（如 React）会将更新过程封装在一个“事务”中，这样可以保证 DOM 操作的一致性，避免中间状态的渲染。

### 5. **浏览器渲染**
浏览器的渲染引擎负责将更新后的 DOM 渲染到页面上，处理布局、绘制等操作。这包括：
- **布局计算（Layout）**：根据 DOM 元素的大小、位置等进行排版。
- **绘制（Paint）**：根据布局结果，绘制出元素的内容、边框、背景等。
- **合成（Composite）**：将绘制好的内容合成到屏幕上，进行最终的显示。

### 6. **后续更新（优化）**
框架通常还会进行一些额外的优化，以确保性能最大化：
- **合成更新（Batching Updates）**：很多框架会将多个更新批量处理，以避免频繁的 DOM 操作。
- **异步更新**：为了避免阻塞主线程，框架可能会将部分更新任务放入异步队列，采用“空闲时间渲染”或“增量渲染”策略。

### 总结
框架通过虚拟 DOM 渲染到页面时的主要处理步骤如下：
1. **生成虚拟 DOM**：框架将组件或模板渲染为虚拟 DOM 树。
2. **Diffing**：将新的虚拟 DOM 树与旧的虚拟 DOM 树进行比较，找出差异。
3. **生成差异补丁**：根据 Diffing 的结果，生成需要更新的差异补丁。
4. **更新真实 DOM**：将差异补丁应用到实际的 DOM 中，尽量减少操作。
5. **浏览器渲染**：浏览器负责执行最终的渲染，绘制到屏幕上。

通过这种方式，框架能够高效地更新页面，减少不必要的 DOM 操作，提高渲染性能。

## *64. setTimeout 延时写成0，一般可以什么场景下使用？*

将 `setTimeout` 的延时设为 `0`（即 `setTimeout(fn, 0)`）通常用于以下几种场景：

### 1. **延迟执行某个任务（异步执行）**
将任务放入事件队列，实际上是把当前的同步任务和执行栈中的其他任务先完成后，再执行这个 `setTimeout(fn, 0)` 中的回调函数。即便延时为 0，浏览器会将它放入任务队列，等待当前的同步任务执行完毕后再执行。因此，这种做法通常用来将一个任务异步化，推迟到当前所有同步任务都完成之后。

#### 场景示例：
- **避免阻塞主线程**：假设有一些计算量大的操作，需要在当前操作完成后执行，但又不能立即阻塞当前执行的任务。此时将任务通过 `setTimeout(fn, 0)` 延迟执行，可以让当前的任务先完成，避免 UI 卡顿。

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs after all other synchronous code.");
}, 0);

console.log("End");
```

输出：
```
Start
End
This runs after all other synchronous code.
```

### 2. **确保 DOM 更新完成后再执行某些操作**
在浏览器中，DOM 更新是异步的。如果你在某些 DOM 操作后立即执行某些任务（比如获取最新的 DOM 状态），可能会出现问题，因为浏览器并没有立即反映出最新的 DOM 状态。通过 `setTimeout(fn, 0)` 可以确保在下一轮事件循环中执行回调，这样可以等待当前 DOM 更新完成。

#### 场景示例：
- **确保 UI 更新后执行**：假设你改变了 DOM，然后希望在 DOM 更新之后执行某些操作（如获取元素的尺寸等），可以使用 `setTimeout(fn, 0)` 来推迟执行，确保 DOM 更新完成。

```javascript
document.getElementById('myElement').style.width = '100px';

// 等待 DOM 更新完成后再获取宽度
setTimeout(() => {
  const width = document.getElementById('myElement').offsetWidth;
  console.log(width);
}, 0);
```

### 3. **避免阻塞主线程的长时间同步代码**
如果某段代码比较复杂且耗时，直接同步执行可能会导致浏览器卡顿。为了避免 UI 假死，可以将这段代码分批执行，利用 `setTimeout(fn, 0)` 将它拆分到事件队列的下一轮，使得浏览器可以在两个事件循环之间进行渲染和响应。

#### 场景示例：
- **拆分耗时操作**：假设你有一个复杂的循环任务，直接执行会导致浏览器卡顿。通过 `setTimeout(fn, 0)` 可以分批执行这个任务，让浏览器有机会渲染页面。

```javascript
function longTask() {
  for (let i = 0; i < 1000000; i++) {
    // 一些复杂的计算
  }
  console.log('Task completed');
}

setTimeout(longTask, 0);
```

### 4. **避免立即执行某些操作**
有时你希望将某些操作延迟执行，而不希望它立刻执行。即便将延迟设置为 `0`，它也会推迟到当前代码执行完毕之后。这在一些回调函数中非常有用，确保它们执行时不会影响当前的任务队列。

#### 场景示例：
- **避免阻塞与延迟执行回调**：例如，在某些复杂的异步任务中，你希望在主线程完成后再执行回调。

```javascript
async function fetchData() {
  // 这里会进行一些异步操作
  await someAsyncOperation();

  // 延迟执行后续操作
  setTimeout(() => {
    console.log('Data fetched and now executing callback');
  }, 0);
}
```

### 总结：
`setTimeout(fn, 0)` 并不是让回调函数在 "0" 毫秒后执行，而是让它在当前执行栈的同步任务全部完成后，进入下一轮事件循环时执行。它的常见用途包括：
1. 延迟执行异步任务。
2. 确保 DOM 更新完成后执行某些操作。
3. 拆分耗时的同步任务，避免主线程被阻塞。
4. 延迟执行某些回调函数。

它不会产生实际的延迟，但能让你有效地管理异步行为，避免当前代码的立即执行对页面性能产生负面影响。

## *65. ES6中函数新增了哪些扩展?*

在 ES6（ECMAScript 2015）中，函数的相关特性和语法得到了大量扩展，增强了 JavaScript 的表达能力和简洁性。以下是一些主要的扩展：

### 1. **箭头函数（Arrow Functions）**
箭头函数是 ES6 引入的一种简洁的函数表达式写法，它具有以下特点：
- **简洁的语法**：省略了 `function` 关键字、参数的括号（在只有一个参数时）以及花括号（在函数体只有一个表达式时）。
- **不绑定 `this`**：箭头函数的 `this` 是从外部作用域继承的，而不是每次调用时动态绑定。这对于处理事件监听器等场景非常有用，避免了手动绑定 `this`。

**语法**：
```javascript
const add = (a, b) => a + b;
```

**示例**：
```javascript
const square = x => x * x;  // 单个参数省略括号
const sum = (a, b) => { return a + b; };  // 多个参数需要括号
```

### 2. **默认参数（Default Parameters）**
ES6 允许函数参数提供默认值，这样即使调用时没有传递某些参数，函数依然可以正常执行。

**语法**：
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
```

**示例**：
```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 输出: 5
console.log(multiply(5, 2)); // 输出: 10
```

### 3. **Rest 参数（Rest Parameters）**
`...` 语法允许函数接受不定数量的参数，并将它们表示为一个数组。这个特性常常与默认参数一起使用，以处理可变数量的参数。

**语法**：
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

**示例**：
```javascript
function concatStrings(...strings) {
  return strings.join(' ');
}

console.log(concatStrings('Hello', 'World'));  // 输出: "Hello World"
```

### 4. **扩展运算符（Spread Operator）**
虽然 `...` 的语法与 `Rest` 参数相同，但它在函数调用中的用途是不同的。扩展运算符允许将数组或对象“展开”成多个独立的值。

**语法**：
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

**示例**：
```javascript
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2];
const array2 = [3, 4];
console.log(mergeArrays(array1, array2));  // 输出: [1, 2, 3, 4]
```

### 5. **函数的尾调用优化（Tail Call Optimization）**
ES6 引入了尾调用优化（TCO）的提案，尽管 JavaScript 在多数引擎中尚未完全实现它，但它允许在递归函数的最后一步调用另一个函数时优化栈的使用，从而避免递归调用带来的栈溢出错误。

**示例**：
```javascript
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);  // 尾调用优化
}
```
该特性在浏览器中的实现并不一致，目前大部分环境（如 Chrome）尚不支持该优化。

### 6. **函数参数解构（Destructuring in Function Parameters）**
ES6 允许在函数参数中使用解构赋值，从而简化代码。

**语法**：
```javascript
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
```

**示例**：
```javascript
const user = { name: 'Alice', age: 25 };
printUser(user);  // 输出: Alice is 25 years old.
```

### 7. **Math对象的新增方法**
虽然这个与函数的扩展并非直接相关，但 ES6 对 `Math` 对象进行了扩展，新增了一些数学相关的函数。比如：
- `Math.sign(x)`：返回数值的符号（+1、0 或 -1）。
- `Math.cbrt(x)`：返回数字的立方根。
- `Math.trunc(x)`：返回数字的小数部分去掉后的整数部分。

### 8. **Symbol（符号）**
`Symbol` 是 ES6 引入的新原始数据类型，通常用作对象属性的唯一标识符。虽然 `Symbol` 本身不是直接与函数相关，但它在对象属性访问和函数设计中被广泛使用。

**示例**：
```javascript
const mySymbol = Symbol('description');
const obj = { [mySymbol]: 'value' };
console.log(obj[mySymbol]);  // 输出: value
```

### 9. **动态 import**
ES6 引入了 `import()` 函数，可以动态加载模块。它返回一个 `Promise` 对象，在模块加载完成时解决。

**示例**：
```javascript
function loadModule() {
  import('./someModule.js').then(module => {
    console.log(module);
  }).catch(err => {
    console.error('Failed to load module', err);
  });
}
```

### 10. **函数名称简写（Method Shorthand）**
ES6 允许对象字面量中定义方法时，直接使用简写语法，不需要再写 `function` 关键字。

**语法**：
```javascript
const obj = {
  greet() {
    console.log('Hello!');
  }
};
```

### 总结
ES6 为 JavaScript 函数引入了大量增强功能，使得代码更简洁、易读、灵活且功能更强大。常用的新特性包括：
- 箭头函数

- 默认参数

- Rest 参数

- 扩展运算符

- 函数参数解构

- 动态 `import`

  这些功能极大地提高了开发效率，简化了函数的定义和使用。

## *66. ES6中对象新增了哪些扩展?*

在ES6中，JavaScript 对象（`Object`）引入了一些扩展和新的方法，提升了对象的操作能力。以下是一些关键的新特性和扩展：

### 1. **对象字面量的增强**
ES6 对象字面量的语法做了增强，允许以下操作：

- **简洁的属性声明**：如果对象的属性名与变量名相同，可以省略属性名。
  ```js
  const name = 'John';
  const person = { name };  // 等同于 { name: name }
  ```

- **计算属性名**：可以使用表达式作为属性名。
  ```js
  const prop = 'age';
  const person = { [prop]: 30 };  // 等同于 { age: 30 }
  ```

- **方法简写**：对象中的方法可以用简写形式定义。
  ```js
  const person = {
    name: 'John',
    greet() {
      console.log('Hello!');
    }
  };
  ```

### 2. **`Object.is()`**
`Object.is()` 用于判断两个值是否严格相等。与 `===` 不同，`Object.is()` 在处理 `+0` 和 `-0` 以及 `NaN` 时表现不同：
  - `Object.is(+0, -0)` 为 `false`。
  - `Object.is(NaN, NaN)` 为 `true`。

```js
Object.is(25, 25);  // true
Object.is(+0, -0);  // false
Object.is(NaN, NaN);  // true
```

### 3. **`Object.assign()`**
`Object.assign()` 方法将一个或多个源对象的所有可枚举属性复制到目标对象中，并返回目标对象。它常用于对象的浅拷贝和合并。

```js
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);  // { a: 1, b: 2, c: 3 }
```

### 4. **`Object.entries()`**
`Object.entries()` 方法返回一个对象自身所有可枚举属性的键值对数组，数组中的每一项都是一个包含 `[key, value]` 的数组。

```js
const obj = { name: 'John', age: 30 };
Object.entries(obj);
// [['name', 'John'], ['age', 30]]
```

### 5. **`Object.keys()` 和 `Object.values()`**
- **`Object.keys()`** 返回一个对象的所有可枚举属性的键组成的数组。
- **`Object.values()`** 返回一个对象的所有可枚举属性的值组成的数组。

```js
const obj = { name: 'John', age: 30 };
Object.keys(obj);   // ['name', 'age']
Object.values(obj); // ['John', 30]
```

### 6. **`Object.freeze()`**
`Object.freeze()` 方法可以冻结一个对象，阻止该对象的任何修改（如添加、删除或修改属性）。冻结后，对象的属性将是不可变的。

```js
const obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Doe';  // 无效，不会修改
```

### 7. **`Object.seal()`**
`Object.seal()` 方法可以封闭一个对象，阻止新增或删除属性，但允许修改现有属性的值。

```js
const obj = { name: 'John' };
Object.seal(obj);
obj.name = 'Doe';  // 可以修改
delete obj.name;   // 无效，不能删除属性
```

### 8. **`Object.getOwnPropertyDescriptors()`**
`Object.getOwnPropertyDescriptors()` 方法返回一个对象自身所有属性的描述符（包括值、可写性、可枚举性、可配置性等信息）。

```js
const obj = { name: 'John' };
Object.getOwnPropertyDescriptors(obj);
// { name: { value: 'John', writable: true, enumerable: true, configurable: true } }
```

### 9. **`Object.getOwnPropertySymbols()`**
`Object.getOwnPropertySymbols()` 方法返回一个对象自身所有的符号属性（Symbol 属性）。

```js
const sym = Symbol('foo');
const obj = { [sym]: 'bar' };
Object.getOwnPropertySymbols(obj);  // [Symbol(foo)]
```

### 10. **`Object.setPrototypeOf()`**
`Object.setPrototypeOf()` 用于设置一个对象的原型（即其内部 [[Prototype]]）。

```js
const obj = {};
const proto = { greet() { console.log('Hello!'); } };
Object.setPrototypeOf(obj, proto);
obj.greet();  // 输出: Hello!
```

这些新特性提高了 JavaScript 对象操作的灵活性和可读性，使得编程更简洁和高效。

## *67. 如何让 Proxy 去监听基本数据类型？*

在 JavaScript 中，`Proxy` 是用来定义自定义行为的强大工具，通常用于拦截对对象的操作。然而，`Proxy` 本身只能直接用于对象类型，不能直接用于基本数据类型（如 `string`、`number`、`boolean`、`undefined`、`null` 等）。这意味着你无法直接使用 `Proxy` 来拦截这些基本数据类型的操作，因为它们没有“拦截点”。

不过，你可以通过一些变通的方法来使 `Proxy` 监听基本数据类型的行为，通常的做法是将基本数据类型封装在一个对象中。以下是几种方法：

### 方法 1：将基本数据类型包装在对象中

可以将基本数据类型封装在一个对象中，然后对这个对象应用 `Proxy`。虽然这样本质上还是间接的，但是可以实现对基本类型的监听。

```js
// 封装基本数据类型
const wrappedValue = {
value: 42
};

// 创建 Proxy 来监听基本类型
const proxy = new Proxy(wrappedValue, {
get(target, prop) {
 if (prop === 'value') {
   console.log('Getting value');
   return target[prop];
 }
 return target[prop];
},
set(target, prop, value) {
 if (prop === 'value') {
   console.log(`Setting value to ${value}`);
   target[prop] = value;
   return true;
 }
 target[prop] = value;
 return true;
}
});

console.log(proxy.value);  // 输出: Getting value
proxy.value = 100;         // 输出: Setting value to 100
```

通过这种方式，我们将基本数据类型 `42` 封装在对象中，并通过 `Proxy` 对该对象的访问进行拦截。

### 方法 2：通过 `Proxy` 对构造函数进行封装

如果你需要对基本数据类型的值进行更多的自定义行为，可以考虑封装一个类，利用 `Proxy` 来拦截对这个类实例的操作。这样你可以通过类包装实现对基本数据类型的监听。

```js
class Wrapper {
constructor(value) {
 this.value = value;
}
}

// 创建 Proxy 来监听类实例
const proxy = new Proxy(Wrapper, {
construct(target, args) {
 const instance = new target(...args);
 console.log(`Creating Wrapper with value: ${args[0]}`);
 return new Proxy(instance, {
   get(target, prop) {
     if (prop === 'value') {
       console.log('Getting value');
       return target[prop];
     }
     return target[prop];
   },
   set(target, prop, value) {
     if (prop === 'value') {
       console.log(`Setting value to ${value}`);
       target[prop] = value;
       return true;
     }
     target[prop] = value;
     return true;
   }
 });
}
});

const wrappedProxy = new proxy(42);
console.log(wrappedProxy.value);  // 输出: Getting value
wrappedProxy.value = 100;         // 输出: Setting value to 100
```

在这个例子中，`Wrapper` 类被封装进 `Proxy`，可以对 `Wrapper` 实例的属性 `value` 进行拦截。

### 方法 3：使用 `Proxy` 监听访问基本数据类型的属性

虽然基本数据类型不能直接被 `Proxy` 拦截，但你可以创建一个对象，将基本数据类型作为属性存储，然后对这个对象应用 `Proxy` 来监听访问。

```js
const basicData = {
value: 42
};

// 使用 Proxy 拦截访问
const proxy = new Proxy(basicData, {
get(target, prop) {
 console.log(`Accessing property: ${prop}`);
 return prop in target ? target[prop] : undefined;
},
set(target, prop, value) {
 console.log(`Setting ${prop} to ${value}`);
 target[prop] = value;
 return true;
}
});

console.log(proxy.value);  // 输出: Accessing property: value 42
proxy.value = 100;         // 输出: Setting value to 100
```

这种方法仍然是将基本数据类型包装在一个对象中，然后通过 `Proxy` 拦截对象的属性操作。

### 总结

`Proxy` 无法直接监听基本数据类型的操作，因为它不能拦截原始值。但是，通过将基本数据类型封装在对象中，或将它们放入一个可以被 `Proxy` 代理的类实例中，仍然可以间接实现对这些基本数据类型的监听和操作。

## *68. Proxy 能够监听到对象中的对象的引用吗？*

是的，`Proxy` 可以监听对象中的对象引用。当你创建一个 `Proxy` 代理对象时，它会拦截对对象的访问、修改、删除等操作，并且这些操作也适用于对象中的引用类型（比如其他对象、数组等）。

不过，需要注意的是，`Proxy` 默认只会拦截它自己直接代理的对象的操作，对于嵌套在其中的对象，`Proxy` 并不会自动拦截。这意味着如果对象的属性本身是另一个对象，那么你必须为这个嵌套对象显式地创建并应用 `Proxy`，否则它的访问将不会被拦截。

### 示例：`Proxy` 监听嵌套对象的引用

```js
// 创建一个包含对象引用的对象
const nestedObj = { a: 1, b: 2 };
const obj = {
nested: nestedObj,
name: 'Example'
};

// 创建一个 Proxy 来监听 obj 对象
const proxy = new Proxy(obj, {
get(target, prop) {
 console.log(`Getting ${prop}`);
 return prop in target ? target[prop] : undefined;
},
set(target, prop, value) {
 console.log(`Setting ${prop} to ${value}`);
 target[prop] = value;
 return true;
}
});

// 访问嵌套对象的引用
console.log(proxy.nested); // 输出: Getting nested  { a: 1, b: 2 }
proxy.nested.a = 10;       // 输出: Setting a to 10

console.log(proxy.nested); // 输出: Getting nested  { a: 10, b: 2 }
```

在这个例子中，`proxy` 代理了 `obj` 对象，并且 `obj` 对象的 `nested` 属性是一个引用类型（对象）。当访问 `proxy.nested` 时，`Proxy` 会拦截对 `nested` 属性的访问，并返回原始的嵌套对象。

但是，如果你对 `nested` 中的属性（如 `nested.a`）进行修改，`Proxy` 默认不会拦截这些修改。为了解决这个问题，我们需要对子对象 `nested` 创建另一个 `Proxy`。

### 通过嵌套 `Proxy` 监听对象引用

如果你希望拦截嵌套对象的属性操作，你需要为嵌套对象（`nested`）也创建一个 `Proxy`。你可以通过 `Proxy` 的 `get` 或 `set` 捕获器来实现。

```js
// 创建一个 Proxy 代理嵌套对象
const nestedProxy = new Proxy(nestedObj, {
get(target, prop) {
 console.log(`Getting nested.${prop}`);
 return target[prop];
},
set(target, prop, value) {
 console.log(`Setting nested.${prop} to ${value}`);
 target[prop] = value;
 return true;
}
});

// 创建代理对象，并将嵌套对象代理为 nestedProxy
const objProxy = new Proxy(obj, {
get(target, prop) {
 if (prop === 'nested') {
   return nestedProxy;  // 返回嵌套对象的代理
 }
 console.log(`Getting ${prop}`);
 return target[prop];
},
set(target, prop, value) {
 console.log(`Setting ${prop} to ${value}`);
 target[prop] = value;
 return true;
}
});

// 访问和修改嵌套对象的属性
console.log(objProxy.nested);  // 输出: Getting nested
objProxy.nested.a = 100;       // 输出: Setting nested.a to 100
console.log(objProxy.nested);  // 输出: Getting nested
```

在这个例子中，我们为嵌套对象 `nestedObj` 创建了一个 `nestedProxy`，并将其赋给 `objProxy` 中的 `nested` 属性。这样，当访问或修改 `objProxy.nested.a` 时，就会触发 `nestedProxy` 的 `get` 和 `set` 捕获器，确保嵌套对象的属性访问和修改也能被拦截。

### 结论

- 默认情况下，`Proxy` 只拦截代理对象本身的操作。如果对象的某个属性是另一个对象的引用，那么嵌套对象的操作不会被自动拦截。
- 如果你需要拦截嵌套对象的引用，你必须显式地为嵌套对象创建并应用 `Proxy`。
- 你可以通过代理对象中的 `get` 和 `set` 捕获器返回嵌套对象的代理，从而实现对子对象的操作监听。

## *69. 需要在本地实现一个聊天室，多个tab页相互通信，不能用websocket，你会怎么做？*

要在本地实现一个聊天室，且多个浏览器标签页（tab）之间能够相互通信，但又不使用 WebSocket，可以考虑以下几种方法，基于不同的技术来实现跨标签页的通信：

### 1. **使用 `localStorage` 和 `storage` 事件**

`localStorage` 是浏览器提供的一种本地存储机制，允许存储键值对数据。它是持久性的（即使浏览器关闭，数据依然存在），并且所有同源的标签页可以共享同一份 `localStorage`。当 `localStorage` 数据发生变化时，所有打开同一域名下的页面都会触发 `storage` 事件。

**实现思路：**
- 使用 `localStorage` 存储消息和其他聊天信息。
- 通过监听 `storage` 事件来实现标签页间的通信。

#### 示例代码

**在标签页 A 中发送消息：**

```js
// 向 localStorage 中存储消息
function sendMessage(message) {
  const messageData = { message, timestamp: Date.now() };
  localStorage.setItem('chat-message', JSON.stringify(messageData));
}
```

**在标签页 A 中监听 `storage` 事件：**

```js
// 监听 localStorage 的变化（在其他标签页发送消息时触发）
window.addEventListener('storage', function(event) {
  if (event.key === 'chat-message') {
    const messageData = JSON.parse(event.newValue);
    displayMessage(messageData);
  }
});

// 显示消息的函数
function displayMessage(data) {
  console.log('New message received:', data.message);
}
```

**在标签页 B 中也监听 `storage` 事件并接收消息：**

```js
// 标签页 B 同样监听 storage 事件
window.addEventListener('storage', function(event) {
  if (event.key === 'chat-message') {
    const messageData = JSON.parse(event.newValue);
    displayMessage(messageData);
  }
});

// 显示消息
function displayMessage(data) {
  console.log('Received message in Tab B:', data.message);
}
```

### 2. **使用 `BroadcastChannel` API**

`BroadcastChannel` API 是一个较新的浏览器 API，它允许同一源（同一域名和协议）下的多个浏览器上下文（标签页、iframe、窗口等）进行消息广播。这个 API 不需要 `localStorage` 和 `storage`，并且提供了更简洁的通信接口。

**实现思路：**
- 使用 `BroadcastChannel` 创建一个频道，发送和接收消息。

#### 示例代码

**在标签页 A 中发送消息：**

```js
// 创建一个广播频道
const channel = new BroadcastChannel('chat_channel');

// 发送消息
function sendMessage(message) {
  channel.postMessage({ message, timestamp: Date.now() });
}
```

**在标签页 A 和标签页 B 中接收消息：**

```js
// 创建一个广播频道
const channel = new BroadcastChannel('chat_channel');

// 监听消息
channel.onmessage = function(event) {
  const messageData = event.data;
  console.log('New message received:', messageData.message);
};
```

### 3. **使用 `SharedWorker`**

`SharedWorker` 是一个允许多个浏览器窗口/标签页共享一个 Web Worker 的 API。通过 `SharedWorker`，可以将消息传递到所有关联的标签页。

**实现思路：**
- 在浏览器中创建一个 `SharedWorker`，多个标签页可以通过这个 Worker 共享通信。
- 通过 `postMessage` 发送消息，Worker 会广播消息到所有连接的标签页。

#### 示例代码

**创建 `SharedWorker`（worker.js）：**

```js
// worker.js
let clients = [];

onconnect = function(e) {
  const port = e.ports[0];
  clients.push(port);

  port.onmessage = function(event) {
    // 广播消息到所有连接的标签页
    clients.forEach(clientPort => {
      clientPort.postMessage(event.data);
    });
  };

  port.start();  // 启动端口
};
```

**在标签页 A 和标签页 B 中连接 `SharedWorker` 并发送/接收消息：**

```js
// 在标签页中创建 SharedWorker 连接
const worker = new SharedWorker('worker.js');

// 监听 Worker 消息
worker.port.onmessage = function(event) {
  console.log('Received message from another tab:', event.data.message);
};

// 向 Worker 发送消息
function sendMessage(message) {
  worker.port.postMessage({ message, timestamp: Date.now() });
}
```

### 4. **使用 `IndexedDB` 和轮询**

如果你需要存储较多的历史记录或消息，可以使用 `IndexedDB` 来持久化数据，并通过轮询检测数据变化来实现通信。`IndexedDB` 是一个低级的 API，提供了浏览器本地数据库功能。

虽然这种方式需要轮询数据库，性能上可能不如前两种方法，但它适用于更复杂的本地存储需求。

**实现思路：**
- 在多个标签页中定期查询 `IndexedDB` 中的消息。
- 轮询检查数据是否变化，若有新数据则显示消息。

#### 示例代码

```js
// 打开 IndexedDB 数据库
const request = indexedDB.open('chatDB', 1);
let db;

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

// 向 IndexedDB 插入消息
function storeMessage(message) {
  const transaction = db.transaction(['messages'], 'readwrite');
  const store = transaction.objectStore('messages');
  store.add({ message, timestamp: Date.now() });
}

// 轮询查询 IndexedDB 获取新消息
setInterval(() => {
  const transaction = db.transaction(['messages'], 'readonly');
  const store = transaction.objectStore('messages');
  const request = store.getAll();

  request.onsuccess = function() {
    console.log('All messages:', request.result);
  };
}, 1000);  // 每秒查询一次
```

### 总结

- **`localStorage` + `storage` 事件**：适合简单的跨标签页通信，利用 `localStorage` 存储消息，监听 `storage` 事件来同步消息。
- **`BroadcastChannel` API**：适合简单且高效的跨标签页通信，广播消息到所有打开相同源的标签页。
- **`SharedWorker`**：适用于需要共享数据和更复杂的消息广播场景，能够保持多个标签页间的数据同步。
- **`IndexedDB` + 轮询**：适用于存储较多历史数据的场景，尽管性能不如其他方法，但可以存储大量数据。

基于你的需求，**`localStorage` + `storage` 事件** 和 **`BroadcastChannel`** 是实现跨标签页通信的两种最简便且高效的方案。如果对消息同步的实时性要求更高，`BroadcastChannel` 是更理想的选择。

## *70. 如果空数组调用reduce会发生什么？*

在 JavaScript 中，如果你对一个空数组调用 `reduce()` 方法，会根据 `reduce()` 的使用方式和传入的参数产生不同的结果。具体行为取决于是否提供了 `initialValue`（初始值）。

### 1. **没有传入 `initialValue`（初始值）**

当没有传入 `initialValue` 时，`reduce()` 会尝试使用数组的第一个元素作为初始值，并从数组的第二个元素开始累加。但如果数组为空，则没有元素可供操作，因此会抛出一个 `TypeError`。

```js
const emptyArray = [];
const result = emptyArray.reduce((accumulator, currentValue) => accumulator + currentValue);

// TypeError: Reduce of empty array with no initial value
```

在这种情况下，`reduce()` 会直接抛出错误：`TypeError: Reduce of empty array with no initial value`。这是因为 `reduce()` 无法处理空数组，并且没有指定初始值。

### 2. **传入 `initialValue`（初始值）**

如果你提供了一个 `initialValue`，`reduce()` 将会使用这个初始值作为累加器的初始值，并且不会抛出错误。此时，空数组会直接返回这个 `initialValue`。

```js
const emptyArray = [];
const result = emptyArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(result);  // 0
```

在这种情况下，因为空数组没有任何元素可以累加，`reduce()` 会直接返回传入的初始值（`0`）。

### 总结：

- **没有传入 `initialValue`**：空数组调用 `reduce()` 会抛出 `TypeError`。
- **传入了 `initialValue`**：空数组调用 `reduce()` 会返回该 `initialValue`，而不会抛出错误。

因此，为了避免空数组抛出错误，通常建议在调用 `reduce()` 时始终提供一个初始值，尤其是在处理空数组的情况下。

## *71. 数组中的reduce方法有用过吗，说说它的具体用途？*

`reduce()` 方法是 JavaScript 中非常强大的数组方法之一，它用于将数组中的所有元素按照某种规则“归约”为一个单一的值。`reduce()` 可以用来执行许多不同类型的操作，适用于各种不同的使用场景。

### 基本语法

javascript

复制

```
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

- **`callback`**：执行数组中每个值的函数，包含四个参数：
  - **`accumulator`**：累加器累加回调的返回值。
  - **`currentValue`**：数组中正在处理的当前元素。
  - **`index`**（可选）：数组中正在处理的当前元素的索引。
  - **`array`**（可选）：调用 `reduce` 的数组。
- **`initialValue`**（可选）：作为第一次调用 `callback` 函数时的第一个参数的值。如果没有提供初始值，则使用数组的第一个元素作为初始值，并从第二个元素开始执行 `callback` 函数。



下面是一些常见的 `reduce()` 使用场景：

### 1. **求和（Sum）**

最常见的 `reduce()` 用法之一是求数组中所有元素的和。

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
```

**解释：**
- `acc` 是累加器，它保存每一步的计算结果。
- `num` 是当前处理的元素。
- 初始值为 `0`，因此从 `0` 开始累加。

### 2. **计算数组的乘积（Product）**

类似于求和，可以使用 `reduce()` 来计算数组元素的乘积。

```js
const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);  // 24
```

**解释：**
- 这里，累加器从 `1` 开始，依次乘上每个数组元素。

### 3. **扁平化嵌套数组（Flattening arrays）**

`reduce()` 可以将一个嵌套的数组展平成一个单一的数组。

```js
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray);  // [1, 2, 3, 4, 5, 6]
```

**解释：**
- 通过 `concat()` 将每一个子数组与累加器（`acc`）合并，从而实现扁平化。

### 4. **统计数组元素的出现次数（Frequency count）**

可以使用 `reduce()` 来统计数组中每个元素的出现频率，结果是一个对象。

```js
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(frequency);  // { apple: 3, banana: 2, orange: 1 }
```

**解释：**
- 累加器 `acc` 是一个对象，用来记录每个单词出现的次数。
- 对每个单词，如果它已经存在于 `acc` 中，就增加计数；如果不存在，初始化为 `1`。

### 5. **将数组转换为对象（Transforming arrays to objects）**

你可以用 `reduce()` 将一个数组转化为对象，数组中的元素作为对象的键值对。

```js
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log(usersById);  // { '1': 'John', '2': 'Jane', '3': 'Doe' }
```

**解释：**
- `acc` 是一个对象，键是 `id`，值是 `name`。

### 6. **数组去重（Removing duplicates）**

可以使用 `reduce()` 来去除数组中的重复项。

```js
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(uniqueNumbers);  // [1, 2, 3, 4, 5]
```

**解释：**
- 使用 `acc.includes(num)` 检查是否已存在该元素，若不存在则推入 `acc`。

### 7. **数组排序（Sorting arrays）**

通过 `reduce()` 也可以实现数组的排序，虽然这种方法不常见，通常更推荐使用 `sort()`。

```js
const numbers = [5, 3, 8, 1];
const sortedNumbers = numbers.reduce((acc, num) => {
  let inserted = false;
  for (let i = 0; i < acc.length; i++) {
    if (num < acc[i]) {
      acc.splice(i, 0, num);
      inserted = true;
      break;
    }
  }
  if (!inserted) acc.push(num);
  return acc;
}, []);
console.log(sortedNumbers);  // [1, 3, 5, 8]
```

**解释：**
- 每个元素都插入到累加器 `acc` 中，保持数组有序。

### 8. **分组（Grouping）**

`reduce()` 可以将一个数组分组，基于数组元素的某个特征（如分组按某个属性）。

```js
const people = [
  { name: 'John', age: 23 },
  { name: 'Jane', age: 23 },
  { name: 'Jack', age: 22 },
  { name: 'Jill', age: 22 }
];

const groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});

console.log(groupedByAge);
// {
//   23: [{ name: 'John', age: 23 }, { name: 'Jane', age: 23 }],
//   22: [{ name: 'Jack', age: 22 }, { name: 'Jill', age: 22 }]
// }
```

**解释：**
- 累加器 `acc` 是一个对象，按 `age` 属性将元素分组。

### 9. **累积操作和多个步骤（Accumulate operations and multiple steps）**

你可以在 `reduce()` 中执行更复杂的逻辑，进行多个步骤的累积。

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, num) => {
  acc.sum += num;
  acc.product *= num;
  return acc;
}, { sum: 0, product: 1 });

console.log(result);  // { sum: 15, product: 120 }
```

**解释：**
- `acc` 是一个对象，包含 `sum` 和 `product`，在每一步中同时进行求和和求积操作。

### 10. **复杂的数据转换和嵌套操作（Complex data transformation and nesting）**

在一些复杂的场景中，`reduce()` 也可以用于处理多层嵌套的数据结构或复杂的转换操作。

```js
const data = [
  { id: 1, parent: null },
  { id: 2, parent: 1 },
  { id: 3, parent: 1 },
  { id: 4, parent: 2 },
  { id: 5, parent: 2 }
];

const tree = data.reduce((acc, curr) => {
  if (curr.parent === null) {
    acc[curr.id] = { ...curr, children: [] };
  } else {
    if (!acc[curr.parent]) {
      acc[curr.parent] = { children: [] };
    }
    acc[curr.parent].children.push(curr);
  }
  return acc;
}, {});

console.log(tree);
```

**解释：**
- 将平面的数据转换为嵌套的树形结构。

---

### 总结

`reduce()` 是一个非常强大且灵活的工具，适用于各种场景。通过巧妙地使用累加器，它可以完成从简单的求和到复杂的数据转换和分组的任务。常见的应用场景包括：
- 数值运算（求和、乘积）
- 扁平化数组
- 统计元素频率
- 数组去重
- 对数组进行分组或排序
- 数据结构转换（如对象、树形结构）

`reduce()` 适合在需要从数组中生成一个单一结果或转换复杂结构时使用，但也因为其函数式编程风格，初学者可能需要一些时间来掌握。

## *72. 改变this指向的方法有哪些？*

在 JavaScript 中，`this` 关键字表示函数执行时的上下文对象，通常是调用函数的对象。改变 `this` 的指向是 JavaScript 中非常重要的一个特性，常用于面向对象编程和事件处理等场景。以下是一些常见的改变 `this` 指向的方法：

### 1. **`call()` 方法**
`call()` 方法允许你指定 `this` 的值，并立即调用函数。

#### 语法：
```js
func.call(thisArg, arg1, arg2, ...);
```

- `thisArg`：执行 `func` 时，`this` 要指向的对象。
- `arg1, arg2, ...`：传递给 `func` 的参数。

#### 示例：
```js
function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'Alice' };
greet.call(person);  // 输出: Hello, Alice
```

`call()` 方法会立即执行函数，并将 `this` 指向提供的对象。

### 2. **`apply()` 方法**
`apply()` 与 `call()` 类似，区别在于 `apply()` 接受的是一个数组（或类数组对象）作为参数，而 `call()` 是逐个传入参数。

#### 语法：
```js
func.apply(thisArg, [argsArray]);
```

- `thisArg`：执行 `func` 时，`this` 要指向的对象。
- `argsArray`：一个数组或类数组对象，包含传递给函数的参数。

#### 示例：
```js
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };
greet.apply(person, ['Hello']);  // 输出: Hello, Alice
```

`apply()` 会立即执行函数并改变 `this` 的指向，同时接受一个数组作为参数。

### 3. **`bind()` 方法**
`bind()` 方法返回一个新的函数，这个新函数永久绑定了指定的 `this` 值，直到该函数被调用。与 `call()` 和 `apply()` 的区别是，`bind()` 不会立即执行函数，而是返回一个新的函数，可以在以后调用。

#### 语法：
```js
const boundFunc = func.bind(thisArg, arg1, arg2, ...);
```

- `thisArg`：`this` 要指向的对象。
- `arg1, arg2, ...`：传递给函数的参数（可选）。

#### 示例：
```js
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };
const greetAlice = greet.bind(person, 'Hello');

greetAlice();  // 输出: Hello, Alice
```

`bind()` 返回一个新函数，调用时 `this` 会永久绑定到 `person` 对象。

### 4. **箭头函数 (Arrow Functions)**
箭头函数的一个特点是它没有自己的 `this`，而是捕获其所在上下文的 `this`（即词法作用域）。因此，在箭头函数中，`this` 始终指向创建该函数时的外部上下文对象。

#### 示例：
```js
const person = {
  name: 'Alice',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);  // this 指向外部的 person 对象
    }, 1000);
  }
};

person.greet();  // 输出: Hello, Alice
```

在箭头函数中，`this` 被固定为定义时的上下文，不会因为函数的调用方式而发生变化。此特性使得箭头函数在事件处理和异步操作中特别有用。

### 5. **类方法 (Methods in Classes)**
在类的定义中，`this` 通常指向实例对象。如果你希望改变 `this` 的指向，通常会结合 `bind()` 使用，尤其是在事件处理或回调函数中。

#### 示例：
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}`);  // this 会指向 window 或 undefined（严格模式下）
    }, 1000);
  }
}

const person = new Person('Alice');
person.greet();  // 输出: Hello, undefined

// 使用 bind() 改变 this
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}`);
    }.bind(this), 1000);  // 使用 bind() 将 this 绑定到类实例
  }
}

const person = new Person('Alice');
person.greet();  // 输出: Hello, Alice
```

### 6. **事件处理函数中的 `this`**
在事件处理函数中，`this` 默认指向触发事件的 DOM 元素。若想改变 `this` 指向，可以使用 `bind()` 或箭头函数。

#### 示例：
```js
const button = document.querySelector('button');

// 传统函数，this 指向按钮
button.addEventListener('click', function() {
  console.log(this);  // 输出: button 元素
});

// 使用 bind() 修改 this 指向
const person = { name: 'Alice' };
button.addEventListener('click', function() {
  console.log(this.name);  // 输出: Alice
}.bind(person));

// 使用箭头函数，this 会继承外部上下文
button.addEventListener('click', () => {
  console.log(this);  // 输出: window 或 undefined，取决于外部上下文
});
```

### 总结：
在 JavaScript 中，可以通过多种方式来改变 `this` 的指向：

1. **`call()` 和 `apply()`**：立即调用函数并指定 `this` 指向。
2. **`bind()`**：返回一个新的函数，永久绑定 `this`。
3. **箭头函数**：通过词法作用域固定 `this`，不会被调用时改变。
4. **类方法和事件处理**：使用 `bind()` 或箭头函数来确保 `this` 的正确指向，尤其是在回调和事件处理中。

在实际开发中，根据具体需求选择合适的方法来确保 `this` 指向正确的对象。

## *73. addEventListener 第三个参数*

`addEventListener` 是 JavaScript 中用于为 DOM 元素添加事件监听器的方法，允许你在指定的事件发生时执行指定的回调函数。该方法是事件处理的标准方法，比传统的 `onclick` 或 `on<event>` 属性更加灵活。

### 语法

```js
element.addEventListener(event, callback, options);
```

- **`event`**：要监听的事件类型（如 `"click"`、`"keydown"`、`"mouseover"` 等）。这个参数是必需的。
- **`callback`**：当事件触发时执行的回调函数。这个参数是必需的。
- **`options`**（可选）：一个可选的对象或布尔值，用于指定事件监听器的行为（如是否捕获事件、是否重复监听等）。具体参数如下。

### 1. `event`：事件类型

`event` 是一个字符串，指定要监听的事件类型。例如：

- `"click"`：鼠标点击事件
- `"keydown"`：键盘按键按下事件
- `"keyup"`：键盘按键释放事件
- `"mouseover"`：鼠标悬停事件
- `"scroll"`：滚动事件
- `"submit"`：表单提交事件
- `"change"`：输入框值变化事件
- `"resize"`：窗口大小变化事件

### 2. `callback`：回调函数

`callback` 是一个在事件触发时执行的函数。该函数接收一个事件对象作为参数，事件对象包含与事件相关的所有信息（如鼠标位置、键盘按键等）。回调函数可以是普通函数或箭头函数。

```js
element.addEventListener('click', function(event) {
  console.log('Clicked!', event);
});
```

事件对象 (`event`) 包含事件的详细信息，如：

- `event.type`：事件类型
- `event.target`：触发事件的元素
- `event.preventDefault()`：阻止默认事件行为
- `event.stopPropagation()`：停止事件传播

### 3. `options`（可选）：事件选项

`options` 是一个可选的对象，可以包含以下属性：

- **`capture`**：一个布尔值，指定是否在捕获阶段触发事件。默认为 `false`，表示事件在冒泡阶段触发（即从目标元素向父元素传播）；如果为 `true`，事件将在捕获阶段触发（即从祖先元素向目标元素传播）。详见事件流。
- **`once`**：一个布尔值，表示事件处理器是否只调用一次。如果为 `true`，事件处理函数在触发一次后会自动移除。
- **`passive`**：一个布尔值，表示事件监听器是否为“被动”的。当设置为 `true` 时，浏览器会优化事件的处理，假设回调函数不会调用 `event.preventDefault()`。

#### 示例：

```js
// 捕获阶段触发
element.addEventListener('click', function(event) {
  console.log('Captured click!');
}, { capture: true });

// 只触发一次
element.addEventListener('click', function(event) {
  console.log('Clicked once!');
}, { once: true });

// 被动监听，避免阻止滚动
element.addEventListener('scroll', function(event) {
  console.log('Scrolling');
}, { passive: true });
```

### 4. `options`（布尔值）

如果不需要更多自定义选项，`options` 可以直接传入布尔值：

- `true`：表示在捕获阶段触发事件（即在事件流的开始阶段）。
- `false`（默认）：表示在冒泡阶段触发事件（即在事件流的结束阶段）。

```js
// 在捕获阶段触发
element.addEventListener('click', function() {
  console.log('Captured click!');
}, true);  // 或者 { capture: true }

// 在冒泡阶段触发（默认）
element.addEventListener('click', function() {
  console.log('Bubbling click!');
}, false);  // 或者省略
```

### 事件流

JavaScript 中的事件流有三个阶段：

1. **捕获阶段（Capture Phase）**：事件从最外层的祖先元素开始向目标元素传播。
2. **目标阶段（Target Phase）**：事件到达目标元素时触发。
3. **冒泡阶段（Bubble Phase）**：事件从目标元素向外层祖先元素传播。

默认情况下，`addEventListener` 在冒泡阶段触发事件（`capture: false`），但你也可以选择在捕获阶段（`capture: true`）触发事件。

### 示例：使用 `addEventListener` 监听事件

```js
// 监听点击事件
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log('Button clicked!', event);
});

// 监听输入框内容变化事件
const input = document.querySelector('input');
input.addEventListener('input', function(event) {
  console.log('Input value changed:', event.target.value);
});
```

### 移除事件监听器

`addEventListener` 添加的事件监听器可以通过 `removeEventListener` 移除，前提是传入的参数（事件类型、回调函数、选项）必须一致。

#### 示例：

```js
// 事件回调
function handleClick() {
  console.log('Button clicked!');
}

// 添加事件监听器
const button = document.querySelector('button');
button.addEventListener('click', handleClick);

// 移除事件监听器
button.removeEventListener('click', handleClick);
```

### 总结

- **`addEventListener`** 是一种灵活的方式，用于为 DOM 元素添加事件监听器。
- 你可以通过 `event` 参数指定要监听的事件类型，通过 `callback` 指定回调函数，并通过 `options` 来配置更多的事件行为。
- 使用 `capture`、`once`、`passive` 等选项可以控制事件的行为。
- `removeEventListener` 可以移除添加的事件监听器。

这种方式比直接设置 `on<event>` 属性更加灵活，支持多个事件监听器，且可以控制事件的捕获和冒泡行为。

## *74. 是否有使用过空值合并运算符（??），举几个可以使用的场景。*

空值合并运算符（`??`）是 ES2020（ES11）引入的一个新特性，用于提供一种简洁的方式来处理可能为 `null` 或 `undefined` 的值。它类似于逻辑或运算符（`||`），但有一些重要的区别。

### 基本语法

```javascript
const result = value ?? defaultValue;
```

- **`value`**：要检查的值。
- **`defaultValue`**：如果 `value` 为 `null` 或 `undefined`，则返回的默认值。

### 与逻辑或运算符（`||`）的区别

- **逻辑或运算符（`||`）**：如果 `value` 为 `falsy` 值（如 `false`、`0`、`""`、`null`、`undefined`、`NaN`），则返回 `defaultValue`。
- **空值合并运算符（`??`）**：只有当 `value` 为 `null` 或 `undefined` 时，才返回 `defaultValue`。

### 使用场景

#### 1. 默认值赋值

在需要为变量提供默认值时，可以使用空值合并运算符。

```javascript
const user = {
  name: "Alice",
  age: null
};

const age = user.age ?? 18;
console.log(age); // 输出 18
```

#### 2. 处理函数参数

在函数中，可以使用空值合并运算符为参数提供默认值。

```javascript
function greet(name, greeting) {
  const message = greeting ?? "Hello";
  console.log(`${message}, ${name}!`);
}

greet("Alice"); // 输出 "Hello, Alice!"
greet("Bob", "Hi"); // 输出 "Hi, Bob!"
```

#### 3. 处理 API 响应

在处理 API 响应时，可以使用空值合并运算符来处理可能为 `null` 或 `undefined` 的字段。

```javascript
const response = {
  data: {
    user: {
      name: "Alice",
      age: null
    }
  }
};

const userAge = response.data.user.age ?? 18;
console.log(userAge); // 输出 18
```

#### 4. 处理表单输入

在处理表单输入时，可以使用空值合并运算符来处理可能为空的输入值。

```javascript
const formData = {
  username: "Alice",
  email: null
};

const email = formData.email ?? "no-email@example.com";
console.log(email); // 输出 "no-email@example.com"
```

#### 5. 处理配置对象

在处理配置对象时，可以使用空值合并运算符来提供默认配置。

```javascript
const config = {
  timeout: null,
  retries: 3
};

const timeout = config.timeout ?? 5000;
console.log(timeout); // 输出 5000
```

### 总结

空值合并运算符（`??`）提供了一种简洁的方式来处理可能为 `null` 或 `undefined` 的值，避免了使用逻辑或运算符（`||`）时可能出现的意外行为。它适用于各种场景，包括默认值赋值、处理函数参数、处理 API 响应、处理表单输入和处理配置对象等。理解并合理使用空值合并运算符，可以提高代码的可读性和健壮性。

## *75. canvas 和 webgl 有什么区别？*

`Canvas` 和 `WebGL` 都是 HTML5 中用于图形绘制的技术，但它们有显著的区别，适用于不同的应用场景和需求。以下是它们的主要区别：

### 1. **基本概念**

- **Canvas**:
  - `Canvas` 是一个 2D 图形绘制的 API，允许你在 HTML 页面上动态地绘制图形。它用于绘制简单的 2D 图形，如图表、动画、游戏等。
  - `Canvas` 提供了一个 `2d` 渲染上下文，可以用来绘制矩形、圆形、路径、文本、图像等。

- **WebGL**:
  - `WebGL` 是一个基于 OpenGL ES 的 3D 图形 API，允许在浏览器中实现高性能的 3D 图形渲染。它可以访问 GPU 进行硬件加速，适合用来绘制复杂的 3D 图形。
  - `WebGL` 提供了一个 `webgl` 渲染上下文，允许直接进行基于 GPU 的渲染，进行 3D 模型、纹理、着色器等复杂操作。

### 2. **渲染方式**

- **Canvas**:
  - `Canvas` 是一个基于 CPU 的渲染方式，所有的图形操作（如绘制、填充、变换等）都在 CPU 上完成。它适用于需要绘制 2D 图形或简单的 3D 图形的场景，但不适合做复杂的 3D 渲染。
  - 它的性能通常依赖于 CPU 的性能，适合用于简单动画和轻量级的图形渲染。

- **WebGL**:
  - `WebGL` 是基于 GPU 的渲染方式，使用硬件加速来进行复杂的 3D 图形渲染。它直接与 GPU 交互，提供了比 `Canvas` 更高的性能，尤其适合处理复杂的 3D 场景、动画和图形。
  - 因为它使用了 GPU 加速，`WebGL` 在处理大规模的 3D 渲染、实时光照和复杂图形时具有更好的性能。

### 3. **支持的图形类型**

- **Canvas**:
  - 主要支持 2D 图形，可以绘制直线、矩形、圆形、路径、图像、文字等。
  - 适合制作简单的 2D 游戏、图表、图形绘制等应用。

- **WebGL**:
  - 主要支持 3D 图形，并且能够处理更复杂的图形计算和光照。它支持 3D 模型、纹理映射、着色器（Shaders）、光照、动画、深度测试、材质效果等。
  - `WebGL` 适合开发 3D 游戏、可视化应用、虚拟现实（VR）和增强现实（AR）等。

### 4. **API 和 编程模型**

- **Canvas**:
  - `Canvas` 的 API 相对简单，主要通过 JavaScript 操作 `Canvas` 元素的上下文来绘制 2D 图形。你可以通过 `getContext('2d')` 获得 2D 上下文对象进行操作。
  - 由于其简单的编程模型，`Canvas` 更容易上手，适合初学者和快速开发。

- **WebGL**:
  - `WebGL` 的 API 更为复杂，基于图形编程模型，直接使用着色器、缓冲区、纹理等对象，通常需要编写大量的代码来实现 3D 图形的渲染。
  - 编写 `WebGL` 代码需要理解 3D 图形渲染的基本原理，如着色器编程、矩阵变换、坐标系统、光照计算等，适合有一定图形学背景的开发者。

### 5. **跨平台性**

- **Canvas**:
  - 由于 `Canvas` 是 2D 渲染，它在不同平台上的行为非常一致，因此它在多种设备和浏览器上都表现得很好，几乎所有现代浏览器都支持 `Canvas`。

- **WebGL**:
  - `WebGL` 同样具有跨平台性，现代浏览器均支持它，尤其在桌面和移动设备上。但是，由于它依赖于 GPU 加速，不同硬件平台上的渲染效果可能会有所不同，因此在某些低端设备上可能表现较差。

### 6. **性能**

- **Canvas**:
  - 由于 `Canvas` 是基于 CPU 渲染的，它在处理复杂图形和高帧率动画时可能会遇到性能瓶颈，特别是需要大量图形操作时。

- **WebGL**:
  - `WebGL` 使用 GPU 加速，性能远超 `Canvas`。它特别适用于需要处理大量顶点、纹理和复杂光照计算的 3D 场景，并且支持硬件加速，能够实现高帧率的复杂动画。

### 7. **适用场景**

- **Canvas**:
  - 2D 图形应用：例如绘制图表、动画、游戏、图像编辑等。
  - 简单的 2D 游戏：如基于像素的图形、2D 平台游戏、迷宫游戏等。
  - 动态效果：比如拖拽、线条绘制、实时图形生成等。

- **WebGL**:
  - 3D 游戏：例如现代 3D 游戏、复杂的物理模拟、3D 渲染等。
  - 3D 数据可视化：如科学可视化、地图渲染、虚拟现实（VR）、增强现实（AR）应用。
  - 高性能图形应用：如实时渲染、复杂的 3D 模型、实时阴影和光照等。

### 总结：

| 特性           | **Canvas**                             | **WebGL**                             |
| -------------- | -------------------------------------- | ------------------------------------- |
| 渲染方式       | CPU 基础的 2D 渲染                     | GPU 加速的 3D 渲染                    |
| 支持的图形类型 | 主要是 2D 图形                         | 主要是 3D 图形                        |
| API 复杂度     | 简单，易于使用                         | 复杂，需要图形学知识                  |
| 性能           | 对复杂图形和动画性能较差               | 性能较高，适合复杂的 3D 渲染和计算    |
| 用途           | 简单的 2D 绘图、图表、动画、简单游戏等 | 复杂的 3D 游戏、虚拟现实、3D 可视化等 |

- 如果你的应用主要是简单的 2D 图形绘制或动画，`Canvas` 是一个简单易用的选择。
- 如果你需要更高性能的图形渲染，尤其是 3D 图形，`WebGL` 提供了更强大的功能和性能，适用于复杂的图形和游戏开发。

## *76. 你是怎么理解ES6中 Promise的？使用场景有哪些？*

`Promise` 是 ES6 引入的一种用于处理异步操作的机制。它表示一个 **异步操作的最终完成（或失败）及其结果值**。Promise 使得异步代码的写法变得更加简洁、可读，避免了传统的回调函数中出现的“回调地狱”问题。

#### **基本概念**

Promise 是一个对象，表示一个 **异步操作的最终完成**（成功或失败），并能够将结果值传递给调用者。Promise 具有三个状态：

1. **Pending（待定）**：初始状态，表示操作尚未完成。
2. **Fulfilled（已完成）**：操作成功完成，且 Promise 对象返回了一个值。
3. **Rejected（已拒绝）**：操作失败，且 Promise 对象返回了一个错误原因。

#### **Promise 的基本用法**

```js
let promise = new Promise((resolve, reject) => {
  let success = true;  // 模拟操作结果
  if (success) {
    resolve('操作成功');  // 任务成功，返回结果
  } else {
    reject('操作失败');   // 任务失败，返回错误
  }
});

promise
  .then(result => {
    console.log(result);  // 操作成功时的处理
  })
  .catch(error => {
    console.log(error);   // 操作失败时的处理
  });
```

- **`resolve(value)`**：将 Promise 状态从 `Pending` 改为 `Fulfilled`，并传递结果 `value`。
- **`reject(reason)`**：将 Promise 状态从 `Pending` 改为 `Rejected`，并传递错误原因 `reason`。

### **Promise 的链式调用**

由于 `Promise` 会返回一个新的 Promise，因此可以链式调用 `then()` 和 `catch()`，使得异步操作更易于管理。

```js
new Promise((resolve, reject) => {
  resolve('Hello');
})
  .then(result => {
    console.log(result);  // 输出: 'Hello'
    return 'World';  // 返回一个新的值
  })
  .then(result => {
    console.log(result);  // 输出: 'World'
    throw new Error('出错了');  // 抛出错误
  })
  .catch(error => {
    console.log(error);  // 输出: Error: 出错了
  });
```

- 每个 `then()` 都会返回一个新的 Promise，这意味着可以在后续 `then()` 中接收返回的值。
- `catch()` 捕获前一个 `then()` 中发生的错误。

### **Promise 的静态方法**

ES6 中的 `Promise` 还提供了一些静态方法，帮助我们处理多个异步操作。

#### **1. `Promise.all()`**

`Promise.all()` 方法接受一个包含多个 Promise 的数组，并返回一个新的 Promise，这个新的 Promise 会在所有 Promise 都完成时完成。如果其中任何一个 Promise 被拒绝，则返回的 Promise 会立即被拒绝。

```js
let p1 = new Promise((resolve, reject) => resolve('操作 1 完成'));
let p2 = new Promise((resolve, reject) => resolve('操作 2 完成'));

Promise.all([p1, p2]).then(results => {
  console.log(results);  // 输出: ['操作 1 完成', '操作 2 完成']
}).catch(error => {
  console.log(error);    // 如果有一个 Promise 被拒绝，输出错误
});
```

#### **2. `Promise.race()`**

`Promise.race()` 方法接受一个包含多个 Promise 的数组，返回一个新的 Promise，该 Promise 会在第一个完成（无论是完成还是拒绝）时完成。

```js
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 100, '操作 1 完成'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 200, '操作 2 完成'));

Promise.race([p1, p2]).then(result => {
  console.log(result);  // 输出: '操作 1 完成'，因为 p1 更早完成
});
```

#### **3. `Promise.resolve()` 和 `Promise.reject()`**

- `Promise.resolve(value)`：返回一个已解决（fulfilled）的 Promise。
- `Promise.reject(reason)`：返回一个已拒绝（rejected）的 Promise。

```js
Promise.resolve('成功')
  .then(result => console.log(result));  // 输出: '成功'

Promise.reject('失败')
  .catch(error => console.log(error));  // 输出: '失败'
```

### **Promise 的优点**

1. **链式调用**：通过 `then()` 和 `catch()` 方法，可以将多个异步操作串联起来，代码更加清晰。
2. **捕获错误**：错误可以通过 `catch()` 方法捕获，而不是通过回调函数的错误回调来处理。
3. **支持并发操作**：通过 `Promise.all()` 和 `Promise.race()`，可以轻松处理多个并发的异步操作。

### **Promise 的使用场景**

`Promise` 主要用于以下场景：

#### 1. **异步操作的管理**

最常见的使用场景是处理异步操作。比如你需要从服务器获取数据，读取文件，或者进行一些耗时的操作时，`Promise` 能够使异步代码变得更直观和易于管理。

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`数据来自：${url}`);
    }, 1000);
  });
}

fetchData('https://api.example.com/data')
  .then(response => {
    console.log(response);  // 数据来自：https://api.example.com/data
  })
  .catch(error => {
    console.error(error);
  });
```

#### 2. **并发操作的协调**

当有多个异步操作需要并行执行时，可以使用 `Promise.all()` 来确保所有异步操作都完成后再执行后续操作。

```js
let task1 = new Promise(resolve => setTimeout(() => resolve('任务 1 完成'), 1000));
let task2 = new Promise(resolve => setTimeout(() => resolve('任务 2 完成'), 2000));

Promise.all([task1, task2]).then(results => {
  console.log(results);  // ['任务 1 完成', '任务 2 完成']
});
```

#### 3. **处理多个独立的异步操作**

如果需要处理多个独立的异步操作，并希望在第一个完成时进行处理，可以使用 `Promise.race()`。

```js
let task1 = new Promise(resolve => setTimeout(() => resolve('任务 1 完成'), 3000));
let task2 = new Promise(resolve => setTimeout(() => resolve('任务 2 完成'), 1000));

Promise.race([task1, task2]).then(result => {
  console.log(result);  // 输出: 任务 2 完成，因 task2 先完成
});
```

#### 4. **错误捕获和统一处理**

异步操作中可能会出现错误，使用 `Promise` 可以统一在链的末端处理所有的错误，避免分散的错误处理。

```js
let fetchData = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve('数据获取成功');
  } else {
    reject('数据获取失败');
  }
});

fetchData
  .then(data => console.log(data))    // 成功处理
  .catch(error => console.error(error)); // 统一的错误处理
```

### **总结**

- **Promise** 是一种处理异步操作的更现代化和强大的方式，避免了回调地狱，并使得异步代码更加简洁和易于维护。
- **使用场景**：处理异步操作，协调多个并发任务，捕获和统一处理错误，执行复杂的异步逻辑，尤其是在现代 JavaScript 应用中（如 AJAX 请求、文件读取、数据库操作等）。
- **优势**：提供链式调用、错误捕获和多个并发操作的管理，提升代码的可读性和可维护性。

通过使用 `Promise`，你可以更好地处理异步操作，使代码更清晰，避免层层嵌套的回调函数，提高开发效率。

## *77. ES6中新增的Set、Map两种数据结构怎么理解?*

ES6 引入了 `Set` 和 `Map` 两种新的数据结构，它们扩展了 JavaScript 原生的数据存储和管理方式。相比传统的对象（`Object`）和数组（`Array`），`Set` 和 `Map` 提供了更高效和灵活的数据存储和操作方式，尤其是在处理不重复的值和键值对时。

### **1. Set（集合）**

`Set` 是一种新的数据结构，用于存储**唯一值**的集合。与数组不同，`Set` 不允许存储重复的值。它主要用于需要存储**不重复**的元素，并且需要快速判断元素是否存在的场景。

#### **特点：**

- **唯一性**：`Set` 中的每个值都是唯一的，不允许重复。
- **任意类型的值**：`Set` 可以存储任何类型的值（包括对象、函数、原始类型等）。
- **无序**：`Set` 中的元素是无序的，元素的插入顺序并不一定与它们的迭代顺序一致，但可以通过迭代进行遍历。

#### **常用操作：**

- `add(value)`：向 `Set` 中添加一个值。如果值已经存在，不会发生任何变化。
- `delete(value)`：删除指定的元素，返回一个布尔值，表示是否成功删除。
- `has(value)`：检查 `Set` 是否包含某个值，返回 `true` 或 `false`。
- `clear()`：清空 `Set` 中的所有元素。
- `size`：返回 `Set` 中的元素数量。

#### **示例：**

```js
let uniqueSet = new Set();

// 添加值
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
uniqueSet.add(3);  // 重复值不会添加

console.log(uniqueSet);  // Set { 1, 2, 3 }
console.log(uniqueSet.size);  // 3

// 判断值是否存在
console.log(uniqueSet.has(2));  // true
console.log(uniqueSet.has(4));  // false

// 删除值
uniqueSet.delete(2);
console.log(uniqueSet);  // Set { 1, 3 }

// 清空 Set
uniqueSet.clear();
console.log(uniqueSet);  // Set {}
```

#### **使用场景：**
- 用于处理需要保证元素唯一性的场景，例如去重操作、检查数据是否重复、存储唯一标识符。
- 可用于高效的值查找和删除，适用于对数据进行去重、查找和集合运算（交集、并集、差集等）时。

---

### **2. Map（映射/字典）**

`Map` 是一种新的数据结构，类似于对象（`Object`），但是它允许使用任何类型的值作为键（不仅限于字符串和符号）。`Map` 是一种 **键值对** 存储结构，可以存储任意类型的键和值，并且保持键值对的插入顺序。

#### **特点：**

- **键值对**：`Map` 以键值对的形式存储数据，每个元素都有一个唯一的键和与之相关联的值。
- **任何类型的键**：`Map` 的键可以是任何数据类型（包括对象、数组、函数等）。
- **保持插入顺序**：`Map` 中的元素会按照插入顺序进行遍历，因此可以保证元素顺序。
- **可迭代**：`Map` 是可迭代的，可以直接使用 `for...of` 循环遍历。

#### **常用操作：**

- `set(key, value)`：设置一个键值对。
- `get(key)`：根据键获取值。如果键不存在，返回 `undefined`。
- `delete(key)`：删除指定的键值对，返回一个布尔值，表示是否成功删除。
- `has(key)`：检查 `Map` 是否包含某个键，返回 `true` 或 `false`。
- `clear()`：清空 `Map` 中的所有键值对。
- `size`：返回 `Map` 中的键值对数量。
- `keys()`、`values()`、`entries()`：返回 `Map` 中所有的键、值或键值对。

#### **示例：**

```js
let map = new Map();

// 设置键值对
map.set('name', 'Alice');
map.set('age', 25);
map.set('location', 'New York');

// 获取值
console.log(map.get('name'));  // 'Alice'

// 判断键是否存在
console.log(map.has('age'));  // true
console.log(map.has('gender'));  // false

// 删除键值对
map.delete('location');
console.log(map);  // Map { 'name' => 'Alice', 'age' => 25 }

// 遍历 Map
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// 输出:
// name: Alice
// age: 25

// 清空 Map
map.clear();
console.log(map);  // Map {}
```

#### **使用场景：**
- 用于存储需要映射关系的数据，尤其是在需要将对象关联起来或建立更复杂的键值对时（如缓存、数据库、配置项等）。
- `Map` 提供了比对象更强大的功能和灵活性，特别是在键值对数量较多且键是对象或其他类型时。
- 可以使用 `Map` 来确保键值对顺序的存储，在遍历时能够按插入顺序访问元素。

---

### **Set 和 Map 的区别：**

| 特性           | **Set**                                         | **Map**                                                  |
| -------------- | ----------------------------------------------- | -------------------------------------------------------- |
| 存储的元素类型 | 唯一值（无重复元素）                            | 键值对（key-value pairs）                                |
| 键的类型       | 只能存储值（不能作为键）                        | 键可以是任意类型（包括对象、函数等）                     |
| 插入顺序       | 元素无序，但迭代顺序按照插入顺序                | 键值对保持插入顺序                                       |
| 查找速度       | 查找元素是否存在的时间复杂度为 O(1)             | 查找键是否存在的时间复杂度为 O(1)                        |
| 常见方法       | `add()`, `delete()`, `has()`, `clear()`, `size` | `set()`, `get()`, `delete()`, `has()`, `clear()`, `size` |
| 可迭代         | `Set` 是可迭代的，可以用 `for...of` 遍历        | `Map` 是可迭代的，可以用 `for...of` 遍历                 |

### **总结：**

- **Set** 适合用于存储**不重复**的值，常用于数据去重、判重等场景。
- **Map** 适合用于存储**键值对**，可以灵活地使用任何类型的值作为键，常用于需要建立对象之间映射关系的场景，如缓存管理、对象属性映射等。

## *78. generator 是怎么做到中断和恢复的？*

`Generator` 是 ES6 引入的一种新的异步编程方案，允许函数在执行时**中断**并在后续某个时刻**恢复**，从而实现更加灵活和高效的控制流。`Generator` 通过特有的 `yield` 关键字来暂停和恢复执行，能够在处理异步操作时简化代码结构，避免了回调函数地狱的问题。

### **Generator 的工作原理：**

1. **生成器函数**：
   - 生成器函数是通过 `function*` 语法定义的，区别于普通函数，它返回一个生成器对象（`Generator`）。
   - 生成器函数内部可以包含 `yield` 语句，它用于暂停函数的执行，并将一个值返回给调用者。生成器函数在执行时不会立即执行，而是返回一个“生成器对象”，只有调用生成器对象的 `next()` 方法，函数才会开始执行。

2. **yield**：
   - `yield` 表达式会暂停函数的执行，并可以向外部返回一个值。当调用生成器的 `next()` 方法时，执行会从暂停的 `yield` 语句恢复，继续执行 `yield` 后面的代码，直到遇到下一个 `yield` 或函数结束。
   - `yield` 可以接收一个值，也可以返回一个值。通过 `yield` 可以实现一个类似迭代器的功能，按需生成序列中的元素。

3. **next() 方法**：
   - `next()` 方法用于控制生成器的执行，它会返回一个对象 `{ value, done }`。
     - `value` 是当前 `yield` 表达式的返回值。
     - `done` 是一个布尔值，表示生成器函数是否已经执行完毕。

4. **中断与恢复**：
   - 当执行到 `yield` 语句时，生成器函数会被**暂停**，并且返回给外部一个对象 `{ value, done }`，外部可以通过 `next()` 方法来**恢复**执行。每次调用 `next()`，生成器函数会从上次暂停的位置继续执行，直到下一个 `yield` 或函数结束。

### **生成器函数的基本示例**

```js
function* myGenerator() {
  console.log('开始执行');
  yield 1;  // 暂停并返回 1
  console.log('继续执行');
  yield 2;  // 暂停并返回 2
  console.log('执行结束');
  return 3;  // 函数返回
}

const gen = myGenerator();  // 返回生成器对象

// 调用 next() 恢复执行
console.log(gen.next());  // { value: 1, done: false }
console.log(gen.next());  // { value: 2, done: false }
console.log(gen.next());  // { value: 3, done: true }
console.log(gen.next());  // { value: undefined, done: true }
```

在上面的代码中：
- `gen.next()` 在第一次调用时会执行到第一个 `yield 1` 处，然后暂停并返回 `{ value: 1, done: false }`。
- 第二次调用 `gen.next()` 时，生成器恢复执行，继续执行到下一个 `yield 2`，然后暂停并返回 `{ value: 2, done: false }`。
- 第三次调用 `gen.next()` 时，生成器继续执行到 `return 3`，返回值为 `{ value: 3, done: true }`。
- 最后一次调用 `gen.next()` 返回 `{ value: undefined, done: true }`，表示生成器函数已执行完毕。

### **中断和恢复机制的实现**

生成器的中断与恢复是通过 **状态机** 的方式实现的。具体来说，生成器函数会在每次遇到 `yield` 时保存当前的执行状态，包括局部变量、当前执行位置（代码行号等）。当生成器恢复时，执行状态会被重新加载，代码从上次中断的地方继续执行。

1. **函数执行到 `yield` 时**，会保存当前的执行上下文和状态（包括局部变量和代码位置）。此时函数暂停，返回一个对象，外部可以通过 `next()` 恢复执行。

2. **调用 `next()` 方法时**，生成器恢复执行，当前上下文被恢复，继续执行函数体中的代码。

3. **如果生成器函数结束**（没有更多的 `yield` 或执行到 `return`），`done` 会变为 `true`，并返回最后的返回值。

### **传递值给 Generator**

除了基本的暂停和恢复，生成器还允许通过 `next()` 方法向生成器内部传递值，`yield` 表达式的返回值也可以接收外部传递的参数。

```js
function* myGenerator() {
  let x = yield '请输入一个值';  // 暂停并等待外部输入
  console.log(x);  // 打印外部传入的值
  let y = yield x + 2;  // 再次暂停，并使用上次的结果
  console.log(y);  // 打印外部传入的值
}

const gen = myGenerator();

console.log(gen.next());  // { value: '请输入一个值', done: false }
console.log(gen.next(5));  // { value: 7, done: false }，传入 5，x = 5，y = 7
console.log(gen.next(10));  // { value: undefined, done: true }，传入 10，输出 10
```

在这个例子中：
- 第一次调用 `gen.next()` 时，生成器暂停，并返回 `'请输入一个值'`。
- 第二次调用 `gen.next(5)` 时，外部传入了 `5`，生成器将 `x` 的值设置为 `5`，继续执行并返回 `x + 2`，即 `7`。
- 第三次调用 `gen.next(10)` 时，外部传入了 `10`，生成器接收并打印该值，最终执行结束。

### **使用场景**

- **异步编程**：通过生成器，结合 `Promise` 等，可以实现类似于同步代码风格的异步操作。`yield` 会暂停执行并等待异步操作的完成，然后再恢复执行，达到控制流的效果。
- **迭代器**：生成器非常适合实现自定义的迭代器。生成器函数能够逐步返回一系列的值，适用于构建序列、流式处理等。
- **控制流管理**：在某些复杂的应用场景中，生成器可以用于处理有多阶段步骤的任务，如依赖关系、管道式处理等。

### **总结**

- **中断和恢复的原理**：生成器通过 `yield` 语句中断函数的执行，并返回一个暂停状态。外部通过调用 `next()` 恢复执行，生成器函数会继续从暂停的位置执行，直到遇到下一个 `yield` 或函数结束。
- **状态机实现**：生成器本质上是一个状态机，它保存和恢复执行上下文，使得代码能够暂停和恢复，提供了异步编程和迭代器实现的强大能力。

生成器的这种中断和恢复机制使得它在处理异步操作、复杂控制流和自定义迭代器等方面都非常强大。

## *79. 为什么要区分宏任务和微任务？它们的执行优先级是什么？*

在 JavaScript 中，**宏任务（Macro Task）** 和 **微任务（Micro Task）** 的区分是为了更高效地管理异步操作的执行顺序，从而确保任务的执行符合预期的事件循环机制。

---

### **为什么要区分宏任务和微任务？**
1. **提高执行效率**  
   区分宏任务和微任务能够更高效地调度异步操作。微任务允许在当前宏任务结束前，快速处理需要紧急执行的操作，避免一些延迟问题。

2. **控制任务执行的时序**  
   微任务的执行会在当前宏任务完成后立即执行，而不是等待下一个宏任务。这种机制使得 JavaScript 可以快速响应例如 DOM 更新、Promise 回调等场景。

3. **保障 JavaScript 的单线程特性**  
   JavaScript 是单线程的，事件循环机制需要区分任务的优先级以便合理分配执行时机，避免阻塞主线程。

---

### **宏任务和微任务的执行优先级**
#### **1. 宏任务（Macro Task）**
- **特点**：
  - 每个宏任务执行完后，都会检查微任务队列。
  - 常见的宏任务包括：
    - `setTimeout`
    - `setInterval`
    - `setImmediate`（Node.js 中）
    - I/O 操作
    - UI 渲染任务（浏览器）

- **优先级**：较低。宏任务在每次事件循环中被调度，且微任务会在每个宏任务结束后优先执行。

---

#### **2. 微任务（Micro Task）**
- **特点**：
  - 微任务总是优先于下一次宏任务执行。
  - 常见的微任务包括：
    - `Promise.then` 和 `catch`
    - `MutationObserver`
    - `queueMicrotask`

- **优先级**：较高。在当前宏任务执行完毕后，会立即执行所有微任务队列中的任务。

---

### **执行顺序（事件循环机制）**

1. **执行一个宏任务**（例如 `script` 代码块或 `setTimeout` 回调）。
2. **检查微任务队列**：
   - 如果微任务队列非空，按顺序执行所有微任务，直到队列清空。
3. **执行下一个宏任务**。

---

### **示例：理解宏任务和微任务的执行顺序**

```javascript
console.log('Start'); // 同步代码

setTimeout(() => {
  console.log('Macro Task: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Micro Task: Promise.then');
});

console.log('End');
```

#### **执行过程**
1. 首先执行同步代码：
   - 输出 `Start`
   - 注册 `setTimeout`（宏任务）
   - 注册 `Promise.then`（微任务）
   - 输出 `End`

2. 当前宏任务执行完毕后，检查微任务队列：
   - 执行 `Promise.then`，输出 `Micro Task: Promise.then`

3. 微任务队列清空后，开始执行下一个宏任务：
   - 执行 `setTimeout` 的回调，输出 `Macro Task: setTimeout`

#### **输出顺序**
```
Start
End
Micro Task: Promise.then
Macro Task: setTimeout
```

---

### **实际场景**
1. **DOM 更新与微任务**  
   浏览器在 DOM 更新后会先执行微任务队列中的任务。例如，在某个事件回调中修改 DOM 并希望立即读取更新的结果，微任务机制可以确保在渲染之前完成必要的操作。

2. **Promise 的高效处理**  
   微任务机制使得 `Promise` 的回调在当前事件循环中快速执行，而不是延迟到下一次循环。

3. **任务调度与性能优化**  
   将紧急任务（如优先级高的逻辑）放入微任务，将次要任务（如动画帧处理）放入宏任务，可以提高性能。

---

### **总结**
- 区分 **宏任务** 和 **微任务** 是为了更好地管理异步任务的执行时机，确保任务调度的合理性。
- **优先级**：微任务优先于宏任务，每个宏任务结束后会立即执行微任务队列中的任务。
- 事件循环在 JavaScript 中扮演着至关重要的角色，合理利用宏任务和微任务可以优化代码的执行效率和响应速度。

## *80. 导致 JavaScript 中 this 指向混乱的原因是什么?*

JavaScript 中的 `this` 指向在不同的上下文中表现不同，导致很多开发者感到困惑和混乱。以下是导致 `this` 指向混乱的主要原因：

---

### **1. `this` 的绑定规则复杂**
`this` 的指向取决于代码执行时的上下文，而不是函数声明的位置。JavaScript 中 `this` 的绑定规则分为以下几种情况：
- **默认绑定**：在非严格模式下，普通函数的 `this` 指向全局对象（浏览器中为 `window`，Node.js 中为 `global`）。在严格模式下，`this` 会是 `undefined`。
  ```javascript
  function showThis() {
    console.log(this); // 非严格模式下为 window，全局对象
  }
  ```
- **隐式绑定**：通过对象调用的函数，其 `this` 指向调用该函数的对象。
  ```javascript
  const obj = {
    value: 10,
    showThis() {
      console.log(this); // 指向 obj
    },
  };
  obj.showThis();
  ```
- **显式绑定**：通过 `call`、`apply` 或 `bind` 方法显式指定 `this`。
  ```javascript
  function showThis() {
    console.log(this);
  }
  const obj = { value: 20 };
  showThis.call(obj); // 指向 obj
  ```
- **构造函数绑定**：使用 `new` 调用构造函数时，`this` 指向新创建的对象。
  ```javascript
  function Person(name) {
    this.name = name;
  }
  const person = new Person('Alice'); // this 指向新创建的对象 person
  ```
- **箭头函数绑定**：箭头函数不绑定自己的 `this`，而是继承外层上下文的 `this`。
  ```javascript
  const obj = {
    value: 30,
    showThis: () => {
      console.log(this); // 指向定义时的外层上下文
    },
  };
  obj.showThis();
  ```

---

### **2. 函数调用方式多样化**
JavaScript 中函数的调用方式非常灵活，不同的调用方式会改变 `this` 的指向：
- 普通函数调用和对象方法调用的 `this` 指向不同。
- `this` 的值在回调函数、事件处理程序和异步函数中容易被改变。
  ```javascript
  const obj = {
    value: 40,
    showThis() {
      setTimeout(function () {
        console.log(this); // 指向 window 或 undefined
      }, 1000);
    },
  };
  obj.showThis();
  ```

---

### **3. 动态语言的特性**
JavaScript 是一种动态语言，允许函数从一个对象中借用到另一个对象。`this` 的指向因此也可能随之变化。
```javascript
const obj1 = {
  value: 50,
  showThis() {
    console.log(this);
  },
};
const obj2 = { value: 60 };
obj2.showThis = obj1.showThis;
obj2.showThis(); // this 指向 obj2
```

---

### **4. 箭头函数与普通函数混用**
箭头函数继承了外层上下文的 `this`，但普通函数重新绑定了自己的 `this`，两者混用时会造成指向混乱。
```javascript
const obj = {
  value: 70,
  showThis() {
    const arrowFunc = () => {
      console.log(this); // 指向 obj
    };
    arrowFunc();
  },
};
obj.showThis();
```

---

### **5. 丢失 `this` 的绑定**
将方法从对象中取出作为普通函数调用时，`this` 会丢失原来的绑定。
```javascript
const obj = {
  value: 80,
  showThis() {
    console.log(this);
  },
};
const fn = obj.showThis;
fn(); // this 指向 window 或 undefined
```

---

### **6. 事件处理程序的特殊性**
在事件处理程序中，`this` 的指向通常是触发事件的元素，而不是定义事件的对象。
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function () {
  console.log(this); // 指向触发事件的 button 元素
});
```

---

### **总结：导致混乱的根本原因**
1. **`this` 指向由调用位置动态决定**：`this` 的绑定不是在函数声明时确定的，而是依赖调用方式。
2. **多种调用方式**：不同的调用场景（普通函数、对象方法、箭头函数等）影响 `this` 的指向。
3. **动态语言特性**：函数可以被动态借用或传递，导致 `this` 的指向发生变化。
4. **箭头函数和普通函数的差异**：箭头函数绑定外层 `this`，而普通函数重新绑定 `this`，两者的行为不同。

要避免 `this` 指向混乱，推荐以下方法：
- 使用箭头函数，确保 `this` 继承外层上下文。
- 使用显式绑定（`call`、`apply`、`bind`）指定 `this`。
- 对于需要长期绑定的函数，提前用 `bind` 固定其 `this` 指向。

## *81. 前端路由 `a-b-c`这样前进，也可以返回 `c-b-a`，用什么数据结构来存比较高效*

对于这种前进和回退操作，前端路由通常使用 **栈（Stack）** 数据结构来存储历史记录，因为栈具有后进先出（LIFO）的特性，非常适合处理页面的前进和回退操作。

---

### **栈存储路由历史的思路**
1. **前进操作：**
   - 每次从页面 `a` 导航到页面 `b` 时，将 `b` 压入栈顶。
   - 栈的顶部永远是当前页面。

2. **回退操作：**
   - 当用户点击返回时，从栈顶弹出一个页面（当前页面）。
   - 栈顶的下一个元素就是新的当前页面。

---

### **实现示例**

```javascript
class Router {
  constructor() {
    this.historyStack = []; // 主栈，存储路由历史
    this.forwardStack = []; // 辅助栈，存储前进路径
  }

  // 前进：导航到新页面
  navigate(page) {
    if (this.historyStack.length > 0) {
      console.log(`Leaving ${this.historyStack[this.historyStack.length - 1]}`);
    }
    this.historyStack.push(page);
    this.forwardStack = []; // 清空前进栈
    console.log(`Navigated to ${page}`);
  }

  // 回退：返回上一个页面
  back() {
    if (this.historyStack.length > 1) {
      const currentPage = this.historyStack.pop(); // 从主栈弹出当前页面
      this.forwardStack.push(currentPage); // 将当前页面压入前进栈
      console.log(`Back to ${this.historyStack[this.historyStack.length - 1]}`);
    } else {
      console.log("No more history to go back to.");
    }
  }

  // 前进：返回上一次回退的页面
  forward() {
    if (this.forwardStack.length > 0) {
      const nextPage = this.forwardStack.pop(); // 从前进栈弹出页面
      this.historyStack.push(nextPage); // 将页面压入主栈
      console.log(`Forward to ${nextPage}`);
    } else {
      console.log("No more pages to go forward to.");
    }
  }
}

// 示例
const router = new Router();
router.navigate("a"); // 当前页面: a
router.navigate("b"); // 当前页面: b
router.navigate("c"); // 当前页面: c
router.back();        // 回退到: b
router.back();        // 回退到: a
router.forward();     // 前进到: b
```

---

### **优势**
- **高效性**：`push` 和 `pop` 操作时间复杂度为 \( O(1) \)。
- **灵活性**：可以轻松扩展，例如添加路径记录、路由元信息等。

---

### **其他可选数据结构**
1. **双端队列（Deque）**：
   - 如果需要频繁在前后两端进行插入和删除，双端队列也是不错的选择。
   - 适用于更加复杂的路由管理逻辑。

2. **链表（Linked List）**：
   - 如果路由管理需要动态插入中间节点或删除某些特定节点，链表可以提供更高的灵活性。
   - 但其操作复杂性较高，通常不如栈直观。

---

**总结**：对于前端路由中常见的 **前进** 和 **回退** 操作，**栈** 是最佳选择，因为它简洁、高效且符合操作逻辑。

## *82. 如果要实现一个类似“谷歌图片”的系统，你会有哪些方面的考虑？*

## *83. 前端的页面截图怎么实现？*

## *84. 下面代码的输出是什么？*

## *85. 浏览器有哪几种缓存，各种缓存的优先级是什么样的？*

## *86. Web Worker 是什么？*

## *87. 说说你对 webpack5 模块联邦的了解？*

## *88. Promise 的 finally 怎么实现的？*

## *89. Promise then 第二个参数和catch的区别是什么？*

## *90. 怎么使用 Math.max、Math.min 获取数组中的最值？*

## *91. 说说下面代码执行后的输出是什么？*

## *92. 怎么实现虚拟列表？*

## *93. 如果要设计一个转盘组件，你会考虑哪些方面？有哪些是需要和业务方确认的技术细节？另外，如何从前端的角度进行防刷？*

## *94. async/await、generator、promise 这三者的关联和区别是什么?*

## *95. mouseEnter 和 mouseOver 有什么区别？*

## *96. 写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。*

## *97. 以下等式是成立的吗：1_000_000 === 1000000 ？*

## *98. 说说对 requestIdleCallback 的理解*

## *99. 说说你对 ToPrimitive 的理解*

## *100. 页面加载的过程中，JS 文件是不是一定会阻塞 DOM 和 CSSOM 的构建？*

## *101. 说说你对轮询的理解*

## *102. js函数有哪几种声明方式？有什么区别？*

## *103. 说说你对“立即执行函数”的理解*

## *104. 如何把一个对象变成可迭代对象？*

## *105. 编程实现温度转换，已知温度转换的关系式是：华氏度＝32＋摄氏度×1.8，现在要求输入摄氏度，输出对应的华氏度，小数保留两位*

## *106. 版本号排序*

## *107. 给某个资源的链接，如 https://www.baidu.com/index.html ，请实现一个方法，获取该资源的后缀，如 html*

## *108. 说说你对 Iterator, Generator 和 Async/Await 的理解*

## *109. Map 和 WeakMap 有什么区别？*

## *110. 如何判断某个字符串长度（要求支持表情）？*

## *111. 说说你对模块化方案的理解，比如 CommonJS、AMD、CMD、ES Module 分别是什么？*

## *112. 一个滚动公告组件，如何在鼠标滑入时停止播放，在鼠标离开时继续等待滑入时的剩余等待时间后播放？*

## *113. 如果使用 Math.random() 计算中奖概率会有什么问题吗？*

## *114. 怎么预防用户快速连续点击，造成数据多次提交？*

## *115. 相比于npm和yarn，pnpm的优势是什么？*

## *116. 说说你对 pnpm 的了解*

## *117. 如何判断页面是通过PC端还是移动端访问？*

## *118. 导致页面加载白屏时间长的原因有哪些，怎么进行优化？*

## *119. 怎么使用 js 动态生成海报？*

## *120. 怎么把十进制的 0.2 转换成二进制？*

## *121. map和 filter 有什么区别？*

## *122. map 和 forEach 有什么区别？*

## *123. 实现以下转换，合并连续的数字*

## *124. JQuery中的$(document).ready与window.onload有什么区别？*

## *125. 前端跨页面通信，你知道哪些方法？*

## *126. 请对以下数组，根据 `born` 的值降序排列*

## *127. 遍历一个任意长度的list中的元素并依次创建异步任务，如何获取所有任务的执行结果？*

## *128. 如何顺序执行10个异步任务？*

## *129. 怎么把函数中的 arguments 转成数组？*

## *130. 如何获取页面的滚动距离值？*

## *131. 如何让Promise.all在抛出异常后依然有效*

## *132. 实现一个数字转中文的方法*

## *133. 用js实现二叉树的定义和基本操作*

## *134. 非递归遍历二叉树*

## *135. 什么是同步和异步？*

## *136. 说说你的ES6-ES12的了解*

## *137. ['1','2','3'].map(parseInt) 的返回值是什么？*

## *138. 怎么预防按钮的重复点击？*

## *139. JavaScript 中如何取消请求*

## *140. 怎么实现大型文件上传？*

## *141. 说说你对JS的模块化方案的了解*

## *142. 遍历数组的方式有哪些？*

## *143. 说说你对 new.target 的理解*

## *144. arguments 这种类数组，如何遍历类数组？*

## *145. 连续 bind()多次，输出的值是什么？*

## *146. new fn与new fn()有什么区别吗？*

## *147. Object与Map有什么区别？*

## *148. cookie 的有效时间设置为 0 会怎么样*

## *149. postMessage 有哪些使用场景？*

## *150. async/await 怎么进行错误处理？*

## *151. 将数组的length设置为0，取第一个元素会返回什么？*

## *152. CSS动画和JS实现的动画分别有哪些优缺点？*

## *153. 前端实现动画有哪些方式？*

## *154. 写一个返回数据类型的函数，要求自定义的类实例化的对象返回定义的类名*

## *155. e.target 和 e.currentTarget 有什么区别？*

## *156. const声明了数组，还能push元素吗，为什么？*

## *157. 如何区分数组和对象？*

## *158. async、await 实现原理*

## *159. 给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡，说下会执行几次事件，然后会先执行冒泡还是捕获？*

## *160. promise.catch后面的.then还会执行吗？*

## *161. 如何确保你的构造函数只能被new调用，而不能被普通调用？*

## *162. 如何获取到一个实例对象的原型对象？*

## *163. RESTful 接口规范是什么？*

## *164. ES5怎么实现继承*

## *165. 请简述 == 的机制*

## *166. 说说sourcemap的原理？*

## *167. AST语法树是什么？*

## *168. flexible.js实现移动端适配的原理是什么？*

## *169. JavaScript中的 sort 方法是怎么实现的？*

## *170. cookie、localStorage和sessionStorage 三者之间有什么区别*

## *171. 使用js实现二分查找*

## *172. 前端怎么实现跨域请求？*

## *173. 怎么实现图片懒加载？*

## *174. 我现在有一个canvas，上面随机布着一些黑块，请实现方法，计算canvas上有多少个黑块。*

## *175. 怎么解决canvas中获取跨域图片数据的问题？*

## *176. es5 中的类和es6中的class有什么区别？*

## *177. 怎么实现一个扫描二维码登录PC网站的需求？*

## *178. js中的undefined和 ReferenceError: xxx is not defined 有什么区别？*

## *179. Math.ceil()、Math.round()、Math.floor()三者的区别是什么？*

## *180. 使用js生成1-10000的数组*

## *181. 背包问题*

## *182. ES6有哪些新特性？*

## *183. jquery的链式调用是怎么实现的？*

## *184. 写一个 repeat 方法，实现字符串的复制拼接*

## *185. 使用Promise实现：限制异步操作的并发个数，并尽可能快的完成全部*

## *186. 使用Promise封装一个异步加载图片的方法*

## *187. 实现mergePromise函数*

## *188. 解释下如下代码的意图：Array.prototype.slice.apply(arguments)*

## *189. js中数组是如何在内存中存储的？*

## *190. 直接在script标签中写 export 为什么会报错？*

## *191. js 中的倒计时，怎么实现纠正偏差？*

## *192. Math.ceil 和 Math.floor 有什么区别？*

## *193. 怎么使用 setTimeout 实现 setInterval？*

## *194. 怎么使用 js 实现拖拽功能？*

## *195. Js 动画与 CSS 动画区别及相应实现*

## *196. 异步编程有哪些实现方式？*

## *197. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？*

## *198. toPrecision 和 toFixed 和 Math.round 有什么区别？*

## *199. 什么是 Polyfill ？*

## *200. 怎么检测浏览器版本？*

## *201. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？*

## *202. 什么是点击穿透，怎么解决？*

## *203. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？*

## *204. 如何判断当前脚本运行在浏览器还是 node 环境中？*

## *205. setTimeout 为什么不能保证能够及时执行？*

## *206. 介绍一下 setTimeout 的运行机制*

## *207. ['10', '10', '10', '10', '10'].map(parseInt)*

## *208. JavaScript中的错误有哪几种类型？*

## *209. Promise.all 和 Promise.allSettled 有什么区别？*

## *210. JS中怎么阻止事件冒泡和默认事件？*

## *211. 什么是“事件代理”*

## *212. 谈谈你对事件冒泡和捕获的理解*

## *213. js中如何判断一个值是否是数组类型？*

## *214. 浏览器为什么要有跨域限制？*

## *215. 浏览器的同源策略是什么？*

## *216. 浏览器的垃圾回收机制有哪些？*

## *217. xml和json有什么区别？*

## *218. document.write和innerHTML有什么区别*

## *219. 使用原生js给一个按钮绑定两个onclick事件*

## *220. 123['toString'].length + 123 的输出值是多少？*

## *221. ajax、axios、fetch有什么区别？*

## *222. for...in和for...of有什么区别？*

## *223. 什么是类数组对象？*

## *224. JavaScript脚本延迟加载的方式有哪些？*

## *225. 箭头函数的 this 指向哪⾥？*

## *226. 如果new一个箭头函数会怎么样？*

## *227. object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别是什么？*

## *228. typeof NaN 的结果是什么？*

## *229. null 和 undefined 有什么区别？*

## *230. 数据类型检测的方式有哪些？*

## *231. Object.is() 与比较操作符 “===”、“==” 的区别？*

## *232. isNaN 和 Number.isNaN 函数有什么区别？*

*233. 说说你对以下几个页面生命周期事件的理解：DOMContentLoaded，load，beforeunload，unload*

## *234. 介绍一下 tree shaking 及其工作原理*

## *235. 使用Promise实现每隔1秒输出1,2,3*

## *236. Promise中的值穿透是什么？*

## *237. 如何使用js计算一个html页面有多少种标签？*

## *238. bind() 连续调用多次，this的绑定值是什么呢？*

## *239. 浏览器和 Node 中的事件循环有什么区别？*

## *240. 谈谈对 window.requestAnimationFrame 的理解*

## *241. 浏览器一帧都会干些什么？*

## *242. 谈谈 Object.defineProperty 与 Proxy 的区别*

## *243. base64编码图片，为什么会让数据量变大？*

## *244. html文档渲染过程，css文件和js文件的下载，是否会阻塞渲染？*

## *245. 谈谈你对浏览器中进程和线程的理解*

## *246. 为什么JavaScript是单线程？*

## *247. 说说你对 Object.defineProperty 的理解*

## *248. ES6中的 Reflect 对象有什么用？*

## *249. 什么是尾调用优化和尾递归？*

## *250. 简单介绍下 ES6 中的 Iterator 迭代器*

## *251. js对象中，可枚举性（enumerable）是什么？*

## *252. forEach 中能否使用 await ？*

## *253. 如何中断Promise？*

## *254. Object.create 和 new 有什么区别？*

## *255. 堆与栈有什么区别？*

## *256. “严格模式”是什么？*

## *257. 为什么部分请求中，参数需要使用 encodeURIComponent 进行转码？*

## *258. JS代码中的use strict是什么意思？*

## *259. 什么是变量提升*

## *260. 箭头函数和普通函数有啥区别？箭头函数能当构造函数吗？*

## *261. WebSocket 中的心跳是为了解决什么问题？*

## *262. 说说对 WebSocket 的了解*

## *263. Service worker是什么？*

## *264. 什么是 PWA？*

## *265. 如何判断一个对象是不是空对象？*

## *266. NaN 是什么，用 typeof 会输出什么？*

## *267. async/await 和 Promise 有什么关系？*

## *268. Promise中，resolve后面的语句是否还会执行？*

## *269. 写一个 LRU 缓存函数*

## *270. JSBridge是什么？*

## *271. Babel 是什么？*

## *272. CSR和SSR分别是什么？*

## *273. 微前端中的应用隔离是什么，一般是怎么实现的？*

## *274. 实现微前端有哪些技术方案？*

## *275. 微前端可以解决什么问题？*

## *276. 什么是微前端？*

## *277. npm 是什么？*

## *278. forEach中return有效果吗？如何中断forEach循环？*

## *279. 下面执行后输出什么？*

## *280. [] == ![]结果是什么？*

## *281. Object.is和===有什么区别？*

## *282. instanceof能否判断基本数据类型？*

## *283. typeof 是否能正确判断类型？*

## *284. 什么是BigInt?*

## *285. 0.1+0.2为什么不等于0.3？*

## *286. '1'.toString()为什么不会报错？*

## *287. null是对象吗？为什么？*

## *288. 什么是内存泄漏？什么原因会导致呢？*

## *289. webSocket如何兼容低浏览器*

## *290. 如何实现浏览器内多个标签页之间的通信？*

## *291. 什么是跨域？*

## *292. Axios的原理是什么？*

## *293. 说说你对SPA的理解*

## *294. web常见的攻击方式有哪些，以及如何进行防御？*

## *295. 如何实现上拉加载，下拉刷新？*

## *296. 大文件怎么实现断点续传？*

## *297. 如何判断一个元素是否在可视区域中？*

## *298. 什么是防抖和节流，以及如何编码实现？*

## *299. 说说 Javascript 为什么会存在数字精度丢失的问题，以及如何进行解决？*

## *300. Javascript中如何实现函数缓存？函数缓存有哪些应用场景？*

## *301. 说说你对函数式编程的理解，以及优缺点？*

## *302. Javascript本地存储的方式有哪些，有什么区别，及有哪些应用场景？*

## *303. 说说 JavaScript 中内存泄漏有哪几种情况？*

## *304. 举例说明你对尾递归的理解，以及有哪些应用场景*

## *305. 说说你对BOM的理解，以及常见的BOM对象有哪些？*

## *306. 谈谈你知道的DOM常见的操作*

## *307. 说说你对事件循环的理解*

## *308. 正则表达式是什么，有哪些应用场景？*

## *309. bind、call、apply 有什么区别？如何实现一个bind?*

## *310. 说说ajax的原理，以及如何实现？*

## *311. 说说new操作符具体干了什么？*

## *312. 什么是事件代理，以及它的应用场景有哪些？*

## *313. typeof 与 instanceof 有什么区别*

## *314. JavaScript中的事件模型有哪些*

## *315. JavaScript中执行上下文和执行栈是什么？*

## *316. 谈谈对 this 对象的理解*

## *317. Javascript如何实现继承？*

## *318. JavaScript中的原型，原型链分别是什么?*

## *319. 什么是作用域链？*

## *320. 说说你对闭包的理解，以及闭包使用场景*

## *321. 深拷贝浅拷贝有什么区别？怎么实现深拷贝？*

## *322. == 和 ===有什么区别，分别在什么情况使用？*

## *323. 谈谈 Javascript 中的类型转换机制*

## *324. Javascript字符串的常用方法有哪些？*

## *325. Javscript数组的常用方法有哪些？*

## *326. 你是怎么理解ES6中 Decorator 的？使用场景有哪些？*

## *327. 你是怎么理解ES6中Module的？使用场景有哪些？*

## *328. 你是怎么理解ES6中Proxy的？使用场景有哪些?*

## *329. 怎么理解ES6中 Generator的？使用场景有哪些？*
