import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

import ModalComponent from "../../components/modal";

export default function CreateEdit({ isOpen, setIsOpen, title, create = false, update = false, data }) {
    const schema = yup.object({
        firstName: yup.string().required("first name can't be empty"),
        lastName: yup.string().required("last name can't be empty"),
        age: yup.number().required("first name can't be empty"),
        photo: yup.string().required("link photo can't be empty"),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (value) => {
        const url = 'https://simple-contact-crud.herokuapp.com/contact'
        try {
            if (create && !update) {
                await axios.post(url, value)

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Saved successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsOpen(false)
            } else if (!create && update) {
                const urlEdit = `https://simple-contact-crud.herokuapp.com/contact/${data.id}`
                await axios.put(urlEdit, value)

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
            })
        }
    }

    return (
        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">First Nama</label>
                    <input defaultValue={data?.firstName} {...register("firstName")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type="name" />
                    <p className="text-red-700">{errors.firstName?.message}</p>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">Last Nama</label>
                    <input defaultValue={data?.lastName} {...register("lastName")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type="name" />
                    <p className="text-red-700">{errors.lastName?.message}</p>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">Age</label>
                    <input defaultValue={data?.age} {...register("age")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type="number" />
                    <p className="text-red-700">{errors.age?.message}</p>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">Photo</label>
                    <input defaultValue={data?.photo} {...register("photo")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type="name" />
                    <p className="text-red-700">{errors.photo?.message}</p>
                </div>

                <div className="flex flex-row justify-end m-4">
                    <div className="ml-4">
                        <button className="rounded-full bg-red-600 px-8 py-2 text-white font-bold" onClick={() => setIsOpen(false)} >Cancel</button>
                    </div>
                    <div className="ml-4">
                        <button className="rounded-full bg-green-600 px-8 py-2 text-white font-bold" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        </ModalComponent>
    )
}