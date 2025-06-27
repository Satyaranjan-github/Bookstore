import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const  handleLogout =()=>{
        try{
           setAuthUser({
            ...authUser,
            user:null
           })
           localStorage.removeItem("Users");
           toast.success("Logout successfully")
           window.location.reload();
           setTimeout(() => {
            // document.getElementById("my_modal_3").close();
            // window.location.reload();
          },1000)
        }catch(error){
            toast.error("Error:"+error.message)
            setTimeout(() => {
                
            },1000)
        }
    }
  return (
    <div>
      <button className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer'
      onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Logout
