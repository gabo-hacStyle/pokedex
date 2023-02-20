export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'rambo'},  ...actionInfo.payload]
    const updatedActionInfo = {...actionInfo, payload: featured}
    next(updatedActionInfo)
}