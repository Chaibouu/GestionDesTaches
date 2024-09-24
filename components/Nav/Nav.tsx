import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center juqtify-between p-5 border-b border-gray-300"> 
          <div>
            <Link href="/">
                <Image width={70} height={70} src="/logoo.png" alt='Ch tech'/>
            </Link>
          </div>
        </nav>
    </>
  )
}
