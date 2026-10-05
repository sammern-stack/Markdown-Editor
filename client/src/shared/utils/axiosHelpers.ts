// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { AxiosFn, RequestFn } from "@/types/api.types";

// ——— Utility —————————————————————————————————————————————————————————————————————————————————————
export const axiosCall = async <T>(fn: AxiosFn<T>): RequestFn<T> => {
  try {
    const { data } = await fn();
    return { ...data };
  } catch (err) {
    console.log("Error:", err);
    return {
      ok: false,
      message: `An unexpected error occurred: ${err}`,
    };
  }
};
