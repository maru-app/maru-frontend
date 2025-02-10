export interface ApiResponse<T> {
  result?: T;
  error?: {
    code: string;
  };
}
