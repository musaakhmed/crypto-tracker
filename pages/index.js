import CoinsList from "../components/coinsList";
import Link from "next/link";

export default function Home({coins}) {

  return (
      <div className="max-w-[1000px]">
          <header className="flex justify-center mb-4 hover:opacity-50 transition duration-400 ease-in-out">
              <Link className="w-auto" href="/">
                  <a>
                      <img src="/logo.png" />
                  </a>
              </Link>
          </header>
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