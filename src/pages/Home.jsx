import MainContent from "../components/MainContent";
import SideNav from "../components/SideNav";
import { useThemeContext } from "../providers/ThemeProvider";

const Home = () => {
    const { colorMode } = useThemeContext();

    return (
        <section className={`h-screen overflow-hidden flex ${colorMode}`}>
            <SideNav />
            <MainContent />
        </section>
    );
};

export default Home;
