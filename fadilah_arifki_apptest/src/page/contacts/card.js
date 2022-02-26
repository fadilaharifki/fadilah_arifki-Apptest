import React, { useState } from "react"
import CreateEdit from "./createEdit";
import Swal from "sweetalert2";
import axios from "axios";

export default function Card({ data, setFlag }) {
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    const remove = async () => {
        const url = `https://simple-contact-crud.herokuapp.com/contact/${data.id}`
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
                        setFlag(true)
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

    return (
        <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                <div className="prod-img">
                    {
                        data.photo && data.photo !== "N/A" ? <>
                            <img src={data.photo} className="w-full object-cover object-center" alt="photo contact" />
                        </> : <div className="box-border h-32 w-full p-4 bg-gray-400"></div>
                    }
                </div>
                <div className="prod-title pt-4">
                    <p className="text-xl uppercase text-gray-900 font-bold">
                        {data.firstName} {data.lastName}
                    </p>
                </div>
                <div className="prod-title">
                    <p className="text-xl uppercase text-gray-900 ">
                        Age: {data.age}
                    </p>
                </div>
                <div className="prod-info grid gap-10 pt-5">

                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                        <button onClick={() => setIsOpenEdit(true)} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                            Edit
                        </button>
                        <button onClick={remove} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <CreateEdit isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} update={true} data={data} setFlag={setFlag} title={`Edit ${data?.firstName} ${data?.lastName}`} />
        </div>
    )
}