---
title: React - Context
date: 2019-11-28 11:11:02
category: react
---

## React Context
React로 하위컴포먼트에게 props를 넘길때 사용하지 않는 여러 컴포먼트를 거쳐 넘겨줘야 하는것은 번거롭다 Context로 간편하게 처리하자

### Context 사용전
```javascript
<Page user={user} avatarSize={avatarSize} />
// ... 그 아래에 ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... 그 아래에 ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... 그 아래에 ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```
React 공식문서에 있는 예제, user와 avatarSize props를 여러단계의 거처서 보낸다. 하지만 정작 사용하는곳은 마지막 Link부분이다. 다른 값을 추가로 보내야 한다면 매우 번거롭다.

### React.createContext
```javascript
const MyContext = React.createContext(defaultValue)
```
Context 객체를 만들고, Context 객체를 사용하고 있는 컴포먼트를 렌더링할때 React트리 *상위*에 *가장 가까이 있는 짝* 맞는 Provider로부터 현재값을 읽는다
defaultValue 매개변수는 트리 안에서 적절한 Provider를 찾지 못했을때 쓰이는 값이다. provider값으로 undefined를 보내고 defaultValue값을 읽지 않는다.

### Context.Provider
```javascript
<MyContext.Provider value={/* 어떤 값 */}>
```
Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 사용하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다. value prop를 입력받아서 하위에 있는 컴포넌트에게 전달한다. 만약 value가 없다면 createContext 할때 입력한 defaultValue를 전달한다

### React.useContext
```javascript
const useContext = React.useContext(Context)
```
Context.Consumer 와 동일한 역활을 하나 더욱 간결하게 Context 값을 사용할 수 있다. context값의 변화는 Object.is와 동일한 알고리즘으로 비교한다.

### Context 예제
```javascript
const AppContext = createContext()

const App = () => {
  const user = {
    nickname: 'GDW',
    age: 20,
  }

  return (
    <AppContext.Provider value={user}>
      <div>
        <User />
      </div>
    </AppContext.Provider>
  )
}

const Children = () => {
  const user = useContext(AppContext)

  return (
    <div>
      <div>{user.nickname}</div>
      <div>{user.age}</div>
    </div>
  )
}
```
Context.Consumer 보다 훨씬더 간결하게 사용 가능한 모습이다.

[Context.Consumer 에 대한 공식문서](https://ko.reactjs.org/docs/context.html#contextconsumer)