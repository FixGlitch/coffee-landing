import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative h-[500px] py-12">
      <Image
        src="/footer.png"
        alt="footer overlay"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />
      <div className="container mx-auto flex justify-center items-center relative z-10 h-full">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl">
        <div>
          <h3 className="mb-4 text-lg font-semibold">About Us</h3>
          <p className="text-sm text-white">
            Coffee Haven is a cozy café that offers premium blends to fuel your
            day. Whether you need a morning pick-me-up or an afternoon break, we
            have just the cup for you!
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link href="#">Our Story</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>123 Brew Lane, Espresso City, Caffeine State, 90210</li>
            <li>+1 800-555-1234</li>
            <li>contact@coffeehaven.com</li>
            <li>www.coffeehaven.com</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-900">
              Facebook
            </Link>
            <Link href="#" className="text-white hover:text-gray-900">
              Twitter
            </Link>
            <Link href="#" className="text-white hover:text-gray-900">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
