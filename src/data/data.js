const img = (id) => `/images/${id}`;

const P = (name, id, sub) => ({
  name,
  brand: "GE",
  category: "Cardiology",
  subCategory: sub,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  image: img(id),
});

export const company = [
  { label: "HOME", path: "/" },
  { label: "COMPANY PROFILE", path: "/about" },
  { label: "BRANCH LOCATION", path: "/map" },
  { label: "BRANDS", path: "/brands" },
  { label: "CONTACT", path: "/contact" },
];

//  business 목록을 수정하면 메뉴에 자동 적용 됨!!
// Product의 subCategories 만 ProductData의 category와 맞춰 줘야 함!!
export const business = {
  Product: {
    label: "Products",
    color: "#33a76e",
    path: "/product",
    subCategories: [
      { label: "Cardiology", path: "/product/cardiology" },
      { label: "Emergency", path: "/product/emergency" },
      { label: "Gastrology", path: "/product/gastrology" },
      { label: "Nutrition & Diabetic", path: "/product/nutrition-diabetic" },
    ],
  },
  //
  Support: {
    label: "Support",
    color: "#81cff4",
    path: "/supports",
    subCategories: [
      { label: "New_Op_Room", path: "/new-op-room" },
      { label: "Upgrade_OldSystem", path: "/upgrade-oldsystem" },
      { label: "Consulting", path: "/consulting" },
      { label: "Technical Support", path: "/technical-support" },
    ],
  },

  Service: {
    label: "Service",
    color: "#7b3886",
    path: "/services",
    subCategories: [
      { label: "Maintenance", path: "/services/maintenance" },
      { label: "REPAIR", path: "/services/repair" },
      { label: "Custom Service", path: "/services/custom-service" },
    ],
  },

  AfterService: {
    label: "After Service",
    color: "#f1a11f",
    path: "/afterservice",
    subCategories: [
      { label: "buy back", path: "/as/buyback" },
      { label: "re-call", path: "/as/recall" },
    ],
  },
};

export const gallery = [
  img("/Defib-S8.jpg"),
  img("/Cardiology/cpet_bike.jpg"),
  img("/Cardiology/ec_3000_0.jpg"),
  img("/ECG-1.jpg"),
];
export const detail = (name, slug) => ({
  name: name || slug,
  slug,
  brand: "GE",
  price: "₩1,999,000",
  description:
    "Three channel Digital Holter with short wire for 7 days recording",
  features: [
    "고급 소재 사용",
    "실용적인 디자인",
    "데일리 스타일링",
    "정제된 마감",
  ],
  images: gallery,
  relatedProducts: [
    { name: "Classic Tote", slug: "classic-tote", image: gallery[0] },
    { name: "Daily Tote", slug: "daily-tote", image: gallery[1] },
    { name: "City Backpack", slug: "city-backpack", image: gallery[2] },
  ],
});

export const products = {
  subCategories: {
    Cardiology: [
      P("CPET-400", "/images/Defib-S8.jpg", "GE"),
      P("Daily Tote", "photo-1594223274512-ad4803739b7c", "SIEMENS"),
      P("Soft Tote", "photo-1584917865442-de89df76afd3", "SAMSUNG"),
    ],
    Emergency: [
      P("Mini Shoulder1", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder2", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini Shoulder3", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic 4", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini 5", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic 6", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini 7", "photo-1584917865442-de89df76afd3", "Shoulder"),

      P("Classic 8", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Classic 9", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini 10", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("11 Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini 12", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("14 Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Gastrology: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic 21", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Classic 22", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("Mini 23", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic 23", "photo-1548036328-c9fa89d128fa", "Shoulder"),
      P("25 Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic 26", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Nutrition_Diabetic: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Operating_Room: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Pediatric: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Radiology: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Recovery_Room: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
    Uncategorized: [
      P("Mini Shoulder", "photo-1584917865442-de89df76afd3", "Shoulder"),
      P("Classic Shoulder", "photo-1548036328-c9fa89d128fa", "Shoulder"),
    ],
  },
};
