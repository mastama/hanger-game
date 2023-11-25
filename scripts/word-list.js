const wordList = [
    {
        word: "gitar",
        hint: "Alat musik dengan senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Elevasi alami yang besar dari permukaan bumi."
    },
    {
        word: " lukisan",
        hint: "Sebuah bentuk seni menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Studi ilmiah tentang benda langit dan fenomena."
    },
    {
        word: "sepakbola",
        hint: "Olahraga populer dimainkan dengan bola bulat."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu-kupu",
        hint: "Serangga dengan sayap warna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih terdiri dari dasar datar bulat dengan berbagai topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai oleh improvisasi dan syncopation."
    },
    {
        word: "kamera",
        hint: "Perangkat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kilau dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang mendebarkan atau berani."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh tenaga manusia dengan dua roda."
    },
    {
        word: "sunset",
        hint: "Hilangnya matahari di bawah cakrawala setiap hari."
    },
    {
        word: "kopi",
        hint: "Minuman kafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tarian",
        hint: "Gerakan ritmis tubuh sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem bintang, gas, dan debu yang luas dijaga oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai instrumen."
    },
    {
        word: "gunung berapi",
        hint: "Gunung atau bukit dengan lubang yang memuntahkan lava, fragmen batu, uap panas, dan gas."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan alur dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "simfoni",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya dalam beberapa gerakan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "balet",
        hint: "Bentuk tarian klasik yang ditandai oleh gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Seseorang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh pantulan, pembiasan, dan dispersi cahaya."
    },
    {
        word: "universum",
        hint: "Segala materi, ruang, dan waktu yang ada sebagai satu kesatuan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan kunci yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Waktu yang diberikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan yang padat dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Bangunan atau area luar di mana pertunjukan, film, atau pertunjukan lainnya diatur."
    },
    {
        word: "telepon",
        hint: "Perangkat yang digunakan untuk mentransmisikan suara dalam jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, gerakan, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah tandus atau kering dengan sedikit atau tanpa presipitasi."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi yang melibatkan sihir dan unsur-unsur supernatural."
    },
    {
        word: "teleskop",
        hint: "Instrumen optik yang digunakan untuk melihat objek-objek jauh di ruang angkasa."
    },
    {
        word: "oase",
        hint: "Tempat subur di padang gurun tempat air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati kehidupan liar di habitat alaminya."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak menghasilkan cahaya sendiri."
    },
    {
        word: " sungai",
        hint: "Aliran air alami yang besar mengalir dalam saluran ke laut, danau, atau aliran lainnya."
    },
    {
        word: "tropis",
        hint: "Berhubungan atau terletak di antara Tropik Kanker dan Tropik Capricorn."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradox",
        hint: "Pernyataan atau situasi yang bertentangan atau menantang intuisi."
    },
    {
        word: "teka-teki",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdasan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara sangat lembut atau pelan, seringkali dengan cara rahasia."
    },
    {
        word: "bayangan",
        hint: "Daerah atau bentuk gelap yang dihasilkan oleh suatu objek yang memblokir cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang tersembunyi atau tidak diketahui oleh orang lain."
    },
    {
        word: "rasa ingin tahu",
        hint: "Keinginan kuat untuk mengetahui atau mempelajari sesuatu."
    },
    {
        word: "mengaburkan",
        hint: "Membuat bingung atau membingungkan seseorang; membuat sesuatu menjadi tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkapkan",
        hint: "Membuat diketahui atau menunjukkan sesuatu yang sebelumnya rahasia atau tidak diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan palsu; penampilan atau kesan yang menyesatkan."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh dengan energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Rasa kangen sentimental atau kasih sayang terhadap masa lalu."
    },
    {
        word: "brilian",
        hint: "Luar biasa cerdas, berbakat, atau mengesankan."
    },
];
