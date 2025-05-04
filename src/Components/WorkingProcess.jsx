
import React from "react";
import homepageimg from "/homepageimg.jpg";


const steps = [
  {
    title: "Student Screening",
    description:
      "First, we evaluate the qualifications, skills, and potential of students to succeed in their desired educational pursuits and to ensure a good match between students and the programs they are applying for.",
  },
  {
    title: "University Assistance",
    description:
      "Our experienced team ensures a smooth and efficient process, helping students secure admissions to their desired universities abroad.",
  },
  {
    title: "Admission Assistance",
    description:
      "Our dedicated team provides guidance on meeting admission requirements and deadlines.",
  },
  {
    title: "Documentation Guidance",
    description:
      "We assist students in understanding and compiling the necessary documents for their study abroad applications, including academic transcripts, letters of recommendation, personal statements, and more.",
  },
  {
    title: "Visa Lodgement",
    description:
      "We assist students in understanding visa requirements, preparing the necessary documentation, and completing the application accurately.",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "We guide students on travel preparations, cultural adaptation, and safety tips.",
  },
];

const HowWeWork = () => {
    return (
      <div className="howwework-wrapper">
        <div className="left-section">
          <img
            src={homepageimg}
            alt="Happy students"
            width={600}
            height={400}
            className="main-image"
          />
        </div>
        <div className="right-section">
          <p className="process-subtitle">Our working process</p>
          <h2 className="process-title">How we Work ?</h2>
          <div className="step-wrapper">
            {steps.map((step, index) => (
              <div className="step-box" key={index}>
                <div className="step-index">{index + 1}</div>
                <div>
                  <h4 className="step-heading">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HowWeWork;
  