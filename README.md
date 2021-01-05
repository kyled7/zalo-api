# Zalo API
Integrate with Zalo API easily. Support typescript with types of request and response following Zalo documentation.

# Getting started
Install with npm
```
npm i zalo-api
```
or yarn
```
yarn add zalo-api
```

# Zalo API mapping
| Zalo docs | This library | Status |
|:-|:-|:-:|
| [**Social API**](https://developers.zalo.me/docs/api/social-api-4) |
| [Get access token](https://developers.zalo.me/docs/api/social-api/tham-khao/user-access-token-post-4316) | [Social.access_token()](#get-access-token) | :white_check_mark: |
| [Send message to friend](https://developers.zalo.me/docs/api/social-api/tai-lieu/gui-tin-nhan-toi-ban-be-post-1183) | [Social.message()](#send-message) | :white_check_mark: |
| [Invite friend](https://developers.zalo.me/docs/api/social-api/tai-lieu/moi-su-dung-ung-dung-post-41) | [Social.app_request()](#invite-friend) | :white_check_mark: |
 [Post feed](https://developers.zalo.me/docs/api/social-api/tai-lieu/dang-bai-viet-post-39) | [Social.feed()](#post-feed) | :white_check_mark: |
| [List friends](https://developers.zalo.me/docs/api/social-api/tai-lieu/danh-sach-ban-be-post-34) | [Social.friends()](#get-friends) | :white_check_mark: |
| [Invitable friends](https://developers.zalo.me/docs/api/social-api/tai-lieu/danh-sach-ban-be-post-34) | [Social.invitable_friends()](#invitable-friends) | :white_check_mark: |
| [Get profile](https://developers.zalo.me/docs/api/social-api/tai-lieu/thong-tin-nguoi-dung-post-28) | [Social.profile()](#get-profile) | :white_check_mark: |
| [**Official Account API**](https://developers.zalo.me/docs/api/official-account-api-147) |
| [Reply follower's message](https://developers.zalo.me/docs/api/official-account-api/api/gui-tin-phan-hoi-nguoi-dung-post-4877) | [OA.reply_message()](#oa-reply-message) | :white_check_mark: |
| [Send message](https://developers.zalo.me/docs/api/official-account-api/api/gui-tin-nhan-post-2343) | [OA.message()](#oa-message) <br/> *Shortcut APIs:* <br/> [OA.text_message()](#oa-text-message) <br/> [OA.media_message()](#oa-media-message) <br/> [OA.list_message()](#oa-textlist-message) <br/> [OA.request_info_message()](#oa-request-user-info-message) | :white_check_mark: |
| [Broadcast](https://developers.zalo.me/docs/api/official-account-api/api/broadcast-bai-viet-post-4005) | [OA.broadcast()](#broadcast) | :white_check_mark: |
| [Update follower info](https://developers.zalo.me/docs/api/official-account-api/api/cap-nhat-thong-tin-nguoi-quan-tam-post-3278) |  | :white_square_button: |
| [Register IP](https://developers.zalo.me/docs/api/official-account-api/api/dang-ky-su-dung-ip-post-2589) |  | :white_square_button: |
| [Get follower's info](https://developers.zalo.me/docs/api/official-account-api/api/lay-thong-tin-post-2570) |  | :white_square_button: |
| [Upload image/file](https://developers.zalo.me/docs/api/official-account-api/api/upload-post-2568) |  | :white_square_button: |
| [Get/assign/remove tags](https://developers.zalo.me/docs/api/official-account-api/api/nhan-post-2564) |  | :white_square_button: |
| [**Shop API**](https://developers.zalo.me/docs/api/shop-api-124)|
| [Attributes type CRUD](https://developers.zalo.me/docs/api/shop-api/api/thuoc-tinh-post-2993) |  | :white_square_button: |
| [Upload photo](https://developers.zalo.me/docs/api/shop-api/api/tai-anh-len-post-2951) |  | :white_square_button: |
| [Get industry](https://developers.zalo.me/docs/api/shop-api/api/lay-industry-id-post-2944) |  | :white_square_button: |
| [Category](https://developers.zalo.me/docs/api/shop-api/api/danh-muc-post-2642) |  | :white_square_button: |
| [Create order](https://developers.zalo.me/docs/api/shop-api/api/tao-don-hang-post-2588) |  | :white_square_button: |
| [Manage order](https://developers.zalo.me/docs/api/shop-api/api/don-hang-post-2552) |  | :white_square_button: |
| [Products](https://developers.zalo.me/docs/api/shop-api/api/san-pham-post-2421) |  | :white_square_button: |
| [**Article API**](https://developers.zalo.me/docs/api/article-api-151)|
| [Create article](https://developers.zalo.me/docs/api/article-api/api/tao-bai-viet-post-2756) |  | :white_square_button: |
| [Upload video for article](https://developers.zalo.me/docs/api/article-api/api/tai-len-video-cho-article-post-3007) |  | :white_square_button: |
| [Get article ID](https://developers.zalo.me/docs/api/article-api/api/lay-id-bai-viet-post-2977) |  | :white_square_button: |
| [Get article details](https://developers.zalo.me/docs/api/article-api/api/lay-chi-tiet-cua-bai-viet-post-2936) |  | :white_square_button: |
| [Get list articles](https://developers.zalo.me/docs/api/article-api/api/lay-danh-sach-bai-viet-post-2930) |  | :white_square_button: |
| [Delete article](https://developers.zalo.me/docs/api/article-api/api/xoa-bai-viet-post-2927) |  | :white_square_button: |
| [Update article](https://developers.zalo.me/docs/api/article-api/api/cap-nhat-bai-viet-post-2925) |  | :white_square_button: |


# Using Zalo API integration
## Social API
### Get access token
Parameters
```typescript
{
  app_id: string,
  app_secret: string,
  code: string,
  redirect_uri?: string
}
```
Return
```typescript
{
  access_token: string,
  expires_in: number
}
```

Example
```typescript
import { Social } from 'zalo-api';

const access_token = Social.access_token({
  app_id: 'your_app_id', // process.env.zalo_app_id
  app_secret: 'your_app_secret', // process.env.zalo_app_secret
  code: 'your_oauth_code', // refer document here https://developers.zalo.me/docs/api/social-api/tham-khao/user-access-token-post-4316
})
```


## Official Account API

### OA Message
Send generic message with all available parameters
Parameters
```typescript
{
  access_token: string,
  recipient: {
    message_id?: string,
    user_id?: string,
    target?: {}
  },
  message: {
    text?: string,
    attachment?: {
      type: 'template' | 'file',
      payload: {
        template_type?: 'list' | 'media' | 'request_user_info'
        elements?: {} //Depends on types
        buttons?: {}
        ...
      } 
    }
  }
}
```
Return (same for all message API)
```typescript
{
  error?: number,
  message: string,
  data?: {
    message_id: string
  }
}
```

Example
```typescript
import { OA } from 'zalo-api';

const access_token = OA.message({
  access_token: 'your_oa_access_token', // https://developers.zalo.me/docs/api/official-account-api/phu-luc/official-account-access-token-post-4307
  recipient: {
    user_id: 'user_id'
  }
  message: {
    text: 'Hello Zalo API'
  }
})
```
