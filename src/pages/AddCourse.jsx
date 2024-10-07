import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const AddCourse = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        courseName: '',
        courseObjectives: '',
        courseOutcomes: '',
        lessonPlan: ''
    });

    const [error, setError] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            lessonPlan: e.target.files[0]
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.courseName || !formData.courseObjectives || !formData.courseOutcomes || !formData.lessonPlan) {
            setError('All fields are required!');
            return;
        }

        setError('');
        console.log('Form submitted:', formData);
        // Perform actions like sending form data to the backend here
    };

    return (
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
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            {/* Form */}
                            <div className="w-full dark:bg-[#1F2937] mt-14 rounded-lg m-auto max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div>
                                    <h1 className="text-center dark:text-white text-2xl md:text-3xl font-bold mb-2">Add Course</h1>
                                    <hr />
                                </div>

                                {/* Error message */}
                                {error && <p className="text-red-500 mb-4">{error}</p>}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 mt-2">
                                        <label htmlFor="courseName" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course Name
                                        </label>
                                        <input
                                            name="courseName"
                                            id="courseName"
                                            value={formData.courseName}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Enter Course name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="courseObjectives" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course Objectives
                                        </label>
                                        <textarea
                                            name="courseObjectives"
                                            id="courseObjectives"
                                            value={formData.courseObjectives}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter Course Objectives"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="courseOutcomes" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course Outcomes
                                        </label>
                                        <textarea
                                            name="courseOutcomes"
                                            id="courseOutcomes"
                                            value={formData.courseOutcomes}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter Course Outcomes"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="lessonPlan" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Lesson Plan
                                        </label>
                                        <input
                                            name="lessonPlan"
                                            id="lessonPlan"
                                            onChange={handleFileChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="file"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-[#8470FF] hover:bg-[#6e5ce4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddCourse;
