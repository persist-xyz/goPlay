import Taro from "@tarojs/taro";
export default function isAuthrization(scopeName, scopeTip) {
  return new Promise(async (resolve, reject) => {
    let res = await Taro.getSetting();
    // 判断是不是第一次提示授权
    if (scopeName in res.authSetting) {
      if (!res.authSetting[scopeName]) {
        // 未授权情况
        let res2 = await Taro.showModal({
          title: "温馨提示",
          content: scopeTip
        });
        if (res2.confirm) {
          try {
            await Taro.openSetting();
          } catch (err) {
            console.log(err);
            reject();
          }
          // 这里不能执行resolve()  不然到设置界面就会执行后面  而不是到设置界面开启权限才执行
        }
        reject();
      }
    }
    resolve();
  });
}
