import Link from "next/link";
import Section from "@/components/section";

const NotFound = () => {
  return (
    <main className="min-h-fit px-4 sm:px-8 lg:px-16">
      <Section title="Error 404">
        <p>This page does not exist</p>
        <button className="flex items-center gap-1 p-2 rounded-xl font-semibold border border-indigo-500/40 bg-indigo-500/20 text-sm text-neutral-200 hover:cursor-pointer hover:brightness-75">
          <Link href="/">Return</Link>
        </button>
      </Section>
    </main>
  );
};

export default NotFound;
