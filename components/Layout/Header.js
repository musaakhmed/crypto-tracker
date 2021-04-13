import Link from "next/link";
import Image from "next/image";
import {useTheme} from "next-themes";

const Header = () => {

    const {theme, setTheme} = useTheme()

    return (
            <header className="">
                <nav className="flex justify-evenly items-center fixed bg-gray-300 w-full dark:bg-gray-900">
                    <div className="w-auto text-right">
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="p-3 h-12 w-12 order-2 md:order-3 self-right"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            {theme === 'light' ? (
                                <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>Dark</title>
                                    <path
                                        d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
                                        fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'
                                        stroke-width='32'/>
                                </svg>
                            ) : (
                                <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>light</title>
                                    <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10'
                                          stroke-width='32'
                                          d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'/>
                                    <circle cx='256' cy='256' r='80' fill='none' stroke='currentColor'
                                            stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
                <div className="pt-12 flex justify-evenly">
                    <Link href="/">
                        <a>
                            <Image
                                className="object-top"
                                src="/logo.png"
                                alt="qriptique"
                                width="150px"
                                height="150px"
                            />
                        </a>
                    </Link>
                </div>
            </header>
    );
};

export default Header;





