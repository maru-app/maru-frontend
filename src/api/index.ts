export const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

interface ApiOk<Response> {
  readonly result: Response;
}

interface ApiFail {
  readonly error: {
    readonly code: string;
  };
}

export type ApiResponse<Response> = Partial<ApiOk<Response> & ApiFail>;

export const createApiFetchError = (): ApiFail => {
  return {
    error: {
      code: 'FETCH_ERROR'
    }
  };
};

export const interceptResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const data = await response.json();
  if (!response.ok) {
    return { error: { code: data.error.code } };
  }
  return data;
};
