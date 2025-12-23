import Image from "next/image";
import Link from "next/link";
import k from '@/true-agency-Q8otix2SVko-unsplash.jpg'
import o from '@/maxresdefault.jpg'

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center gap-10">
      <div className="max-w-6xl flex justify-center items-center">
        <Image className="w-1/4" src={k} loading="eager" alt="" />
        <h1 className="text-9xl"><span className="underline decoration-2">moments</span> should last forever</h1>
      </div>
      <div>
        <Link href='editor' className="block border px-4 py-2">k, whatever</Link>
        <Image className="w-30 opacity-25" src={o} alt="" />
      </div>
    </div>
  );
}
