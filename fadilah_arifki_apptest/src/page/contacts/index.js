import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from "../../store/actions/contacts";
import PropagateLoader from "react-spinners/PropagateLoader";
import CreateEdit from "./createEdit";
import Swal from "sweetalert2";
import axios from "axios";

export default function Contacts() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [dataEdit, setDataEdit] = useState()

    const { contacts } = useSelector(state => state)

    useEffect(() => {
        dispatch(getContact())
    }, [contacts])

    const remove = async (val) => {
        const url = `https://simple-contact-crud.herokuapp.com/contact/${val.id}`
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: "You delete the data?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                try {
                    if (result.isConfirmed) {
                        await axios.delete(url)

                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message} "contact unavailable"`
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
            })
        }
    }

    const edit = (value) => {
        setIsOpenEdit(true)
        setDataEdit(value)
    }


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
                                        <div className="w-full p-4">
                                            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                                                <div className="prod-img">
                                                    {
                                                        e.photo && e.photo !== "N/A" ? <>
                                                            <img src={e.photo} className="w-full object-cover object-center" alt="photo contact" />
                                                        </> : <div className="box-border h-32 w-full p-4 bg-gray-400"></div>
                                                    }
                                                </div>
                                                <div className="prod-title pt-4">
                                                    <p className="text-xl uppercase text-gray-900 font-bold">
                                                        {e.firstName} {e.lastName}
                                                    </p>
                                                </div>
                                                <div className="prod-title">
                                                    <p className="text-xl uppercase text-gray-900 ">
                                                        Age: {e.age}
                                                    </p>
                                                </div>
                                                <div className="prod-info grid gap-10 pt-5">

                                                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                                        <button onClick={() => edit(e)} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                                            Edit
                                                        </button>
                                                        <button onClick={() => remove(e)} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </> : <div className="flex flex-1 justify-center">
                        <PropagateLoader color={"#EB680C"} loading={true} size={20} />
                    </div>
                }
            </div>
            <CreateEdit isOpen={isOpen} setIsOpen={setIsOpen} title={"Create"} create={true} />

            <CreateEdit isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} update={true} data={dataEdit} title={`Edit ${dataEdit?.firstName} ${dataEdit?.lastName}`} />
        </div>
    )
}