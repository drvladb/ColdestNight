import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={"text-3xl"}>The Coldest Night</h1>
      <p className={"pb-10"}>It&apos;s very cold out, and you need to survive</p>
      <div>

        <a href="/solo"
           className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-5">Solo</a>

        <a href="#"
           className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm cursor-not-allowed">Online
          (coming soon)</a>
      </div>
    </main>
  )
}
