/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML dışa aktarımı için
  distDir: 'dist',   // Build çıktı klasörü
  images: {
    unoptimized: true, // Static export için gerekli
  }
}

module.exports = nextConfig 