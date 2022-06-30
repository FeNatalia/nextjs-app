import axios from "axios";
import Comment from "../components/Comment";

const Post = ({ post, comments }) => {
  const postComments = comments.map((comment) => (
    <Comment {...comment} key={comment.id} />
  ));

  return (
    <div className="container mx-auto">
      <section className="container mx-auto m-8 w-3/5">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900 m-8">
          <div className="relative">
            <div
              className="block absolute -inset-1 -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></div>
            <div className="relative text-black ">{`Post #${post.id}: ${post.title}`}</div>
          </div>
        </blockquote>
        <p
          className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left "
        >
          {post.body}
        </p>
      </section>
      <section className="p-6 divide-y divide-slate-200 w-3/5 mx-auto">
        {postComments}
      </section>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const post = await axios.get(
    `http://jsonplaceholder.typicode.com/posts?id=${id}`
  );
  const postData = post.data[0];
  const { data } = res;
  return { props: { comments: data, post: postData } };
}

export default Post;
