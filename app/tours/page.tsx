import ToursGrid from "@/app/components/ToursGrid";

export const metadata = {
  title: "Tours | The Gambian Eye",
  description:
    "Browse private, tailor-made excursions in The Gambia and Senegal with local guide Usman Baldeh.",
};

export default function ToursPage() {
  return (
    <div>
      <div className="bg-gambia-red-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Tours</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Every excursion is private and built around you. Browse below or
          filter by what you're into.
        </p>
      </div>
      <ToursGrid />
    </div>
  );
}
