import type { NextPage } from 'next'
import Head from 'next/head'
import { DrawerMenu } from '../components/Drawer'

const Home: NextPage = () => {
  return (
    <div >
      <DrawerMenu />
    </div>
  )
}

export default Home
