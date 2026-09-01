const DeckCard = ({ deck, onDelete }) => {
  function handleClick() {
    console.log(`Card with id ${deck.id} has been clicked`);
    onDelete(deck.id);
  }

  return (
    <div className="relative mx-auto h-64 w-full max-w-68">
      <div className="absolute inset-x-4 top-4 h-full rounded-2xl border border-slate-200 bg-slate-100/80 shadow-sm" />
      <div className="absolute inset-x-2 top-2 h-full rounded-2xl border border-slate-200 bg-slate-200/70 shadow-sm" />

      <article className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/80 transition-transform duration-200 hover:-translate-y-0.5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-700">
            Deck
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-800">
            {deck.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {deck.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
            Study
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DeckCard;
