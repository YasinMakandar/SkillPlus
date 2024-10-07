import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const TrainerDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Static array for now
    const trainers = [
        {
            id: 1,
            name: "Kashinath Kalloli",
            course: "Embedded Full Stack IOT (CMKKY)",
            email: "kashinathkalloli@gmail.com",
            mobile: "9986355327",
            userid: "Kashinath kalloli",
            password:"gttcmsdc",
            center:"GTTC-MSDC, Hubballi"
        },
        {
            id: 2,
            name: "Praveena javali",
            course: "Embedded Full Stack IOT (CMKKY)",
            email: "praveenagttc@gmail.com",
            mobile: "9901739487",
            userid: "Praveena Javali",
            password:"12345",
            center:"GTTC-BELGAUM"
        },
        {
            id: 3,
            name: "Sapna Bagewadi",
            course: "Embedded Full Stack IOT (CMKKY)",
            email: "sapnabgd@gmail.com",
            mobile: "9606522542",
            userid: "Sapna Bagewadi",
            password:"12345",
            center:"GTTC-GOKAK"
        },
        {
            id: 4,
            name: "Sukanya Uppin",
            course: "Embedded Full Stack IOT (Internship)",
            email: "sanvikasankravat@gmail.com",
            mobile: "9880845881",
            userid: "Sukanya Uppin",
            password:"123456",
            center:"GTTC-MSDC, Hubballi"
        },
        {
            id: 5,
            name: "Shruti Heghre",
            course: "Embedded Full Stack IOT (Internship)",
            email: "shrutiheghre@gmail.com",
            mobile: "9035297539",
            userid: "Shruti@123",
            password:"12345",
            center:"GTTC-CHIKODI"
        },
    ];

    // Filter trainers based on the search term
    const filteredTrainers = trainers.filter((trainer) =>
        trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.center.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main className="grow">
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                            {/* Dashboard actions */}
                            <div className="flex sticky z-10 top-16 w-full bg-[#F3F4F6] dark:bg-[#111827] pb-2  justify-between items-center   sm:flex  sm:justify-between sm:items-center mb-8">
                                {/* Left: Title */}
                                <div className="mb-4 gap-2 flex flex-col sm:mb-0">
                                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Trainer Details</h1>
                                    
                                    <form className="flex items-center max-w-sm mx-auto">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Search Trainer..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#8391fe] rounded-lg border border-[#8D99F9] hover:bg-blue-800">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-[#8391fe] dark:bg-[#8391fe] dark:text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Trainer name</th>
                                            <th scope="col" className="px-6 py-3">Course Assigned</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Mobile</th>
                                            <th scope="col" className="px-6 py-3">User Id</th>
                                            <th scope="col" className="px-6 py-3">Password</th>
                                            <th scope="col" className="px-6 py-3">Center</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTrainers.map((trainer) => (
                                            <tr key={trainer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {trainer.name}
                                                </th>
                                                <td className="px-6 py-4">{trainer.course}</td>
                                                <td className="px-6 py-4">{trainer.email}</td>
                                                <td className="px-6 py-4">{trainer.mobile}</td>
                                                <td className="px-6 py-4">{trainer.userid}</td>
                                                <td className="px-6 py-4">{trainer.password}</td>
                                                <td className="px-6 py-4">{trainer.center}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default TrainerDetails;
