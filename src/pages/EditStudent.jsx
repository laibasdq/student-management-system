import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Input from "../components/Input";
import studentsData from "../data/students";

function EditStudent({ students, onUpdateStudent }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const studentList = students || studentsData;

  const student = studentList.find(
    (item) => String(item.id) === String(id)
  );

  const [formData, setFormData] = useState(() => {
    if (!student) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        gender: "",
        dateOfBirth: "",
        studentClass: "",
        section: "",
        rollNumber: "",
        status: "Active",
        description: "",
      };
    }

    const nameParts = student.name?.split(" ") || [];

    return {
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      email: student.email || "",
      phone: student.phone || "",
      address: student.address || "",
      city: student.city || "",
      country: student.country || "",
      gender: student.gender || "",
      dateOfBirth: student.dateOfBirth || "",
      studentClass: student.class || "",
      section: student.section || "",
      rollNumber: student.rollNumber || student.id || "",
      status: student.status || "Active",
      description: student.description || "",
    };
  });

  if (!student) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Student Not Found
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          The student you are trying to edit does not exist.
        </p>

        <button
          onClick={() => navigate("/students")}
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to Students
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleReset = () => {
    const nameParts = student.name?.split(" ") || [];

    setFormData({
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      email: student.email || "",
      phone: student.phone || "",
      address: student.address || "",
      city: student.city || "",
      country: student.country || "",
      gender: student.gender || "",
      dateOfBirth: student.dateOfBirth || "",
      studentClass: student.class || "",
      section: student.section || "",
      rollNumber: student.rollNumber || student.id || "",
      status: student.status || "Active",
      description: student.description || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = {
      ...student,

      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      class: formData.studentClass,
      section: formData.section,
      rollNumber: formData.rollNumber,
      status: formData.status,
      description: formData.description,
    };

    onUpdateStudent(updatedStudent);

    alert("Student updated successfully!");

    navigate("/students");
  };

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Edit Student
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Update student information.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8"
      >

        {/* Personal Information */}
        <h2 className="mb-5 text-lg font-semibold text-gray-800 sm:text-xl">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

          <Input
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />

          <div className="md:col-span-2">
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>

          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />

          <Input
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter country"
          />

          {/* Gender */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <Input
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />

        </div>

        {/* Academic */}
        <h2 className="mb-5 mt-8 text-lg font-semibold text-gray-800 sm:text-xl">
          Academic Information
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Class */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Class
            </label>

            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select Class</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Section
            </label>

            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>

          <Input
            label="Roll Number"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="Enter roll number"
            required
          />

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter description..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={() => navigate("/students")}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Update Student
          </button>

        </div>
      </form>
    </div>
  );
}

export default EditStudent;