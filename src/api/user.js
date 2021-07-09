import post from "@/utils/http";

// 授权登录
export function authorizeLogin(body = {}) {
  return post("/mini-orch/wx/login/v100/validationAuthorize", body);
}
