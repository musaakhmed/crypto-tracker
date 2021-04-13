import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {

    return (
        <div className="bg-gray-100 dark:bg-gray-700 h-screen">
            <Header />
            <div>
                { children }
            </div>
            <Footer />
        </div>
    )
}