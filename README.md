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
| [**Social API**](https://developers.zalo.me/docs/api/social-api-4)  |
| [Get access token](https://developers.zalo.me/docs/api/social-api/tham-khao/user-access-token-post-4316) | [Social.access_token()](#get-access-token) | :white_check_mark: |
| [Send message to friend](https://developers.zalo.me/docs/api/social-api/tai-lieu/gui-tin-nhan-toi-ban-be-post-1183) | [Social.message()](#send-message) | :white_check_mark: |
| [Invite friend](https://developers.zalo.me/docs/api/social-api/tai-lieu/moi-su-dung-ung-dung-post-41) | [Social.app_request()](#invite-friend) | :white_check_mark: |
| [Post feed](https://developers.zalo.me/docs/api/social-api/tai-lieu/dang-bai-viet-post-39) | [Social.feed()](#post-feed) | :white_check_mark: |
| [List friends](https://developers.zalo.me/docs/api/social-api/tai-lieu/danh-sach-ban-be-post-34) | [Social.friends()](#get-friends) | :white_check_mark: |
| [Invitable friends](https://developers.zalo.me/docs/api/social-api/tai-lieu/danh-sach-ban-be-post-34) | [Social.invitable_friends()](#invitable-friends) | :white_check_mark: |
| [Get profile](https://developers.zalo.me/docs/api/social-api/tai-lieu/thong-tin-nguoi-dung-post-28) | [Social.profile()](#get-profile) | :white_check_mark: |
| [**Official Account API**](https://developers.zalo.me/docs/api/official-account-api-147) |
| [Reply follower's message](https://developers.zalo.me/docs/api/official-account-api/api/gui-tin-phan-hoi-nguoi-dung-post-4877) |  | :white_square_button: |
| [Send message](https://developers.zalo.me/docs/api/official-account-api/api/gui-tin-nhan-post-2343) | [OA.message()](#oa-message) | :white_check_mark: |
| [Broadcast](https://developers.zalo.me/docs/api/official-account-api/api/broadcast-bai-viet-post-4005) | [OA.message()](#broadcast) | :white_check_mark: |
| [Update follower info](https://developers.zalo.me/docs/api/official-account-api/api/cap-nhat-thong-tin-nguoi-quan-tam-post-3278) |  | :white_square_button: |
| [Register IP](https://developers.zalo.me/docs/api/official-account-api/api/dang-ky-su-dung-ip-post-2589) |  | :white_square_button: |
| [Get follower's info](https://developers.zalo.me/docs/api/official-account-api/api/lay-thong-tin-post-2570) |  | :white_square_button: |
| [Upload image/file](https://developers.zalo.me/docs/api/official-account-api/api/upload-post-2568) |  | :white_square_button: |
| [Get/assign/remove tags](https://developers.zalo.me/docs/api/official-account-api/api/nhan-post-2564) |  | :white_square_button: |
| [**Official Account API**](https://developers.zalo.me/docs/api/official-account-api-147) |


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
