import {   getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import MyLayout from "../src/view/MyLayout";
import Welcome from "../src/components/Welcome"
import HomePage from '../src/view/HomePage';

export   default function Home() {
  const {data:session}  =  useSession( )
  return (
    <div> 
      <Head>
        <title>Learn with us...</title>
        <link rel="icon" href="/code.png" />
      </Head>
     
     <MyLayout />
         {!session ? <Welcome /> : (
           <>
            <HomePage/>
           </>
         )}
      </div>
  )
}

export async function getServerSideProps(context: any){
  const session  = await getSession( context);

  return {
    props: {
      session,
    }
  }

}
