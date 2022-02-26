import { GET_CONTACTS } from "../actionType";

const initialState = {
    dataContacts: [],
}

export default function contacts(state = initialState, action) {
    const { type, payload } = action
    if (type === GET_CONTACTS) {
        return { ...state, dataContacts: payload }
    }

    return state
}