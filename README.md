# Bela Negara Media - Portal Artikel Mahasiswa UPN Veteran Jatim

Portal media publikasi artikel bertema **Bela Negara** yang dikembangkan menggunakan **Next.js (App Router)** dan **Tailwind CSS**. 

Dibuat untuk memenuhi tugas praktikum Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara, Program Studi Informatika, Fakultas Ilmu Komputer, UPN "Veteran" Jawa Timur.

---

## Fitur Utama

- **5 Artikel Terstruktur:** Memuat 5 naskah orisinal bertema Bela Negara (Studi Ekskursi Petrokimia & Indosat, Museum Sepuluh Nopember, Outbound Bela Negara, Literasi Digital, dan Konservasi Mangrove Wonorejo).
- **Desain Editorial Modern:** Tipografi elegan, kartu artikel responsif, label kategori warna tematik, dan tata letak berita ala portal profesional.
- **Reading Progress Bar:** Indikator kemajuan membaca interaktif di bagian atas layar.
- **Fitur Berbagi:** Tombol share langsung ke WhatsApp, X (Twitter), dan Salin Tautan dengan notifikasi instan.
- **Dynamic Routing & SEO:** Halaman per kategori dan per artikel dengan Open Graph metadata yang siap tampil saat tautan dibagikan.
- **Siap Deploy ke Vercel:** Konfigurasi standar industri dengan build Next.js yang cepat dan mulus.

---

## Struktur Folder

```text
├── public/
│   └── images/              # Foto dokumentasi artikel (.jpg)
├── src/
│   ├── app/
│   │   ├── artikel/[slug]/  # Halaman detail baca artikel
│   │   ├── kategori/[cat]/  # Halaman filter per kategori
│   │   ├── globals.css      # Styling Tailwind CSS
│   │   ├── layout.tsx       # Root layout (Navbar & Footer)
│   │   └── page.tsx         # Halaman Beranda (Hero & Terpopuler)
│   ├── components/
│   │   ├── ArticleCard.tsx  # Komponen kartu artikel
│   │   ├── Navbar.tsx       # Navigasi & modal kirim artikel
│   │   ├── Footer.tsx       # Footer portal berita
│   │   ├── ReadingProgressBar.tsx
│   │   └── ShareButtons.tsx # Tombol bagikan WhatsApp/X/Salin
│   ├── data/
│   │   └── articles.ts      # Naskah lengkap 5 artikel
│   └── types/
│       └── article.ts       # Definisi TypeScript interface
├── package.json
└── tailwind.config.js
```

---

## Panduan Menjalankan di Lokal

1. **Pasang Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.

---

## Panduan Push ke GitHub & Deploy ke Vercel

1. **Inisialisasi Git dan Commit:**
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portal Bela Negara Media dengan 5 artikel"
   ```

2. **Hubungkan ke Repositori GitHub Anda:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

3. **Deploy di Vercel:**
   - Kunjungi [vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub.
   - Klik **"Add New Project"** lalu pilih repositori yang baru saja Anda push.
   - Pada bagian *Framework Preset*, Vercel akan otomatis mendeteksi **Next.js**.
   - Klik **"Deploy"**.
   - Dalam hitungan menit, situs Anda sudah aktif dengan tautan publik (misal: `https://nama-proyek.vercel.app`) yang siap Anda kumpulkan link dan tangkapan layarnya!

---

## Mengganti / Memperbarui Foto Dokumentasi

Untuk mengganti foto artikel dengan dokumentasi Anda sendiri, cukup letakkan file foto ke folder `public/images/` dengan nama yang sesuai:
- `studi-ekskursi.jpg`
- `museum-sepuluh-nopember.jpg`
- `outbound-bela-negara.jpg`
- `literasi-digital.jpg`
- `mangrove-wonorejo.jpg`
