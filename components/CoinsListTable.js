import Link from "next/link";

const CoinListTable = ({coins}) => {
    console.log(coins)

    return (
        <div className="container flex justify-center mx-auto font-body">
            <div className="table mx-auto rounded-lg border shadow-2xl">
                <div className="table-row-group rounded-lg border-solid border-gray-700">
                    <div className="table-row h-12 bg-gray-100 font-medium">
                        <div className="table-cell align-middle pl-4">Name</div>
                        <div className="table-cell align-middle text-right">Price</div>
                        <div className="table-cell align-middle text-right">Change</div>
                        <div className="table-cell align-middle text-right hidden lg:grid">24H Volume</div>
                        <div className="table-cell align-middle text-right hidden lg:grid">Market Cap</div>
                        <div className="table-cell align-middle pr-4 text-right hidden lg:grid">Total Supply</div>
                    </div>
                    {coins.map(coin => (
                        <Link
                            href={`/coin/` + coin.id}
                            key={coin.id}>
                            <a
                                className="table-row max-w-7xl h-12 my-1 hover:bg-gray-100 transition ease-in-out duration-400">
                                <div className="table-cell  pl-4 align-middle">
                                    <img className="inline-grid h-8 pr-4" src={coin.image} alt={coin.name}/>
                                    <p className="inline-grid md:inline-flex px-4">{coin.name}</p>
                                    <p className="inline-grid md:inline-flex opacity-50 pl-8">{coin.symbol.toUpperCase()}</p>
                                </div>
                                <div className="table-cell  align-middle  text-right">${coin.current_price.toLocaleString()}</div>
                                <div className="table-cell  align-middle  text-right">
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
                                <div className="table-cell align-middle  text-right hidden lg:block">
                                    ${coin.total_volume.toLocaleString()}
                                </div>
                                <div className="table-cell align-middle text-right hidden lg:block">
                                    ${coin.market_cap.toLocaleString()}
                                </div>
                                <div className="table-cell align-middle pr-4 text-right hidden lg:block">
                                    {coin.total_supply ? (<div>{coin.total_supply.toLocaleString()}</div>) : (
                                        <div>N/A</div>)}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoinListTable;