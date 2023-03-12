export const useStore = () => {
    function setValueInStore(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getValueFromStore(key) {
        const value = localStorage.getItem(key);

        if (value === null) {
            console.error(`No value found for key - ${key}`);
            return null;
        }

        return JSON.parse(value);
    }

    return {
        setValueInStore,
        getValueFromStore,
    };
};
