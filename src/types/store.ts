export interface Store {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  website?: string;
  hours: string;
  isOpen: boolean;
  rating: number;
  reviewCount: number;
  images: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  storeId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
