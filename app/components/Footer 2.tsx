import Link from "next/link";
import Logo from "./Logo";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TiktokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.37a8.16 8.16 0 0 0 4.91 1.62V7.54a4.85 4.85 0 0 1-1-.85z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thegambianeye",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ousman.baldeh.tge?_r=1&_t=ZN-98pRQ6aYqJy",
    icon: TiktokIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCCxJHgiqY4PLnBeDTxNOODg",
    icon: YoutubeIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593096425805",
    icon: FacebookIcon,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/10 text-gambia-blue">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
        {/* Griglia a 3 colonne proporzionate e perfettamente centrate */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Colonna 1: Brand Info */}
          <div className="flex flex-col items-center gap-2">
            <Logo />
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed max-w-xs">
              Private tours with Ousman Baldeh.
              <br />
              Senegambia Strip, Kololi, The Gambia.
            </p>
          </div>

          {/* Colonna 2: Explore (Links orizzontali) */}

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-black/40">
              Explore
            </p>
            <nav
              className="flex flex-wrap justify-center items-center gap-6"
              style={{ display: "flex", gap: "24px", justifyContent: "center" }}
            >
              <Link
                href="/tours"
                className="inline-block px-1 py-1 text-sm font-medium text-black/70 hover:text-gambia-blue transition-colors"
              >
                Tours
              </Link>
              <Link
                href="/about"
                className="inline-block px-1 py-1 text-sm font-medium text-black/70 hover:text-gambia-blue transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="inline-block px-1 py-1 text-sm font-medium text-black/70 hover:text-gambia-blue transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-block px-1 py-1 text-sm font-medium text-black/70 hover:text-gambia-blue transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Colonna 3: Contact */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-black/40">
              Get in touch
            </p>
            <a
              href="https://wa.me/2209984010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black/70 hover:text-gambia-blue transition-colors inline-block"
            >
              WhatsApp Ousman
            </a>
          </div>
        </div>

        {/* Sezione Social: Isolati e centrati */}
        <div className="w-full max-w-md pt-6 border-t border-black/5 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-wider font-semibold text-black/40">
            Follow Us
          </p>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-gambia-blue/10 text-black/70 hover:text-gambia-blue transition-colors inline-flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10 text-center text-xs text-black/40 py-4">
        © {new Date().getFullYear()} The Gambian Eye. All rights reserved.
      </div>
    </footer>
  );
}
