import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {

    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [images, setImages] = useState("");
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);

    const navigate = useNavigate();

    async function addProduct() {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("You must be logged in as admin to add product");
            navigate("/login");
            return;
        }

        if (
            !productID ||
            !name ||
            !description ||
            price <= 0 ||
            !category ||
            !brand ||
            !model
        ) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const altNamesInArray = altNames
                ? altNames.split(",").map(n => n.trim()).filter(Boolean)
                : [];

            const imagesInArray = images
                ? images.split(",").map(i => i.trim()).filter(Boolean)
                : [];

            const payload = {
                productID,
                name,
                altNames: altNamesInArray,
                description,
                price: Number(price),
                labelledPrice: Number(labelledPrice),
                images: imagesInArray,
                category,
                model,
                brand,
                stock: Number(stock),
                isAvailable,
            };

            console.log("Sending product:", payload);

            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/products`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Product added successfully");
            navigate("/admin/products");

        } catch (err) {
            console.error("Add product failed:", err.response?.data || err.message);
            toast.error(err.response?.data?.message || "Error adding product");
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-start overflow-y-auto p-5">
            <div className="w-[900px] h-auto bg-white rounded-2xl p-10">
                <h1 className="w-full text-2xl text-accent mb-5 font-serif flex items-center gap-5">
                    <AiFillProduct /> Add New Product
                </h1>

                <div className="w-full h-auto bg-accent/60 p-5 rounded-xl flex flex-row flex-wrap justify-between">

                    <div className="my-2.5 w-[40%]">
                        <label>Product ID</label>
                        <input
                            type="text"
                            value={productID}
                            onChange={(e) => setProductID(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                        <p className="text-sm text-accent w-full text-right">
                            Provide a unique product ID
                        </p>
                    </div>

                    <div className="my-2.5 w-[40%]">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-full">
                        <label>Alternative names</label>
                        <input
                            type="text"
                            value={altNames}
                            onChange={(e) => setAltNames(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                        <p className="text-sm text-accent w-full text-right">
                            Separate multiple name with comma
                        </p>
                    </div>

                    <div className="my-2.5 w-full">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl py-2.5"
                        />
                    </div>

                    <div className="my-2.5 w-[40%]">
                        <label>Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-[40%]">
                        <label>Labelled price</label>
                        <input
                            type="number"
                            value={labelledPrice}
                            onChange={(e) => setLabelledPrice(Number(e.target.value))}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-full">
                        <label>Image</label>
                        <input
                            type="text"
                            value={images}
                            onChange={(e) => setImages(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 flex flex-col w-[30%]">
                        <label>Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl bg-accent/60"
                        >
                            <option value="">Select category</option>
                            <option value="CPU">CPU</option>
                            <option value="Graphic Card">Graphic Card</option>
                            <option value="Mother Board">Mother Board</option>
                            <option value="RAM">RAM</option>
                            <option value="Storage Devices">Storage Devices</option>
                            <option value="Cooling Solutions">Cooling Solutions</option>
                            <option value="Computer Cases">Computer Cases</option>
                            <option value="Mouse And Keyboards">Mouse And Keyboards</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Network Devices">Network Devices</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="my-2.5 w-[30%]">
                        <label>Brand</label>
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-[30%]">
                        <label>Model</label>
                        <input
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-[40%]">
                        <label>Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(Number(e.target.value))}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl"
                        />
                    </div>

                    <div className="my-2.5 w-[40%]">
                        <label>Available</label>
                        <select
                            value={isAvailable.toString()}
                            onChange={(e) => setIsAvailable(e.target.value === "true")}
                            className="w-full h-10 px-5 rounded-xl border border-accent focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl bg-accent/60"
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <Link
                        to="/admin/products"
                        className="w-[49%] flex items-center justify-center h-10 px-5 rounded-xl border border-accent shadow-2xl text-white bg-red-700 hover:bg-accent"
                    >
                        Cancel
                    </Link>

                    <button
                        onClick={addProduct}
                        className="w-[49%] h-10 px-5 rounded-xl border border-accent shadow-2xl text-white bg-accent hover:bg-white hover:text-accent"
                    >
                        Add Product
                    </button>

                </div>
            </div>
        </div>
    );
}
