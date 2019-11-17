// 存储localstorage
export const setLocalStorage = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
}

export const getLocalStorage = (key) => {
    if (!key) return;
    return window.localStorage.getItem(key)
}