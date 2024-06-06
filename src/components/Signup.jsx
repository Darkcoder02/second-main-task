import React, { useState } from 'react'
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const navigate = useNavigate();
    
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleSubmit = (e) =>  {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        console.log(localStorage.getItem("user"))
        navigate('/')
    }

  return (
    <div className="flex flex-col gap-y-44">
      <div className="sticky">
        <Header />
      </div>
      <div className="form bg-red-500 text-white mx-auto p-4 rounded-md w-9/12 sm:w-6/12 lg:w-5/12 xl:w-4/12">
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit}>
       <div className="input-container mt-4">
         <label>Username </label>
         <input value={input.name} onChange={(e)=>setInput({...input,name:e.target.value,})} type="text" name="name" className="p-2 rounded-md text-black"required />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} type="email" name="email" className="p-2 rounded-md text-black" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="password" name="password" className="p-2 rounded-md text-black" required />
       </div>
       <div className=" mt-8 flex">
         <input type="submit"className="bg-white mx-auto text-black py-1 px-2 rounded-md font-semibold"/>
       </div>
     </form>
     <p className="mt-4">Already have an account? <button onClick={()=>navigate('/login')} className="cursor-pointer underline font-semibold">Login here</button></p>
      </div>
    </div>
  )
}

export default Signup