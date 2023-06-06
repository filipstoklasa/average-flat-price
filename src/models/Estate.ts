export interface Estate {
  labelsReleased: Array<Array<string>>;
  has_panorama: number;
  labels: Array<string>;
  is_auction: boolean;
  labelsAll: Array<Array<string>>;
  seo: {
    category_main_cb: number;
    category_sub_cb: number;
    category_type_cb: number;
    locality: "praha-bohnice-cimicka";
  };
  exclusively_at_rk: number;
  category: number;
  has_floor_plan: number;
  _embedded: {
    favourite: {
      is_favourite: boolean;
      _links: {
        self: {
          profile: string;
          href: string;
          title: string;
        };
      };
    };
    note: {
      note: string;
      _links: {
        self: {
          profile: string;
          href: string;
          title: string;
        };
      };
      has_note: false;
    };
    company: {
      url: string;
      id: number;
      name: string;
      logo_small: string;
    };
  };
  paid_logo: number;
  locality: string;
  has_video: boolean;
  advert_images_count: number;
  new: boolean;
  auctionPrice: number;
  type: number;
  hash_id: number;
  attractive_offer: number;
  price: number;
  price_czk: {
    value_raw: number;
    unit: string;
    name: string;
  };
  _links: {
    dynamicDown: Array<{ href: string }>;
    dynamicUp: Array<{ href: string }>;
    iterator: { href: string };
    self: { href: string };
    images: Array<{ href: string }>;
    image_middle2: Array<{ href: string }>;
  };
  rus: boolean;
  name: string;
  region_tip: number;
  gps: {
    lat: number;
    lon: number;
  };
  has_matterport_url: boolean;
}
