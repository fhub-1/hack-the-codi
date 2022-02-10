import { getProviders, signIn as SignIntoprovider } from 'next-auth/react'
import Image from 'next/image'
import Header from '../../src/view/Header'
import LOGO from '../../public/Logo.png'

export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="bg-white -mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <Image src={LOGO} className="w-80" />
        <p className="font-xs italic">Learn with experts and grow to improve</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="items-center rounded-lg bg-Solid-1 p-3 text-HoverColor"
                onClick={() =>
                  SignIntoprovider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
