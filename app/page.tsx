import Image from "next/image";
import { site } from "@/lib/site";

const drills = [
  { name: "Frequency ID", text: "Name the frequency band that was boosted or cut." },
  { name: "Gain Difference", text: "Tell how much louder or quieter B is than A." },
  { name: "Panning", text: "Place a sound from hard left to hard right." },
  { name: "Compression", text: "Hear squashed dynamics: ratio, attack and amount." },
  { name: "Reverb", text: "Judge decay, amount and pre-delay of a reverb." },
  { name: "Delay", text: "Judge the time, repeats and stereo spread of an echo." },
  { name: "Saturation", text: "Hear drive, harmonics and soft versus hard clipping." },
];

const features = [
  { title: "Daily practice", text: "A short, focused session on Today keeps your skills sharp." },
  { title: "Adaptive difficulty", text: "Levels rise as your ear improves, so every session stays challenging." },
  { title: "Track your progress", text: "See skill ratings and history grow over time." },
  { title: "Your own audio", text: "Train on your own tracks, processed entirely on your device." },
  { title: "Safe listening", text: "Built-in volume safety and calibration protect your hearing." },
  { title: "iPhone, iPad & Mac", text: "One native app everywhere, with a single purchase." },
];

const shots = [
  { src: "/screens/01-today.jpg", alt: "Today screen" },
  { src: "/screens/02-drills.jpg", alt: "Drills screen" },
  { src: "/screens/04-frequency-question.jpg", alt: "Frequency ID question" },
  { src: "/screens/09-progress.jpg", alt: "Progress screen" },
];

export default function Home() {
  return (
    <main>
      <section className="canvas-glow">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <Image
            src="/logo.png"
            alt="MixSharp logo"
            width={96}
            height={96}
            className="mx-auto mb-8 rounded-[22%] shadow-[0_0_60px_rgb(61_219_160/0.25)]"
            priority
          />
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Critical-listening ear training</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Train your ears like a mixing engineer.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Practice hearing frequencies, levels, panning, compression and more — in short daily drills on iPhone, iPad and Mac.
          </p>
          <div className="mt-10 flex justify-center">
            <a href={site.appStoreUrl} className="rounded-full bg-accent px-8 py-3.5 font-semibold text-on-accent transition hover:brightness-110">
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {shots.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={500}
              height={1086}
              className={`w-full rounded-[2rem] border border-white/15 shadow-xl ${i % 2 ? "md:mt-10" : ""}`}
            />
          ))}
        </div>
      </section>

      <section id="drills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Drills for every mixing skill</h2>
        <p className="mt-3 max-w-xl text-secondary">Every drill is free to try and useful from the first level.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drills.map((d) => (
            <div key={d.name} className="card p-6">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-secondary">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Built for focused practice</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <div className="mb-3 h-1 w-8 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-secondary">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
        <div className="card p-10 text-center" style={{ borderColor: "var(--accent)" }}>
          <h2 className="text-3xl font-bold tracking-tight">Free to start. Unlock Pro once.</h2>
          <p className="mx-auto mt-4 max-w-lg text-secondary">
            No subscription. Pro is a one-time purchase that unlocks advanced levels, your own audio and full insights on every device.
          </p>
          <a href={site.appStoreUrl} className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-on-accent transition hover:brightness-110">
            Get MixSharp
          </a>
        </div>
      </section>
    </main>
  );
}
