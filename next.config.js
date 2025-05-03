/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración para GitHub Pages - ajusta el nombre del repositorio
  basePath: process.env.NODE_ENV === "production" ? "/NovaGrid-hp" : "",
  // Asegura que las rutas estáticas funcionen correctamente
  trailingSlash: true,
}

module.exports = nextConfig
