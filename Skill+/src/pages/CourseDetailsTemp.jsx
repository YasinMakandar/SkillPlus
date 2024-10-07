import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AdminSideBar from '../partials/AdminSideBar';

const CourseDetailsTmp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigate = useNavigate();

    // Example courses data
    const courses = [
        {
            id: 1,
            name: "Embedded Full Stack IOT (CMKKY)",
            objectives: "1.Develop and Test IoT System Designs (NOS: ELE/N1406): Equip participants with the skills to develop and test IoT system designs based on work requirements, specifications of key components, dependencies, constraints, and other functional parameters. 2. Build GUI and Applications (NOS: ELE/N1410): Enable participants to create Graphical User Interfaces (GUI) and appropriate applications for IoT frameworks, ensuring user-friendly and functional interfaces. 3.Test and Troubleshoot Firmware (NOS: ELE/N1411): Train participants to perform validation, testing, and troubleshooting of IoT prototypes, ensuring they can identify and rectify any malfunctions. 4.Apply Health and Safety Practices (NOS: ELE/N1002): Instill a thorough understanding of health and safety protocols, ensuring participants comply with necessary measures to maintain a safe working environment. 5.Enhance Employability Skills (NOS: DGT/VSQ/N0102): Foster strong communication skills, teamwork, and effective work management strategies to enhance employability and professional competence.",
            outcomes: "1.Develop and test IoT system designs based on work requirements, specifications of key components, dependencies, constraints, and other functional parameters. 2.Create Graphical User Interfaces (GUI) and appropriate applications for IoT frameworks. 3.Perform validation, testing, and troubleshooting of IoT prototypes, and rectify any malfunctions. 4.Communicate and manage work effectively in the workplace while taking measures to enhance their competence. 5.Comply with health and safety measures in the workplace.",
            plan: "Embedded_Full_Stack_IOT_(CMKKY)_lesson_plan.pdf", // Path to the PDF file it will come from backend
        },
    ];

    const handleViewLessonPlan = (plan) => {
    //    Complete this function with respect to LessonPlan, whatever the link i'm getting from backend it should be passed as prop to LessonPlan. And LessonPlan will open.
    navigate(`/lesson-plan/${encodeURIComponent(plan)}`);
    };




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
                                    <h1 className="text-2xl p-3 md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Course Details</h1>
                                    
                                </div>
                            </div>
                            {/* Till here */}

                            {/* Institute Cards */}
                            <div className="md:grid-cols-2 lg:grid-cols-3">
                                {courses.map((course) => (
                                    <div key={course.id} className="p-4 dark:bg-[#1F2937] bg-white rounded-lg shadow-md">
                                        <h2 className="text-xl dark:text-white font-bold text-gray-800">{course.name}</h2>

                                        
                                        <p className="mt-2 dark:text-white text-gray-600">
                                            <span className='font-bold'>Objectives:</span>
                                            <ul className="list-disc pl-5">
                                                {course.objectives.split(/[0-9]\./).filter(Boolean).map((obj, index) => {
                                                    const lastColonIndex = obj.lastIndexOf(':');
                                                    if (lastColonIndex === -1) return null; // Handle cases with no colon

                                                    const heading = obj.substring(0, lastColonIndex + 1); // Includes the last colon
                                                    const rest = obj.substring(lastColonIndex + 1).trim(); // Text after the last colon

                                                    return (
                                                        <li key={index}>
                                                            <span className="font-bold">{heading}</span>
                                                            {rest}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </p>

                                        {/* Outcomes */}
                                        <p className="mt-2 dark:text-white text-gray-600">
                                            <span className='font-bold'>Outcomes:</span>
                                            <ul className="list-disc pl-5">
                                                {course.outcomes.split(/[0-9]\./).filter(Boolean).map((outcome, index) => (
                                                    <li key={index}>{outcome.trim()}</li>
                                                ))}
                                            </ul>
                                        </p>

                                        {/* Lesson Plan */}
                                        <p className="mt-2 dark:text-white text-gray-600">
                                            <span className='font-bold'>Lesson Plan:</span>
                                            <button
                                                className="text-blue-500 underline"
                                                onClick={() => handleViewLessonPlan(course.plan)}
                                            >
                                                View Lesson Plan
                                            </button>
                                        </p>



                                        {/* Action Buttons */}
                                        <div className='flex justify-evenly items-center'>
                                            <NavLink end to="/edit_course">
                                                <button
                                                    onClick={() => handleViewClick(course)}
                                                    className="mt-4 text-white bg-[#6e7dee] hover:bg-blue-800 font-bold py-2 px-4 rounded"
                                                >
                                                    Edit
                                                </button>
                                            </NavLink>

                                            <button
                                                onClick={() => handleViewClick(course)}
                                                className="mt-4 text-white bg-[#1a257b] hover:bg-blue-800 font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsTmp;
