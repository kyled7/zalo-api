import { get, post } from "./HttpRequest";
import { 
  OaBroadcastOptions,
  OaGetConversationOptions,
  OaGetConversationResponse,
  OaGetFollowersOptions,
  OaGetFollowersResponse,
  OaGetInfoOptions,
  OaGetInfoResponse,
  OaGetRecentChatOptions,
  OaGetRecentChatResponse,
  OaListMessageOptions,
  OaListTagsOptions,
  OaListTagsResponse,
  OaManageFollowerTagOptions,
  OaManageIpOptions,
  OaManageIpResponse,
  OaManageTagOptions,
  OaManageTagResponse,
  OaMediaMessageOptions,
  OaMessageOptions,
  OaMessageResponse, 
  OaReplyMessageOptions, 
  OaRequestMessageOptions, 
  OaTextMessageOptions,
  OaUpdateFollowerInfoOptions,
  OaUpdateFollowerInfoReponse,
  OaUploadImageResponse,
  OaUploadOptions
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

export const register_ip = async(options: OaManageIpOptions) : Promise<OaManageIpResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/registerip', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const remove_ip = async(options: OaManageIpOptions) : Promise<OaManageIpResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/removeip', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const get_followers = async(options: OaGetFollowersOptions) : Promise<OaGetFollowersResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/getfollowers', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const get_profile = async(options: OaGetFollowersOptions) : Promise<OaGetFollowersResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/getprofile', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const get_info = async(options: OaGetInfoOptions) : Promise<OaGetInfoResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/getoa', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const get_recent_chat = async(options: OaGetRecentChatOptions) : Promise<OaGetRecentChatResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/listrecentchat', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const get_conversation = async(options: OaGetConversationOptions) : Promise<OaGetConversationResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/listrecentchat', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const update_follower_info = async(options: OaUpdateFollowerInfoOptions) : Promise<OaUpdateFollowerInfoReponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/removeip', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const upload_image = async(options: OaUploadOptions) : Promise<OaUploadImageResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/upload/image', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const upload_gif = async(options: OaUploadOptions) : Promise<OaUploadImageResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/upload/gif', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const upload_file = async(options: OaUploadOptions) : Promise<OaUploadImageResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/upload/file', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const list_tags = async(options: OaListTagsOptions) : Promise<OaListTagsResponse> => {
  return new Promise((resolve, reject) => {
    get('https://openapi.zalo.me/v2.0/oa/tag/gettagsofoa', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const assign_tag = async(options: OaManageFollowerTagOptions) : Promise<OaManageTagResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/tag/tagfollower', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const remove_follower_tag = async(options: OaManageFollowerTagOptions) : Promise<OaManageTagResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/tag/rmfollowerfromtag', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
export const delete_tag = async(options: OaManageTagOptions) : Promise<OaManageTagResponse> => {
  return new Promise((resolve, reject) => {
    const {access_token, ...data} = options;
    post('https://openapi.zalo.me/v2.0/oa/tag/rmtag', {
      params: {
        access_token
      },
      data
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}