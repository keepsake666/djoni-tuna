export interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  onAddToCart: () => void;
}
