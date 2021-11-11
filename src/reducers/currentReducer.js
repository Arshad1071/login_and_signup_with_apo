export default function currentReducer(currentUser = {}, action) {
  switch (action.type) {
    case "SET_NEWACTION_DATA": {
      return { ...currentUser , ...action.payload };
    }
    case "NEWACTION_ALL_REQUEST": {
        return { ...currentUser , ...action.payload, }
      }
      case "NEWACTION_ALL_SUCCESS": {
        return { ...currentUser ,  ...action.payload }
      }
      case "NEWACTION_ALL_FAILED": {
        return { ...currentUser ,...action.payload }
      }
    default: {
      return { ...currentUser }
    }
  }
  }
  