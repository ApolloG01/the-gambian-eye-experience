import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-black/5 p-8 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gambia-blue/10 text-gambia-blue flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-gambia-red uppercase tracking-wider">
            Error 404
          </span>
          <h1 className="text-2xl font-extrabold text-black">Page Not Found</h1>
          <p className="text-xs text-black/60 leading-relaxed">
            The tour or page you are looking for doesn't exist or has been
            moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/tours"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gambia-blue hover:bg-gambia-blue/90 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
          >
            Explore All Tours
          </Link>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs px-5 py-3 rounded-xl transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
        </div>
      </div>
    </main>
  );
}
