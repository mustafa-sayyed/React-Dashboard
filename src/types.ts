export interface Book {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  rating: {
    average: number;
  };
  authors: [
    {
      id: number;
      name: string;
    }
  ];
}
