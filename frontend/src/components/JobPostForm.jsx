import { useState } from "react";
import "./JobPostForm.css"; // Importing the CSS

function JobPostForm() {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    category: "",
    location: "",
    salary: "",
    description: "", // added
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job posted successfully!");
        setJobData({
          title: "",
          company: "",
          category: "",
          location: "",
          salary: "",
          description: "", // reset
        });
      } else {
        alert("Error posting job.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
    }
  };

  return (
    <div className="job-post-form-container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Job Category"
          value={jobData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary (e.g., CAD 60,000/year)"
          value={jobData.salary}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobPostForm;
