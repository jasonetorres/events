import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={100}
            height={28} />
        </Link>
        <p>2023 Stuff2Do All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer