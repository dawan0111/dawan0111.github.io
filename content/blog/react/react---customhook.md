---
title: react - custom hook
date: 2019-12-23 18:12:01
category: react
---

컴포먼트의 로직을 재사용하기 위해서 고차 컴포넌트(Higher-Order Components)를 사용해왔습니다. 하지만  custom hook으로 더 간편하게 상태관리 로직을 공유할 수 있습니다.

## 예1) React 공식문서 예제
```javascript
// CommentList.js
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```
위 코드는 외부로부터 데이터를 구독하여 댓글목록을 렌더링하는 **CommentList** 컴포먼트 입니다. 그리고 밑에는 블로그 포스트 구독을 하기위해 비슷한 패턴으로 컴포넌트를 작성하게 됩니다.
```javascript
// BlogPost.js
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```
위 상황은 HOC를 사용해 중복을 제거 할 수도 있지만 **custom hook** 을 만들어서 처리 할 수 있습니다. custom hook으로 처리시 HOC보다 장점이 있습니다.

### HOC와 비교했을때 custom hook의 장점
1. Wrapper Hell을 방지할 수 있습니다.
2. 더욱 간편하게 상태관리 로직을 공유할 수 있습니다.

HOC를 사용하면 결국은 하나의 컴포넌트를 생성해서 감싸야 합니다. 이렇게 감싸다 보면 wrapper hell이 발생하게 될것입니다. 그리고 hook을 만들면 별 다른 작업없이 React 함수안에서는 편하게 사용이 가능해 집니다. 이제 custom hook을 만들어서 위 예제를 좀 더 편하게 만들어 봅시다.

## custom hook 사용
```javascript
// SubscribeData.js
function useSubscribeData({ fetchData, id }) {
  const [data, setData] = React.useState(null);

  const handleChange = React.useCallback(() => {
    setData(fetchData(id));
  }, [fetchData, id])

  React.useEffect(() => {
    DataSource.addChangeListener(handleChange);

    return () => {
      DataSource.removeChangeListener(handleChange);
    }
  }, [handleChange])

  React.useEffect(() => {
    setData(fetchData(id));
  }, [fetchData, id])

  return data;
}

useSubscribeData.defaultProps = {
  id: '',
}
```
위 처럼 custom hooks을 만듭니다. custom hooks 안에서도 똑같이 useEffect나 useState를 사용할 수 있습니다. 이제 만든 SubscribeData hook을 사용해 봅시다. 리턴으로 데이터를 보낼 수도 있지만 함수를 return해서 state를 변경 하는것도 가능합니다.
```javascript
// CommentList.js
const CommentList = () => {
  const fetchData = React.useCallback(() => {
    return DataSource.getComments();
  }, []);

  const comments = useSubscribeData({
    fetchData: fetchData
  });

  return (
    <div>
      {comments.map(comment => (
        <div comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

// BlogList.js
const BlogList = ({ id }) => {
  const fetchData = React.useCallback(() => {
    return DataSource.getBlogPost(id);
  }, [id]);

  const post = useSubscribeData({
    fetchData: fetchData,
    id: id
  });

  return <div>this is post!!</div>;
};
```
이제 손쉽게 component를 추가하지 않아도 상태관리 로직은 컴포넌트끼리 공유가 가능합니다.

## 참고한 자료
[react 공식문서](https://reactjs.org/docs/hooks-custom.html)
