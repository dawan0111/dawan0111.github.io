---
title: javascript - 동기/비동기
date: 2019-12-22 02:12:75
category: javascript
---

## Javascript 동기/비동기
자바스크립트는 하나의 callStack으로 요청을 순차적으로 진행합니다. 하지만 아래와 같은 상황이 있습니다.
```javascript
function a() {
    console.log('run a!');
}

function b() {
    console.log('run b!');
}

function c() {
    console.log('run c!');
}

a();
setTimeout(b, 1000);
c();
```
setTimeout은 Web API의 한 종류로 코드를 일정시간 만큼 기다렸다가 로직을 실행시킵니다. 만약 순차적으로만 진행이 된다면 a -> b -> c 순으로 실행되야만 합니다. 하지만 결과는 a -> c -> b 순으로 호출됩니다 왜 그런 걸까요?

## Task Queue
비동기 처리를 위한 Task Queue가 있습니다. 비동기로 호출해야되는 setTimeout 이나 AJAX(XMLHttpRequest) WEB API 같은 경우 Task Queue에 넣고 callStack서는 뺍니다. 그 다음 처리가 완료되면 Task Queue에 넣고 Event Loop가 callStack이 비는 시점에 넣어줍니다.
![자바스크립트처리과정](./assets/queue.gif)
이미지로 본다면 이렇습니다.

## Promise
비동기 처리하면 빼놓을수 없는 Promise. Promise는 3가지 상태가 있습니다.

* Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
* Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
* Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

그리고 콜백보다 더욱 직관적으로 **.then** 과 **.catch** 을 사용하여 편리하게 작성이 가능합니다.

그리고 다른 특별한 점이 있습니다.
```javascript
setTimeout(function a() {
    console.log('A');
}, 0);
Promise.resolve().then(function b() {
    console.log('B');
}).then(function c() {
    console.log('C');
});
```
위 코드는 B -> C -> A 순으로 출력됩니다. 둘다 똑같은 비동기이고 심지어 setTimeout이 먼저 실행되는대도 Promise가 먼저 동작됩니다. 그 이유는 Promise가 마이크로 태스크를 사용하기 때문입니다.

## 마이크로 태스크
마이크로 태스크는 일반 태스크보다 더 높은 우선순위를 가지고 있습니다. 즉 태스크 중이 큐가 있어도 먼저 실행이 되는것 입니다.

예를 들어 위 코드의 setTimeout은 콜백 A 함수를 태스크 큐에 추가하고 B를 테스크 큐가 아닌 **마이크로 태스크 큐**에 추가합니다. 위 코드의 callStack이 비워지면 Event Loop는 태스크 큐 보다 마이크로 태스크 큐를 먼저 확인합니다. 콜백 B를 실행하고 두번째 then 콜백 C를 추가합니다. 그 다음 다시 Event Loop는 마이크로 태스크 큐를 확인하고 C를 실행합니다.

이후 비워있음을 확인하고 태스크 큐에 콜백 A를 실행합니다.

~~완전 찬밥 신세가 되버리네요~~

## async/await
async/await 문법입니다. 개인적으로 잘 사용하면 아무 좋은 문법이라 생각합니다. 예를들어 아래와 같은 소스가 있습니다.
```javascript
function fetchUserData() {
    new Promise((resolve, reject) => {
        axios.get('유저정보')
            .then(response => {
                resolve(response.data);
            })
    })
}

fetchUserData.then(response => {
    console.log(response);
})
```
Promise를 사용하여 콜백보단 깔끔하게 작성되었지만 더 깔끔하게 작성할 수 있습니다.
```javascript
async function fetchUserData() {
    const response = await axios.get('유저정보');
    return response.data;
}

fetchUserData().then(response => {
    console.log(response);
})
```
훨신 더 깔끔해졌습니다. async/await 문법을 사용할때 유의할 점 몇가지가 있습니다.

### 유의할 점
1. await를 사용하는 함수 앞에는 async이 항상 붙어있어야 합니다.
2. 잘못 사용했다간 사이트 성능이 악화될 수도 있습니다.

#### 2번예시1) 다른 API 두번 호출
```javascript
async function fetchBoardData(boardId) {
    const writer = await axios.get('유저정보');
    const comments = await axios.get('댓글정보');
    return response.data;
}

fetchBoardData(1);
```
만약 위 소스는 유저정보를 다 가져온 후에 댓글정보를 가져오게 됩니다. 한꺼번에 가져와도 될 데이터를 쓸대없는 시간낭비를 하는것이 됩니다. 그렇다면 위 같은 상황은 어떻게 해야할까요?

#### 해결방법
```javascript
async function fetchBoardData(boardId) {
    const [writer, comments] = Promise.all([
        await axios.get('유저정보'),
        await axios.get('댓글정보'),
    ]);
    return response.data;
}

fetchBoardData(1);
```
위 처럼 Promise.all에 묶어서 호출하면 한꺼번에 데이터를 가져올 수 있습니다.

### 참고한 자료
[자바스크립트와 이벤트 루프](https://meetup.toast.com/posts/89)

[Understanding Event Loop, Call Stack, Event & Job Queue in Javascript](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)