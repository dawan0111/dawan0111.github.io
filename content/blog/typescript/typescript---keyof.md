---
title: typescript - keyof 기본
date: 2019-11-19 17:11:92
category: typescript
---

# Typescript keyof 기본
색인타입으로 동적으로 object의 properties를 확인하는데 사용할 수 있다

### object의 properties를 선택하는 경우
```typescript
  function pluck(object, propertyName) {
    return object[propertyName];
  }
```
propertyNames에 key를 배열의 형태로 넘기면 object의 해당 key만 반환하는 코드이다. 만약 propertyNames가 object에 존재해야만 한다면 keyof를 사용하면 된다

### keyof를 사용한 경우
```typescript
  function pluck<
    T,
    K extends keyof T
  >(object: T, propertyNames: K): T[K] {
    return object[propertyNames];
  }

  interface Human {
    name: string;
    age: number;
  }

  const man: Human = {
    name: '홍길동',
    age: 17
  }
  
  let humanProps: keyof Human;
}
```
객체의 타입에 keyof를 사용하면 type 처럼 사용이 가능해진다. pluck 두번째 인자타입을 첫번째 인자의 key 유형 name | age 만 사용가능해진다. 컴파일러는 올바른 property를 제공했는지 확인한다 '인덱스 유형 쿼리연산자' 라고한다.

"T[K]" 부분을 인덱스 엑세스연산자 라고한다. 만약 이 부분이 없다면 그냥 문자열을 리턴하는 꼴이 되었을것이다.  하지만 인덱스 타입 쿼리와 마찬가지로 T[K]를 사용하면 실질적으로 힘이 발휘되는 일반적인 컨텍스트에서 사용할 수 있습니다. 타입 변수 K extends keyof T를 확실히 만들어야 합니다.

### Mapped types
```typescript
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type Partial<T> = {
      [P in keyof T]?: T[P];
  }

  type PersonPartial = Partial<Human>;
  type ReadonlyPerson = Readonly<Human>;
```
keyof를 사용하여 type을 매핑할 수도 있다.

### 보충할점
인덱스 엑세스연산자가 무엇인지 더 알아봐야겠다.