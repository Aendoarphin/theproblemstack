import { IconQuoteFilled } from "@tabler/icons-react";
import Image from "next/image";
import heroBg from "../../public/images/hero-bg.svg"

export default function Home() {
  return (
    <div>
      <main className="*:container *:px-2">
        <section className="content-center text-center mt-60">
          <Image fill alt="background" src={heroBg} objectFit="cover" style={{zIndex: -50, opacity: .25}}/>
          {/* Hero section */}
          <div className="w-full mx-auto px-4">
            <h1 className="uppercase">The Problem Stack</h1>
            <h5 className="text-xl md:text-2xl text-foreground">
              <span className="dark:text-red-400 text-red-600 font-mono font-bold">Stop</span> building To-Do lists. <span className="dark:text-green-400 text-green-600 font-mono font-bold">Start</span> solving code-worthy chaos.
            </h5>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground">Escape tutorial hell. Access a curated registry of real-world problems and turn a stranger&apos;s headache into your next MVP.</p>
            <figure className="max-w-3xl my-8 mx-auto text-center *:mx-auto">
              <IconQuoteFilled className="text-foreground" />
              <blockquote className="text-md italic font-medium text-foreground">
                <p>&quot;A problem well stated is a problem half-solved.&quot;</p>
                <p className="text-xs">Charles Kettering</p>
              </blockquote>
            </figure>
          </div>
          <button className="my-8 bg-primary p-2 rounded-sm text-white">Browse the Chaos</button>
          <br />
          <div className="mt-8 font-bold text-sm md:text-base border border-neutral-300 dark:border-neutral-700 py-3 px-6 rounded-sm inline-block">
            <span className="mr-4">
              583 briefs pushed
            </span>
            <span className="dark:text-green-400 text-green-600 mr-4">22 challenges(+)</span>
            <span className="dark:text-red-400 text-red-600">0 to-do lists(-)</span>
          </div>
        </section>

        <section>{/* Features section */}</section>

        <section>{/* About section */}</section>

        <section hidden>{/* Testimonials section */}</section>

        <section hidden>{/* Pricing section */}</section>

        <section>{/* CTA section */}</section>
      </main>
    </div>
  );
}
