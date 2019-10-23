let initialState = {
  isLoading : false,
  webtoon : [],
  favorite : [],
  episodes : []
}

export default (state = initialState , action) => {
  switch (action.type) {
    case 'SET_FAVORITE' :
        return  {
          ...state,
          favorite : action.payload
        }
    break;
    case 'SET_WEBTOON':
        return {
          ...state,
          webtoon : action.payload
        }
    break;
    case 'SET_IS_LOADING_WEBTOON' :
        return {
          ...state,
          isLoading : action.payload
        }
    case 'SET_EPISODE' :
      return {
        ...state,
        episodes : action.payload
      }
    break;
    default:
      return state
  }
}
