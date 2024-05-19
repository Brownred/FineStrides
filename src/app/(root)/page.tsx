import HeaderBox from "@/components/globals/headerBox"
import TotalBalanceBox from "@/components/root/TotalBalanceBox"

type Props = {}

const Home = (props: Props) => {
  const loggedIn = {firstName: 'Lenox'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home