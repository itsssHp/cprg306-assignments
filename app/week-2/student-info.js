import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p className = " text-white">Het Patel</p>
      <p>
        {' '}
        <Link href="https://github.com/itsssHp/cprg306-assignments.git" className=" text-white hover:underline mx-4">
        https://github.com/itsssHp/cprg306-assignments.git
        </Link>
      </p>
    </div>
  );
}
