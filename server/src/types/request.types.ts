import type { Request } from "express";

export type GetOneRequest = Request<{ id?: string }>;
export type CreateRequest<T> = Request<{}, {}, T>;
export type UpdateRequest<T> = Request<{ id?: string }, {}, Partial<T>>;
