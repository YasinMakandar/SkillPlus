import React from 'react'
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { useState } from 'react';

const EditInstitute = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        instituteName: '',
        programs: [],
        instituteAddress: '',
        instituteId: '',
        password: ''
    });

    const [error, setError] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // Add the selected program to the programs array
            setFormData((prevData) => ({
                ...prevData,
                programs: [...prevData.programs, value]
            }));
        } else {
            // Remove the unselected program from the programs array
            setFormData((prevData) => ({
                ...prevData,
                programs: prevData.programs.filter((program) => program !== value)
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.instituteName || formData.programs.length === 0 || !formData.instituteAddress || !formData.instituteId || !formData.password) {
            setError('All fields are required!');
            return;
        }

        setError('');
        console.log('Form submitted:', formData);
        // You can send the form data to the backend or perform any other action here
    };
  return (
    <>
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
                            <div className="w-full dark:bg-[#1F2937] m-auto max-w-xl bg-[#FFFFFF] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className=''>

                                <h1 className=" text-center dark:text-white text text-2xl md:text-3xl font-bold mb-2">Edit Institute</h1>
                                <hr />
                                </div>
                                
                                {/* Error message */}
                                {error && <p className="text-red-500 mb-4">{error}</p>}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 mt-2">
                                        <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Institute Name
                                        </label>
                                        <input
                                            name="instituteName"
                                            value={formData.instituteName}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Enter institute name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Programs
                                        </label>
                                        <div className="flex flex-col">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="programs"
                                                    value="Iot"
                                                    checked={formData.programs.includes('Iot')}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox"
                                                />
                                                <span className="ml-2 dark:text-white">Embedded Full Stack IOT (Internship)</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="programs"
                                                    value="Cmykk"
                                                    checked={formData.programs.includes('Cmykk')}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox"
                                                />
                                                <span className="ml-2 dark:text-white">Embedded Full Stack IOT (CMKKY)</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Institute Address
                                        </label>
                                        <input
                                            name="instituteAddress"
                                            value={formData.instituteAddress}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Enter institute address"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Institute ID
                                        </label>
                                        <input
                                            name="instituteId"
                                            value={formData.instituteId}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Enter institute ID"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                            Password
                                        </label>
                                        <input
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="password"
                                            placeholder="Enter password"
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
    </>
  )
}

export default EditInstitute
