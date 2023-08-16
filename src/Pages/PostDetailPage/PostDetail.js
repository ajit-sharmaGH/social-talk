import "./PostDetail.css";
import { useParams } from "react-router";
import { useMainContext } from "../../Context/MainContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Widgets } from "../../Components/Widgets/Widgets";
import { useTheme } from "../../Context/ThemeContext";
const PostDetail = () => {
  const { postId } = useParams();
  const {
    dataState: { posts },
  } = useMainContext();
  const { theme } = useTheme();

  const foundPost = posts?.find((post) => post?._id === postId) || {};

  return (
    <>
      <Navbar />
      <div className={`combined-pages-body  ${theme}`}>
        <aside className={`sidebar-component`}>
          <Sidebar />
        </aside>
        <main
          className={`main-component ${
            theme ? "main-component-border-color-in-bgDark" : ""
          }`}
        >
          <SinglePost post={foundPost} showDetail />
        </main>
        <section className="widgets-component">
          <Widgets />
        </section>
      </div>
    </>
  );
};
export { PostDetail };
