import { Explore } from "../../Components/Explore/Explore";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Widgets } from "../../Components/Widgets/Widgets";
import { useTheme } from "../../Context/ThemeContext";
import "./ExplorePage.css";
const ExplorePage = () => {
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
        <Explore />
      </main>
      <section className="widgets-component">
        <Widgets />
      </section>
    </div>
    </>
  );
};
export { ExplorePage };
