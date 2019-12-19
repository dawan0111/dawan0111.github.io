---
title: React - exhaustive-deps warning 오류 해결법
date: 2019-11-28 11:11:02
category: react
---

## Exhaustive-deps warning
### React Hook useEffect has a missing dependency: 'xxx'. Either include it or remove the dependency array
react로 개발을 하다보면 한번쯤은 봤을법한 warning이다. useEffect에 누락된 종속성이 있어 배열안에 종속성을 추가시켜달라는 의미이다

#### 예1) useEffect안에 state값 사용
```javascript
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [category, _] = useState('dog');

  useEffect(() => {
    console.log(category);
  }, [])

  return (
    <div className="App">
      나의 연습용 react
    </div>
  );
}

export default App;
```
위 소스는 경우는 아래 같은 wraning을 뱉는다.
```
React Hook useEffect has a missing dependency: 'category'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```
useEffect안에서 category를 사용했으므로 lint는 useEffect 함수가 category를 의존하고 있다는것을 알고 warning을 뱉는다.

#### 해결방법
```javascript
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [category, _] = useState('dog');

  useEffect(() => {
    console.log(category);
  }, [category])

  return (
    <div className="App">
      나의 연습용 react
    </div>
  );
}

export default App;
```
해결방법은 간단하다. useEffect에 의존성 배열에 category를 추가시켜 주면 된다.

#### 예2) useEffect 안에 함수
```javascript
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [category, _] = useState('dog');

  const fetchCategoryPost = async () => {
    fetch(`http://example.com/post/category/${category}`)
      .then((response) => {
        console.log(response);
      })
  }

  useEffect(() => {
    fetchCategoryPost();
  }, [])

  return (
    <div className="App">
      나의 연습용 react
    </div>
  );
}

export default App;
```
위 소스는 경우는 아래 같은 wraning을 뱉는다.
```
React Hook useEffect has a missing dependency: 'fetchCategoryPost'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```
함수를 실행시키는 것은 문제가 되지 않는다. 단 fetchCategoryPost안에 category를 사용했다는 점이 문제이다. 위 상황은 2가지로 해결이 가능하다.


#### 해결방법1) useEffect안으로 이동
```javascript
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [category, _] = useState('dog');

  useEffect(() => {
    const fetchCategoryPost = async () => {
      fetch(`http://example.com/post/category/${category}`)
        .then((response) => {
          console.log(response);
        })
    }

    fetchCategoryPost();
  }, [category])

  return (
    <div className="App">
      나의 연습용 react
    </div>
  );
}

export default App;
```
위 처럼 변경하면 useEffect의 의존성 배열에 category를 추가하고 **fetchCategoryPost**함수를 안으로 이동시키면 된다. 하지만 이러면 다른함수에서는 fetchCategoryPost 함수를 사용하지 못한다. 만약 다른곧에서도 사용이 된다면 똑같은 코드를 두번작성하게 될 것이다. 그래서 나는 2번째 방법을 선호한다.

#### 해결방법2) useCallback을 사용
```javascript
import React, { useEffect, useState, useCallback } from 'react';

const App: React.FC = () => {
  const [category, _] = useState('dog');
  const fetchCategoryPost = useCallback(() => {
      fetch(`http://example.com/post/category/${category}`)
        .then((response) => {
          console.log(response);
        })
  }, [category])


  useEffect(() => {
    fetchCategoryPost();
  }, [fetchCategoryPost])

  return (
    <div className="App">
      나의 연습용 react
    </div>
  );
}

export default App;
```
useCallback을 사용해야 되는 이유는 App컴포먼트가 리 렌더링 될때 useCallback이 없다면 리 렌더링 될때마다 새로운 fetchCategoryPost를 만든다. 그렇게 되면 useEffect는 함수의 참조가 달라 실행될 것이다. 하지만 useCallback을 사용하면 다르다 useCallback에 함수가 사용중인 category를 의존성 배열에 추가시키면 category가 바뀔때마다 함수를 다시 생성해서 useEffect에 불필요한 실행을 방지할 수 있게된다.


#### 예3) useContext 사용시
```javascript
import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';

type contextValue = {
  loading: boolean;
  setLoading: (boolean: boolean) => void
}

const initValue: contextValue = {
  loading: false,
  setLoading: (boolean: boolean) => {
  }
}

const context = createContext(initValue);

const UserList:React.FC = () => {
  const appContext = useContext(context);

  useEffect(() => {
    appContext.setLoading(true);

    fetch('http://example.com/user')
      .then((response) => {
        appContext.setLoading(false);    
      })
  }, []);

  return (
    <div>
      hello world!!
    </div>
  )
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const setToggleLoad = (boolean: boolean) => {
    setLoading(boolean);
  }

  return (
    <div className="App">
      <context.Provider value={{
        loading: loading,
        setLoading: setToggleLoad
      }}>
        <UserList />
      </context.Provider>
      나의 연습용 react
    </div>
  );
}

export default App;
```
위 소스는 경우는 아래 같은 wraning을 뱉는다.
```
React Hook useEffect has a missing dependency: 'appContext'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```
이번경우는 appContext를 의존하고 있다는 의미인데 그렇다고 만약 useEffect 의존성배열에 appContext를 넣는다면 무한루프가 생길것이다. 위 문제는 useCallback을 사용하여서 해결 가능하다.

```javascript

const UserList:React.FC = () => {
  const appContext = useContext(context);

  useEffect(() => {
    appContext.setLoading(true);

    fetch('http://example.com/user')
      .then((response) => {
        appContext.setLoading(false);    
      })
  }, [appContext.setLoading]);

  return (
    <div>
      hello world!!
    </div>
  )
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const setToggleLoad = useCallback(boolean: boolean) => {
    setLoading(boolean);
  }, [])

  return (
    <div className="App">
      <context.Provider value={{
        loading: loading,
        setLoading: setToggleLoad
      }}>
        <UserList />
      </context.Provider>
      나의 연습용 react
    </div>
  );
}

export default App;
```
setToogleLoad를 useCallback으로 생성하고 의존성 배열을 비우면 첫 렌더링시에만 함수가 생성된다. 즉 함수가 변할 일이 없다. 이제 UserList컴포넌트에서 setLoading을 사용하더라고 setLoading은 바뀔일이 없으므로 빈 배열과 동일한 역활을 하게 하면서 warning을 없앨 수 있다.