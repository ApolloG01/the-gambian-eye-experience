export default function TourDetailLoading() {
  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8 animate-pulse">
        {/* Immagine Hero */}
        <div className="w-full h-72 sm:h-96 bg-gray-200 rounded-3xl" />

        {/* Intestazione Titolo e Tag */}
        <div className="space-y-4">
          <div className="w-24 h-5 bg-gray-200 rounded-full" />
          <div className="w-3/4 h-8 sm:h-10 bg-gray-200 rounded-xl" />
          <div className="w-1/2 h-4 bg-gray-200 rounded-lg" />
        </div>

        {/* Card Prezzo e Booking */}
        <div className="p-6 bg-white rounded-2xl border border-black/5 flex flex-col sm:flex-row justify-between gap-4">
          <div className="space-y-2">
            <div className="w-20 h-3 bg-gray-200 rounded" />
            <div className="w-32 h-8 bg-gray-200 rounded-lg" />
          </div>
          <div className="w-full sm:w-44 h-12 bg-gray-200 rounded-xl" />
        </div>

        {/* Corpo del testo */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-4 border border-black/5">
          <div className="w-40 h-6 bg-gray-200 rounded-lg" />
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-4/5 h-4 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </main>
  );
}
