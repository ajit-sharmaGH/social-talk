import { Bookmark } from "../../Components/Bookmark/Bookmark";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Widgets } from "../../Components/Widgets/Widgets";
import { useTheme } from "../../Context/ThemeContext";
const BookmarkPage = () => {
  const { theme } = useTheme();
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
          <Bookmark />
        </main>
        <section className="widgets-component">
          <Widgets />
        </section>
      </div>
    </>
  );
};
export { BookmarkPage };
