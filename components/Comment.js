import Image from "next/image";

const Comment = ({ email, name, body }) => {
  return (
    <div>
      <div className="mt-8 flex py-4 first:pt-0 last:pb-0">
        <Image
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1648737963059-59ec8e2d50c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          width={60}
          height={60}
        />
        <div className="ml-3 overflow-hidden">
          <h5 className="first-letter:capitalize text-lg font-medium text-slate-900">
            {name}
          </h5>
          <p className="text-sm text-slate-500 truncate">{email}</p>
        </div>
      </div>
      <p className="first-letter:capitalize text-sm font-medium text-slate-900 mb-8">
        {body}
      </p>
    </div>
  );
};

export default Comment;
