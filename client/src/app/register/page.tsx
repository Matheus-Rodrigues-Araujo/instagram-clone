'use client'
import Image from "next/image"
import Link from "next/link";
import Logo from "../../assets/logo.png";
import { RegisterFormSchema } from "../lib/validations/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register()  {
  const router = useRouter()
  const [registerData, setRegisterData] = useState({
    username: "",
    birth: new Date().toISOString().split('T')[0],
    email: "",
    password: "",
    confirmPassword:""
  })

  const handleFormData = (field:string, value: any)=>{
    return setRegisterData((name) => ({ ...name, [field]: value }));
  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    const {username, birth, email, password, confirmPassword} = registerData
    
    try {
      const validateData = RegisterFormSchema.parse({
        username,
        birth: new Date(birth),
        email,
        password,
        confirmPassword
      })
      console.log(JSON.stringify(validateData))
      router.push('/')
    } 
    catch(error:any) { console.log(error.message) }
  }

  return (

    <div className="sm:flex my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md  md:w-[500px] md:bg-customGray px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image src={Logo} alt="Your Company" className="w-auto h-50" />
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Username</label>
          <div className="mt-2">
            <input id="userName" 
            name="userName" 
            type="text" 
            required
            value={registerData.username}
            onChange={(e) => handleFormData('username', e.target.value)}
            className="
            form-input block w-full rounded-md border-0 p-3 text-white
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-white">Birth</label>
          <div className="mt-2">
            <input 
            id="birthday"
             type="date"
             required
             value={registerData.birth}
             onChange={(e) => handleFormData('birth', e.target.value )}
             className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"/>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Email</label>
          <div className="mt-2">
            <input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              value={registerData.email}
              onChange={(e) => handleFormData('email', e.target.value)}
              className="
              form-input block w-full rounded-md border-0 p-3 text-white
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Password</label>
          </div>
          <div className="mt-2">
            <input 
              id="password" 
              name="password" 
              type="password" 
              autoComplete="current-password" 
              required 
              value={registerData.password}
              onChange={(e) => handleFormData('password', e.target.value)}
              className="
              form-input block w-full rounded-md border-0 p-3 text-white
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
          </div>
          <div className="mt-2">
            <input 
            id="confirmPassword" 
            name="confirmPassword" 
            type="password" 
            autoComplete="confirmPassword" 
            required 
            value={registerData.confirmPassword}
            onChange={(e) => handleFormData('confirmPassword', e.target.value)}
            className="
            form-input block w-full rounded-md border-0 p-3 text-white
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"/>
          </div>
        </div>

        <div>
          <button type="submit" 
          className="
          sign-btn flex w-full bg-customLightbrown justify-center
          rounded-md p-3 text-sm font-semibold uppercase leading-6
          text-white shadow-sm focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5">
            Sign up
          </button>
        </div>
      </form>
      <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Already have an existing account?
        <Link href='/' className="font-semibold leading-6 text-sm text-indigo-600 text-yellow-100 hover:text-yellow-200 underline md:text-md">
          Sign In
        </Link>
      </p>
    </div>
</div>
  )
}
