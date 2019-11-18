import Toast from "./Toast"
export default {
    // Vue.use() 后立即执行install 方法
    install(Vue){
        // 使用组件构造器构造组件对象,同时实例化
        let toastConstructor = Vue.extend(Toast);
        // 在页面上新建一个节点
        // 将组件实例挂在到dom中
        let toast = new toastConstructor();
        // 创建节点并将实例挂载
        toast.$mount(document.createElement("div"));
        // 在页面中插入模板
        document.body.appendChild(toast.$el);

    //    将插件挂载到vue原型
        Vue.prototype.toast = toast;

    }
}