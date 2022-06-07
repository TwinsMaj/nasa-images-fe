export type Image = {
  href: string;
  desciption: string;
  title: string;
};

export type SearchResult = {
  searchText: string;
  images: Image[];
  isPagesLeft: boolean;
  currentPage: number;
};

export type Action = {
  type: string;
  payload: Record<string, any>;
};
