export type IPaginatedResponse<T> = {
  results: T[];
  total: number;
  page: number;
  limit: number;
};
