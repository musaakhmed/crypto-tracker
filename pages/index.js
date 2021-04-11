import CoinsList from "../components/CoinsList";
import Link from "next/link";
import Image from "next/image";

export default function Home({coins}) {

  return (
      <div className="max-w-[1000px]">
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