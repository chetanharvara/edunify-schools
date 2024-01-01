import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="text-center">
        <Link href="/showSchools">
          <div className="inline-flex px-20 py-5 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            Show Schools
          </div>
        </Link>
      
        <Link href="/addSchool">
          <div className="inline-flex px-20 py-5 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            Add School
          </div>
        </Link>
      </div>
    </div>
    </main>
  )
}
