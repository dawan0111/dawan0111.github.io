---
title: 자바스크립트 switch 구문
date: 2019-12-13 15:12:17
category: javascript
---

## switch

useReducer 예제를 보던 도중 switch case절 후에 문장 주위에 중괄호를 넣는 것을 알게되었습니다. 그다지 다르지 않고 넘어 지지 않도록 진술의 끝 break이나 return끝에서 여전히 필요 하지만 중괄호만에 좋은 장점이 있습니다.

## 장점

중괄호는 블록 scope를 만들게 됩니다. 그 뜻은 각 case 마다 다른 블록 scope를 갖게되며, 다른 케이스에 있는 let, const 문법에 충돌나지 않고 고유한 범위의 변수를 정의 할 수 있게됩니다.

## 중괄호가 없는 경우

```javascript
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      const afterCount = state.count + 1
      return { count: afterCount }
    case 'decrement':
      const afterCount = state.count - 1
      return { count: afterCount }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

위 코드는 afterCount가 이미 선언되었다며 오류가 납니다. 왜냐하면 case문으로 나눴다 한들, 같은 reducer 스코프이기 때문입니다. 위 예제는 중괄호를 사용하여 해결할 수 있습니다.

## 중괄호가 있는 경우

```javascript
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const afterCount = state.count + 1
      return { count: afterCount }
    }
    case 'decrement': {
      const afterCount = state.count - 1
      return { count: afterCount }
    }
    default: {
      throw new Error()
    }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

중괄호를 추가하여 각 case마다 블록 스코프 생성시켜 문제를 해결할 수 있게 됩니다.
