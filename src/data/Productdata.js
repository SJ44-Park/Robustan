const productData = [
  {
    productCode: "CPET-400",
    productName: "Custo Screen 400",
    manufacturer: "Bexen cardio",
    category: "Cardiology",
    price: 29000,
    stock: 120,
    rating: 4.7,

    images: [
      "/images/Cardiology/cpet_bike.jpg",
      "/images/Cardiology/ec_3000_0.jpg",
      "/images/Cardiology/r100_aed.jpg",
      "/images/Cardiology/spirovit_usb_0.jpg",
    ],

    description: `
      매일 편안하게 착용할 수 있도록 제작된 베이직 코튼 티셔츠입니다.
      부드러운 면 소재를 사용했으며, 계절과 유행에 관계없이 다양한 스타일에
      활용할 수 있는 기본 디자인을 적용했습니다.

      목 부분은 쉽게 늘어나지 않도록 탄탄하게 마감했으며, 봉제선을 깔끔하게
      처리하여 장시간 착용해도 편안합니다. 단독으로 착용하거나 재킷과 함께
      레이어드할 수 있습니다.
    `,

    specifications: {
      Power: "220V",
      색상: "화이트, 블랙, 네이비",
      사이즈: "S, M, L, XL",
      // 핏: "레귤러 핏",
      제조국: "USA",
      Warraty: "2Years",
      Weight: "약 180g",
    },

    relatedProductCodes: ["Defib-S8", "PT-001", "JK-001", "SH-001"],
  },

  {
    productCode: "Defib-S8",
    productName: "ECG",
    manufacturer: "ARGUS",
    category: " Cardiology",
    price: 29000,
    stock: 120,
    rating: 4.7,

    images: [
      "/images/Defib-S8-2.jpg",
      "/images/Defib-S8.jpg",
      "/images/ECG-1.jpg",
      "/images/Patient-Monitor-C90-1.jpg",
    ],

    description: `  Single Channel, 3 Ch, 12 Ch. ECG, PC ECG, wireless ECG, print on both Thermal paper and PC printer, Reusable Clamp, Disposable electrode, Reusable Suction cup chest electrode, rechargeable battery operation    `,

    specifications: {
      Power: "110~220 FreeVolt",
      색상: "화이트, 블랙, 네이비",
      사이즈: "S, M, L, XL",
      핏: "레귤러 핏",
      Origin: "USA",
      Size: "1200 x 600 x 900 mm",
      Weight: "약 180g",
    },

    relatedProductCodes: ["CPET-400", "PT-001", "JK-001", "SH-001"],
  },

  {
    productCode: "KN-001",
    productName: "오버핏 니트 스웨터",
    manufacturer: "Daily Mood",
    category: "Tops",
    price: 49000,
    stock: 64,
    rating: 4.8,

    images: [
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=900",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=900",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900",
    ],

    description: `
      부드러운 촉감과 여유 있는 실루엣이 특징인 오버핏 니트 스웨터입니다.
      단독 착용은 물론 셔츠와 함께 레이어드하기에도 적합한 제품입니다.

      적당한 두께감으로 봄과 가을에는 단독으로, 겨울에는 아우터 안에
      이너웨어로 활용할 수 있습니다. 어깨 라인을 자연스럽게 떨어뜨린
      오버핏 디자인으로 편안한 활동성을 제공합니다.
    `,

    specifications: {
      소재: "울 30%, 아크릴 50%, 폴리에스터 20%",
      색상: "아이보리, 그레이, 브라운",
      // 사이즈: "FREE",
      // 핏: "오버핏",
      제조국: "대한민국",
      세탁방법: "드라이클리닝 권장",
      무게: "약 450g",
    },

    relatedProductCodes: ["TS-001", "PT-001", "JK-001", "BG-001"],
  },

  {
    productCode: "PT-001",
    productName: "스트레이트 데님 팬츠",
    manufacturer: "Blue Archive",
    category: "Bottoms",
    price: 59000,
    stock: 42,
    rating: 4.6,

    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=900",
    ],

    description: `
      다양한 상의와 자연스럽게 어울리는 스트레이트 핏 데님 팬츠입니다.
      허벅지부터 밑단까지 안정적인 직선 실루엣으로 제작되어 체형에 관계없이
      편안하게 착용할 수 있습니다.

      탄탄한 데님 원단을 사용했으며, 반복 착용과 세탁을 거치면서 자연스러운
      색감과 질감이 살아나는 제품입니다.
    `,

    specifications: {
      소재: "면 98%, 폴리우레탄 2%",
      색상: "인디고, 블랙",
      사이즈: "28, 30, 32, 34, 36",
      핏: "스트레이트 핏",
      제조국: "베트남",
      세탁방법: "뒤집어서 찬물 세탁",
      무게: "약 650g",
    },

    relatedProductCodes: ["TS-001", "KN-001", "JK-001", "SH-001"],
  },

  {
    productCode: "JK-001",
    productName: "라이트 윈드브레이커",
    manufacturer: "Outdoor Lab",
    category: "Outerwear",
    price: 89000,
    stock: 28,
    rating: 4.9,

    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=900",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=900",
    ],

    description: `
      가벼운 무게와 생활 방풍 기능을 갖춘 라이트 윈드브레이커입니다.
      출퇴근, 여행, 가벼운 야외 활동 등 다양한 상황에서 편하게 착용할 수
      있도록 설계했습니다.

      소매와 밑단에는 탄력 있는 마감재를 적용하여 외부 바람의 유입을
      줄였으며, 내부에 간단한 소지품을 보관할 수 있는 포켓을 구성했습니다.
    `,

    specifications: {
      소재: "폴리에스터 100%",
      색상: "블랙, 카키, 베이지",
      사이즈: "S, M, L, XL",
      핏: "스탠다드 핏",
      제조국: "중국",
      세탁방법: "중성세제 단독 세탁",
      무게: "약 320g",
    },

    relatedProductCodes: ["TS-001", "PT-001", "BG-001", "SH-001"],
  },

  {
    productCode: "SH-001",
    productName: "데일리 캔버스 스니커즈",
    manufacturer: "Step Ground",
    category: "Shoes",
    price: 79000,
    stock: 35,
    rating: 4.5,

    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900",
      "https://images.unsplash.com/photo-1560769629-975e13f0c470?w=900",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900",
    ],

    description: `
      어느 스타일에도 잘 어울리는 데일리 캔버스 스니커즈입니다.
      쿠션감 있는 인솔과 유연한 아웃솔을 사용하여 장시간 보행 시에도
      편안한 착화감을 제공합니다.

      심플한 디자인으로 데님, 치노 팬츠, 반바지 등 다양한 하의와
      조화롭게 매치할 수 있습니다.
    `,

    specifications: {
      소재: "캔버스, 고무",
      색상: "화이트, 블랙",
      사이즈: "230, 240, 250, 260, 270, 280",
      굽높이: "약 3cm",
      제조국: "대한민국",
      세탁방법: "오염 부위 부분 세척",
      무게: "한 짝 약 350g",
    },

    relatedProductCodes: ["TS-001", "PT-001", "JK-001", "BG-001"],
  },

  {
    productCode: "BG-001",
    productName: "미니 크로스바디 백",
    manufacturer: "Minimal Carry",
    category: "Bags",
    price: 69000,
    stock: 18,
    rating: 4.4,

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=900",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900",
    ],

    description: `
      휴대폰과 지갑 등 외출에 필요한 소지품을 간편하게 수납할 수 있는
      미니 크로스바디 백입니다.

      길이 조절이 가능한 스트랩을 사용했으며, 내부 포켓을 분리하여
      작은 물건도 깔끔하게 정리할 수 있도록 구성했습니다. 가벼운 무게와
      심플한 외관으로 데일리 아이템으로 활용하기 좋습니다.
    `,

    specifications: {
      소재: "폴리에스터 100%",
      색상: "블랙, 크림, 그린",
      크기: "가로 20cm x 세로 15cm x 폭 6cm",
      스트랩: "길이 조절 가능",
      제조국: "베트남",
      수납공간: "메인 수납공간 1개, 내부 포켓 2개",
      무게: "약 260g",
    },

    relatedProductCodes: ["TS-001", "KN-001", "SH-001", "JK-001"],
  },
];

export const getProductByCode = (productCode) => {
  return productData.find((product) => product.productCode === productCode);
};

export const getRelatedProducts = (productCodes) => {
  return productData.filter((product) =>
    productCodes.includes(product.productCode),
  );
};

export default productData;
