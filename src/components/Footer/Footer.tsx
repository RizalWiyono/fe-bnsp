import Link from "next/link";
import Logo from "@/assets/img/Logo/Logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1d] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10">
        <div>
          <Image src={Logo} width={60} height={30} className="mb-4" alt="Logo" />
          <h1 className="text-3xl font-black tracking-widest">
            <i>
              HARLEY <br /> <span className="text-[#F17A36]">DAVIDSON</span>
            </i>
          </h1>
          <p className="text-lg font-extralight mt-4">
            Pada tahun 1903, dari sebuah gudang kecil di Milwaukee, Wisconsin,
            empat orang pemuda menyalakan api budaya yang kemudian tumbuh dan
            menyebar ke seluruh wilayah dan generasi.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">FITUR</h2>
          <ul className="text-md font-extralight gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Artikel</Link>
            </li>
            <li>
              <Link href="/services">Event</Link>
            </li>
            <li>
              <Link href="/services">Galeri</Link>
            </li>
            <li>
              <Link href="/services">Klien Kami</Link>
            </li>
          </ul>
        </div>
        <div className="text-md font-extralight col-span-2">
          <h2 className="font-semibold mb-2">Kontak</h2>
          <p>Harley-Davidson, Inc. Investor Relations</p>
          <div className="flex items-center">
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>location-filled</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="location-outline"
                  fill="#FFF"
                  transform="translate(106.666667, 42.666667)"
                >
                  <path
                    d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </svg>
            <p>3700 West Juneau Avenue Millwaukee, Wisconsin 53208</p>
          </div>
          <div className="flex items-center">
            <svg
              className="mr-3"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                fill="#FFF"
              />
            </svg>
            <p>877-HDSTOCK (437-8625) (toll-free)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
