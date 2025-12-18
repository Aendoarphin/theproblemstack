import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  IconPencilPlus,
  IconShieldCheck,
  IconBracketsContain,
  IconCheck,
} from "@tabler/icons-react";

const ProcessFlow = () => {
  const steps = [
    {
      id: "01",
      title: "Problem Submission",
      description:
        "Users or industry professionals submit real-world challenges to the entry waitlist.",
      icon: <IconPencilPlus size={24} stroke={1.5} />,
      phase: "Phase One",
    },
    {
      id: "02",
      title: "Credentialed Review",
      description:
        "Subject matter experts vet submissions. Only problems with verified industry relevance move forward.",
      icon: <IconShieldCheck size={24} stroke={1.5} />,
      phase: "Phase Two",
    },
    {
      id: "03",
      title: "Problem Stack",
      description:
        "Developers claim problems and signal progress. The community tracks the journey toward an MVP.",
      icon: <IconBracketsContain size={24} stroke={1.5} />,
      phase: "Phase Three",
    },
    {
      id: "04",
      title: "Expert Certification",
      description:
        "Successful MVPs undergo a final audit. Approved solutions receive a mark of efficacy. The community gains inspiration and devs can branch out into their own variant solutions.",
      icon: <IconCheck size={24} stroke={1.5} />,
      phase: "Phase Four",
    },
  ];

  return (
    <section className="w-full px-6">
      <h2>How It Works</h2>
      <br />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-start text-left">
              {/* header (icon and number) */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg shadow-lg ${
                    step.id === "04"
                      ? "bg-black from-primary from-50% bg-linear-30 to-white to-110% text-white"
                      : "bg-foreground text-background"
                  }`}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-bold tracking-widest text-muted uppercase">
                  {step.id}
                </span>
              </div>

              {/* text content */}
              <div className="space-y-3">
                <p className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                  {step.phase}
                </p>
                <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
                <div className="w-8 h-0.5 bg-primary"></div>{" "}
                {/* divider */}
                <p className="text-sm contrast-50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="mt-20 h-1/2 px-6 max-w-5xl mx-auto flex flex-col">
          <h1 className="leading-tight mb-2 text-balance">
            This Is The Problem Stack
          </h1>
          <p>
            A directory of problems and solutions designed to fuel your next
            software project. Built for developers to collaborate, innovate, and
            grow together.
          </p>
          <br />
          <button className="bg-black from-primary from-50% bg-linear-30 to-white to-110% text-white rounded-lg p-2 w-max shadow-lg">Explore Now</button>
          <br />
          <h2>Build With Purpose</h2>
          <p>
            Stop building to ship and start building to solve. Innovation lives
            in the messy, unsolved problems, not in the tenth iteration of a
            weather app. Find a problem that matters and own the solution!
          </p>
        </section>
        <hr className="my-10 mx-6 text-muted" />
        {/* features */}
        <ProcessFlow />
        {/* testimonials */}
        <section></section>
        {/* call to action */}
        <section></section>
      </main>
      <Footer />
    </>
  );
}
