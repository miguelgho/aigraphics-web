// Números reales para el contador de la página principal.
// - BASE: lo que se vendió por Square antes del sistema de pedidos (31 mar – 11 oct 2026).
// - LIVE: el sistema Ai Graphics Pedidos (Supabase). La función site_stats() solo devuelve
//   totales (nunca datos de clientes) y se consulta como máximo una vez por hora.
const BASE = { customers: 142, orders: 160, garments: 1127, printUnits: 2358 };

// Última lectura conocida, por si el sistema no responde al publicar.
const LAST_KNOWN = { customers: 46, orders: 52, garments: 473, printUnits: 8516 };

const SUPABASE_URL = "https://qgjygixpoptloqbjdskb.supabase.co";
// Llave pública (publishable): solo permite lo que la base de datos deja ver a visitantes.
const SUPABASE_KEY = "sb_publishable_8RlMsd2dfBywEGcz9QuKbw_qexSGTJV";

async function fetchLive() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/site_stats`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: "{}",
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return LAST_KNOWN;
    const data = await res.json();
    return {
      customers: Number(data.customers) || 0,
      orders: Number(data.orders) || 0,
      garments: Number(data.garments) || 0,
      printUnits: Number(data.print_units) || 0,
    };
  } catch {
    return LAST_KNOWN;
  }
}

// Redondea hacia abajo para que "180+" siempre sea cierto.
function roundDown(n) {
  const step = n < 1000 ? 10 : n < 10000 ? 100 : 500;
  return Math.floor(n / step) * step;
}

export async function getSiteStats() {
  const live = await fetchLive();
  const total = (key) => roundDown(BASE[key] + Math.max(live[key], 0));
  return {
    customers: total("customers"),
    orders: total("orders"),
    garments: total("garments"),
    printUnits: total("printUnits"),
  };
}
