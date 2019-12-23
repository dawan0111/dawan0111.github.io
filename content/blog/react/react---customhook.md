---
title: react - customHook
date: 2019-12-23 18:12:01
category: react
---

컴포먼트의 로직을 재사용하기 위해서 고차 컴포넌트(Higher-Order Components)를 사용해왔습니다. 하지만 내 생각에는 customHook으로 더 간편하게 로직을 재사용 할 수 있다고 생각하고 있습니다.

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
위 상황은 HOC를 사용해 중복을 제거 할 수도 있지만 **customHook** 을 만들어서 처리 할 수 있습니다.

## CustomHook 사용
```javascript
function SubscribeData(fetchData, ...props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(fetchData(DataSource, props));
  }, [fetchData]);
}
```
