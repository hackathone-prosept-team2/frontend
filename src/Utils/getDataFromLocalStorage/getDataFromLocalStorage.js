const getLocalStorageData = (key) => localStorage.getItem(key);

export const getDataFromLocalStorage = (key) => {
    const localStorageData = getLocalStorageData(key);
    
    return localStorageData ? JSON.parse(localStorageData) : null;
};