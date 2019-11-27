---
title: React - Portals
date: 2019-11-26 18:11:70
category: react
---

## React Portals

툴팁을 렌더링하던 도중 상위 컴포먼트의 style때문에 위치잡는데 어려움이 생겼다 Portal로 해결됬다

### 보통 컴포먼트 렌더링
```javascript
render() {
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```
컴포먼트 메서드에서 엘리먼트를 반환할때 그 엘리먼트는 부모노드의 가장 가까운 저식으로 마운트된다. 그렇기 때문에 상위컴포먼트의 영향을 받아 문제가 생길 수도 있다.

### Portals
```javascript
render() {
  return ReactDOM.createPortal(
    this.props.children,
    document.getElementById('tooltip-root')
  );
}
```
Portals을 사용하면 DOM 어디든 렌더링이 가능해진다. 위 예제는 아이디가 tooltip-root인 DOM 의 가장 가까운 자식에 렌더링이 된다.

### 이벤트 버블링
portal이 DOM 트리의 어디에도 존재할 수 있다 하더라도 모든 다른 면에서 일반적인 React 자식처럼 동작한다.
이벤트 버블링도 포함되어 있다. portal 내부에서 발생한 이벤트는 DOM 트리에서는 그 상위가 아니여도 React 트리에 포함된 상위로 전파 된다.


[Portals 이벤트 버블링에 대한 예제](https://codepen.io/gaearon/pen/jGBWpE)