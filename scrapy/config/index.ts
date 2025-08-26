export const CATEGORY_MAPPING = {
  MEN: {
    2432163: 1030204712, // ŞORT | BERMUDA -> ŞORT
    2432095: 1030204719, // PANTOLON -> PANTOLONLAR
    2431993: 1030204766, // GÖMLEK | KETEN GÖMLEK -> GÖMLEKLER
    2432040: 1030204791, // T-SHIRT -> TIŞÖRT
    2432056: 1030204788, // POLO T-SHIRT -> POLOLAR
    2432264: 1030204756, // KAZAK | HIRKA -> TRIKO
    2432193: 1030204710, // PLAJ GİYİM -> MAYO
    2432231: 1030204822, // SWEATSHIRT -> SWEATSHIRTLER
    2432279: 1030204837, // İNCE CEKET -> CEKET
    2537410: 1030204837, // CEKET
    2432130: 1030204730, // YENİ KATEGORI
  },
  WOMEN: {
    2583113: 1030204607, // CEKET | KABAN -> CEKET
    2420944: 1030441307, // BLAZER -> BLAZER VE TAKIM
    2420895: 1030204616, // ELBİSE -> ELBISE
    2420368: 1030204645, // GÖMLEK -> GÖMLEK VE BLUZ
    2419939: 1030207187, // TOP | BODY -> TOP VE BODY
    2420416: 1030204631, // T-SHIRT -> TIŞÖRT
    2419242: 1030204692, // JEAN -> JEAN
    2420794: 1030207189, // PANTOLON -> PANTOLONLAR
    2420453: 1030204678, // ETEK -> ETEK
    2420482: 1030204685, // ŞORT | BERMUDA -> ŞORT VE BERMUDA ŞORT
    2420505: 1030441307, // YELEK -> BLAZER VE TAKIM
    2420284: 1030441307, // TAKIM -> BLAZER VE TAKIM
    2419181: 1030204660, // SWEATSHIRT | EŞOFMAN -> SWEATSHIRTLER
    2420293: 1030204669, // TRİKO -> ÖRGÜ VE KROŞE
    2418953: 1030204707, // PLAJ GİYİM -> BIKINI VE MAYO
  },
} as const

export const BRAND_CONFIG = {
  ZARA: {
    baseUrl: 'https://www.zara.com',
    endpoints: {
      categories: '/tr/tr/categories',
    },
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate, br',
      DNT: '1',
      Connection: 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
    },
    categories: {
      // Level 1 - Ana kategoriler
      MEN: 1885841,
      WOMEN: 1881757,
    },
    targetCategories: {
      // Level 2 ve 3 - İstenen kategoriler
      MEN: [
        2432163, // ŞORT | BERMUDA
        2432095, // PANTOLON
        2431993, // GÖMLEK | KETEN GÖMLEK
        2432040, // T-SHIRT
        2432056, // POLO T-SHIRT
        2432264, // KAZAK | HIRKA
        2432193, // PLAJ GİYİM
        2432231, // SWEATSHIRT
        2432279, // İNCE CEKET
        2537410, // CEKET
        2432130, // YENİ KATEGORI
      ],
      WOMEN: [
        2583113, // CEKET | KABAN
        2420944, // BLAZER
        2420895, // ELBİSE
        2420368, // GÖMLEK
        2419939, // TOP | BODY
        2420416, // T-SHIRT
        2419242, // JEAN
        2420794, // PANTOLON
        2420453, // ETEK
        2420482, // ŞORT | BERMUDA
        2420505, // YELEK
        2420284, // TAKIM
        2419181, // SWEATSHIRT | EŞOFMAN
        2420293, // TRİKO
        2418953, // PLAJ GİYİM
      ],
    },
    categoryMapping: CATEGORY_MAPPING,
  },
  PULLANDBEAR: {
    baseUrl: 'https://www.pullandbear.com',
    endpoints: {
      categories:
        '/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1',
    },
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate, br',
      DNT: '1',
      Connection: 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
    },
    categories: {
      // Level 1 - Ana kategoriler
      MEN: 1030616396,
      WOMEN: 1030616387,
    },
    targetCategories: {
      // Level 2 ve 3 - İstenen kategoriler
      MEN: [
        1030204712, // ŞORT
        1030204719, // PANTOLONLAR
        1030204766, // GÖMLEKLER
        1030204791, // TIŞÖRT
        1030204788, // POLOLAR
        1030204756, // TRIKO
        1030204710, // MAYO
        1030204822, // SWEATSHIRTLER
        1030204837, // CEKET
        1030204730, // YENİ KATEGORI
      ],
      WOMEN: [
        1030204607, // CEKET
        1030441307, // BLAZER VE TAKIM
        1030204616, // ELBISE
        1030204645, // GÖMLEK VE BLUZ
        1030207187, // TOP VE BODY
        1030204631, // TIŞÖRT
        1030204692, // JEAN
        1030207189, // PANTOLONLAR
        1030204678, // ETEK
        1030204685, // ŞORT VE BERMUDA ŞORT
        1030204660, // SWEATSHIRTLER
        1030204669, // ÖRGÜ VE KROŞE
        1030204707, // BIKINI VE MAYO
      ],
    },
    categoryMapping: CATEGORY_MAPPING,
  },
}

export const API_CONFIG = {
  timeout: 10000,
  retries: 3,
  delay: 1000,
}

export const PRODUCTCLEAR_CONFIG = {
  ZARA: {
    // ZARA için tutulacak fieldlar - stok bilgileri dahil
    keepFields: [
      'id',
      'name',
      'detail.colors',
      'detail.colors.sizes',
      'detail.colors.xmedia',
      'familyName',
      'subfamilyName',
    ],
  },
  PULLANDBEAR: {
    // Pull&Bear için tutulacak fieldlar - stok bilgileri dahil
    keepFields: [
      'id',
      'name',
      'bundleProductSummaries',
      'bundleColors',
      'detail',
      'bundleProductSummaries.detail.colors.xmedia',
    ],
  },
}
