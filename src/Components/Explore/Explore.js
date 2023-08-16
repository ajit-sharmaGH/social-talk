import { useMainContext } from "../../Context/MainContext";
import { SinglePost } from "../SinglePost/SinglePost";
import "./Explore.css";
const Explore = () => {
  const {
    dataState: { posts },
  } = useMainContext();

  return (
    <>
      <div>
        {posts.length === 0 ? (
          <p className="flex-center mt-2">No post found</p>
        ) : (
          [...posts]
            ?.reverse()
            ?.map((post) => <SinglePost key={post._id} post={post} />)
        )}
      </div>
    </>
  );
};

export { Explore };
