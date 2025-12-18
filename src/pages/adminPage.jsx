import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage(){
    return(
        <div className="w-full h-full max-h-full bg-[#2A2A2A] flex">
            <div className="w-[300px] h-full bg-accent text-[#E5E7EB]">
                <div className="w-full h-[100px] bg-accent border-2 border-[#2A2A2A] flex items-center">
                    <img src="/logo.png" className="w-[180px] h-[100px] "/>
                    <h1 className="text-2xl">Admin</h1>
                </div>
                <div className="w-full h-[400px] text-2xl flex flex-col">
                    <Link to="/admin" className="w-full flex h-[50px] gap-2.5"><LuClipboardList />Orders</Link>
                    <Link to="/admin/products" className="w-full flex h-[50px] gap-2.5"><LuBoxes />Product</Link>
                    <Link to="/admin/users" className="w-full flex h-[50px] gap-2.5"><FiUsers />Users</Link>
                    <Link to="/admin/reviews" className="w-full flex h-[50px] gap-2.5"><MdOutlineRateReview />Review</Link>
                </div>
                
            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-10 rounded-2xl border-[#2A2A2A]">
                <div>
                    <Routes path="/">
                        <Route path="/" element={<h1>Orders</h1>}/>
                        <Route path="/products" element={<h1>Products</h1>}/>
                        <Route path="/users" element={<h1>Users</h1>}/>
                        <Route path="/reviews" element={<h1>Reveiw</h1>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}