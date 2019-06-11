export default function breweriesReducer(state = {
    breweries: [], brewery: null, loading: false,
  }, action) {
    switch (action.type) {
      case 'FETCH_BREWERIES':
        return {...state, breweries: action.payload, loading: false, brewery: null}
  
      case 'LOADING_BREWERIES':
        return { ...state, loading: true };

      default:
        return state;
    }
  }