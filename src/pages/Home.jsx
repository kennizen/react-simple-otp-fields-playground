import SideNav from "../components/SideNav";
import { useThemeContext } from "../providers/ThemeProvider";

const Home = () => {
    const { colorMode } = useThemeContext();

    return (
        <section className={`h-screen overflow-hidden ${colorMode}`}>
            <SideNav />
            <>HELLO</>
        </section>
    );
};

export default Home;
