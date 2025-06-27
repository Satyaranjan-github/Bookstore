import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm} from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }= useForm();
    const onSubmit = async (data) => {
    // Handle form submission here
    const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
    }
     await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                // alert("Signup successfully")
                toast.success("Signup successfully")
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        })
        .catch((err) => {
           if(err.response){
            console.log(err);
            // alert("Error: "+err.response.data.message)
            toast.error("Error:"+err.response.data.message)}
        })
  };
    return (
        <>
            <div>
                <div id="my_modal_3" className="flex h-screen items-center justify-center">
                    <div className="modal-box border-[2px] w-[600px]">
                        <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to='/'>✕</Link>
                       
                        <h3 className="font-bold text-lg mb-4">Sign Up</h3>
                        <div className=''>
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder='Enter your Full-Name' className='border  outline-none  h-10 p-2 rounded-md' 
                             {...register("fullname", { required: true })}/>
                            <br />
                            {errors.fullname && <span style={{ color: "red" }}>* This field is required</span>}
                            <br />
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your Email' className='border  outline-none  h-10 p-2 rounded-md' 
                            {...register("email", { required: true })}/>
                            <br />
                             {errors.email && <span style={{ color: "red" }}>* This field is required</span>}
                            <br />
                            <span>Password</span>
                            <br />
                            <input type="password" id='password' placeholder='Enter your password' className='border outline-none h-10 p-2 rounded-md' 
                            {...register("password", { required: true })}/>
                            <br />
                             {errors.password && <span style={{ color: "red" }}>* This field is required</span>}
                            <br />
                        </div>
                        <div className='flex justify-between mt-4 '>
                            <button className='btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer'>Sign up</button>
                            <p>Have Account ?
                                <Link className='underline text-blue-500 cursor-pointer' to='/'>Login</Link>
                                <Login/>
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
