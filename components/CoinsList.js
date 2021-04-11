import Link from "next/link";

const CoinsList = ({coins}) => {
    console.log(coins)

    return (
        <div className="container mx-auto font-body">
            {/*<div className="rounded-lg border shadow-2xl">*/}
            {/*    <div className="flex p-4 bg-gray-200">*/}
            {/*        <div className="flex-2">Name</div>*/}
            {/*        <div className="flex-1">Price</div>*/}
            {/*        <div className="flex-1">Change</div>*/}
            {/*        <div className="flex-2">Volume</div>*/}
            {/*        <div className="flex-2">Market Cap</div>*/}
            {/*        <div className="flex-2">Supply</div>*/}
            {/*    </div>*/}
            {/*    {coins.map(coin => (*/}
            {/*        <Link*/}
            {/*            href={`/coin/` + coin.id}*/}
            {/*            key={coin.id}>*/}
            {/*            <a*/}
            {/*                className="max-w-7xl flex h-12 my-1 hover:bg-gray-100 transition ease-in-out duration-400">*/}
            {/*                <div className="flex flex-3">*/}
            {/*                    <img className="pl-4 h-8" src={coin.image}/>*/}
            {/*                    <div className="px-4">{coin.name}</div>*/}
            {/*                    <div className="opacity-50">{coin.symbol.toUpperCase()}</div>*/}
            {/*                </div>*/}
            {/*                <div className="flex-1">${coin.current_price.toLocaleString()}</div>*/}
            {/*                <div className="flex-1">*/}
            {/*                    {coin.price_change_percentage_24h < 0 ? (*/}
            {/*                        <div className="text-red-600">*/}
            {/*                            {coin.price_change_percentage_24h.toFixed(2)}%*/}
            {/*                        </div>*/}
            {/*                    ) : (*/}
            {/*                        <div className="text-green-600">*/}
            {/*                            {coin.price_change_percentage_24h.toFixed(2)}%*/}
            {/*                        </div>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*                <div className="flex-2">*/}
            {/*                    ${coin.total_volume.toLocaleString()}*/}
            {/*                </div>*/}
            {/*                <div className="flex-2">*/}
            {/*                    ${coin.market_cap.toLocaleString()}*/}
            {/*                </div>*/}
            {/*                <div className="flex-2">*/}
            {/*                    {coin.total_supply ? (<div>{coin.total_supply.toLocaleString()}</div>) : (*/}
            {/*                        <div>N/A</div>)}*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </Link>*/}
            {/*    ))}*/}

            {/*    /!**/}
            {/*Other version*/}
            {/**!/*/}
            {/*</div>*/}
            {/*<div className="my-24"></div>*/}


            <div className="rounded-lg border shadow-lg">
                <div
                    className="w-full px-4 flex flex-col overflow-hidden bg-gray-200 hidden lg:flex">
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
                        <a className="w-full px-4 flex flex-col overflow-hidden hover:bg-gray-100 transition ease-in-out duration-400">
                            <div className="flex-grow flex flex-col">
                                <div className="flex-grow flex px-1 sm:px-6 py-6 text-grey-darker items-center">
                                    <div className="w-1/2 lg:w-1/4  flex items-center">
                                        <div className="rounded-full mr-1 sm:mr-3 h-8">
                                            <img className="pl-1 pr-2 sm:pl-4 h-8" src={coin.image} alt={coin.name}/>
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
                                                <div className="text-red-600">
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </div>
                                            ) : (
                                                <div className="text-green-600">
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
            {/*<footer className="flex justify-between bg-white text-gray-800 p-16 mt-auto mb-0 font-body">*/}
            {/*    <p className="w-1/2 font-bold">© 2021 qriptique</p>*/}
            {/*    <div className="flex flex-row justify-evenly w-1/2 items-start">*/}
            {/*        <p>*/}
            {/*            Repository*/}
            {/*        </p>*/}
            {/*        <p>*/}
            {/*            The Process*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
};

export default CoinsList;