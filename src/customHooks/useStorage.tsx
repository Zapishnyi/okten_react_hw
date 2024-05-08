export const useStorage = (): ((valueKey: string, value: string) => void) => {
  function storageWrite(valueKey: string, value: string) {
    if (valueKey) {
      if (localStorage.getItem(valueKey)) {
        if (
          window.confirm(
            "Local Storage already has such a key, are you agree to overwrite value?",
          )
        ) {
          localStorage.setItem(valueKey, value);
        }
      } else {
        localStorage.setItem(valueKey, value);
      }
    }
  }

  return storageWrite;
};
