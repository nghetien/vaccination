import { combineReducers } from 'redux'
import vaccinesReducer from './vaccinesReducer'
import loaderReducer from "./loaderReducer";
import vaccinationPlaceReducer from './vaccinationPlaceReducer'
import authReducer from "./authReducer";
import provincesReducer from './provincesReducer'
import accountOrganizationReducer from './accountOrganizationReducer'
import profileReducer from './profileReducer'
import adminReducer from './adminReducer'
import scheduleInjectionsReducer from "./scheduleInjectionsReducer";
import acceptRecordReducer from "./acceptRecordReducer";
import vaccinationRecordReducer from "./vaccinationRecordReducer";


const rootReducer = combineReducers({
    loaderReducer,
    authReducer,
    vaccinesReducer,
    vaccinationPlaceReducer,
    provincesReducer,
    accountOrganizationReducer,
    profileReducer,
    adminReducer,
    scheduleInjectionsReducer,
    acceptRecordReducer,
    vaccinationRecordReducer
})

export default rootReducer