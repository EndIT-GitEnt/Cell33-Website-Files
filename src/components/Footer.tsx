import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/WM_Logo_130x80.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/" aria-label="Wilderness Malaysia home">
            <Image src={logo} alt="Wilderness Malaysia Logo" width={130} height={80} />
          </Link>
          <p className="text-gray-400 max-w-sm">
            Wilderness Malaysia delivers immersive outdoor adventure and experiential learning programs for schools, corporate teams, and youth. Challenge, explore, and discover with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400 transition">About</Link></li>
            <li><Link href="/programs" className="hover:text-green-400 transition">Programs</Link></li>
            <li><Link href="/safety" className="hover:text-green-400 transition">Safety & Quality</Link></li>
            <li><Link href="/resources" className="hover:text-green-400 transition">Resources</Link></li>
            <li><Link href="/gallery" className="hover:text-green-400 transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@wildernessmalaysia.com" className="hover:text-green-400">info@wildernessmalaysia.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">+60 12-345 6789</a></p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">Facebook</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Wilderness Malaysia. All rights reserved.
      </div>
    </footer>
  );
}
