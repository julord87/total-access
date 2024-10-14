import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center ml-6 p-4">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Description"
          width={50}
          height={50}
          className="mr-14 opacity-45"
        />
      </Link>
      <nav className="flex space-x-10 font-color">
        <Link href="/" className="hover:opacity-75 text-sm">
          Home
        </Link>
        <Link href="/nuestra_firma" className="hover:opacity-75 text-sm">
          Nuestra Firma
        </Link>
        <Link href="/servicios" className="hover:opacity-75 text-sm">
          Servicios
        </Link>
        <Link href="/contacto" className="hover:opacity-75 text-sm">
          Contacto
        </Link>
        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </Link>
      </nav>
    </header>
  );
};

export default Header;
