import Image from 'next/image'
import { Inter } from 'next/font/google'
import GetPostData from '@/compos/GetPostData'
import Button from '@/compos/Button'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=" border border-solid rounded-lg border-gray-400 w-3/4 p-5 m-auto mt-5">
        <h1 className=" text-3xl pb-3 font-semibold">This is a sample post.</h1>
        <GetPostData />
        <Button />
      </div>

    </main>
  )
}
