import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center ml-6 p-4">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Description" width={50} height={50} className="mr-14 opacity-45" />
      </Link>
      <nav className="flex space-x-10 font-color">
        <Link href="/">Home</Link>
        <Link href="/">Nuestra Firma</Link>
        <Link href="/">Servicios</Link>
        <Link href="/">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
