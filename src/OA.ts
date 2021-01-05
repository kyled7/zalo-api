import { get, post } from "./HttpRequest";
import { 
  OaBroadcastOptions,
  OaListMessageOptions,
  OaMediaMessageOptions,
  OaMessageOptions,
  OaMessageResponse, 
  OaReplyMessageOptions, 
  OaRequestMessageOptions, 
  OaTextMessageOptions
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
export const reply_message = async(options: OaReplyMessageOptions) : Promise<OaMessageResponse> => {
  return message(options)
}

export const text_message = async(options: OaTextMessageOptions) : Promise<OaMessageResponse> => {
  return message(options)
}

export const media_message = async(options: OaMediaMessageOptions) : Promise<OaMessageResponse> => {
  return message(options)
}

export const list_message = async(options: OaListMessageOptions) : Promise<OaMessageResponse> => {
  return message(options)
}

export const request_info_message = async(options: OaRequestMessageOptions) : Promise<OaMessageResponse> => {
  return message(options)
}

export const broadcast = async(options: OaBroadcastOptions) : Promise<OaMessageResponse> => {
  return message(options)
}