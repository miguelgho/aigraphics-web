import { googleReviewsLinks } from "@/lib/googleReviews";

function GoogleLogo({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

// Estrellas con relleno parcial (ej. 4.7).
function Stars({ value, size = "w-5 h-5" }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const row = (cls) => (
    <div className={`flex ${cls}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${size} shrink-0`}>
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z"
          />
        </svg>
      ))}
    </div>
  );
  return (
    <div
      className="relative inline-block"
      role="img"
      aria-label={`${value} de 5 estrellas`}
    >
      {row("text-gray-200")}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        {row("text-print-yellow")}
      </div>
    </div>
  );
}

export default function GoogleReviews({ data }) {
  const mapsUrl = data?.mapsUrl ?? googleReviewsLinks.maps;
  const reviews = data?.reviews ?? [];

  return (
    <section id="resenas" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
          Lo que dicen nuestros clientes
        </h2>
        <span
          className="brand-swoosh w-48 max-w-full mx-auto mt-2 mb-4"
          aria-hidden="true"
        />
      </div>

      {/* Resumen de calificación */}
      <div className="bg-print-ink text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-5">
          <span className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
            <GoogleLogo className="w-9 h-9" />
          </span>
          {data?.rating ? (
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-5xl leading-none">
                  {data.rating.toFixed(1)}
                </span>
                <Stars value={data.rating} size="w-6 h-6" />
              </div>
              <p className="text-gray-300 text-sm mt-1">
                {data.total} reseñas en Google
              </p>
            </div>
          ) : (
            <div>
              <p className="font-display font-bold uppercase text-2xl">
                Reseñas de Google
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Mira lo que opinan nuestros clientes de Homestead y Miami.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white text-print-ink text-sm font-bold hover:bg-gray-100 transition-colors"
          >
            Ver todas en Google
          </a>
          {googleReviewsLinks.writeReview && (
            <a
              href={googleReviewsLinks.writeReview}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-print-magenta text-white text-sm font-bold hover:bg-print-magenta-dark transition-colors"
            >
              ⭐ Déjanos tu reseña
            </a>
          )}
        </div>
      </div>

      {/* Tarjetas de reseñas */}
      {reviews.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <li
              key={review.id}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 border-t-4 flex flex-col ${
                i % 2 === 0 ? "border-t-print-magenta" : "border-t-print-cyan"
              }`}
            >
              <div className="flex items-center gap-3">
                {review.photo ? (
                  // Foto de perfil servida por Google; se usa tal cual.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={review.photo}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                ) : (
                  <span className="w-11 h-11 rounded-full bg-print-cyan text-white font-bold flex items-center justify-center">
                    {review.author.charAt(0)}
                  </span>
                )}
                <div className="min-w-0">
                  {review.authorUrl ? (
                    <a
                      href={review.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-print-ink hover:underline block truncate"
                    >
                      {review.author}
                    </a>
                  ) : (
                    <p className="font-bold text-print-ink truncate">
                      {review.author}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
                <GoogleLogo className="w-5 h-5 ml-auto shrink-0" />
              </div>
              <div className="mt-3">
                <Stars value={review.rating} size="w-4 h-4" />
              </div>
              {review.text && (
                <p className="text-print-dark text-sm leading-relaxed mt-3 line-clamp-6">
                  {review.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
