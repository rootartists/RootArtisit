import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const initialState = {
  name: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  artistType: "Model", 
  profession: "",
  height: "",
  weight: "",
  waist: "",
  bust: "",
  hips: "",
  shoes: "",
  portfolio: null,
};

const artistTypes = ["Model", "Creative"];

const genders = ["Male", "Female"];

const professions = [
  "Photographer",
  "Hair Artist",
  "Director",
  "Film and Video",
  "Other",
];

const GetScouted = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  Object.keys(form).forEach((key) => {
    formData.append(key, form[key]);
  });

  try {
    await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
      method: "POST",
      body: formData,
    });
    alert("Application Submitted & Sent to Admin!");
    setForm(initialState);
  } catch (err) {
    console.error(err);
    alert("Error submitting form");
  }
};


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-6 md:pl-0 md:pr-0 max-w-6xl mx-auto py-16">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold mt-6 mb-2">
          Submit Your Application
        </h1>
        <p className="font-bold text-sm mb-6">
          Please submit your application using the form below and we
        </p>

        {/* Form box */}
        <form
          className="border border-gray-400 p-6 md:p-12 rounded-sm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              NAME <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Age */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              AGE <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Gender */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">GENDER</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm bg-white"
            >
              <option value="">SELECT GENDER</option>
              {genders.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          {/* Phone */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              PHONE NO <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Email */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              EMAIL <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Artist Type */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              SELECT ARTIST TYPE <span className="text-red-600">*</span>
            </label>
            <select
              name="artistType"
              value={form.artistType}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm bg-white"
            >
              {artistTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* If Model → Measurements */}
          {form.artistType === "Model" && (
            <>
              {["height", "weight", "waist", "bust", "hips", "shoes"].map(
                (field) => (
                  <div className="mb-5" key={field}>
                    <label className="block font-bold text-sm mb-1">
                      {field.toUpperCase()}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full border border-gray-400 px-3 py-2 rounded-sm"
                    />
                  </div>
                )
              )}
            </>
          )}

          {/* If Creative → Profession Dropdown */}
          {form.artistType === "Creative" && (
            <div className="mb-5">
              <label className="block font-bold text-sm mb-1">
                PROFESSION <span className="text-red-600">*</span>
              </label>
              <select
                name="profession"
                value={form.profession}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-3 py-2 rounded-sm bg-white"
              >
                <option value="">SELECT PROFESSION</option>
                {professions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Portfolio */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              PORTFOLIO <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              name="portfolio"
              onChange={handleChange}
              required
              className="block"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-bold px-6 py-2 rounded-sm"
          >
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetScouted;
