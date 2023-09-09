'use client'

import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
});
const outfitBold = Outfit({
  weight: '700',
  subsets: ['latin']
})

const imgixLoader = ({ src, width, quality }: any) => {
  return `https://shangenlee-878868498.imgix.net/${src}`;
};

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-[18rem] rounded-xl flex flex-col items-center p-4 bg-white qrcode-container gap-4 text-center">
        <Image loader={imgixLoader} className="rounded-lg" src="image-qr-code.png" alt="qrcode" width="500" height="500" />
        <div className={outfitBold.className + " px-2 text-lg"} style={{ color: "hsl(218, 44%, 22%)"}}>
          Improve your front-end skills by building projects
        </div>
        <div className={outfit.className + " px-2 mb-4 text-sm"} style={{ color: "hsl(220, 15%, 55%)"}}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </div>
      </div>
    </main>
  )
}
