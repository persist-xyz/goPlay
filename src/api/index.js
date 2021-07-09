import post from "@/utils/http";

// 首页列表
export function indexInfo(body = {}) {
  return post("/resource-orchestration-system/bookPortal/v102/forApp", body);
}
