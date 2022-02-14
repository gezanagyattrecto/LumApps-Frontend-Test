import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import appConfig from "../config";

export enum Methods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum Status {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export interface RequestConfig extends AxiosRequestConfig {
  resource: string;
  method?: Methods;
}

axios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("auth-token");

  return config;
});

axios.interceptors.response.use(
  async (response) => response.data,
  async (error: AxiosError) => {
    toast.error(error.message);
    return Promise.reject(error);
  }
);

export function generateUrl(resource: string = "") {
  return `/api/${resource}`;
}

async function request<T = void>({
  resource,
  method = Methods.GET,
  ...config
}: RequestConfig) {
  const url = generateUrl(resource);

  const defaultParams = {
    apikey: appConfig.REACT_APP_MARVEL_API_KEY,
  };

  config.params = { ...config.params, ...defaultParams };

  const requestConfig = {
    method,
    url,
    ...config,
  };

  const { data: response } = await axios.request<T>(requestConfig);

  return response;
}

export default request;
