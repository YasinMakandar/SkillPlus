import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import { useNavigate } from 'react-router-dom';

const ContentDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const navigate = useNavigate();

    const handleViewPDF = (plan) => {
        //    Complete this function with respect to LessonPlan, whatever the link i'm getting from backend it should be passed as prop to LessonPlan. And LessonPlan will open.
        navigate(`/pdf/${encodeURIComponent(plan)}`);
    };


    const contents = [
        {
            id: "1",
            name: "Embedded Full Stack IOT Internship",
            plan: "EmbeddedIoTTheoryDoc_with_Lora.pdf",
            modules: [
                {
                    name: "Module 1",
                    ppt: "Module_1.pdf"
                },
                {
                    name: "Module 2",
                    ppt: "Module_2.pdf"
                },
                {
                    name: "Module 3",
                    ppt: "Module_3.pdf"
                },
                {
                    name: "Module 4",
                    ppt: "Module_4.pdf"
                },
                {
                    name: "Module 5",
                    ppt: "Module_5.pdf"
                },
                {
                    name: "Module 6",
                    ppt: "Module_6.pdf"
                },
                {
                    name: "Module 7",
                    ppt: "Module_7.pdf"
                },
                {
                    name: "Module 8",
                    ppt: "Module_8.pdf"
                },
                {
                    name: "Module 9",
                    ppt: "Module_9_LoRa.pdf"
                },
            ],
            video: "Youtube",
        },
        {
            id: "2",
            name: "Embedded Full Stack IOT CMKKY",
            plan: "EmbeddedIoTTheoryDoc_with_Lora.pdf",
            modules: [
                {
                    name: "Module 1",
                    ppt: "Module_1.pdf"
                },
                {
                    name: "Module 2",
                    ppt: "Module_2.pdf"
                },
                {
                    name: "Module 3",
                    ppt: "Module_3.pdf"
                },
                {
                    name: "Module 4",
                    ppt: "Module_4.pdf"
                },
                {
                    name: "Module 5",
                    ppt: "Module_5.pdf"
                },
                {
                    name: "Module 6",
                    ppt: "Module_6.pdf"
                },
                {
                    name: "Module 7",
                    ppt: "Module_7.pdf"
                },
                {
                    name: "Module 8",
                    ppt: "Module_8.pdf"
                },

            ],
            video: "Youtube",
        },

    ];

    const handleViewPPT = (ppt) => {
        //    Complete this function with respect to LessonPlan, whatever the link i'm getting from backend it should be passed as prop to LessonPlan. And LessonPlan will open.
        navigate(`/ppt/${encodeURIComponent(ppt)}`);
    };

    

    return (
        <div>
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main className="grow">
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            <div className="flex sticky top-16 z-10 w-full bg-[#F3F4F6] dark:bg-[#111827] pb-2 justify-between items-center sm:flex sm:justify-between sm:items-center mb-8">
                                {/* Left: Title */}
                                <div className="mb-4 flex flex-col gap-4 sm:mb-0">
                                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Course Content Details</h1>

                                    {/* Search form */}
                                    <div>
                                        <form className="flex items-center max-w-sm mx-auto">
                                            <label htmlFor="select-course" className="sr-only">Select Course</label>
                                            <div className="relative w-full">
                                                <select
                                                    id="select-course"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    onChange={(e) => setSelectedCourse(e.target.value)}  // Added this line
                                                    required
                                                >
                                                    <option value="">Select Course</option>
                                                    <option value="internship">Internship</option>
                                                    <option value="cmykk">CMYKK</option>
                                                </select>
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
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-[#8391fe] dark:bg-[#8391fe] dark:text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-center border-white" rowSpan="3">Course Name</th>
                                            <th scope="col" className="px-6 py-3 border-l border-white text-center" colSpan="4">Files</th>
                                            {/* <th scope="col" className="px-6 border-l border-white text-center py-3" colSpan="2">Video Links</th> */}
                                        </tr>
                                        <tr>
                                            {/* <th scope="col" colSpan="3" className="px-6 border-t border-l border-white py-3 text-center  ">File Name</th> */}


                                        </tr>
                                        <tr>
                                            <th scope="col" colSpan="" className="px-6 border-t border-l border-white py-3  ">PPT</th>
                                            <th scope="col" colSpan="" className="px-6 border-t border-l border-white py-3  ">Action</th>
                                            <th scope="col" colSpan="" className="px-6 border-t border-l border-white py-3 text-center ">PDF</th>
                                            <th scope="col" className="px-6 border-t border-l border-white py-3 " rowSpan="3" >Action</th>

                                        </tr>

                                    </thead>
                                    <tbody>
                                        {contents.map((content) => (
                                            <React.Fragment key={content.id}>
                                                {content.modules.map((module, index) => (
                                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        {index === 0 && (
                                                            <th
                                                                scope="row"
                                                                className="px-6 py-4 border-r font-medium text-center text-md text-gray-900 whitespace-nowrap dark:text-white"
                                                                rowSpan={content.modules.length}
                                                            >
                                                                {content.name}
                                                            </th>
                                                        )}
                                                        <td className="px-6 border-r py-4">
                                                            <p className="mt-2 dark:text-white text-gray-600">
                                                                <button
                                                                    className="text-blue-500 hover:underline"
                                                                    onClick={() => handleViewPPT(module.ppt)}
                                                                >
                                                                    {module.name}
                                                                </button>
                                                            </p>
                                                        </td>
                                                        <td className="px-6 border-r py-4">
                                                            <button className="text-red-500 hover:underline">Delete</button>
                                                        </td>
                                                        {/* Render the PDF only in the first row */}
                                                        {index === 0 ? (
                                                            <td className=" border-r py-4 text-center" rowSpan={content.modules.length}>
                                                                <p className="mt-2  dark:text-white text-gray-600">
                                                                    <button
                                                                        className="text-blue-500 hover:underline"
                                                                        onClick={() => handleViewPDF(content.plan)}
                                                                    >
                                                                        {content.plan}
                                                                    </button>
                                                                </p>
                                                            </td>
                                                        ) : null}
                                                        {index === 0 ? (
                                                            <td className="px-6 border-r py-4 " rowSpan={content.modules.length}>
                                                                <button className="text-red-500 hover:underline">Delete</button>
                                                            </td>
                                                        ) : null}
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ContentDetails;
