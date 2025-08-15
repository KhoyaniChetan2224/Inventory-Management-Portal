import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const adminheader = () => {
    const [image, setImage] = useState(
        "https://i.pinimg.com/736x/5a/2e/8b/5a2e8b5c89e602f86f8b065a0a888061.jpg"
    );
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative flex flex-col bg-slate-800 h-screen">
            {/* Mobile menu button */}
            <button 
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-all duration-300"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                        isSidebarOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isSidebarOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                        isSidebarOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
                </div>
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 z-40
                transform transition-transform duration-300 ease-in-out
                md:relative md:transform-none
                w-64 text-white shadow-lg p-6 flex flex-col h-full rounded-r-2xl
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                bg-slate-800
            `}>
                <div className="flex flex-col items-center mb-4">
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <img
                            src={image}
                            alt="Profile"
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500 hover:border-blue-700 shadow-lg mb-3 object-cover"
                        />
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>

                    <h2 className="font-bold text-base md:text-lg">Nirmal Kumar P</h2>
                    <p className="text-xs md:text-sm text-gray-300">nirmalkumar.b09@gmail.com</p>
                </div>
                <nav className="flex-1 w-full align-left">
                    {[
                        { name: "Dashboard", path: "/admin/adminhome" },
                        { name: "Inventory", path: "/admin/admininventory" },
                        { name: "Orders", path: "/admin/adminorders" },
                        { name: "Reporting", path: "/admin/adminreporting" },
                        { name: "Purchase", path: "/admin/adminpurchase" },
                        { name: "Support", path: "/admin/adminsupport" },
                        { name: "Settings", path: "/admin/adminsettings" }
                    ].map(item => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3 px-3 md:px-4 py-2 my-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 transition font-medium text-sm md:text-base"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={() => {
                        localStorage.removeItem('adminToken');
                        window.location.href = '/admin';
                    }}
                    className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition text-sm md:text-base"
                >
                    Logout for Admin...!
                </button>
            </aside>
        </div>
    )
}

export default adminheader
