import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from "../../store/actions/contacts";
import PropagateLoader from "react-spinners/PropagateLoader";
import CreateEdit from "./createEdit";
import Swal from "sweetalert2";
import axios from "axios";
import Card from "./card";

export default function Contacts() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [dataEdit, setDataEdit] = useState()
    const [flag, setFlag] = useState(false)

    const { contacts } = useSelector(state => state)

    useEffect(() => {
        dispatch(getContact())
        setFlag(false)
    }, [flag])

    return (
        <div className="w-screen">
            <div className="flex justify-center m-5">
                <div className="uppercase text-3xl font-bold text-orange-600">Contact</div>
            </div>
            <div className="flex justify-end m-5">
                <button onClick={() => setIsOpen(true)} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    Create
                </button>
            </div>
            <div className="flex flex-wrap px-4 lg:px-24 py-6 md:py-10 2xl:py-24">
                {
                    contacts?.dataContacts?.data?.data ? <>

                        {
                            contacts?.dataContacts?.data?.data.map((e, i) => {
                                return (
                                    <div key={i} className="w-80 flex justify-center items-center">
                                        <Card data={e} setFlag={setFlag} />
                                    </div>
                                )
                            })
                        }

                    </> : <div className="flex flex-1 justify-center">
                        <PropagateLoader color={"#EB680C"} loading={true} size={20} />
                    </div>
                }
            </div>
            <CreateEdit isOpen={isOpen} setIsOpen={setIsOpen} title={"Create"} create={true} setFlag={setFlag} />
        </div>
    )
}