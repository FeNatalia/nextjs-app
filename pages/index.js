import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import profilePic from "./assets/logo.svg";

const Index = ({ posts }) => {
  return (
    <>
      <div className="w-full">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center bg-[url('https://picsum.photos/id/10/1900/1200')]"
        >
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
            <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                Welcome to the -
                <span className="relative">
                  <span
                    className="block absolute -inset-1 -skew-y-3 bg-pink-500"
                    aria-hidden="true"
                  ></span>
                  <span className="relative text-white">BlogPost</span>
                </span>
                , a place where you can read stuff
              </blockquote>
            </div>
          </div>
        </main>
      </div>
      <section className="container mx-auto m-8 w-3/5">
        <p
          className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left "
        >
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"? Well that may not mean
          anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
      </section>
      <ul className="container mx-auto">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-2"
          >
            <div className="shrink-0">
              <Image
                className="h-12 w-12 filter-pink"
                src={profilePic}
                alt="ChitChat Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="first-letter:capitalize text-xl font-medium text-black hover:underline">
              <Link href={`/post?id=${post.id}`} as={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;
