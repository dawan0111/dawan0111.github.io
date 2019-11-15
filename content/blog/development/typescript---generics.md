---
title: TypeScript - Generics
date: 2019-11-15 17:11:85
category: development
---

# Typescript Generics(제네릭)
단일 유형이 아닌 다양한 유형에서 작동될수 있는 컴포먼트 작성이 가능하다.

### 전달된 argament와 동일한 유형을 return 하는 경우
```typescript
  function identity(arg: number): number {
    return arg;
  }
```
만약 문자를 입력하는 경우에는 문자용으로 새 함수를 생성해야된다.

### any 유형을 사용할 경우
```typescript
  function identity(arg: any): any {
    return arg;
  }
```
any 유형을 사용하여 만들어도 되지만 반환될때 해당 유형의 정보가 손실되어도 정상적으로 반환이 될수 있다는 문제가 있다.

### 재네릭 사용 후
```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
```
identity 함수에 'T' 라는 유형변수를 arg에서 캡처하여 return할때 사용한다. 이로인해 반환알때도 동일한 유형만 반환 가능하다.

### 사용법
```typescript
  identity<'string'>('hello world!!')
```
identity 함수를 호출할때 먼저 타입을 선언하는 방법이다

### 사용법2
```typescript
  identity('hello world!!')
```
입력받은 argament의 타입을 유추해 내는 방법이다. 컴파일러가 유추하지 못하는 경우가 아니라면 이렇게 쓰는게 읽기 더 읽기 쉬워 보인다.

## Generics 제약 방법
```typescript
  interface Animal {
    name: string;
  }
  function identity<T extends Animal>(arg: T): T {
    return arg;
  }
```
만약 identity에 'name'이라는 속성이 있는 유형으로 제한하고 싶다면 '.name' 속성을 가진 interface를 만들고 extends로 제약 조건을 나타내면 된다.