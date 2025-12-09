"use client";
import {
  IconChartCohort,
  IconGlobe,
  IconHammer,
  IconQuoteFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import meteors from "@/assets/meteors.svg";
import Image from "next/image";

export default function Landing() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Check hero section
      if (heroRef.current && !isHeroVisible) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
          setIsHeroVisible(true);
        }
      }

      // Check features section
      if (featuresRef.current && !isFeaturesVisible) {
        const rect = featuresRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
          setIsFeaturesVisible(true);
        }
      }

      // Check mission section
      if (missionRef.current && !isMissionVisible) {
        const rect = missionRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 1 && rect.bottom >= 0) {
          setIsMissionVisible(true);
        }
      }

      // Check CTA section
      if (ctaRef.current && !isCtaVisible) {
        const rect = ctaRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
          setIsCtaVisible(true);
        }
      }
    };

    // Check on mount in case elements are already visible
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeroVisible, isFeaturesVisible, isMissionVisible, isCtaVisible]);
// continue here with parallax
  return (
    <div className="bg-linear-60 from-transparent via-primary to-transparent transition-opacity">
      <Image src={meteors} alt="meteors" className="bg-scroll-parallax -z-1" />
      <span className="scroll-progress z-2"></span>
      <main className="*:px-2">
        {/* Hero section */}
        <section
          className={`h-screen content-center text-center -mt-20 py-20 px-4 ${
            isHeroVisible ? "animate__animated animate__fadeIn" : ""
          }`}
          ref={heroRef}
        >
          <div className="w-full mx-auto px-4">
            <h1 className="uppercase drop-shadow-2xl dark:drop-shadow-sm dark:drop-shadow-white">
              The Problem Stack
            </h1>
            <h5 className="text-xl md:text-2xl text-foreground">
              <span className="dark:text-red-600 text-red-700 font-mono font-bold">
                Stop
              </span>{" "}
              building To-Do lists.{" "}
              <span className="dark:text-green-600 text-green-700 font-mono font-bold">
                Start
              </span>{" "}
              solving code-worthy chaos.
            </h5>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground">
              Escape tutorial hell. Access a curated registry of real-world
              problems and turn a stranger&apos;s headache into your next MVP.
            </p>
            <figure className="max-w-3xl my-8 mx-auto text-center *:mx-auto">
              <IconQuoteFilled className="text-foreground" />
              <blockquote className="text-md italic font-medium text-foreground">
                <p>
                  &quot;A problem well stated is a problem half-solved.&quot;
                </p>
                <p className="text-xs">Charles Kettering</p>
              </blockquote>
            </figure>
          </div>
          <br />
          <div className="mt-8 font-bold text-sm md:text-base border border-foreground/50 py-3 px-6 rounded-sm inline-block">
            <span className="mr-4">583 briefs pushed</span>
            <span className="dark:text-green-700 text-green-700 mr-4">
              22 challenges(+)
            </span>
            <span className="dark:text-red-700 text-red-700">
              0 to-do lists(-)
            </span>
          </div>
        </section>
        {/* Features section */}
        <section
          className={`h-screen content-center ${
            isFeaturesVisible
              ? "animate__animated animate__fadeIn animate__slower"
              : ""
          }`}
          ref={featuresRef}
        >
          <div className="mx-auto max-w-5xl *:first:text-center">
            <h1>Features</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 text-foreground">
              <li>
                <h3 className="items-center flex">
                  <IconGlobe
                    strokeWidth={1.5}
                    className="inline size-20 mr-4"
                  />
                  Curated real-world problems
                </h3>
                <p>
                  Skip practice projects. Access a verified registry of
                  operational gaps and technical headaches submitted by real
                  teams who need a solution.
                </p>
              </li>
              <li>
                <h3 className="items-center flex">
                  <IconUsersGroup
                    strokeWidth={1.5}
                    className="inline size-20 mr-4"
                  />
                  Community-driven solutions
                </h3>
                <p>
                  Join a vibrant community of professionals who can validate the
                  substance of problems, contribute insights, and collaborate on
                  solutions.
                </p>
              </li>
              <li>
                <h3 className="items-center flex">
                  <IconHammer
                    strokeWidth={1.5}
                    className="inline size-20 mr-4"
                  />
                  Skill-building challenges
                </h3>
                <p>
                  Tackle problems that push your boundaries. Each brief is a
                  chance to learn new technologies, frameworks, and best
                  practices in a practical context.
                </p>
              </li>
              <li>
                <h3 className="items-center flex">
                  <IconChartCohort
                    strokeWidth={1.5}
                    className="inline size-20 mr-4"
                  />
                  Project collaboration
                </h3>
                <p>
                  Work with others to brainstorm, design, and implement
                  solutions. Gain experience in teamwork, communication, and
                  project management.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* About section */}
        <section
          className={`content-center my-20 ${
            isMissionVisible
              ? "animate__animated animate__fadeIn animate__slower"
              : ""
          }`}
          ref={missionRef}
        >
          <div className="mx-auto *:first:text-center container">
            <h1>The Mission</h1>
            <p className="max-w-3xl mx-auto text-lg">
              The best way to learn is by solving real problems. The Problem
              Stack bridges the gap between theoretical knowledge and practical
              application, empowering rising developers to grow their skills,
              expose themselves to real-world challenges, and make a tangible
              impact through collaboration.
            </p>
            <div className="min-h-screen">
              <div className="max-w-7xl mx-auto">
                <br />
                <h3 className="font-bold mb-8 text-center">How It Works</h3>
                <br />
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column: The Steps */}
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="rounded-lg p-6 shadow-lg border">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Submit a Problem Brief
                          </h3>
                          <p className=" leading-relaxed">
                            Have you spotted a market gap or an inefficiency
                            needing a software solution? Don&apos;t build it
                            yet. Define it first and add it to the entry pool.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-lg p-6 shadow-lg border">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Community Vetting
                          </h3>
                          <p className="leading-relaxed">
                            The stack is curated by peers. The community upvotes
                            viable, clear problems and downvotes vague or
                            redundant ones.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-lg p-6 shadow-lg border">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            The Automatic Filter
                          </h3>
                          <p className=" leading-relaxed">
                            This isn&apos;t a dumping ground. Briefs that fail
                            to gain traction or receive significant downvotes
                            drop off the registry automatically.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="rounded-lg p-6 shadow-lg border">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Access the Validated Stack
                          </h3>
                          <p className="leading-relaxed">
                            What remains is a high-quality, curated list of
                            market-validated opportunities ready for you to
                            tackle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: The Infographic */}
                  <div className="rounded-xl p-8 shadow-lg border">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Top: Many items entering */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">
                          Problem Briefs
                        </h3>
                        <div className="grid grid-cols-5 gap-2">
                          {[...Array(15)].map((_, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded bg-foreground/30"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow down */}
                      <div className="flex flex-col items-center">
                        <div className="w-1 h-12 bg-foreground"></div>
                        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent"></div>
                      </div>

                      {/* Middle: Voting/Filtering Layer */}
                      <div className="w-full bg-linear-to-r rounded-lg p-6 border-2 border-dashed">
                        <h3 className="text-lg font-semibold text-center mb-4">
                          Community Vetting
                        </h3>
                        <div className="flex justify-center items-center gap-8">
                          <div className="text-center">
                            <div className="text-4xl mb-2">👍</div>
                            <p className="text-sm">Upvote</p>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl mb-2">⚖️</div>
                            <p className="text-sm">Filter</p>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl mb-2">👎</div>
                            <p className="text-sm">Downvote</p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow down */}
                      <div className="flex flex-col items-center">
                        <div className="w-1 h-12 bg-foreground"></div>
                        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent"></div>
                      </div>

                      {/* Bottom: Few quality items */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-emerald-700 mb-4">
                          Validated Stack
                        </h3>
                        <div className="flex justify-center gap-3">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-12 h-12 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-md flex items-center justify-center text-white font-bold"
                            >
                              ✓
                            </div>
                          ))}
                        </div>
                        <p className="text-sm mt-4">
                          High-Quality Opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section hidden>{/* Testimonials section */}</section>
        <section hidden>{/* Pricing section */}</section>
        {/* CTA section */}
        <section className="h-screen content-center text-center" ref={ctaRef}>
          <div
            className={
              isCtaVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to solve real problems?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto text-balance">
              Join developers building solutions that matter. Start your journey
              today.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-sm transition">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
