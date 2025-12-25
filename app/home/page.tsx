import { IconArrowDown } from "@tabler/icons-react";

function Home() {
  return (
    <div className="container mx-auto pt-20">
      <div>
        <h1>Problems To Explore</h1>
        <div className="inline-flex gap-2 *:bg-foreground *:text-background *:rounded-lg">
          <select
          name="industry-type"
          id="industry-type"
          className="w-full p-1"
        >
          <option value="">Select Industry</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="technology">Technology</option>
        </select>
        <select name="" id="">
          <option value="">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        </div>
      </div>
    </div>
  );
}

export default Home;
