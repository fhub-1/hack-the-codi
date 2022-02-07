import Head from 'next/head'
import MyLayout from "../src/view/MyLayout";

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Learn with us...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <MyLayout />
    
      </div>
  )
}
