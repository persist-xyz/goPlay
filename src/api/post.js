import post from "@/utils/http";

// 所有活动
export function getALLPost(body = {}) {
  return post("/post/getHotPost", body);
}

// 创建活动
export function createActivity(body = {}) {
  return post("/post/addPost", body);
}

// 活动详情
export function getActivityInfo(body = {}) {
  return post("/post/getInfo", body);
}

// 加入活动
export function joinActivity(body = {}) {
  return post("/post/join", body);
}

// 圈子活动
export function getPostByGroupType(body = {}) {
  return post("/post/getPostByGroupType", body);
}
