import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const AddCourseContent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        courseName: '',
        courseFile: null,
        courseVideo: '',
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
            [e.target.name]: e.target.files[0] // Updates for file input
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.courseName || !formData.courseFile || !formData.courseVideo) {
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
                            <div className="w-full dark:bg-[#1F2937] mt-16 m-auto max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div>
                                    <h1 className="text-center dark:text-white text-2xl md:text-3xl font-bold mb-2">Add Course Content</h1>
                                    <hr />
                                </div>

                                {/* Error message */}
                                {error && <p className="text-red-500 mb-4">{error}</p>}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 mt-2">
                                        <label htmlFor="courseName" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course Name
                                        </label>
                                        
                                        <select 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="courseName" 
                                            id="courseName"
                                            value={formData.courseName} 
                                            onChange={handleInputChange}
                                        >
                                            {/* Future Reference we can map options getting from api. */}
                                            <option value="">Select Course</option>
                                            <option value="internship">Internship</option>
                                            <option value="cmykk">CMYKK</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="courseFile" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course File
                                        </label>
                                        <input 
                                            type="file" 
                                            name="courseFile"
                                            onChange={handleFileChange} // Handle file input change
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="courseVideo" className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Course Related Video
                                        </label>
                                        
                                        <input
                                            name="courseVideo"
                                            id="courseVideo"
                                            value={formData.courseVideo}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Enter video URL"
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

export default AddCourseContent;
