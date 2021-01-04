import axios from "axios";

interface RequestOptions {
  params?: any,
  data?: any,
  headers?: any
}

export const get = async (url: string, options?: RequestOptions): Promise<any> => {
  return axios.request({
    method: "GET",
    url,
    ...options
  })
}
export const post = async (url: string, options?: RequestOptions): Promise<any> => {
  return axios.request({
    method: "POST",
    url,
    ...options
  })
}