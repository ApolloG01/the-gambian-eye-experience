import ToursGrid from "@/app/components/ToursGrid";

export const metadata = {
  title: "Excursions & Tours | The Gambian Eye",
  description: "Explore custom private tours and excursions across The Gambia.",
};

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-4xl font-extrabold text-gambia-blue mb-2">
          Explore Our Excursions
        </h1>
        <p className="text-black/60 text-base">
          Discover authentic Gambian experiences tailored for private groups and
          solo travelers.
        </p>
      </div>

      <ToursGrid />
    </main>
  );
}
