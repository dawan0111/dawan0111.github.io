---
title: react - useCallback, memo re-render 최적화
date: 2019-12-16 16:12:79
category: react
---

React의 Hook 중에 useCallback과 useMemo를 활용하여 최적화 하는 방법을 알아보았다.

## React가 렌더링을 실행하는 행동
1. Props가 변경되었을 때
2. State가 변경되었을 때
3. 부모 컴포넌트가 렌더링 되었을 때
4. focueUpdate() 를 실행하였을 때

주목해야 될 점은 부모 컴포넌트가 렌더링 되었을때 자식 컴포넌트까지 다시 렌더링이 된다. 하지만 자식컴포넌트는 변화에 아무런 영향이 없다면 불필요한 렌더링이 발생하여 성능 손실이 발생하게 된다. 즉 컴포넌트가 복잡하고 많을수록 손실은 심해지게 된다.

## 불필요한 렌더링
```javascript
import React from "react";
import ReactDOM from "react-dom";

const CountButton = function CountButton({ count, onClick }) {
  return <button onClick={onClick}>{count}</button>;
};

function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = () => { setCount1(c => c + 1) };
  const [count2, setCount2] = React.useState(0);
  const increment2 = () => { setCount2(c => c + 1) };

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<DualCounter />, rootElement);
```
아주 간단한 예시이다 위 코드는 **increment1** 을 호출시키면 count1이 1 더해지며 state 가 변경되어 리렌더링 된다.
그렇게되면 위 변화에 아무런 변경이 없어도 count2는 부모컴포넌트가 렌더링이 되어 리 렌더링이 이루워진다

## React.memo 와 React.useCallback
**shouldComponentUpdate** 가 있듯이 **React.memo** 가 있다 위 예제를 memo와 useCallback 사용하면 불필요한 리 렌더링을 막을 수 있다.
```javascript
const CountButton = React.memo(function CountButton({ count, onClick }) {
  return <button>{count}</button>;
});

function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = () => { setCount1(c => c + 1) };
  const [count2, setCount2] = React.useState(0);
  const increment2 = () => { setCount2(c => c + 1) };

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```
위 예제에서는 memo만 사용하였다. React.memo()는 props 혹은 props의 객체를 비교할 때 얕은(shallow) 비교를 한다. 그렇게 된다면 count값은 불변값이니 상관이 없으나 onClick은 리 렌더링 될때마다 새로 생성되어 리 렌더링 된다.

### React.useCallback
```javascript
function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = React.useCallback(() => setCount1(c => c + 1), []);;
  const [count2, setCount2] = React.useState(0);
  const increment2 = React.useCallback(() => setCount2(c => c + 1), []);;

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```
위 소스를 보면 증가하는 함수를 useCallback으로 감싸고 두번째 인자에 의존성 값들을 넣어주고 해당 값이 변경되면 감지를 하여 새로운 함수를 만든다. 이번엔 빈 배열을 넘겨줘서 새로운 함수를 만들지 않는다. 그렇게 되면 onClick값이 변하지 않으므로 리 렌더링 되지 않는다. 혹은 React.memo에 두번째 인자에 조건을 거는 방식이 있다.

## React.useMemo
useCallback은 함수만 반환한다 생각하고 useMemo는 값(함수포함) 반환 할 수 있다. 주로 복잡하고 오래걸리는 작업에 사용해야된다.

## useCallback 및 useMemo 주의할점
1. 간단한 작업에도 사용하게된다면 오히려 성능이 악화 될 수도 있다. 간단한 작업은 garbage collected 되고 새로운것이 생성되는 것이 더 효율적이다.
2. useCallback, useMemo의 함수는 생성되던 당시의 상태를 보존한다.

## 참고한 자료
[When to useMemo and useCallback](https://ideveloper2.dev/blog/2019-06-14--when-to-use-memo-and-use-callback/)