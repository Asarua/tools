# tools

一些辅助性的方法

## 下载

使用npm

```bash
npm i @asarua/tools -S
```

使用yarn

```bash
yarn add @asarua/tools -S
```

## 例子

```javascript
import {
  after,
  assert,
  before,
  compose,
  curry,
  deepClone,
  getUrlParams,
  is,
  memorize,
  noop
} from '@asarua/tools'
```

### `after`

> `after`是一个后置调用包装者，`after`函数提供三个参数

- `fn`: 要进行包装的函数
- `afterFn`: 要后置调用的函数
- `isEffect`?: 是否通过后置函数改变返回值

`after`根据第三个参数的传递与否提供了两种不同的模式与类型声明

- `aop`模式，不切入业务，只进行辅助功能

```typescript
import { after } from '@asarua/tools'

const func = after(
  function fn(data: { a: 1, b: 2 }) {
    return {
      ...data,
      c: 3
    }
  },
  function afterFn(data) {
    return data.a
  }
)

// ReturnType<typeof func> => ReturnType<typeof fn>
```

- 副作用模式，即第三个参数为`true`，`afterFn`的参数接收的类型，将会由`fn`的返回值决定（如果是使用的ts，那么`afterFn`的参数类型将会具有强约束），`func`的返回值将会是`afterFn`的类型

```typescript
import { after } from '@asarua/tools'

const func = after(
  function fn(data: { a: 1, b: 2 }) {
    return {
      ...data,
      c: 3
    }
  },
  /*
    此处的data的类型，已经是确定好的，也就是fn的返回值类型
  */
  function afterFn(data) {
    return data.a
  },
  true
)

// ReturnType<typeof func> => ReturnType<typeof afterFn>
```

### `assert`

> `assert`是一个断言函数，它有两个参数

- `condition`: 要断言的语句
- `msg`?: 断言失败之后要抛出的错误

```typescript
import { assert } from '@asarua/tools'

assert(1, 'error！')
```

### `before`

> 与`after`类似，`before`是一个前置调用的包装者，同样提供了三个参数

- `beforeFn`: 进行前置调用的函数
- `fn`: 要进行包装的函数
- `isEffect`?: 是否通过前置函数改变`fn`的参数

`before`同样根据第三个参数的传递与否提供了两种不同的模式与类型声明

- `aop`模式，不切入业务，只进行辅助功能

```typescript
import { before } from '@asarua/tools'

type s = {
  a: 1,
  b: 2
}

const func = before(
  function beforeFn(data: s) {
    return {
      ...data,
      c: 3
    }
  },
  function fn(data) {
    return 1
  }
)

// ReturnType<typeof func> => ReturnType<typeof fn>
```

- 副作用模式，即第三个参数为`true`，`fn`的参数接收的类型，将会由`beforeFn`的返回值决定（如果是使用的ts，那么`fn`的参数类型将会具有强约束），`func`的返回值始终都是`fn`的返回值

```typescript
import { before } from '@asarua/tools'

type s = {
  a: 1,
  b: 2
}

const func = before(
  function beforeFn(data: s) {
    return {
      ...data,
      c: 3
    }
  },
  function fn(data) {
    return 1
  },
  true
)

// Parameters<typeof fn>[number] => ReturnType<typeof beforeFn>
```

### `compose`

> `compose`方法提供对一组参数、返回值都统一的方法的合并功能

```typescript
import { compose } from '@asarua/tools'

const func = compose(
  function(num: string) {
    return num + 3
  },
  function(num: number) {
    return num + '2'
  }
)

func(1) // => 123

// const func: (...args: number[]) => string
```

### `curry`

> `curry`是一个柯里化函数制造者，它接收一个函数，返回值是这个函数的柯里化版本

```typescript
const add = (a, b, c) => a + b + 
const curried = curry(add)

curried(1)(2)(3) // => 6
curried(1, 2)(3) // => 6
curried(1)(2, 3) // => 6
curried(1, 2, 3) // => 6
```

### `deepClone`

> `deepClone`提供了一个对象、数组的深拷贝的方式

```typescript
const data = {
  a: 1,
  b: 2,
  c: {
    d: 4
  }
}
const dataTwo = deepClone(data)

// dataTwo !== data
```

### `getUrlParams`

> `getUrlParams`提供了从一个url中提取参数的功能，并提供了配套了类型支持，它提供了两个参数

- `name`: 要从路径中提取的key
- `url`?: 要获取值的url，不传默认为`location.href`

```typescript
import { getUrlParams } from '@asarua/tools'

const param = getUrlParams('a', 'baidu.com?a=1')
// param的类型为 => "1"
```

### `is`

> `is`提供了一组用与鉴别数据类型的方法，并为其提供了类型保护

- `isString`
- `isBoolean`
- `isNull`
- `isUndefined`
- `isNumber`
- `isSymbol`
- `isBigInt`
- `isObject`
- `isFunction`
- `isArray`
- `isDate`
- `isMap`
- `isSet`
- `isWeakMap`
- `isWeakSet`
- `isRegExp`
- `isWindow`
- `isError`

```typescript
import { is } from '@asarua/tools'

const { isMap } = is

let map: Map<1, 2> | Map<3, 4>

if (isMap<1, 2>(map)) {
  map.get(1)
}
```

### `memorize`

> `memorize`提供了一个记忆话函数生成器，接收一个函数作为参数，返回一个记忆化的函数，函数中存在一个`cache`属性可以查看缓存的值，一般用于大型计算做性能优化

```typescript
import { memorize } from '@asarua/tools'

function add(a, b) {
  return a + b
}

const memo = memorize(add)
const val = memo(1, 2)

console.log(memo) // [Function: memo] { cache: { '[1,2]': 3 } }
```

### `noop`

> `noop`是一个空函数，一般用于`cps`短路运算

```typescript
import { noop } from '@asarua/tools'

function operation(val, opera = noop) {
  return opera(val)
}
```

## License

[`MIT`](https://github.com/Asarua/tools/blob/master/License)
