import Head from 'next/head'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Main from '../components/Main'

function Home() {
  return (
    <div className="flex bg-[#1C1E2A] overflow-y-auto">
      <Head>
        <title>Home</title>
      </Head>

      <main className='text-gray-400 flex  w-screen '>
        {/*LeftSidebar*/}
        <LeftSidebar />


        {/* <Main />*/}
        <Main />



        {/*<RightSidebar /> */}
        <RightSidebar />
      </main>

    </div>
  )
}

export default Home
