import axios from "axios";

const Post = ({ id, comments }) => {
  const postComments = comments.map((comment) => (
    <Comment {...comment} key={comment.id} />
  ));

  return (
    <div>
      <h1>{`This is post ${id}`}</h1>
      {postComments}
    </div>
  );
};

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const { data } = res;

  return { props: { id: id, comments: data } };
}

export default Post;
