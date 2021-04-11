import Link from "next/link";

const CoinsList = ({coins}) => {
    console.log(coins)

    return (
        <div className="container mx-auto">
            <div className="flex justify-between p-4 max-w-7xl ">
                <div className="w-3/12">Name</div>
                <div className="w-2/12">Price</div>
                <div className="w-1/12">24H Change</div>
                <div className="w-2/12">24H Volume</div>
                <div className="w-2/12">Market Cap</div>
                <div className="w-2/12">Supply</div>
            </div>
            {coins.map(coin => (
                <Link
                    href={`/coin/` + coin.id}
                    key={coin.id} >
                    <a
                        className="max-w-7xl flex h-12 justify-between my-1 hover:bg-gray-100 transition ease-in-out duration-400">
                    <div className="flex justify-start w-3/12">
                        <img className="px-4  h-8" src={coin.image} />
                        <div className="px-4">{coin.name}</div>
                        <div>{coin.symbol.toUpperCase()}</div>
                    </div>
                    <div className="text-right w-2/12">${coin.current_price.toLocaleString()}</div>
                    <div className="w-1/12">
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
                    <div className="w-2/12">
                        ${coin.total_volume.toLocaleString()}
                    </div>
                    <div className="w-2/12">
                        ${coin.market_cap.toLocaleString()}
                    </div>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default CoinsList;