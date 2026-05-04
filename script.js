// Simple interaction example

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  button.addEventListener("click", function () {
    alert("You are being redirected to LinkedIn!");
  });
});
// MAKE FUNCTION GLOBAL (THIS IS THE FIX)
window.sendMessage = function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input || !chatBox) {
    console.log("Chatbot elements not found");
    return;
  }

  let text = input.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    addMessage(response, "bot");
  }, 300);

  input.value = "";
};

// ADD MESSAGE
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
// RESPONSE LOGIC
function getResponse(input) {
  input = input.toLowerCase();

  // GREETING
  if (input.includes("hello") || input.includes("hi")) {
    return `Hello, I’m Onyinyechukwu Odionyekachukwu’s assistant. I can help you explore her skills, experience, and how to work with her. How may I assist you today?`;
  }

  // WHO ARE YOU
  if (input.includes("who") && input.includes("you")) {
    return `Onyinyechukwu Odionyekachukwu is a Biochemist, Data Analyst, and Certified Scrum Master based in Abuja, Nigeria. She has over 2 years of experience in data analysis, administrative support, and project-related work.`;
  }

  // WHAT DO YOU DO
  if (input.includes("what") && input.includes("do")) {
    return `She specializes in data analysis, reporting, and project coordination. She combines analytical thinking with structured project management to deliver clear, data-driven insights.`;
  }

  // SKILLS
  if (input.includes("skill")) {
    return `Data Analysis: ${PROFILE.skills.data.join(", ")}.\nProject Management: ${PROFILE.skills.project.join(", ")}.\nOffice Tools: ${PROFILE.skills.office.join(", ")}.\nOther: ${PROFILE.skills.other.join(", ")}.`;
  }

  // PROJECTS
  if (input.includes("project") || input.includes("work")) {
    return PROFILE.projects
      .map(p => `${p.name}:\n${p.description}\nRole: ${p.role}\nTech: ${p.tech}`)
      .join("\n\n");
  }

  // EXPERIENCE
  if (input.includes("experience")) {
    return PROFILE.workExperience
      .map(job => `${job.role} at ${job.company} (${job.period})`)
      .join("\n");
  }

  // CERTIFICATIONS
  if (input.includes("cert") || input.includes("certificate")) {
    return PROFILE.certifications.join("\n");
  }

  // EDUCATION
  if (input.includes("education") || input.includes("degree")) {
    return PROFILE.education.join("\n");
  }

  // WHY HIRE
  if (input.includes("why") && input.includes("hire")) {
    return `Onyinyechukwu brings a strong combination of analytical skills, structured thinking, and practical experience. She delivers accurate reports, creates insightful dashboards, and supports decision-making with data. She is reliable, detail-oriented, and committed to delivering value.`;
  }

  // INDUSTRIES
  if (input.includes("industry") || input.includes("industries")) {
    return `She is particularly interested in working within Healthcare, Finance, Technology, and Research sectors.`;
  }

  // AVAILABILITY
  if (
    input.includes("hire") ||
    input.includes("available") ||
    input.includes("job") ||
    input.includes("freelance") ||
    input.includes("internship")
  ) {
    return `She is available for freelance data analysis and reporting projects, open to internships in data analytics or project management, and also open to full-time roles. You can reach out via ${PROFILE.contact.email}.`;
  }

  // CONTACT
  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("phone")
  ) {
    return `Email: ${PROFILE.contact.email}\nPhone: ${PROFILE.contact.phone}`;
  }

  // LOCATION
  if (input.includes("location") || input.includes("where")) {
    return `She is based in ${PROFILE.location}.`;
  }

  // DEFAULT RESPONSE
  return "I can assist you with her skills, projects, experience, or how to hire her. Please ask a related question.";
}


// ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) {
    let welcome = document.createElement("div");
    welcome.className = "message bot";
    welcome.textContent = "Hi! I can help you learn about Onyinyechukwu’s skills, experience, and how to work with her.";
    chatBox.appendChild(welcome);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const active = document.activeElement;
      if (active && active.id === "user-input") {
        e.preventDefault();
        window.sendMessage();
      }
    }
  });
});


// PROFILE DATA
const PROFILE = {
  name: "Onyinyechukwu Odionyekachukwu",
  location: "Abuja, Nigeria",
  experience: "Over 2 years",

  skills: {
    data: ["Microsoft Excel", "Power BI"],
    project: ["Agile Methodologies", "Scrum Framework"],
    office: ["Microsoft Word", "PowerPoint"],
    other: ["Administrative Support", "Data Visualization", "Reporting", "Research Documentation"]
  },

  education: [
    "B.Sc. in Biochemistry"
  ],

  certifications: [
    "Certified Scrum Master (CSM)",
    "Data Analyst Certification"
  ],

  contact: {
    email: "sophia1995ruth@gmail.com",
    phone: "08100984717 / 08105639968"
  },

  projects: [
    {
      name: "Healthcare Data Dashboard",
      description: "Developed an interactive Power BI dashboard to analyze healthcare data and support informed decision-making.",
      role: "Data Analyst",
      tech: "Power BI, Excel"
    },
    {
      name: "Office Efficiency Tracker",
      description: "Designed an Excel-based reporting system to monitor administrative workflows and improve productivity at GGHN.",
      role: "Administrative Assistant & Data Analyst",
      tech: "Excel, PowerPoint"
    },
    {
      name: "Customer Acquisition Report (UBA)",
      description: "Created Excel reports analyzing customer acquisition trends to improve marketing strategies.",
      role: "Direct Sales Agent (DSA)",
      tech: "Excel, PowerPoint"
    }
  ],

  workExperience: [
    {
      role: "Intern / Administrative Assistant",
      company: "GGHN",
      period: "Past Role"
    },
    {
      role: "Direct Sales Agent",
      company: "United Bank for Africa (UBA)",
      period: "Past Role"
    }
  ]
};
