// Reseñas oficiales de Google (Places API New). Se actualizan una vez al día.
// Requiere GOOGLE_PLACES_API_KEY (solo en el servidor).
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
// Place ID público del perfil "Ai Graphics" en Google Maps.
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJU64i6zKHlqIRnT-yyaZkAL0";

export const googleReviewsLinks = {
  maps: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
  writeReview: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
};

// Devuelve { rating, total, mapsUrl, reviews[] } o null si no está configurado o falla.
export async function getGoogleReviews() {
  if (!API_KEY) return null;
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) {
      console.error(
        `Google Places respondió ${res.status}: ${await res.text()}`,
      );
      return null;
    }
    const data = await res.json();
    return {
      rating: data.rating ?? null,
      total: data.userRatingCount ?? 0,
      mapsUrl: data.googleMapsUri || googleReviewsLinks.maps,
      reviews: (data.reviews ?? []).map((review) => ({
        id: review.name,
        author: review.authorAttribution?.displayName ?? "Cliente de Google",
        authorUrl: review.authorAttribution?.uri ?? null,
        photo: review.authorAttribution?.photoUri ?? null,
        rating: review.rating ?? 0,
        // Texto tal como lo escribió el cliente (sin traducir).
        text: (review.originalText ?? review.text)?.text ?? "",
        time: review.relativePublishTimeDescription ?? "",
      })),
    };
  } catch (error) {
    console.error("No se pudieron cargar las reseñas de Google:", error);
    return null;
  }
}
