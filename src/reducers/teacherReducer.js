export default function teacherReducer( teacharData = {}, action) {
    switch (action.type) {
      case "SET_TEACHER_DATA": {
        return { ...teacharData , ...action.payload };
      }
      case "NEWACTION_ALL_REQUEST": {
          return { ...teacharData , ...action.payload, }
        }
        case "NEWACTION_ALL_SUCCESS": {
          return { ...teacharData ,  ...action.payload }
        }
        case "NEWACTION_ALL_FAILED": {
          return { ...teacharData ,...action.payload }
        }
      default: {
        return { ...teacharData }
      }
    }
}