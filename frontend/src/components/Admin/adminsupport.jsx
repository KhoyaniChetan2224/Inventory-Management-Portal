import React from 'react'
import AdminHeader from './AdminHeader/adminheader'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Legend,
} from "recharts";

const lineData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 65 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 80 },
    { name: "May", value: 60 },
];

const barData = [
    { name: "Travel", value: 2600 },
    { name: "Presentation", value: 2340 },
    { name: "Business", value: 2120 },
];

const adminsupport = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div className="flex h-screen font-sans bg-blue-50">

            {/* Sidebar */}
            <AdminHeader />

            {/* /* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-9 text-blue-900">
                    Inventory Management - Support Dashboard Overview
                </h1>
                <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Panel */}
                    <div className="col-span-1 space-y-6">
                        <div ref={ref}>
                            <h2 className="text-xl font-bold text-gray-700">General statistics</h2>
                            <p className="text-2    xl font-extrabold text-indigo-600 mt-2">
                                {inView ? <CountUp end={7541390} duration={2.5} separator="," /> : '0'}
                            </p>
                            <p className="text-sm text-gray-500">All users</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-600">Current activity</h4>
                            <div className="mt-2 space-y-1 text-sm text-gray-500">
                                <p className="flex justify-between">🇺🇸 United States <span className="text-gray-800">55%</span></p>
                                <p className="flex justify-between">🇫🇷 France <span>25%</span></p>
                                <p className="flex justify-between">🇨🇳 China <span>15%</span></p>
                                <p className="flex justify-between">🇧🇷 Brazil <span>15%</span></p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <h4 className="text-sm font-medium text-gray-500">Total earning</h4>
                            <p className="text-2xl font-bold text-green-500 mt-1">₹
                                {inView ? (
                                    <CountUp end={1559385} duration={2.5} separator="," />
                                ) : (
                                    '0'
                                )}
                            </p>
                            <p className="text-xs text-gray-400">↑ 10% compared to last year</p>
                            <ResponsiveContainer width="100%" height={80}>
                                <BarChart data={barData}>
                                    <Bar dataKey="value" fill="#6366f1" radius={[5, 5, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Center Graph */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center">
                        <div className="bg-gray-400 rounded-full w-64 h-64 shadow-inner flex items-center justify-center overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/cc/5b/a9/cc5ba926e64da306e91033367575ee44.jpg"
                                alt="World View"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>


                        <div className="flex gap-4 mt-6 w-full justify-center">
                            <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
                                <p className="text-sm text-gray-500">Trend</p>
                                <p className="text-2xl font-extrabold text-indigo-600 mt-2">
                                    {inView ? (
                                        <CountUp end={2980} duration={2.5} separator="," />
                                    ) : (
                                        '0'
                                    )}
                                </p>
                                <ResponsiveContainer width="100%" height={60}>
                                    <LineChart data={lineData}>
                                        <Tooltip />
                                        <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div
                                ref={ref}
                                className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 lg:w-1/3"
                            >
                                <p className="text-sm text-gray-500">Total coverage</p>
                                <p className="text-2xl font-extrabold text-indigo-600 mt-2">
                                    {inView ? (
                                        <CountUp end={53430001} duration={2.5} separator="," />
                                    ) : (
                                        '0'
                                    )}
                                </p>
                                <p className="text-xs text-gray-400">↑ 23% compared to last year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default adminsupport
