import post from "@/utils/http";

// 授权登录
export function authorizeLogin(body = {}) {
  return post("/user/login", body);
}

// 我的发布
export function myPublishAct(body = {}) {
  return post("/personal/getMyPost", body);
}
