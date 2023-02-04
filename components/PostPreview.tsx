import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props:PostMetaData) => {
  return (
    <div className=" border border-slate-300 p-4 rounded-md shadow-md bg-white">
      <p className=" text-sm text-slate-400
        ">{props.date}</p>
      <Link
        href={{
          pathname: `posts/${props.tittle}`,
          query: {
            slug: `${props.slug}`,
          },
        }}
      >
        <h2 className="  text-violet-600 hover:underline mb-4">{props.tittle}</h2>
      </Link>
      <p className=" text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
