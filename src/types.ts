interface BaseOptions {
  /* Access token for most of API requests */
  access_token: string;
}

interface PagingResponse<T> {
  data: [T]
  paging: {
    next?: string,
    previous?: string
  },
  summary: {
    total_count: number
  }
}

// ================ Social API types ================
export type AccessTokenOptions = {
  app_id: string,
  app_secret: string,
  code: string,
  redirect_uri?: string
}
export type AccessTokenResponse = {
  access_token: string,
  expires_in: number
}

export interface ProfileOptions extends BaseOptions {
  fields?: string;
}
export type ProfileResponse = {
  id?: string;
  name?: string;
  gender?: string,
  birthday?: string,
  picture?: {
    data: {
      url: string
    }
  }
}

export interface FriendsOptions extends ProfileOptions {
  limit: number,
  offset: number
}
export type FriendsResponse = PagingResponse<ProfileResponse>

export interface SocialMessageOptions extends BaseOptions {
  message: string,
  link?: string,
  to: string
}
export type SocialMessageResponse = {
  to: string
}

export interface AppRequestOptions extends BaseOptions {
  message: string,
  to: string
}
export type AppRequestResponse = {
  to: [string]
}

export interface FeedOptions extends BaseOptions {
  message: string,
  link: string
}
export type FeedResponse = {
  id: string
}

// ================ OA API types ================
interface OaMessageFactory<RT, MT> extends BaseOptions {
  recipient: RT
  message: MT
}

/** Message recipient types */
type ReplyMessageRecipient = {
  message_id: string
}
type SendMessageRecipient = {
  user_id: string
}
type BroadcastRecipient = {
  target: {
    ages?: string,
    gender?: string,
    locations?: string,
    cities?: string,
    platforms?: string,
    telcos?: string
  }
}

type MessageRecipientTypes = ReplyMessageRecipient | SendMessageRecipient
type AllRecipientTypes = MessageRecipientTypes | BroadcastRecipient

/** Mesage configs */
type UrlOpenAction = {
  type: 'oa.open.url',
  url: string
}
type QueryShowHideAction = {
  type: 'oa.query.show' | 'oa.query.hide',
  payload: string
}
type SmsOpenAction = {
  type: 'oa.open.sms',
  payload: {
    content: string,
    phone_code: string
  }
}
type PhoneOpenAction = {
  type: 'oa.open.phone',
  payload: {
    phone_code: string
  }
}
type ListElementsOptions = {
  title: string,
  subtitle?: string,
  image_url?: string,
  default_action?: UrlOpenAction | QueryShowHideAction | SmsOpenAction | PhoneOpenAction
}

type ButtonsOptions = {
  title: string,
  type: 'oa.open.url' | 'oa.query.show' | 'oa.query.hide' | 'oa.open.sms' | 'oa.open.phone',
  payload: string | {
    url: string
  } | {
    phone_code: string,
    content?: string
  }
}

/** Message types */
interface TextMessage {
  text: string
}
interface TemplateMessage<T> extends TextMessage {
  attachment: {
    type: 'template',
    payload: T
  },
}
type ListTemplateMessage = TemplateMessage<{
  template_type: 'list',
  elements?: [ListElementsOptions],
  buttons?: [ButtonsOptions],
}>
type MediaTemplateMessage = TemplateMessage<{
  template_type: 'media',
  elements: [{
    media_type: string,
    attachment_id: string,
    width?: number,
    height?: number
  }]
}>
type RequestInfoTemplateMessage = TemplateMessage<{
  template_type: 'request_user_info',
  elements: [ListElementsOptions]
}>

type FileMessage = {
  attachment: {
    type: 'file',
    payload: {
      token: string
    }
  }
}

type AllMessageTypes = TextMessage | ListTemplateMessage | MediaTemplateMessage | RequestInfoTemplateMessage | FileMessage

export type OaMessageOptions = OaMessageFactory<AllRecipientTypes, AllMessageTypes>
export type OaMessageResponse = {
  error?: number,
  message: string,
  data?: {
    message_id: string
  }
}

export type OaTextMessageOptions = OaMessageFactory<MessageRecipientTypes, TextMessage>
export type OaMediaMessageOptions = OaMessageFactory<MessageRecipientTypes, MediaTemplateMessage>
export type OaListMessageOptions = OaMessageFactory<MessageRecipientTypes, ListTemplateMessage>
export type OaFileMessageOptions = OaMessageFactory<MessageRecipientTypes, FileMessage>
export type OaRequestMessageOptions = OaMessageFactory<MessageRecipientTypes, RequestInfoTemplateMessage>
export type OaBroadcastOptions = OaMessageFactory<BroadcastRecipient, MediaTemplateMessage>
export type OaReplyMessageOptions = OaMessageFactory<ReplyMessageRecipient, AllMessageTypes>