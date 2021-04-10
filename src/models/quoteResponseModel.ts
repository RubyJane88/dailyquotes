export interface Pagination {
  currentPage: number;
  nextPage: number;
  totalPages: number;
}

export interface Datum {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}

export interface quoteResponseModel {
  statusCode: number;
  message: string;
  pagination: Pagination;
  totalQuotes: number;
  data: Datum[];
}
