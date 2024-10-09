import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center ml-6 p-4">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Description" width={50} height={50} className="mr-14 opacity-45" />
      </Link>
      <nav className="flex space-x-16 font-color">
        <Link href="/" className='hover:opacity-75 text-sm'>Home</Link>
        <Link href="/nuestra_firma" className='hover:opacity-75 text-sm'>Nuestra Firma</Link>
        <Link href="/servicios" className='hover:opacity-75 text-sm'>Servicios</Link>
        <Link href="/contacto" className='hover:opacity-75 text-sm'>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
