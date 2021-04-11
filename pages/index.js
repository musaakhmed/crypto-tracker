import CoinsList from "../components/CoinsList";

export default function Home({coins}) {

  return (
      <div className="max-w-[1000px]">
          <CoinsList coins={coins}/>
      </div>

  )
}

export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
    const coins = await res.json()

    // Pass data to the page via props
    return { props: { coins } }
}