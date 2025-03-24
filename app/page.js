import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="text-center">
        <Link href="/week-2" className="text-blue-500 hover:underline mx-4">Week 2 Assignments</Link>
        <Link href="/week-3" className="text-blue-500 hover:underline mx-4">Week 3 Assignments</Link>
        <Link href="/week-4" className="text-blue-500 hover:underline mx-4">Week 4 Assignments</Link>
        <Link href="/week-5" className="text-blue-500 hover:underline mx-4">Week 5 Assignments</Link>
        <Link href="/week-6" className="text-blue-500 hover:underline mx-4">Week 6 Assignments</Link>
        <Link href="/week-7" className="text-blue-500 hover:underline mx-4">Week 7 Assignments</Link>
        <Link href="/week-8" className="text-blue-500 hover:underline mx-4">Week 8 Assignments</Link>
      </p>
    </main>
  );
}
