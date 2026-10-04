// El panel /studio tiene su propia estructura (no usa el menú ni el pie del sitio).
export default function StudioLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
