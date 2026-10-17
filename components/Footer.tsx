import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs space-y-3">
          <Logo size={32} />
          <p className="text-sm text-secondary">{site.tagline}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-secondary">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
          <a href={`mailto:${site.supportEmail}`} className="hover:text-primary">Contact</a>
        </nav>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-tertiary">
        © {site.year} MixSharp. All rights reserved.
      </div>
    </footer>
  );
}
