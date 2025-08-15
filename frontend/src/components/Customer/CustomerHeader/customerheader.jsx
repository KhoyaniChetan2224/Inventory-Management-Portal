import React from 'react'
import { Link } from 'react-router-dom';

const customerheader = () => {

    return (
        <div className="flex flex-col  bg-slate-800 h-screen">

            {/* Sidebar */}
            <aside className="w-64 text-white shadow-lg p-6 flex flex-col h-full rounded-r-2xl">
                <nav className="flex-1 w-full align-left">
                    {[
                        { name: "Dashboard", path: "/customer/customerhome" },
                        { name: "Customer Selected Product", path: "/customer/customerproduct" },
                        { name: "Customer Product Payment", path: "/customer/customerpayment" },
                        { name: "About us", path: "/customer/customeraboutus" }
                    ].map(item => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-2 my-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 transition font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={() => {
                        // Clear any authentication tokens or session data here
                        localStorage.removeItem('customerToken');
                        window.location.href = '/customer';
                    }}
                    className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Logout for customer...!
                </button>
            </aside>

        </div>
    )
}

export default customerheader
