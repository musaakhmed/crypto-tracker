import Link from "next/link";
import Head from "next/head";

const CoinsList = ({coins}) => {

    return (
        <div className="">
            <Head>
                <title>qriptique</title>
            </Head>
            <div className="container mx-auto font-body bg-white dark:bg-gray-600 rounded-lg shadow-lg">
                <div className="w-full px-4 flex flex-col rounded-t-lg overflow-hidden bg-gray-200 dark:bg-gray-800 hidden lg:flex">
                    <div className="flex-grow flex flex-col">
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center">
                            <div className="w-1/2 lg:w-1/4 px-10 flex items-center">
                                Name
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-4 items-end lg:items-center flex flex-col lg:flex-row">
                                <div className="text-right lg:w-1/2">
                                    Price
                                </div>
                                <div className="text-right lg:w-1/2">
                                    Change
                                </div>
                            </div>
                            <div className="hidden lg:flex w-3/5 md:w/12">
                                <div className="w-1/3 px-4">
                                    <div className="text-right">
                                        Volume
                                    </div>
                                </div>
                                <div className="w-1/3 px-4">
                                    <div className="text-right text-grey">
                                        Market Cap
                                    </div>
                                </div>
                                <div className="w-1/3 px-4">
                                    <div className="text-right text-grey">
                                        Supply
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {coins.map(coin => (
                    <Link
                        href={`/coin/` + coin.id}
                        key={coin.id}>
                        <a className="w-full px-4 flex flex-col overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-400">
                            <div className="flex-grow flex flex-col">
                                <div className="flex-grow flex px-1 sm:px-4 py-4 text-grey-darker items-center">
                                    <div className="w-1/2 lg:w-1/4  flex items-center">
                                        <div className="rounded-full mr-1 sm:mr-3">
                                            <img className="pl-1 pr-2 w-16 sm:pl-4" src={coin.image} alt={coin.name}/>
                                        </div>
                                        <div className="flex flex-col lg:flex-row">
                                            <div className="text-lg text-left lg:pr-12">{coin.name}</div>
                                            <div className="opacity-50">{coin.symbol.toUpperCase()}</div>
                                        </div>
                                    </div>
                                    <div
                                        className="w-1/2 lg:w-1/4 px-4 items-end lg:items-center flex flex-col lg:flex-row">
                                        <div className="text-right lg:w-1/2">
                                            ${coin.current_price.toLocaleString()}
                                        </div>
                                        <div className="text-right lg:w-1/2">
                                            {coin.price_change_percentage_24h < 0 ? (
                                                <div className="text-red-600 dark:text-red-400">
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </div>
                                            ) : (
                                                <div className="text-green-600 dark:text-green-400">
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex w-3/5 md:w/12">
                                        <div className="w-1/3 px-4">
                                            <div className="text-right">
                                                ${coin.total_volume.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="w-1/3 px-4">
                                            <div className="text-right text-grey">
                                                ${coin.market_cap.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="w-1/3 px-4">
                                            <div className="text-right text-grey">
                                                {coin.total_supply ? (
                                                    <div>{coin.total_supply.toLocaleString()}</div>) : (
                                                    <div>N/A</div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CoinsList;