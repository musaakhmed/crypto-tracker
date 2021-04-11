import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
            <header className="flex justify-center mb-4">
                <Link className="w-auto" href="/">
                    <a>
                        <Image
                            src="/logo.png"
                            alt="qriptique"
                            width="200px"
                            height="200px"
                        />
                    </a>
                </Link>
            </header>
    );
};

export default Header;





