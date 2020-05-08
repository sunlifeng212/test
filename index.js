const { SyncHook, AsyncSeriesHook } = require("tapable")
// const hook = new SyncHook(["arg1", "arg2", "arg3"])
// hook.tap("hook1", (arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3)
// })
// hook.call(1, 2, 3)
class A {
    constructor() {
        this.hooks = {
            jiasu: new SyncHook(["jiasu"]),
            shache: new SyncHook(["shache"]),
            yibu: new AsyncSeriesHook(["s", "ss", "ee"])
        }
    }
}
var democar = new A()
democar.hooks.jiasu.tap("jiasu", (respon) => {
    console.log(respon)
})
democar.hooks.yibu.tapPromise("yibu", (source, target, routeslist) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(source, target, routeslist)
        }, 1000);
    })
})
democar.hooks.shache.tap("shache", (res) => {
    console.log(res)
})
democar.hooks.shache.call("刹车")
democar.hooks.jiasu.call("加速")
democar.hooks.yibu.promise("一不", "Aa", "aaaaa").then((res) => {
    console.log("res:  UI不 ", res)
}, err => { console.log(err) })