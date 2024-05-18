import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
  }
   await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
          console.log(res.data)
          if(res.data){
             toast.success("Loggedin successfully");
             setTimeout(() => {
               document.getElementById("my_modal_3").close();
               window.location.reload();
               localStorage.setItem("Users",JSON.stringify(res.data.user))
             },1000)
          }
      })
      .catch((err) => {
         if(err.response){
          console.log(err);
          // alert("Error: "+err.response.data.message)
        toast.error("Error:"+err.response.data.message)}
      })
  }
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
      onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
   
    <h3 className="font-bold text-lg mb-4">Login </h3>
    <div >
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter yopur Email' className='border  outline-none w-full h-10 p-2 rounded-md' {...register("email", { required: true })}/>
      <br />
      {errors.email && <span style={{ color: "red" }}>* This field is required</span>}
      <br />
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter your password' className='border outline-none w-full h-10 p-2 rounded-md' {...register("password", { required: true })}/>
      <br />
      {errors.email && <span style={{ color: "red" }}>* This field is required</span>}
    </div>
    <div className='flex justify-between mt-4 '>
      <button className='btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer' > Login</button>
     <div className='flex gap-2 mt-3'>Not Registered ?
      <Link className=' hover:text-blue-500' to='/signup'>Sign up</Link>
     </div>
  </div>
  </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
