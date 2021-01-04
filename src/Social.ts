import { get, post } from "./HttpRequest";
import { 
  AccessTokenOptions, 
  AccessTokenResponse, 
  AppRequestOptions, 
  AppRequestResponse, 
  FeedOptions, 
  FeedResponse, 
  FriendsOptions, 
  FriendsResponse, 
  ProfileOptions, 
  ProfileResponse,
  SocialMessageOptions,
  SocialMessageResponse
} from "./types";


export const access_token = async(options: AccessTokenOptions) : Promise<AccessTokenResponse> => {
  return new Promise((resolve, reject) => {
    get('https://oauth.zaloapp.com/v3/access_token', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const profile = async (options: ProfileOptions) : Promise<ProfileResponse> => {
  const {access_token, fields='id,birthday,name,gender,picture'} = options;
  return new Promise((resolve, reject) => {
    get('https://graph.zalo.me/v2.0/me', {
      params: {
        access_token,
        fields
      }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  });
}

export const friends = async (options: FriendsOptions) : Promise<FriendsResponse> => {
  return new Promise((resolve, reject) => {
    get('https://graph.zalo.me/v2.0/me/friends', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  });
}

export const invitable_friends = async (options: FriendsOptions) : Promise<FriendsResponse> => {
  return new Promise((resolve, reject) => {
    get('https://graph.zalo.me/v2.0/me/invitable_friends', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  });
}

export const message = async (options: SocialMessageOptions) : Promise<SocialMessageResponse> => {
  return new Promise((resolve, reject) => {
    post('https://graph.zalo.me/v2.0/me/message', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const app_request = async (options: AppRequestOptions) : Promise<AppRequestResponse> => {
  return new Promise((resolve, reject) => {
    post('https://graph.zalo.me/v2.0/apprequests', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}

export const feed = async (options: FeedOptions) : Promise<FeedResponse> => {
  return new Promise((resolve, reject) => {
    post('https://graph.zalo.me/v2.0/apprequests', {
      params: { ...options }
    })
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
}
