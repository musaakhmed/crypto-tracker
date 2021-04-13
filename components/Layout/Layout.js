import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <container>
                { children }
            </container>
            <Footer />
        </div>
    )
}