================================================================================
PANDUAN LENGKAP PENGELOLAAN DOKUMEN & INTEGRASI GOOGLE DRIVE
E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
"Growing Through Practice, Teaching with Purpose."
================================================================================

I. IDENTITAS RESMI PORTOFOLIO & KEPEMILIKAN
--------------------------------------------------------------------------------
Nama Website    : E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM
Nama Mahasiswa  : Achmad Miftachul Firdaus
NIM             : 25316173727
Program Studi   : Pendidikan Profesi Guru (PPG) Calon Guru
LPTK            : Universitas Negeri Malang (UM)
Sekolah Praktik : SD Laboratorium Universitas Negeri Malang
Guru Pamong     : Anang Marzuqi, S.Pd.
DPL             : Prof. Yusuf Hanafi, S.Ag, M.Fil.I
Bidang Keilmuan : Pendidikan Jasmani Olahraga dan Kesehatan (PJOK)
Fokus Materi    : Bola Basket (Pola Gerak Dasar, Lempar Tangkap, Permainan Bermakna)
Sasaran Kelas   : Kelas V Sekolah Dasar
Tahun Akademik  : 2026


II. FUNGSI FOLDER ASSETS/DOCS/
--------------------------------------------------------------------------------
Folder ini (assets/docs/) disediakan sebagai pusat repositori penyimpanan berkas
dokumen digital lokal portofolio PPL Mandiri, yang mencakup:
1. Perangkat Pembelajaran (Modul Ajar, Alur Tujuan Pembelajaran, LKPD).
2. Lembar Kerja Refleksi Resmi PPG (LK 3 Terbimbing dan LK 4 Seluruh Siklus).
3. Instrumen Asesmen (Lembar Penilaian Formatif, Sumatif, dan Siklus).
4. Laporan Observasi Manajemen Sekolah dan Lingkungan/Sarpras.
5. Laporan Pelaksanaan Kegiatan Non-Mengajar.

Website mendukung 2 METODE PENYEDIAAN BERKAS:
  - METODE A (Sangat Direkomendasikan): Integrasi Tautan Google Drive.
    Dokumen PDF tampil secara langsung (live interactive preview) di layar
    menggunakan penampil resmi Google Drive tanpa pengunjung harus mengunduh file.
  - METODE B: Penyimpanan File PDF Fisik di folder assets/docs/.
    File dapat diunduh langsung secara offline oleh pengunjung melalui tombol
    "Unduh Berkas".


III. PANDUAN INTEGRASI PREVIEW PDF VIA GOOGLE DRIVE (METODE A)
--------------------------------------------------------------------------------
Sistem website telah dilengkapi dengan penampil interaktif Google Drive bawaan
(Interactive Google Drive Viewer) pada setiap topik dan halaman refleksi.

Langkah-langkah menyematkan tautan Google Drive:
1. Unggah berkas PDF dokumen Anda ke Google Drive pribadi / akun kampus.
2. Buat folder terstruktur di Google Drive Anda, misalnya:
   - GDrive > PPL Mandiri SD Lab UM > Modul Ajar
   - GDrive > PPL Mandiri SD Lab UM > Lembar Refleksi LK
   - GDrive > PPL Mandiri SD Lab UM > Rubrik Penilaian
3. Klik kanan pada file PDF di Google Drive -> pilih "Bagikan" (Share).
4. Pada bagian "Akses umum", ubah setelan menjadi:
   "Siapa saja yang memiliki link" (Anyone with the link) -> Peran: "Pelihat" (Viewer).
   *Penting: Pastikan akses publik agar preview tidak meminta izin login.*
5. Klik "Salin Link" (Copy link). Format link biasanya seperti ini:
   https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=sharing
6. Cara memasukkan link ke website:
   - OPSI 1 (Paling Mudah):
     Kirimkan link Google Drive tersebut di obrolan chat ini dengan menyebutkan
     nama dokumennya (misal: "Ini link GDrive untuk Modul Ajar Siklus 1: [link]").
     Asisten AI akan langsung mengintegrasikannya secara otomatis.
   - OPSI 2 (Mandiri):
     Buka file: js/data.js menggunakan text editor (Notepad, VS Code, dll).
     Cari nama dokumen atau ID dokumen yang dituju (misal: "doc-4-1" atau "siklus1").
     Tempel tautan Anda pada baris:
     gdriveUrl: "https://drive.google.com/file/d/.../view?usp=sharing",
7. Sistem otomatis mengonversi link berbagi tersebut ke format embed resmi:
   https://drive.google.com/file/d/.../preview
   sehingga dokumen PDF langsung tampil rapi di dalam bingkai website!


IV. DAFTAR LENGKAP BERKAS, NAMA FILE, & ID SISTEM (8 TOPIK + REFLEKSI)
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
TOPIK 1 — Orientasi dan Observasi Manajemen Sekolah
--------------------------------------------------------------------------------
1. Laporan Hasil Observasi Manajemen SD Laboratorium UM (LK 1)
   - ID Sistem       : doc-1-1
   - Nama File PDF   : Laporan_Observasi_Manajemen_SD_Lab_UM.pdf
   - Kategori        : Laporan Observasi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Keterangan      : Analisis struktur manajemen, tata kelola, dan tupoksi SD Lab UM.
   - Link GDrive     : https://drive.google.com/file/d/15kVgTkcH6Rp6e5jtAB5fOIGAoz5nmbqH/view?usp=sharing
   - Slot GDrive     : PPL_DATA.topics[0].items[0].gdriveUrl

2. Bagan Struktur Organisasi dan Tata Kelola Sekolah
   - ID Sistem       : doc-1-2
   - Nama File PDF   : Struktur_Organisasi_SD_Lab_UM.pdf
   - Kategori        : Dokumen Manajemen
   - Keterangan      : Bagan visual organisasi pimpinan, dewan guru, dan komite.
   - Slot GDrive     : PPL_DATA.topics[0].items[1].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 2 — Observasi Lingkungan Sekolah
--------------------------------------------------------------------------------
1. Laporan Observasi Sarana & Prasarana Pembelajaran PJOK (LK 2)
   - ID Sistem       : doc-2-1
   - Nama File PDF   : Observasi_Sarpras_SD_Lab_UM.pdf
   - Kategori        : Laporan Observasi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Keterangan      : Inventarisasi lapangan bola basket, aula, UKS, dan alat olahraga.
   - Link GDrive     : https://drive.google.com/file/d/1sB9dIgIojVQJWUlohiWjqSNezTbs74-K/view?usp=sharing
   - Slot GDrive     : PPL_DATA.topics[1].items[0].gdriveUrl

2. Catatan Budaya Sekolah dan Iklim Karakter Peserta Didik
   - ID Sistem       : doc-2-2
   - Nama File PDF   : Budaya_Sekolah_SD_Lab_UM.pdf
   - Kategori        : Catatan Observasi
   - Keterangan      : Dokumentasi pembiasaan pagi (senam, literasi, doa bersama).
   - Slot GDrive     : PPL_DATA.topics[1].items[1].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 3 — Praktik Pembelajaran Terbimbing
--------------------------------------------------------------------------------
1. Modul Ajar Pembelajaran Terbimbing (Bola Basket Kelas V)
   - ID Sistem       : doc-3-1
   - Nama File PDF   : Modul_Ajar_Terbimbing.pdf
   - Kategori        : Perangkat Pembelajaran
   - Keterangan      : Modul ajar yang disetujui Guru Pamong Anang Marzuqi, S.Pd.
   - Slot GDrive     : PPL_DATA.topics[2].items[0].gdriveUrl

2. Video Pelaksanaan Praktik Mengajar Terbimbing
   - ID Sistem       : doc-3-2
   - Nama File Video : Video_Praktik_Terbimbing.mp4
   - Kategori        : Video Pembelajaran
   - Keterangan      : Rekaman pengajaran lapangan bersama Guru Pamong.
   - Slot GDrive     : PPL_DATA.topics[2].items[1].gdriveUrl

3. Lembar Refleksi Praktik Mengajar Terbimbing (LK 3)
   - ID Sistem       : doc-3-3 (Key: "terbimbing")
   - Nama File PDF   : Refleksi_Praktik_Terbimbing.pdf
   - Kategori        : Dokumen Refleksi Resmi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1k88Vbiy3plzYqcxoa4ThXyD_oVjShffl/view?usp=sharing
   - Keterangan      : Berisi teks autentik analisis variasi motorik bola basket kelas V,
                       evaluasi siswa ceria, umpan balik pamong penambahan media digital,
                       serta pengesahan Anang Marzuqi, S.Pd. dan Prof. Yusuf Hanafi.
   - Slot GDrive     : PPL_DATA.reflections.terbimbing.gdriveUrl
                       (dan PPL_DATA.topics[2].items[2].gdriveUrl)

--------------------------------------------------------------------------------
TOPIK 4 — Praktik Pembelajaran Mandiri Siklus 1
--------------------------------------------------------------------------------
1. Modul Ajar Siklus 1 Lengkap (LKPD & Media Ajar)
   - ID Sistem       : doc-4-1
   - Nama File PDF   : Modul_Ajar_Siklus_1.pdf
   - Kategori        : Perangkat Pembelajaran
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/10R-XpY0xKQEG3OuX7aJjwPjpyFdeOjSv/view?usp=sharing
   - Keterangan      : Modul materi lempar tangkap bola basket kelas V.
   - Slot GDrive     : PPL_DATA.topics[3].items[0].gdriveUrl

2. Video Pelaksanaan Pembelajaran Mandiri Siklus 1
   - ID Sistem       : doc-4-2
   - Nama File Video : Video_Mandiri_Siklus_1.mp4
   - Kategori        : Video Pembelajaran
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1GmbCgwzq82EYtlnqIzpVa7Orw9x4ELLG/view?usp=sharing
   - Keterangan      : Dokumentasi apersepsi gerak aktif, inti, dan pendinginan melingkar.
   - Slot GDrive     : PPL_DATA.topics[3].items[1].gdriveUrl

3. Refleksi Praktik Pembelajaran Mandiri Siklus 1 (LK 4)
   - ID Sistem       : doc-4-3 (Key: "siklus1")
   - Nama File PDF   : Refleksi_Siklus_1.pdf
   - Kategori        : Dokumen Refleksi Resmi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1fBYqYIcjR0ElvhlD4o9Wr-VKogXRAPnB/view?usp=sharing
   - Keterangan      : Evaluasi apersepsi melempar sehari-hari, tantangan pengawasan
                       guru tunggal di lapangan, dan transisi ke metode tutor sebaya.
   - Slot GDrive     : PPL_DATA.reflections.siklus1.gdriveUrl
                       (dan PPL_DATA.topics[3].items[2].gdriveUrl)

4. Lampiran Lembar Penilaian & Rubrik Asesmen Siklus 1
   - ID Sistem       : doc-4-4
   - Nama File PDF   : Rubrik_Penilaian_Siklus_1.pdf
   - Kategori        : Lembar Penilaian
   - Keterangan      : Asesmen psikomotorik kontrol bola, afektif, dan kognitif.
   - Slot GDrive     : PPL_DATA.topics[3].items[3].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 5 — Praktik Pembelajaran Mandiri Siklus 2
--------------------------------------------------------------------------------
1. Modul Ajar Siklus 2 Terintegrasi (Pos Latihan & Kuis Digital)
   - ID Sistem       : doc-5-1
   - Nama File PDF   : Modul_Ajar_Siklus_2.pdf
   - Kategori        : Perangkat Pembelajaran
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/124Ii72YoLQvFae3O_zfGHss7p4dZX_Bj/view?usp=sharing
   - Keterangan      : Modul modifikasi permainan bermakna materi bola basket.
   - Slot GDrive     : PPL_DATA.topics[4].items[0].gdriveUrl

2. Video Pelaksanaan Pembelajaran Mandiri Siklus 2
   - ID Sistem       : doc-5-2
   - Nama File Video : Video_Mandiri_Siklus_2.mp4
   - Kategori        : Video Pembelajaran
   - Keterangan      : Rekaman keaktifan siswa pada pos latihan dan kuis visual.
   - Slot GDrive     : PPL_DATA.topics[4].items[1].gdriveUrl

3. Refleksi Praktik Pembelajaran Mandiri Siklus 2 (LK 4)
   - ID Sistem       : doc-5-3 (Key: "siklus2")
   - Nama File PDF   : Refleksi_Siklus_2.pdf
   - Kategori        : Dokumen Refleksi Resmi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/18reo97Q2ufaKo0P9t0Wj0RhIJpD4NlWf/view?usp=sharing
   - Keterangan      : Evaluasi alokasi waktu transisi pos latihan, efektivitas media kuis,
                       serta modifikasi alat/jarak sesuai masukan pamong.
   - Slot GDrive     : PPL_DATA.reflections.siklus2.gdriveUrl
                       (dan PPL_DATA.topics[4].items[2].gdriveUrl)

4. Lampiran Lembar Penilaian Formatif Siklus 2
   - ID Sistem       : doc-5-4
   - Nama File PDF   : Rubrik_Penilaian_Siklus_2.pdf
   - Kategori        : Lembar Penilaian
   - Keterangan      : Lembar unjuk kerja berpos dan asesmen sikap sportivitas.
   - Slot GDrive     : PPL_DATA.topics[4].items[3].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 6 — Praktik Pembelajaran Mandiri Siklus 3
--------------------------------------------------------------------------------
1. Modul Ajar Siklus 3 (Active & Creative Movement)
   - ID Sistem       : doc-6-1
   - Nama File PDF   : Modul_Ajar_Siklus_3.pdf
   - Kategori        : Perangkat Pembelajaran
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1K8yYdHMVjmvy3bfLmPo7dm_0GjUQ2pC3/view?usp=sharing
   - Keterangan      : Modul pembelajaran berorientasi problem-solving gerak aktif.
   - Slot GDrive     : PPL_DATA.topics[5].items[0].gdriveUrl

2. Video Praktik Pembelajaran Mandiri Siklus 3
   - ID Sistem       : doc-6-2
   - Nama File Video : Video_Mandiri_Siklus_3.mp4
   - Kategori        : Video Pembelajaran
   - Keterangan      : Rekaman keterlibatan siswa dan komunikasi instruksional guru.
   - Slot GDrive     : PPL_DATA.topics[5].items[1].gdriveUrl

3. Refleksi Analisis Mendalam Siklus 3 (LK 4)
   - ID Sistem       : doc-6-3 (Key: "siklus3")
   - Nama File PDF   : Refleksi_Siklus_3.pdf
   - Kategori        : Dokumen Refleksi Resmi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1Gxhx83mo2-3fGBEJPdu6aIYKO6iYGRfm/view?usp=sharing
   - Keterangan      : Evaluasi jembatan kognitif apersepsi, diferensiasi bimbingan murid,
                       efektivitas alat peraga fisik/digital, umpan balik pengelolaan waktu
                       dan barisan belakang, serta pengesahan Pamong & DPL.
   - Slot GDrive     : PPL_DATA.reflections.siklus3.gdriveUrl
                       (dan PPL_DATA.topics[5].items[2].gdriveUrl)

4. Lampiran Lembar Penilaian Keterampilan Siklus 3
   - ID Sistem       : doc-6-4
   - Nama File PDF   : Rubrik_Penilaian_Siklus_3.pdf
   - Kategori        : Lembar Penilaian
   - Keterangan      : Rubrik asesmen capaian keterampilan gerak dan kolaborasi tim.
   - Slot GDrive     : PPL_DATA.topics[5].items[3].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 7 — Praktik Pembelajaran Mandiri Siklus 4
--------------------------------------------------------------------------------
1. Modul Ajar Siklus 4 (Konsolidasi & Evaluasi PJOK)
   - ID Sistem       : doc-7-1
   - Nama File PDF   : Modul_Ajar_Siklus_4.pdf
   - Kategori        : Perangkat Pembelajaran
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1_v-5oeWCx4hYmlymC3fL1qmRs9We0AzZ/view?usp=sharing
   - Keterangan      : Modul final student-centered learning dengan peran leader pemanasan.
   - Slot GDrive     : PPL_DATA.topics[6].items[0].gdriveUrl

2. Video Pembelajaran Puncak Siklus 4
   - ID Sistem       : doc-7-2
   - Nama File Video : Video_Mandiri_Siklus_4.mp4
   - Kategori        : Video Pembelajaran
   - Keterangan      : Rekaman pengajaran mandiri komprehensif penutup siklus PPL.
   - Slot GDrive     : PPL_DATA.topics[6].items[1].gdriveUrl

3. Refleksi Praktik Pembelajaran Mandiri Siklus 4 (LK 4)
   - ID Sistem       : doc-7-3 (Key: "siklus4")
   - Nama File PDF   : Refleksi_Siklus_4.pdf
   - Kategori        : Dokumen Refleksi Resmi
   - Status Konten   : TERSEDIA & TERVERIFIKASI
   - Link GDrive     : https://drive.google.com/file/d/1p7AJNFAl8j97q3MXP0Q_DEkF9bmEvyKr/view?usp=sharing
   - Keterangan      : Pembelajaran berpusat pada murid, evaluasi penurunan energi di akhir,
                       masukan pamong menjadikan murid pemimpin pemanasan, dan diferensiasi.
   - Slot GDrive     : PPL_DATA.reflections.siklus4.gdriveUrl
                       (dan PPL_DATA.topics[6].items[2].gdriveUrl)

4. Lampiran Lembar Penilaian Sumatif Siklus 4
   - ID Sistem       : doc-7-4
   - Nama File PDF   : Rubrik_Penilaian_Siklus_4.pdf
   - Kategori        : Lembar Penilaian
   - Keterangan      : Instrumen evaluasi akhir capaian pembelajaran PJOK semester berjalan.
   - Slot GDrive     : PPL_DATA.topics[6].items[3].gdriveUrl

--------------------------------------------------------------------------------
TOPIK 8 — Kegiatan Non-Mengajar
--------------------------------------------------------------------------------
1. Laporan Pelaksanaan Kegiatan Non-Mengajar
   - ID Sistem       : doc-8-1
   - Nama File PDF   : Laporan_Kegiatan_Non_Mengajar.pdf
   - Kategori        : Laporan Non-Mengajar
   - Keterangan      : Dokumentasi piket pagi 5S, pengelolaan UKS, dan ekstrakurikuler.
   - Slot GDrive     : PPL_DATA.topics[7].items[0].gdriveUrl

2. Dokumentasi Program Ekstrakurikuler & Pembiasaan Karakter
   - ID Sistem       : doc-8-2
   - Nama File PDF   : Dokumentasi_Program_Non_Mengajar.pdf
   - Kategori        : Dokumen Kegiatan
   - Keterangan      : Pendampingan kegiatan olahraga sore dan pembinaan karakter murid.
   - Slot GDrive     : PPL_DATA.topics[7].items[1].gdriveUrl


V. REKAPITULASI DOKUMENTASI MEDIA (VIDEO & FOTO) GOOGLE DRIVE
--------------------------------------------------------------------------------
1. Siklus 1 — Praktik Mandiri 1 (4 Video Rekaman Lapangan):
   - Klip 1 (Apersepsi & Pemanasan Dinamis):
     https://drive.google.com/file/d/1GmbCgwzq82EYtlnqIzpVa7Orw9x4ELLG/view?usp=sharing
   - Klip 2 (Kegiatan Inti Pola Gerak Lempar Tangkap):
     https://drive.google.com/file/d/1NPLJthBA36JrZWm4P74_iWvFxjphT5tt/view?usp=sharing
   - Klip 3 (Latihan Berpasangan & Bimbingan Kelompok):
     https://drive.google.com/file/d/1ZzhCa6RaCxVJ8L0H5cTKP129jI_GkA9D/view?usp=sharing
   - Klip 4 (Pendinginan & Refleksi Melingkar):
     https://drive.google.com/file/d/1AU4-d4af41AnTJ-bGbvvfQTQugm32AnG/view?usp=sharing

2. Siklus 2 — Praktik Mandiri 2 (4 Foto Dokumentasi Aktivitas):
   - Foto 1 (Penjelasan Alur Pos Latihan):
     https://drive.google.com/file/d/1SqFr61A0xP-9Wqxs36kavz_m7ZvuWfNu/view?usp=sharing
   - Foto 2 (Aktivitas Gerak Pos Terstruktur):
     https://drive.google.com/file/d/1EdRglpPAuQgGVS8qMgjTqJrPHvR7Dj-E/view?usp=sharing
   - Foto 3 (Integrasi Kuis Digital & Visual PJOK):
     https://drive.google.com/file/d/1rEdVjDzzvZ_mb6sKcfesF0BG3kH4MHHi/view?usp=sharing
   - Foto 4 (Pendampingan & Umpan Balik Guru di Lapangan):
     https://drive.google.com/file/d/1XXnVnM5xyHzWAlpbEo7gkVkXSv-6JRQ_/view?usp=sharing

3. Siklus 3 — Praktik Mandiri 3 (4 Foto Dokumentasi Aktivitas):
   - Foto 1 (Penataan Skenario Diferensiasi Gerak):
     https://drive.google.com/file/d/1xGF2ipBoz3pcckcg5IAXOu9GkXIeL7RB/view?usp=sharing
   - Foto 2 (Eksplorasi Motorik Kreatif Siswa):
     https://drive.google.com/file/d/1s7NTIJu3zPJd8QL3-erVqPQpjlyRc8i1/view?usp=sharing
   - Foto 3 (Interaksi Personal & Pembimbingan Berkelanjutan):
     https://drive.google.com/file/d/1nNdUv6G0NeOV0bdlP5TKAuO05kvEMKj2/view?usp=sharing
   - Foto 4 (Evaluasi Formatif & Refleksi Bersama Siswa):
     https://drive.google.com/file/d/1YprALmr1pWLbrIjHoRUc4nFT4usimacf/view?usp=sharing

4. Siklus 4 — Praktik Mandiri 4 (3 Foto Dokumentasi Bola Voli):
   - Foto 1 (Pembelajaran Teknik Dasar Bola Voli):
     https://drive.google.com/file/d/1gj2z7Mw14sJuT8KUkAddt0zB0guy0JMA/view?usp=sharing
   - Foto 2 (Praktik Passing Berpasangan & Mini Game):
     https://drive.google.com/file/d/1pr4db9uJH_H6nOjFxT3ijf7LQOoHfJPz/view?usp=sharing
   - Foto 3 (Peran Pemimpin Murid & Pendinginan Lapangan):
     https://drive.google.com/file/d/1bMZAotfq32Xat0MmewCRwYtZsqF9iiUC/view?usp=sharing


VI. CATATAN PRINSIP AKADEMIK & INTEGRITAS DATA PPG
--------------------------------------------------------------------------------
1. Penamaan Resmi:
   Nama resmi website adalah "E-PORTOFOLIO PPL MANDIRI DI SD LABORATORIUM UM".
   Tagline pendukung adalah "Growing Through Practice, Teaching with Purpose.".
2. Terminologi PPG:
   Seluruh istilah resmi menggunakan "PPG Calon Guru" (Pendidikan Profesi Guru Calon Guru).
3. Kejujuran Status Berkas:
   Website tidak menampilkan tautan palsu (*fake/dead links*) atau data fiktif.
   Apabila berkas belum diunggah atau belum dilampirkan link Google Drive-nya,
   sistem secara elegan menampilkan badge abu-abu "Dokumen belum ditambahkan"
   atau "Slot Pratinjau Tersedia • Menunggu Tautan Google Drive".
4. Pengesahan Dokumen:
   Dokumen refleksi LK 3 dan LK 4 yang telah berstatus "Tersedia & Terverifikasi"
   memuat rekaman autentik nama Guru Pamong Anang Marzuqi, S.Pd. dan Dosen
   Pembimbing Lapangan Prof. Yusuf Hanafi, S.Ag, M.Fil.I.


VII. CARA MENGUJI WEBSITE SECARA LOKAL
--------------------------------------------------------------------------------
Untuk melihat dan menguji seluruh fitur preview PDF Google Drive dan berkas:
1. Klik ganda pada berkas index.html untuk langsung membuka di peramban web
   (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
2. Atau jalankan server lokal Python di direktori proyek:
     python -m http.server 8000
   Lalu buka di browser: http://localhost:8000
3. Navigasi ke Topik 3 atau Halaman Refleksi untuk melihat Interactive Google
   Drive Viewer yang telah aktif!

================================================================================
Dibuat dengan dedikasi untuk mendukung kelulusan dan profesionalisme calon guru
Program Pendidikan Profesi Guru (PPG) Calon Guru — Universitas Negeri Malang
================================================================================
