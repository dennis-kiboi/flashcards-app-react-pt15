import { Plus, Play } from "lucide-react";

const dummyDeck = {
  title: "Data Structures & Algorithms",
  description: "Core concepts, algorithmic paradigms, and complexity analysis.",
  cards: Array(10)
};

const DeckDetails = () => (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <section
      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm mb-10"
      data-purpose="deck-header-card"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Deck Information Details */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#2A6F68] uppercase mb-2 inline-block">
            Deck
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {dummyDeck.title}
          </h1>
          <p className="text-slate-500 text-base md:text-lg mt-2 leading-relaxed">
            {dummyDeck.description}
          </p>

          {/* Status / Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              {dummyDeck.cards.length} flashcards
            </span>
          </div>
        </div>

        {/* Call To Action Group */}
        <div
          className="flex flex-wrap items-center gap-3 sm:self-start lg:self-center"
          data-purpose="action-buttons-group"
        >
          {/* Add Card Trigger Button */}
          <button
            id="openAddCardModalBtn"
            type="button"
            className="inline-flex items-center gap-2 bg-[#2A6F68] hover:bg-[#1f5751] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            Add Card
          </button>

          {/* Start Study Session Pill (Matches mint pill aesthetic) */}
          <button
            type="button"
            id="study-deck-btn"
            className="inline-flex items-center gap-2 bg-[#E6F7ED] hover:bg-[#D4F2E1] border border-[#BDE8D0] text-[#1E6746] text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Study Deck
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default DeckDetails;
