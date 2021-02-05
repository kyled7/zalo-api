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
type OaBaseResponse = {
  error: number,
  message: string
}
interface OaBaseResponseWithData<T> {
  error: number,
  message: string,
  data: T
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
export type OaMessageResponse = OaBaseResponseWithData<{
  message_id: string
}>

export type OaTextMessageOptions = OaMessageFactory<MessageRecipientTypes, TextMessage>
export type OaMediaMessageOptions = OaMessageFactory<MessageRecipientTypes, MediaTemplateMessage>
export type OaListMessageOptions = OaMessageFactory<MessageRecipientTypes, ListTemplateMessage>
export type OaFileMessageOptions = OaMessageFactory<MessageRecipientTypes, FileMessage>
export type OaRequestMessageOptions = OaMessageFactory<MessageRecipientTypes, RequestInfoTemplateMessage>
export type OaBroadcastOptions = OaMessageFactory<BroadcastRecipient, MediaTemplateMessage>
export type OaReplyMessageOptions = OaMessageFactory<ReplyMessageRecipient, AllMessageTypes>

/** OA IPs */
export interface OaManageIpOptions extends BaseOptions {
  ip: string,
  name: string
}
export type OaManageIpResponse = OaBaseResponse

/** OA Get infos */
export interface OaGetFollowersOptions extends BaseOptions {
  data: {
    offset: number,
    count: number
  }
}
export type OaGetFollowersResponse = OaBaseResponseWithData<{
  total: number,
  followers: [{
    user_id: string
  }]
}>

export interface OaGetProfileOptions extends BaseOptions {
  data: {
    user_id: string
  }
}
export type OaGetProfileResponse = OaBaseResponseWithData<{
  user_gender: number,
  user_id: number,
  user_id_by_app: number,
  avatar: string,
  avatars: {
    120: string,
    240: string
  },
  display_name: string,
  birth_date: number,
  shared_info: string,
  tags_and_notes_info: {
    tags_name: [any],
    notes: [any]
  }
}>

export interface OaGetInfoOptions extends BaseOptions {}
export type OaGetInfoResponse = OaBaseResponseWithData<{
  oa_id: number,
  description: string,
  name: string,
  avatar: string,
  cover: string
}>

type OaChatData = {
  msg_id: string,
  src: number,
  time: number,
  type: string,
  message: string,
  links: string,
  thumb: string,
  url: string,
  description: string,
  from_id: string,
  to_id: string,
  from_display_name: string,
  from_avatar: string,
  to_display_name: string,
  to_avatar: string,
  location: string
}
export interface OaGetRecentChatOptions extends OaGetFollowersOptions {}
export type OaGetRecentChatResponse = OaBaseResponseWithData<[OaChatData]>

export interface OaGetConversationOptions extends OaListMessageOptions {
  user_id: number
}
export type OaGetConversationResponse = OaGetRecentChatResponse

/** OA Update follower info */
export interface OaUpdateFollowerInfoOptions extends BaseOptions {
  user_id: number,
  name: string,
  phone: string,
  address: string,
  city_id: number,
  district_id: number
}
export type OaUpdateFollowerInfoReponse = OaBaseResponse

/** OA upload APIs */
export interface OaUploadOptions extends BaseOptions {
  file: BinaryType
}
export type OaUploadImageResponse = OaBaseResponseWithData<{
  attachment_id: string
}>
export type OaUploadFileResponse = OaBaseResponseWithData<{
  token: string
}>

/** OA Tags management APIs */
export type OaListTagsOptions = BaseOptions
export type OaListTagsResponse = OaBaseResponseWithData<[string]>
export interface OaManageTagOptions extends BaseOptions {
  tag_name: string
}
export interface OaManageFollowerTagOptions extends OaManageTagOptions {
  user_id: number
}
export type OaManageTagResponse = OaBaseResponse