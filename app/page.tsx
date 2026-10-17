import Image from "next/image";
import { site } from "@/lib/site";

const drills = [
  {
    name: "Frequency",
    text: "Name the frequency band that was boosted or cut.",
    how: "You hear a sound (noise, a stem or your own track) with one band of EQ boosted or cut, and pick which band it was. Early levels use big boosts on a few octave bands; later levels use third-octave bands with a 3 dB change.",
    measures: "Frequency resolution: the smallest band and EQ change you can identify, plus boost-versus-cut judgement.",
  },
  {
    name: "Gain Difference",
    text: "Tell how much louder or quieter B is than A.",
    how: "Compare A and B and say whether B is louder or quieter, and by about 1, 3 or 6 dB. Later levels change the level of a single instrument inside a full mix.",
    measures: "Level sensitivity: the smallest dB difference you can hear, down to 0.5 dB.",
  },
  {
    name: "Panning",
    text: "Place a sound from hard left to hard right.",
    how: "Hear a sound panned somewhere in the stereo field and place it, first in 5 to 9 zones, then with a continuous slider. Later levels pan one instrument inside a mix.",
    measures: "Stereo placement accuracy: how close your answer is to the real pan position, with partial credit for near misses.",
  },
  {
    name: "Compression",
    text: "Hear squashed dynamics: ratio, attack and amount.",
    how: "Decide whether B is compressed, then identify the ratio (2:1, 4:1, 8:1), the attack time (1, 10, 30 ms) or the gain reduction on the loudest peaks (2, 4, 8 dB).",
    measures: "Your ear for dynamics: detecting compression and judging its ratio, attack and amount.",
  },
  {
    name: "Reverb",
    text: "Judge decay, amount and pre-delay of a reverb.",
    how: "Listen to a short burst or an instrument with reverb and identify the decay length (0.5 to 3 seconds), how much reverb is mixed in, or the pre-delay before the tail starts (0, 30, 80 ms).",
    measures: "Space perception: decay time, wet amount and pre-delay.",
  },
  {
    name: "Delay",
    text: "Judge the time, repeats and stereo spread of an echo.",
    how: "Tell whether B has a delay at all, then identify the time between repeats, how many repeats you hear, whether they are mono or ping-pong, and whether they sound clean or dark.",
    measures: "Echo perception: delay time in milliseconds, repeat count, stereo spread and tone.",
  },
  {
    name: "Saturation",
    text: "Hear drive, harmonics and soft versus hard clipping.",
    how: "Decide whether B is saturated, how hard the peaks are driven (low, medium, high), and whether the distortion is soft (tanh) or a hard clip.",
    measures: "Harmonic and distortion sensitivity: detecting drive, judging its amount and telling soft from hard clipping.",
  },
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
  { src: "/screens/01-today-v3.jpg", alt: "Today screen" },
  { src: "/screens/02-drills-v2.jpg", alt: "Drills screen" },
  { src: "/screens/04-frequency-question-v2.jpg", alt: "Frequency question" },
  { src: "/screens/05-frequency-feedback.jpg", alt: "Frequency answer feedback" },
  { src: "/screens/09-progress-v2.jpg", alt: "Progress screen" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  description: site.description,
  applicationCategory: "MusicApplication",
  operatingSystem: "iOS, iPadOS, macOS",
  url: site.url,
  image: `${site.url}/logo.png`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
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
            <div key={d.name} className="card flex flex-col p-6">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-secondary">{d.text}</p>
              <dl className="mt-5 space-y-4 border-t border-white/10 pt-5 text-sm">
                <div>
                  <dt className="font-medium text-accent">What you do</dt>
                  <dd className="mt-1 text-secondary">{d.how}</dd>
                </div>
                <div>
                  <dt className="font-medium text-accent">What it measures</dt>
                  <dd className="mt-1 text-secondary">{d.measures}</dd>
                </div>
              </dl>
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
