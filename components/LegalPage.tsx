import type { ReactNode } from "react";
import { site } from "@/lib/site";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="canvas-glow">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-tertiary">Last updated: {site.lastUpdated}</p>
        <div className="mt-10 space-y-8 text-secondary leading-relaxed [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-primary [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_strong]:text-primary">
          {children}
        </div>
      </article>
    </main>
  );
}
