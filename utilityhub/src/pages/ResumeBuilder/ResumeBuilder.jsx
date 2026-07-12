import { useState } from "react";
import "./ResumeBuilder.css";

function ResumeBuilder() {

    const [resume, setResume] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        summary: "",
        education: "",
        college: "",
        passingYear: "",
        skills: "",
        projectTitle: "",
        projectDescription: "",
    });

    return (

        <div className="resume-builder">

            <h1>Resume Builder</h1>

            <div className="resume-container">

                {/* LEFT SIDE */}

                <div className="resume-form">

                    <h2>Resume Details</h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={resume.name}
                        onChange={(e) =>
                            setResume({ ...resume, name: e.target.value })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={resume.email}
                        onChange={(e) =>
                            setResume({ ...resume, email: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={resume.phone}
                        onChange={(e) =>
                            setResume({ ...resume, phone: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="City"
                        value={resume.city}
                        onChange={(e) =>
                            setResume({ ...resume, city: e.target.value })
                        }
                    />

                    <textarea
                        rows="4"
                        placeholder="Professional Summary"
                        value={resume.summary}
                        onChange={(e) =>
                            setResume({ ...resume, summary: e.target.value })
                        }
                    />

                    <h2>Education</h2>

                    <input
                        type="text"
                        placeholder="Degree"
                        value={resume.education}
                        onChange={(e) =>
                            setResume({ ...resume, education: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="College Name"
                        value={resume.college}
                        onChange={(e) =>
                            setResume({ ...resume, college: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Passing Year"
                        value={resume.passingYear}
                        onChange={(e) =>
                            setResume({ ...resume, passingYear: e.target.value })
                        }
                    />
                    <h2>Skills</h2>

                    <input
                        type="text"
                        placeholder="Java, Spring Boot, React, MySQL"
                        value={resume.skills}
                        onChange={(e) =>
                            setResume({ ...resume, skills: e.target.value })
                        }
                    />

                    <h2>Projects</h2>

                    <input
                        type="text"
                        placeholder="Project Title"
                        value={resume.projectTitle}
                        onChange={(e) =>
                            setResume({
                                ...resume,
                                projectTitle: e.target.value,
                            })
                        }
                    />

                    <textarea
                        rows="4"
                        placeholder="Project Description"
                        value={resume.projectDescription}
                        onChange={(e) =>
                            setResume({
                                ...resume,
                                projectDescription: e.target.value,
                            })
                        }
                    />
                    <button>
                        Generate Resume
                    </button>

                </div>

                {/* RIGHT SIDE */}

                <div className="resume-preview">

                    <h2>Live Preview</h2>

                    <h1>{resume.name || "Your Name"}</h1>

                    <p>{resume.email || "example@email.com"}</p>

                    <p>{resume.phone || "+91 XXXXX XXXXX"}</p>

                    <p>{resume.city || "Your City"}</p>

                    <hr />

                    <h3>Professional Summary</h3>

                    <p>
                        {resume.summary || "Write your professional summary here..."}
                    </p>

                    <hr />

                    <h3>Education</h3>

                    <p>
                        <strong>Degree:</strong>{" "}
                        {resume.education || "Your Degree"}
                    </p>

                    <p>
                        <strong>College:</strong>{" "}
                        {resume.college || "College Name"}
                    </p>

                    <p>
                        <strong>Passing Year:</strong>{" "}
                        {resume.passingYear || "2025"}
                    </p>
                    <hr />

                    <h3>Projects</h3>

                    <h4>
                        {resume.projectTitle || "ToolNest"}
                    </h4>

                    <p>
                        {resume.projectDescription ||
                            "Professional utility website built using React, JavaScript, HTML and CSS."}
                    </p>
                </div>

            </div>

        </div>

    );
}

export default ResumeBuilder;