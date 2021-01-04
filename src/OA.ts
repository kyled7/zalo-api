import { get, post } from "./HttpRequest";
import { 
  OaMessageOptions,
  OaMessageResponse 
} from "./types";

export const message = async(options: OaMessageOptions) : Promise<OaMessageResponse> => {
  return new Promise((resolve, reject) => {
    const { access_token, ...data } = options;
    post('https://openapi.zalo.me/v2.0/oa/message',{
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}