import { Home } from "../../Components/Home/Home";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Widgets } from "../../Components/Widgets/Widgets";
import { useTheme } from "../../Context/ThemeContext";
import {v4 as uuid} from "uuid";
import "./HomePage.css";

const HomePage = () => {
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
        <Home key={uuid}/>
      </main>
      <section className="widgets-component">
        <Widgets />
      </section>
    </div>
    </>
  );
};
export { HomePage };
