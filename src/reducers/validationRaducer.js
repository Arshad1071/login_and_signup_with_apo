export default function validationRaducer(validationRaducer ={},action ){
    switch(action.type){

        case "EMAIL_VALIDATION_REQUERS": { 
            return { ...validationRaducer , ...action.payload };
          }

          case "EMAIL_VALIDATION_SUCCESS": {
              return { ...validationRaducer, ...action.payload, }
            }
            case "RESET_VALIDATION": {
              return { ...validationRaducer ,  ...action.payload }
            }
          default: {
            return { ...validationRaducer }
          }
    }
}