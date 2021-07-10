import Taro from "@tarojs/taro";
import {
  BASE_URL,
  BASE_URL_MINIAPP,
  BASE_URL_APP,
  StateCode,
} from "@/constants/api";
import { getStorageData, setStorageData, removeStorageData } from "@/service";
import { showToast, showLoading, hideLoading, jump } from "@/utils";

/**
 * 封装网络请求
 * @param {*} options
 */
async function fetch(options) {
  const {
    method = "GET",
    url,
    isBase = true,
    isApp = false,
    payload,
    query,
    loading = true,
  } = options;

  let _url =
    (isBase ? BASE_URL : isApp ? BASE_URL_APP : BASE_URL_MINIAPP) + url;

  const token = getStorageData("token") || undefined;

  const header = {};
  if (method === "POST") {
    header["content-type"] = "application/json";
    header["X-DUSHU-APP-MUID"] = getUUID();
    header["X-DUSHU-APP-DEVID"] = getUUID();
    header["X-DUSHU-APP-PLT"] = url === "/pay/alipayCreate" ? "0" : "5";
    header["X-DUSHU-APP-VER"] = "1.0.0";
    header["X-DUSHU-APP-CHN"] = "mini-alipay";
  }

  if (query) {
    _url = `${_url}/${payload.id}`;
  }

  if (loading) {
    showLoading("正在加载");
  }

  return Taro.request({
    url: _url,
    method,
    data: {
      token,
      ...payload,
    },
    header,
    dataType: url === "/pay/alipayCreate" ? "text" : "json",
  })
    .then(async (response) => {
      let res = response;

      if (url === "/pay/alipayCreate") {
        const _data = `'${response?.data}'`;
        const status = _data.match(/"status":(\S*)/)?.[1]?.split(",")[0];

        if (String(status) === "1") {
          const orderNumber = _data
            .match(/"orderNumber":(\S*)/)?.[1]
            ?.split(",")[0];
          const params = _data.match(/"params":(\S*)/)?.[1]?.split(",")[0];

          console.log(orderNumber, params, "--orderNumber");

          res = {
            data: {
              orderNumber,
              params: params?.substring(1, params.length - 1),
            },
          };

          console.log(res, response, "--res");
        } else {
          const message = _data.match(/"message":(\S*)/)?.[1].split(",")[0];

          removeStorageData("userInfo");
          removeStorageData("token");
          removeStorageData("userId");
          removeStorageData("orderNumber");
          removeStorageData("mobile");

          res = {
            data: {
              msg: message,
              status,
            },
          };
        }
      }

      // hideLoading();
      const { data } = res;

      if (
        data.status === "0000" ||
        data.statusCode === StateCode.CODE_SUCCESS
      ) {
        return data;
      } else {
        if (
          data.status === "0001" ||
          data.status === "0003" ||
          data.status === "0017"
        ) {
          showToast("登录失效，请重新登录～");

          jump({
            // url: "/pages/login/login",
          });
        } else {
          data.msg && showToast(data.msg);
        }

        return data;
      }
    })
    .catch((err) => {
      // hideLoading();
      const defaultMsg = "网络异常";
      showToast(err.message || defaultMsg);

      return Promise.reject({ message: defaultMsg, ...err });
    });
}

export function createAction(options) {
  const { method, url, type, payload, isBase, isApp, fetchOptions, cb } =
    options;

  return fetch({ url, payload, method, isBase, isApp, ...fetchOptions }).then(
    (res) => {
      return res;
    }
  );
}

function getUUID() {
  let UUID = getStorageData("UUID");

  if (!UUID) {
    UUID = "" + Date.now() + Math.floor(Math.random() * 1e7);
  }

  setStorageData("UUID", UUID);

  return UUID;
}
