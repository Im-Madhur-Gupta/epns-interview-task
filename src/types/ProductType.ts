type ProductType = {
  id: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  description: string;
  image: string;
};

export default ProductType;
