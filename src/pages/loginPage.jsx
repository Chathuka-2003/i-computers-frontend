import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    async function login(){
        console.log("login button clicked")
        console.log("Email", email)
        console.log("Password", password)

        try{
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL+"/users/login",{
            email : email,
            password : password
        })
        console.log(res) 

        if(res.data.role == "admin"){
            navigate("/admin")
        }else{
            navigate("/") 
        }

        toast.success("Login successfull Welcome back")

        }catch(err){

            toast.error("Login failed")
            console.log("Error during login")
            console.log(err)
        }
        
    }

    return(
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center">
                <h1 className="text-[50px] text-black font-serif text-shadow-accent text-shadow-2xs text-center">Built for Power. Designed for You.</h1>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-xl flex justify-center items-center flex-col p-5">
                    <h1 
                        className="text-[40px] font-bold mb-5 text-accent text-shadow-white text-shadow-2xs ">
                            Login
                    </h1>
                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)       
                        }}  
                        type="email" 
                        placeholder="your email" 
                        className="w-full h-[50px] mb-5 rounded-lg border border-accent p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    <input
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)       
                        }} 
                        type="password" 
                        placeholder="password" 
                        className="w-full h-[50px]  rounded-lg border border-accent p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    <p className="text-white mb-5 not-italic w-full text-right">Forget your password <Link to="/forgot-password" className="text-amber-500 italic">Reset it there</Link></p>
                    <button 
                        onClick={login}
                        className="w-full h-[50px] bg-accent font-bold text-[20px] rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent">
                            Login
                        </button>
                    
                    <p className="text-white not-italic">Don't have an account? <Link to="/register" className="text-amber-500 italic">Register here</Link></p>
                </div>
            </div>

        </div>
    )
}