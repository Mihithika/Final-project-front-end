// src/components/CreateTicket.tsx
import React, { useState } from 'react';

const CreateTicket: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: null as File | null,
    location: '',
    organizerName: '',
    organizerEmail: '',
    organizerAddress: '',
    startDate: '',
    endDate: '',
    status: '',
    tags: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/api/admin/create-listing",{
      method:"POST",
      headers:{"Content-Type":"application.json"},
      body:JSON.stringify(formData)
    }).then(()=>{
      console.log("New Listing Added");
      
    })
    
    // TODO: handle form submission (e.g., POST to API)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Create Listing</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Title */}
        <div className="p-2">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Listing Title"
            value={formData.title}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          />
        </div>

        {/* Category */}
        <div className="p-2">
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          >
            <option value="">Select Gender</option>
            <option>FeMale</option>
            <option>Male</option>
     
          </select>
        </div>

        {/* Description and Image Upload */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }}
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image-upload"
              className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
            >
              <div className="text-center">
                <div className="mb-2">
                  <span className="bg-[#8c0327] hover:bg-[#6b0220] text-white rounded-full py-2 px-4">
                    Select from the computer
                  </span>
                </div>
                <p className="text-gray-500">or drag photo here</p>
                <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>
            </label>
            <input
              id="image-upload"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
            />
          </div>
        </div>

        {/* Location */}
        <div className="p-2">
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          />
        </div>

        {/* Organizer Name and Email */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            id="organizer-name"
            name="organizerName"
            placeholder="Organizer Name"
            value={formData.organizerName}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          />
          <input
            type="email"
            id="organizer-email"
            name="organizerEmail"
            placeholder="Organizer Email"
            value={formData.organizerEmail}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          />
        </div>

        {/* Organizer Address */}
        <div className="p-2">
          <input
            type="text"
            id="organizer-address"
            name="organizerAddress"
            placeholder="Organizer Address"
            value={formData.organizerAddress}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: '#f6f6f6' }}
          />
        </div>

        {/* Start Date and End Date */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
            <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
              </svg>
              <span className="ml-2">Start Date</span>
            </span>
            <input
              type="datetime-local"
              id="start-date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }}
            />
          </div>

          <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
            <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
              </svg>
              <span className="ml-2">End Date</span>
            </span>
            <input
              type="datetime-local"
              id="end-date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }}
            />
          </div>
        </div>

        {/* Status and Tags */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-[#f6f6f6] rounded-md">
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50"
              style={{ backgroundColor: '#f6f6f6', padding: 0 }}
            >
              <option value="">Select Availability</option>
              <option value="active">Available</option>
              <option value="inactive">Unavailable</option>
            </select>
          </div>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={formData.tags}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 h-12"
            style={{ backgroundColor: '#f6f6f6' }}
          />
        </div>

        {/* Submit */}
        <div className="col-span-full mt-6 p-2">
          <button
            type="submit"
            className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
