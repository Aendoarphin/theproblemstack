import FilterSet from "@/components/FilterSet";
import { industryOptions, mockProblems, sortOptions } from "../static";
import {
  IconArrowUp,
  IconArrowDown,
  IconMessageCircle2,
  IconClock,
  IconBulb,
} from "@tabler/icons-react";

function Home() {
  return (
    <div className="container mx-auto pt-20 pb-20 px-4">
      {/* Header Section */}
      <div className="backdrop-blur-lg p-4 border border-muted/20 rounded-xl flex flex-col md:flex-row justify-between items-center mb-10 gap-4 sticky top-20 z-10">
        <div>
          <span className="text-2xl font-bold text-foreground tracking-tight mb-2">
            Problems
          </span>
        </div>

        {/* Filters */}
        <FilterSet options1={industryOptions} options2={sortOptions} />
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProblems.map((problem) => (
          <div
            key={problem.id}
            className="group flex flex-col bg-background border border-muted/20 hover:[&_p#problem-description]:text-foreground rounded-xl p-6 hover:shadow-lg"
          >
            {/* Card Top: Industry & Date */}
            <div className="flex justify-between items-center mb-3">
              <span title={problem.industryLabel} className="line-clamp-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                {problem.industryLabel}
              </span>
              <div className="flex items-center gap-1 text-muted text-xs">
                <IconClock size={14} />
                <span>{problem.date}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="mb-6 grow">
              <h3 className="text-xl font-bold text-foreground mb-2 cursor-pointer">
                {problem.title}
              </h3>
              <p id="problem-description" className="text-muted text-sm leading-relaxed line-clamp-3">
                {problem.description}
              </p>
            </div>

            {/* Card Footer: Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-muted/10">
              <div className="flex items-center gap-4">
                {/* Voting */}
                <div className="flex items-center gap-1 bg-muted/5 rounded-lg p-1">
                  <button className="p-1 hover:bg-background hover:text-success rounded text-muted">
                    <IconArrowUp size={18} />
                  </button>
                  <span className="text-xs font-bold text-foreground min-w-5 text-center">
                    {problem.upvotes}
                  </span>
                  <button className="p-1 hover:bg-background hover:text-danger rounded text-muted">
                    <IconArrowDown size={18} />
                  </button>
                </div>

                {/* Comments Count */}
                <div className="flex items-center gap-1 text-muted text-xs hover:text-foreground cursor-pointer">
                  <IconMessageCircle2 size={18} />
                  <span>{problem.comments}</span>
                </div>

                {/* ADDED: Solutions Button */}
                <button 
                  className="flex items-center gap-1 text-muted text-xs hover:text-primary cursor-pointer"
                  title="View Submitted Solutions"
                >
                    <IconBulb size={18} />
                    <span>{problem.solutions}</span>
                </button>
              </div>
              <button className="text-xs font-semibold text-primary hover:underline underline-offset-4">
                View Brief
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;