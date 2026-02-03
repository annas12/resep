export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'umum' | 'daerah' | 'lebaran' | 'kue-lebaran';
  region?: string;
  cookTime: string;
  servings: number;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  // Masakan Umum
  {
    id: 'nasi-goreng',
    title: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan telur, ayam, dan sayuran segar yang gurih dan lezat.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    category: 'umum',
    cookTime: '20 menit',
    servings: 2,
    difficulty: 'Mudah',
    ingredients: [
      '2 piring nasi putih dingin',
      '2 butir telur',
      '100g ayam cincang',
      '2 siung bawang putih',
      '3 siung bawang merah',
      '2 sdm kecap manis',
      '1 sdm saus tiram',
      'Garam dan merica secukupnya',
      'Minyak goreng'
    ],
    instructions: [
      'Haluskan bawang putih dan bawang merah, tumis hingga harum.',
      'Masukkan ayam cincang, aduk hingga berubah warna.',
      'Sisihkan tumisan ke pinggir, masukkan telur dan orak-arik.',
      'Masukkan nasi, aduk rata dengan bumbu.',
      'Tambahkan kecap manis dan saus tiram, aduk merata.',
      'Bumbui dengan garam dan merica, masak hingga nasi kering dan terpisah.',
      'Sajikan dengan acar dan kerupuk.'
    ]
  },
  {
    id: 'ayam-goreng-kremes',
    title: 'Ayam Goreng Kremes',
    description: 'Ayam goreng renyah dengan taburan kremes gurih yang menggugah selera.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800',
    category: 'umum',
    cookTime: '45 menit',
    servings: 4,
    difficulty: 'Sedang',
    ingredients: [
      '1 ekor ayam potong 8 bagian',
      '5 siung bawang putih',
      '3 cm lengkuas',
      '2 lembar daun salam',
      '500ml air kelapa',
      '1 sdt ketumbar bubuk',
      'Garam secukupnya',
      'Minyak untuk menggoreng'
    ],
    instructions: [
      'Haluskan bawang putih dan ketumbar.',
      'Rebus ayam dengan bumbu halus, lengkuas, daun salam, dan air kelapa hingga meresap.',
      'Angkat ayam, tiriskan hingga kering.',
      'Goreng ayam dalam minyak panas hingga kecokelatan.',
      'Untuk kremes, saring sisa kaldu dan goreng hingga kering dan renyah.',
      'Sajikan ayam dengan taburan kremes di atasnya.'
    ]
  },
  {
    id: 'soto-ayam',
    title: 'Soto Ayam',
    description: 'Sup ayam kuning yang hangat dan segar dengan pelengkap lengkap.',
    image: 'https://images.unsplash.com/photo-1547928578-bca3e7a9b1c6?w=800',
    category: 'umum',
    cookTime: '60 menit',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '500g ayam',
      '2 liter air',
      '5 siung bawang putih',
      '8 siung bawang merah',
      '3 cm kunyit',
      '2 cm jahe',
      '3 batang serai',
      '4 lembar daun jeruk',
      'Soun, telur rebus, tauge untuk pelengkap'
    ],
    instructions: [
      'Rebus ayam hingga matang, sisihkan kaldunya.',
      'Suwir-suwir daging ayam.',
      'Haluskan bumbu, tumis hingga harum.',
      'Masukkan bumbu tumis ke dalam kaldu.',
      'Tambahkan serai dan daun jeruk, masak 15 menit.',
      'Sajikan dengan soun, ayam suwir, telur, tauge, dan pelengkap lainnya.'
    ]
  },
  {
    id: 'mie-goreng',
    title: 'Mie Goreng Jawa',
    description: 'Mie goreng manis khas Jawa dengan cita rasa yang otentik.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800',
    category: 'umum',
    cookTime: '25 menit',
    servings: 2,
    difficulty: 'Mudah',
    ingredients: [
      '200g mie telur',
      '100g ayam iris',
      '2 butir telur',
      '3 siung bawang putih',
      '5 siung bawang merah',
      '3 sdm kecap manis',
      'Sawi hijau secukupnya',
      'Minyak goreng'
    ],
    instructions: [
      'Rebus mie hingga matang, tiriskan.',
      'Tumis bawang hingga harum.',
      'Masukkan ayam, masak hingga matang.',
      'Tambahkan telur, orak-arik.',
      'Masukkan mie dan kecap manis, aduk rata.',
      'Tambahkan sawi, masak sebentar.',
      'Sajikan hangat dengan bawang goreng.'
    ]
  },
  {
    id: 'capcay',
    title: 'Capcay Sayuran',
    description: 'Tumis sayuran beragam dengan saus gurih yang sehat dan lezat.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    category: 'umum',
    cookTime: '20 menit',
    servings: 4,
    difficulty: 'Mudah',
    ingredients: [
      '100g wortel iris',
      '100g brokoli',
      '100g kembang kol',
      '100g sawi putih',
      '50g jamur kuping',
      '3 siung bawang putih',
      '2 sdm saus tiram',
      '1 sdm maizena larutkan'
    ],
    instructions: [
      'Tumis bawang putih hingga harum.',
      'Masukkan wortel terlebih dahulu karena lebih keras.',
      'Tambahkan sayuran lainnya, aduk rata.',
      'Tuang sedikit air, masak hingga sayuran setengah matang.',
      'Tambahkan saus tiram dan larutan maizena.',
      'Aduk hingga saus mengental.',
      'Sajikan hangat sebagai lauk.'
    ]
  },
  {
    id: 'telur-balado',
    title: 'Telur Balado',
    description: 'Telur goreng dengan sambal balado pedas yang menggoda.',
    image: 'https://images.unsplash.com/photo-1482049016gy?w=800',
    category: 'umum',
    cookTime: '30 menit',
    servings: 4,
    difficulty: 'Mudah',
    ingredients: [
      '8 butir telur rebus',
      '10 buah cabai merah',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 buah tomat',
      '1 sdt gula',
      'Garam secukupnya',
      'Minyak goreng'
    ],
    instructions: [
      'Goreng telur rebus hingga kulitnya bergelembung, sisihkan.',
      'Haluskan cabai, bawang merah, bawang putih, dan tomat.',
      'Tumis bumbu halus hingga matang dan berminyak.',
      'Tambahkan gula dan garam, aduk rata.',
      'Masukkan telur goreng, aduk hingga terbalut sambal.',
      'Sajikan hangat dengan nasi putih.'
    ]
  },

  // Masakan Khas Daerah
  {
    id: 'rendang',
    title: 'Rendang Daging',
    description: 'Masakan daging khas Padang yang kaya rempah dan dimasak hingga kering.',
    image: 'https://images.unsplash.com/photo-1606851091851-e8e3c7e5f7e5?w=800',
    category: 'daerah',
    region: 'Sumatera Barat',
    cookTime: '4 jam',
    servings: 8,
    difficulty: 'Sulit',
    ingredients: [
      '1 kg daging sapi potong dadu',
      '1 liter santan kental',
      '10 siung bawang merah',
      '6 siung bawang putih',
      '10 buah cabai merah',
      '5 cm lengkuas',
      '3 cm jahe',
      '3 cm kunyit',
      '4 batang serai',
      '6 lembar daun jeruk',
      '4 lembar daun kunyit'
    ],
    instructions: [
      'Haluskan bawang merah, bawang putih, cabai, jahe, kunyit, dan lengkuas.',
      'Tumis bumbu halus hingga harum.',
      'Masukkan daging, aduk hingga berubah warna.',
      'Tuang santan, tambahkan serai, daun jeruk, dan daun kunyit.',
      'Masak dengan api kecil sambil sesekali diaduk.',
      'Lanjutkan memasak hingga santan mengering dan daging berwarna cokelat kehitaman.',
      'Rendang siap disajikan.'
    ]
  },
  {
    id: 'gudeg',
    title: 'Gudeg Jogja',
    description: 'Olahan nangka muda khas Yogyakarta dengan rasa manis legit.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
    category: 'daerah',
    region: 'Yogyakarta',
    cookTime: '5 jam',
    servings: 10,
    difficulty: 'Sulit',
    ingredients: [
      '1 kg nangka muda',
      '1 liter santan',
      '500g gula merah',
      '10 siung bawang merah',
      '5 siung bawang putih',
      '5 cm lengkuas',
      '3 batang serai',
      '5 lembar daun salam',
      'Daun jati muda'
    ],
    instructions: [
      'Potong nangka muda, rendam dalam air garam.',
      'Haluskan bawang merah, bawang putih, dan lengkuas.',
      'Rebus nangka dengan santan, gula merah, bumbu halus, serai, dan daun salam.',
      'Tambahkan daun jati untuk warna merah kecokelatan.',
      'Masak dengan api kecil selama 4-5 jam hingga santan meresap.',
      'Aduk sesekali agar tidak gosong.',
      'Sajikan dengan ayam, telur, dan sambal krecek.'
    ]
  },
  {
    id: 'sate-madura',
    title: 'Sate Madura',
    description: 'Sate ayam dengan bumbu kacang yang manis dan gurih khas Madura.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    category: 'daerah',
    region: 'Madura',
    cookTime: '45 menit',
    servings: 4,
    difficulty: 'Sedang',
    ingredients: [
      '500g daging ayam potong dadu',
      '100g kacang tanah goreng',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '3 sdm kecap manis',
      '2 sdm air asam jawa',
      'Tusuk sate',
      'Bawang merah, cabe rawit untuk pelengkap'
    ],
    instructions: [
      'Tusuk daging ayam dengan tusuk sate.',
      'Haluskan kacang tanah, bawang merah, dan bawang putih.',
      'Campurkan dengan kecap manis dan air asam jawa.',
      'Bakar sate sambil dioles dengan kecap manis.',
      'Sajikan dengan bumbu kacang dan lontong.',
      'Tambahkan irisan bawang merah dan cabe rawit.'
    ]
  },
  {
    id: 'papeda',
    title: 'Papeda',
    description: 'Makanan pokok khas Papua dari sagu dengan kuah kuning ikan.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    category: 'daerah',
    region: 'Papua',
    cookTime: '40 menit',
    servings: 4,
    difficulty: 'Sedang',
    ingredients: [
      '250g tepung sagu',
      '500ml air panas',
      '500g ikan tongkol',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '3 cm kunyit',
      '2 batang serai',
      '1 buah jeruk nipis'
    ],
    instructions: [
      'Larutkan tepung sagu dengan sedikit air dingin.',
      'Tuang air panas sambil diaduk cepat hingga membentuk gel.',
      'Untuk kuah, haluskan bumbu dan rebus dengan ikan.',
      'Tambahkan perasan jeruk nipis.',
      'Sajikan papeda dengan cara dililitkan pada garpu.',
      'Celupkan ke dalam kuah ikan kuning.'
    ]
  },
  {
    id: 'pempek',
    title: 'Pempek Palembang',
    description: 'Olahan ikan tenggiri khas Palembang dengan cuko yang pedas manis.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800',
    category: 'daerah',
    region: 'Sumatera Selatan',
    cookTime: '60 menit',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '500g ikan tenggiri giling',
      '250g tepung sagu',
      '150ml air es',
      '1 sdt garam',
      'Untuk cuko: gula merah, cuka, bawang putih, cabai rawit'
    ],
    instructions: [
      'Campurkan ikan giling dengan garam, uleni hingga rata.',
      'Tambahkan tepung sagu dan air es sedikit demi sedikit.',
      'Uleni hingga adonan bisa dibentuk.',
      'Bentuk sesuai selera (kapal selam, lenjer, keriting).',
      'Rebus pempek hingga mengapung.',
      'Goreng sebelum disajikan dengan cuko.'
    ]
  },
  {
    id: 'rawon',
    title: 'Rawon Surabaya',
    description: 'Sup daging hitam khas Surabaya dengan kluwek yang khas.',
    image: 'https://images.unsplash.com/photo-1547928578-bca3e7a9b1c6?w=800',
    category: 'daerah',
    region: 'Jawa Timur',
    cookTime: '2 jam',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '500g daging sapi',
      '5 buah kluwek',
      '8 siung bawang merah',
      '5 siung bawang putih',
      '3 cm lengkuas',
      '3 cm jahe',
      '2 batang serai',
      'Tauge, daun bawang untuk pelengkap'
    ],
    instructions: [
      'Rebus daging hingga empuk, potong-potong.',
      'Keluarkan isi kluwek, haluskan bersama bumbu lainnya.',
      'Tumis bumbu halus hingga harum.',
      'Masukkan ke dalam kaldu daging.',
      'Masak hingga bumbu meresap.',
      'Sajikan dengan tauge, telur asin, dan sambal.'
    ]
  },

  // Masakan Lebaran
  {
    id: 'opor-ayam',
    title: 'Opor Ayam',
    description: 'Ayam dalam kuah santan kuning yang creamy, hidangan wajib Lebaran.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800',
    category: 'lebaran',
    cookTime: '60 menit',
    servings: 8,
    difficulty: 'Sedang',
    ingredients: [
      '1 ekor ayam potong',
      '1 liter santan',
      '8 siung bawang merah',
      '5 siung bawang putih',
      '5 butir kemiri',
      '2 cm kunyit',
      '2 cm jahe',
      '3 cm lengkuas',
      '3 batang serai',
      '4 lembar daun salam'
    ],
    instructions: [
      'Haluskan bawang merah, bawang putih, kemiri, kunyit, dan jahe.',
      'Tumis bumbu halus dengan lengkuas, serai, dan daun salam.',
      'Masukkan ayam, aduk hingga berubah warna.',
      'Tuang santan, masak dengan api kecil.',
      'Aduk sesekali agar santan tidak pecah.',
      'Masak hingga ayam empuk dan kuah mengental.',
      'Sajikan dengan ketupat atau lontong.'
    ]
  },
  {
    id: 'ketupat-sayur',
    title: 'Ketupat Sayur',
    description: 'Ketupat dengan sayur santan khas Lebaran yang gurih dan lezat.',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800',
    category: 'lebaran',
    cookTime: '45 menit',
    servings: 6,
    difficulty: 'Mudah',
    ingredients: [
      '500g labu siam potong',
      '200g kacang panjang',
      '750ml santan',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 cm lengkuas',
      '2 lembar daun salam',
      '1 sdt gula merah'
    ],
    instructions: [
      'Haluskan bawang merah dan bawang putih.',
      'Tumis bumbu halus dengan lengkuas dan daun salam.',
      'Masukkan labu siam, masak sebentar.',
      'Tuang santan, tambahkan kacang panjang.',
      'Masak hingga sayuran empuk.',
      'Bumbui dengan garam dan gula merah.',
      'Sajikan dengan ketupat.'
    ]
  },
  {
    id: 'sambal-goreng-ati',
    title: 'Sambal Goreng Ati Ampela',
    description: 'Ati dan ampela ayam dalam sambal santan yang gurih pedas.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
    category: 'lebaran',
    cookTime: '45 menit',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '300g ati ayam',
      '300g ampela ayam',
      '200g kentang potong dadu',
      '500ml santan',
      '8 buah cabai merah',
      '8 siung bawang merah',
      '4 siung bawang putih',
      '3 cm lengkuas',
      '2 lembar daun salam'
    ],
    instructions: [
      'Rebus ati dan ampela hingga matang, potong-potong.',
      'Goreng kentang hingga kecokelatan.',
      'Haluskan cabai, bawang merah, dan bawang putih.',
      'Tumis bumbu halus dengan lengkuas dan daun salam.',
      'Tuang santan, masak hingga mendidih.',
      'Masukkan ati, ampela, dan kentang.',
      'Masak hingga kuah mengental dan meresap.'
    ]
  },
  {
    id: 'semur-daging',
    title: 'Semur Daging',
    description: 'Daging sapi dalam bumbu kecap yang manis dan empuk.',
    image: 'https://images.unsplash.com/photo-1544025162-d76978f3e84c?w=800',
    category: 'lebaran',
    cookTime: '90 menit',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '500g daging sapi potong',
      '300g kentang',
      '200g wortel',
      '5 sdm kecap manis',
      '8 siung bawang merah',
      '4 siung bawang putih',
      '1/2 sdt pala bubuk',
      '3 butir cengkeh',
      '2 cm kayu manis'
    ],
    instructions: [
      'Goreng kentang dan wortel hingga setengah matang.',
      'Tumis bawang merah dan bawang putih iris.',
      'Masukkan daging, masak hingga berubah warna.',
      'Tambahkan kecap manis, pala, cengkeh, dan kayu manis.',
      'Tuang air secukupnya, masak hingga daging empuk.',
      'Masukkan kentang dan wortel.',
      'Masak hingga bumbu meresap dan kuah mengental.'
    ]
  },
  {
    id: 'ayam-bumbu-rujak',
    title: 'Ayam Bumbu Rujak',
    description: 'Ayam dengan bumbu rujak yang pedas manis dan menggugah selera.',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800',
    category: 'lebaran',
    cookTime: '50 menit',
    servings: 6,
    difficulty: 'Sedang',
    ingredients: [
      '1 ekor ayam potong',
      '10 buah cabai merah keriting',
      '8 siung bawang merah',
      '4 siung bawang putih',
      '3 cm kencur',
      '100g gula merah',
      '2 sdm air asam jawa',
      '3 lembar daun jeruk'
    ],
    instructions: [
      'Goreng ayam hingga setengah matang.',
      'Haluskan cabai, bawang merah, bawang putih, dan kencur.',
      'Tumis bumbu halus hingga harum.',
      'Tambahkan gula merah dan air asam jawa.',
      'Masukkan ayam dan daun jeruk.',
      'Masak hingga bumbu meresap dan mengering.'
    ]
  },
  {
    id: 'gulai-kambing',
    title: 'Gulai Kambing',
    description: 'Daging kambing dalam kuah gulai kuning yang kaya rempah.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800',
    category: 'lebaran',
    cookTime: '2 jam',
    servings: 8,
    difficulty: 'Sulit',
    ingredients: [
      '1 kg daging kambing',
      '1 liter santan',
      '10 buah cabai merah',
      '10 siung bawang merah',
      '6 siung bawang putih',
      '3 cm kunyit',
      '3 cm jahe',
      '3 cm lengkuas',
      '3 batang serai',
      '1 sdm ketumbar bubuk'
    ],
    instructions: [
      'Rebus daging kambing hingga setengah empuk.',
      'Haluskan semua bumbu kecuali serai dan lengkuas.',
      'Tumis bumbu halus dengan serai dan lengkuas.',
      'Masukkan daging kambing, aduk rata.',
      'Tuang santan dan kaldu rebusan.',
      'Masak dengan api kecil hingga daging empuk.',
      'Sajikan dengan taburan bawang goreng.'
    ]
  },

  // Kue Lebaran
  {
    id: 'nastar',
    title: 'Nastar Nanas',
    description: 'Kue kering dengan isian selai nanas yang manis dan lembut.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
    category: 'kue-lebaran',
    cookTime: '2 jam',
    servings: 50,
    difficulty: 'Sedang',
    ingredients: [
      '500g tepung terigu',
      '250g mentega',
      '100g gula halus',
      '4 kuning telur',
      '1 sdt vanili',
      'Selai nanas secukupnya',
      'Kuning telur untuk olesan'
    ],
    instructions: [
      'Kocok mentega dan gula hingga lembut.',
      'Masukkan kuning telur satu per satu.',
      'Tambahkan tepung dan vanili, aduk rata.',
      'Ambil sedikit adonan, pipihkan dan isi dengan selai nanas.',
      'Bulatkan dan tata di loyang.',
      'Oles dengan kuning telur.',
      'Panggang 160°C selama 25-30 menit.'
    ]
  },
  {
    id: 'kastengel',
    title: 'Kastengel Keju',
    description: 'Kue kering keju yang gurih dan renyah, favorit lebaran.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800',
    category: 'kue-lebaran',
    cookTime: '90 menit',
    servings: 40,
    difficulty: 'Sedang',
    ingredients: [
      '300g tepung terigu',
      '200g mentega',
      '200g keju edam parut',
      '3 kuning telur',
      '1/2 sdt garam',
      'Keju parut untuk taburan'
    ],
    instructions: [
      'Campurkan mentega dan keju parut, aduk rata.',
      'Masukkan kuning telur dan garam.',
      'Tambahkan tepung terigu sedikit demi sedikit.',
      'Giling adonan dan potong bentuk stik.',
      'Tata di loyang, taburi keju parut.',
      'Panggang 150°C selama 20-25 menit hingga kecokelatan.'
    ]
  },
  {
    id: 'putri-salju',
    title: 'Putri Salju',
    description: 'Kue mungil dengan taburan gula halus seperti salju.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
    category: 'kue-lebaran',
    cookTime: '90 menit',
    servings: 50,
    difficulty: 'Mudah',
    ingredients: [
      '250g tepung terigu',
      '200g mentega',
      '50g gula halus',
      '50g kacang mede halus',
      '1/2 sdt vanili',
      'Gula halus untuk taburan'
    ],
    instructions: [
      'Kocok mentega dan gula hingga pucat.',
      'Tambahkan vanili dan kacang mede.',
      'Masukkan tepung terigu, aduk rata.',
      'Bentuk adonan menjadi bulan sabit.',
      'Panggang 150°C selama 20 menit.',
      'Selagi hangat, gulingkan dalam gula halus.'
    ]
  },
  {
    id: 'kue-kering-coklat',
    title: 'Kue Kering Coklat',
    description: 'Kue kering dengan rasa coklat yang legit dan renyah.',
    image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=800',
    category: 'kue-lebaran',
    cookTime: '90 menit',
    servings: 40,
    difficulty: 'Mudah',
    ingredients: [
      '250g tepung terigu',
      '50g coklat bubuk',
      '200g mentega',
      '100g gula halus',
      '2 kuning telur',
      '100g chocolate chips'
    ],
    instructions: [
      'Kocok mentega dan gula hingga lembut.',
      'Masukkan kuning telur, aduk rata.',
      'Campurkan tepung dan coklat bubuk, masukkan ke adonan.',
      'Tambahkan chocolate chips.',
      'Bentuk sesuai selera.',
      'Panggang 160°C selama 20-25 menit.'
    ]
  },
  {
    id: 'kue-semprit',
    title: 'Kue Semprit',
    description: 'Kue kering berbentuk bunga yang lembut dan harum.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
    category: 'kue-lebaran',
    cookTime: '90 menit',
    servings: 50,
    difficulty: 'Mudah',
    ingredients: [
      '500g tepung terigu',
      '250g mentega',
      '150g gula halus',
      '3 kuning telur',
      '1 sdt vanili',
      'Pewarna makanan opsional'
    ],
    instructions: [
      'Kocok mentega dan gula hingga mengembang.',
      'Masukkan kuning telur satu per satu.',
      'Tambahkan vanili dan tepung terigu.',
      'Masukkan adonan ke dalam spuit.',
      'Cetak di atas loyang berbentuk bunga.',
      'Panggang 150°C selama 20 menit.'
    ]
  },
  {
    id: 'lidah-kucing',
    title: 'Lidah Kucing',
    description: 'Kue kering tipis berbentuk oval yang renyah dan lumer di mulut.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
    category: 'kue-lebaran',
    cookTime: '2 jam',
    servings: 60,
    difficulty: 'Sedang',
    ingredients: [
      '150g tepung terigu',
      '150g mentega',
      '100g gula halus',
      '3 putih telur',
      '1/2 sdt vanili',
      '1/4 sdt garam'
    ],
    instructions: [
      'Kocok mentega dan gula hingga pucat.',
      'Masukkan putih telur sedikit demi sedikit.',
      'Tambahkan vanili dan garam.',
      'Masukkan tepung, aduk rata.',
      'Semprit adonan memanjang di loyang.',
      'Panggang 170°C selama 10-12 menit hingga pinggiran kecokelatan.'
    ]
  }
];

export const categories = [
  {
    id: 'umum',
    title: 'Masakan Umum',
    description: 'Resep masakan sehari-hari yang praktis dan lezat',
    icon: '🍳'
  },
  {
    id: 'daerah',
    title: 'Masakan Khas Daerah',
    description: 'Cita rasa autentik dari berbagai daerah di Indonesia',
    icon: '🏝️'
  },
  {
    id: 'lebaran',
    title: 'Masakan Lebaran',
    description: 'Hidangan spesial untuk menyambut Hari Raya',
    icon: '🌙'
  },
  {
    id: 'kue-lebaran',
    title: 'Kue Lebaran',
    description: 'Kue kering dan hidangan manis untuk Lebaran',
    icon: '🍪'
  }
];

export const getRecipesByCategory = (category: string) => {
  return recipes.filter(recipe => recipe.category === category);
};

export const getRecipeById = (id: string) => {
  return recipes.find(recipe => recipe.id === id);
};
