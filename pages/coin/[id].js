




// import {getServerSideProps} from "../index";

const Coin = ({coin}) => {
    console.log(coin)
    const {name, id, price, symbol, market_cap, market_cap_rank, volume, image, priceChange} = coin
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {coin.market_data.market_cap.usd.toLocaleString()}
            </div>

        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    const data = await res.json();

    return {
        props: {
            coin: data
        }
    };
}

export default Coin;