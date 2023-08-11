export interface Book {
  subscribe(arg0: (book: any) => void): unknown;
  isbn: string;
  title: string;
  authors: string[];
  published?: string;
  subtitle?: string;
  thumbnailUrl?: string;
  description?: string;
}
