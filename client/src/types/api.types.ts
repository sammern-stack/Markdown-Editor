export type ApiResponse<T> =
  | { ok: true; message: string; data: T; meta?: unknown }
  | { ok: false; message: string };

export type RequestFn<T> = Promise<ApiResponse<T>>;
export type AxiosFn<T> = () => Promise<{ data: ApiResponse<T> }>;
