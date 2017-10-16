//Action creator
const NAME = "NAME";
const LAST = "LAST";
const EMAIL = "EMAIL";
const PHONE = "PHONE";
const BODY = "BODY";
const TRANS_1 = "TRANS_1";


//Reducer Action
export const setName = (name) => ({type: NAME, payload: name})
export const setLast = (last) => ({type: LAST, payload: last})
export const setPhone = (phone) => ({type: PHONE, payload: phone})
export const setEmail = (email) => ({type: EMAIL, payload: email})
export const setBody = (body) => ({type: BODY, payload: body})
export const runTrans1 = () => ({type: TRANS_1})

//get a list of accounts for the loadAccounts action
export const dispatchSetName = (name) => {
     return (dispatch) => {
          dispatch(setName(name))
     }
}

export const dispatchSetLast = (last) => {
     return (dispatch) => {
          dispatch(setLast(last))
     }
}

export const dispatchSetEmail = (email) => {
     return (dispatch) => {
          dispatch(setEmail(email))
     }
}

export const dispatchSetPhone = (phone) => {
     return (dispatch) => {
          dispatch(setPhone(phone))
     }
}

export const dispatchSetBody = (body) => {
     return (dispatch) => {
          dispatch(setBody(body))
     }
}


export const dispatchRunTrans1 = () => {
     return (dispatch) => {
          dispatch(runTrans1())
     }
}

//Reducer
export default (state = [], action) => {

  switch(action.type) {
    case NAME:
      return {...state, name: action.payload }
    case LAST:
      return {...state, last: action.payload }
    case EMAIL:
      return {...state, email: action.payload }
    case PHONE:
      return {...state, phone: action.payload }
    case BODY:
      return {...state, bod: action.payload }
    case TRANS_1:
       return {...state, trans1: true }
    default:
      return state;
  }

};
