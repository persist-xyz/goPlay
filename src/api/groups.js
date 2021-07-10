import post from "@/utils/http";

// 获取城市
export function getCurrentCity(body = {}) {
  return post("/group/getPosition", body);
}

// 圈子列表
export function getAllGroups(body = {}) {
  return post("/group/getGroups", body);
}

// 加入圈子
export function joinGroups(body = {}) {
  return post("/group/join", body);
}
