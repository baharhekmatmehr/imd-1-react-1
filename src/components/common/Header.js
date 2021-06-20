import CoursePage from "./CoursePage";
import AboutPage from "../AboutPage";
import Homepage from "../HomePage";
const Header = () =>{
    function Header(){
        const route =window.location.pathname;
        const arr =[1 , 2 ,3 ]
        if (route === "/courses") return <CoursePage />
        if (route === "/about") return <AboutPage username="imd" />
        else return <CoursePage username="IMD" password={arr} />
        }
        return (<nav className="container-fluid">
            <a href="/">Home</a> | <a href ="/courses">COURSE PAGE</a>
            {Header()}
        </nav>)
}
