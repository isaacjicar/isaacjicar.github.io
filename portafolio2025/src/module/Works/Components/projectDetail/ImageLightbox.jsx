
export default function ImageLightbox({ src, title, onClose }) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center lightbox-backdrop px-2">

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-[90] inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-white"
      >
        ✕ Cerrar
      </button>

      <div className="relative w-full max-w-5xl">
        <div className="overflow-auto rounded-3xl bg-neutral/90 soft-shadow max-h-[80vh]">
          <img
            src={src}
            alt={title}
            className="
              block
              w-[140%] max-w-none
              md:w-full md:max-w-full
              md:max-h-[80vh]
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
}
