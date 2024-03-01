export const saveItemOnLocalStorage = (
  itemName: string,
  itemValue: any,
) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(itemName, itemValue)
  }
}

export const removeItemFromLocalStorage = (itemName: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(itemName)
  }
}

export const getItemFromLocalStorage = (itemName: string) => {
  if (typeof window !== "undefined") {
    const itemValue = window.localStorage.getItem(itemName)

    return itemValue
  }
}
