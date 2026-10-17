import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="flex items-center gap-6 text-sm text-secondary">
          <Link href="/#drills" className="hidden hover:text-primary sm:block">Drills</Link>
          <Link href="/#features" className="hidden hover:text-primary sm:block">Features</Link>
          <Link href="/#pricing" className="hidden hover:text-primary sm:block">Pricing</Link>
          <a
            href={site.appStoreUrl}
            className="rounded-full bg-accent px-4 py-2 font-semibold text-on-accent transition hover:brightness-110"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
