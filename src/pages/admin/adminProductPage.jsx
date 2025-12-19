import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export default function AdminProductPage(){
    return(
        <div className="w-full h-screen flex justify-center items-center text-6xl relative">
            Admin Product Page

            <Link to="/admin/add-product" className="absolute right-5 bottom-10 w-[50px] h-[50px] flex justify-center items-center border-2 rounded-full hover:text-accent hover:bg-white text-white border-white"><FiPlus /></Link>
        </div>
        
    )
}