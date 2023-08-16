import { Navbar } from "../../Components/Navbar/Navbar"
import { Profile } from "../../Components/Profile/Profile"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { Widgets } from "../../Components/Widgets/Widgets"
import { useTheme } from "../../Context/ThemeContext"

const ProfilePage = ()=>{
    const {theme} = useTheme();
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
          <Profile/>
        </main>
        <section className="widgets-component">
          <Widgets />
        </section>
      </div>
    </>
    )
}
export {ProfilePage}