export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 py-10 bg-white text-center text-xs text-gray-500">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="font-semibold text-gray-700">
          Sivitas Bela Negara • UPN &quot;Veteran&quot; Jawa Timur
        </p>
        <p>
          Disusun untuk memenuhi luaran Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara, Program Studi Informatika.
        </p>
        <p className="text-gray-400 pt-2">
          &copy; {new Date().getFullYear()} Hak cipta artikel milik masing-masing penulis mahasiswa.
        </p>
      </div>
    </footer>
  );
}
