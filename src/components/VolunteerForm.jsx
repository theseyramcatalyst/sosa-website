import React, { useState } from "react";

const VolunteerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    occupation: "",
    education: "",
    email: "",
    phone: "",
    objective: "",
    motivation: "",
    socialMedia: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert(
        "Please confirm that you agree to be actively engaged in the activities of SoSA."
      );
      return;
    }

    console.log("Volunteer application:", formData);

    setSubmitted(true);
  };

  return (
    <section
      id="volunteer"
      className="bg-white px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[500px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Become A{" "}
            <span className="text-[#d40000]">
              Volunteer
            </span>
          </h2>

          <div className="mx-auto mt-3 h-[1px] w-14 bg-[#d40000]" />
        </div>

        {submitted ? (
          <div className="rounded-md border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-green-700">
              Application Submitted
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Thank you for your interest in volunteering with Sowing Seeds
              Alliance.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <FormField
              label="Full Name"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <FormField
              label="Address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

            <FormField
              label="City"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <FormField
              label="Country"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <FormField
              label="Occupation"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
            />

            <FormField
              label="Education Status"
              name="education"
              placeholder="Education Status"
              value={formData.education}
              onChange={handleChange}
            />

            <FormField
              label="Your Active E-mail Address"
              name="email"
              type="email"
              placeholder="Your Active E-mail Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <FormField
              label="Your Active Phone Number"
              name="phone"
              placeholder="Your Active Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <FormField
              label="Which of SoSA's three objectives do you strongly identify with?"
              name="objective"
              placeholder="Which of SoSA's three objectives do you strongly identify with?"
              value={formData.objective}
              onChange={handleChange}
            />

            {/* Motivation */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                In not more than 100 words, briefly state
              </label>

              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="In not more than 100 words, briefly state your motivation on wanting to volunteer with SoSA"
                rows={6}
                className="w-full resize-none rounded border border-gray-200 px-3 py-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-[#d40000]"
              />
            </div>

            <FormField
              label="Kindly provide your link or username to any of the following social media"
              name="socialMedia"
              placeholder="Kindly provide your link or username to any of the following social media"
              value={formData.socialMedia}
              onChange={handleChange}
            />

            {/* Agreement */}
            <label className="flex items-start gap-4 text-xs leading-[1.6]">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#d40000]"
              />

              <span>
                By checking this box, you agree to be actively engaged in the
                activities of SoSA if selected as a volunteer.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 bg-[#d40000] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#b80000]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-10 w-full rounded border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-[#d40000]"
      />
    </div>
  );
};

export default VolunteerForm;