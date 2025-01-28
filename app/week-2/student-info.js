import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Het Patel</p>
      <p>
        {' '}
        <Link href="https://github.com/itsssHp/cprg306-assignments.git">
        https://github.com/itsssHp/cprg306-assignments.git
        </Link>
      </p>
    </div>
  );
}
