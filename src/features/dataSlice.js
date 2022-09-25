export const fetchData = () => {
    const datathunk = async (dispatch, getState) => {
        const response = await fetch(URL)
        const resData = await response.json()
        console.log(resData)
        dispatch(setData(resData))
    }
    return dataThunk
}