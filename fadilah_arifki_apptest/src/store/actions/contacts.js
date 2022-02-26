import { GET_CONTACTS } from "../actionType";
import axios from "axios";

export function setDataContacts(input) {
    return {
        type: GET_CONTACTS,
        payload: input
    }
}

export function getContact() {
    return (dispatch) => {
        axios.get(`https://simple-contact-crud.herokuapp.com/contact`)
            .then((result) => {
                dispatch(setDataContacts(result))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}