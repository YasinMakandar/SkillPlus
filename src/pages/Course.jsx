import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { NavLink, useLocation } from "react-router-dom";

const Course = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    // Example institutes data
    const courses = [
        {
            id: 1,
            name: "Embedded Full Stack IOT (Internship)",
        },
        {
            id: 2,
            name: "Embedded Full Stack IOT (CMKKY)",
        },



    ];

    const filteredCourse = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main className="grow">
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            {/* Dashboard actions */}
                            {/* From here */}
                            <div className="flex sticky top-16 w-full bg-[#F3F4F6] dark:bg-[#111827] pb-2  justify-between items-center sm:flex sm:justify-between sm:items-center mb-8">
                                {/* Left: Title */}
                                <div className="mb-4 flex flex-col  gap-4 sm:mb-0">
                                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Courses</h1>
                                    <form className="flex items-center max-w-sm mx-auto">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Search Course..."
                                                onChange={(e) => setSearchTerm(e.target.value)} 
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
                            {/* Till here */}

                            {/* Course Cards */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {/* {courses.map((course) => (
                                    <div key={course.id} className="max-w-sm p-4 flex justify-center flex-col items-center dark:bg-[#1F2937] bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                        <h2 className="text-xl dark:text-white font-bold text-gray-800">{course.name}</h2>

                                        <div className='flex justify-between items-center'>
                                            <NavLink end to="/course_details">
                                                <button
                                                    onClick={() => handleViewClick(course)}
                                                    className="mt-4 text-white bg-[#6e7dee] hover:bg-blue-800 font-bold py-2 px-4 rounded"
                                                >
                                                    View
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                ))} */}
                                
                                    <div key={courses[0].id} className="max-w-sm p-4 flex justify-center flex-col items-center dark:bg-[#1F2937] bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                        <h2 className="text-xl dark:text-white font-bold text-gray-800">{courses[0].name}</h2>

                                        <div className='flex justify-between items-center'>
                                            <NavLink end to="/course_details">
                                                <button
                                                    // onClick={() => handleViewClick(courses[1])}
                                                    className="mt-4 text-white bg-[#6e7dee] hover:bg-blue-800 font-bold py-2 px-4 rounded"
                                                >
                                                    View
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div key={courses[1].id} className="max-w-sm p-4 flex justify-center flex-col items-center dark:bg-[#1F2937] bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                        <h2 className="text-xl dark:text-white font-bold text-gray-800">{courses[1].name}</h2>

                                        <div className='flex justify-between items-center'>
                                            <NavLink end to="/course_detailss">
                                                <button
                                                    // onClick={() => handleViewClick(courses[1])}
                                                    className="mt-4 text-white bg-[#6e7dee] hover:bg-blue-800 font-bold py-2 px-4 rounded"
                                                >
                                                    View
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>


                                
                                
                            </div>



                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Course;
