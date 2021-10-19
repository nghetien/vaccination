import { combineReducers } from 'redux'
import vaccinesReducer from './vaccinesReducer'
import loaderReducer from "./loaderReducer";
import vaccinationPlaceReducer from './vaccinationPlaceReducer'
import authReducer from "./authReducer";
import provincesReducer from './provincesReducer'
import accountOrganizationReducer from './accountOrganizationReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
    loaderReducer,
    authReducer,
    vaccinesReducer,
    vaccinationPlaceReducer,
    provincesReducer,
    accountOrganizationReducer,
    profileReducer,
})

export default rootReducer