// Imports
#import "@preview/brilliant-cv:4.1.0": cv-entry, cv-section, h-bar


#cv-section("Education")

#cv-entry(
  title: [Master of Science in Data Engineering and Analytics],
  society: [Technical University of Munich (TUM)],
  date: [Graduation 2026],
  location: [Munich, Germany],
  description: list(
    [Major: Data Engineering and Analytics #h-bar() Minor: Software Engineering],
    [Master's Thesis: AI-Based Access Point Placement Optimization in Indoor Wireless Networks],
    [Developed a simulation-based optimization framework for indoor access point placement using Reinforcement Learning and Bayesian Optimization],
    [Built automated Python pipelines for experiments, benchmarking, and result analysis],
    [Evaluated performance using runtime, coverage, and feasibility metrics across multiple scenarios],
    [Improved optimization speed using TD3-based RL compared with traditional methods],
    [Applied machine learning, data analysis, and software engineering in a research environment],
  ),
  tags: ("Data Engineering", "Analytics", "Software Engineering"),
)

#cv-entry(
  title: [Bachelor's in Computing and Information Technology],
  society: [Arab Academy for Science, Technology & Maritime Transport (AASTMT)],
  date: [Graduation 2021],
  location: [Cairo, Egypt],
  description: list(
    [Major: Computer Science (CS) - Software Engineering (SE)],
    [Bachelor Thesis (A+): Real-Time Car Violations Detection System],
    [Developed a real-time car violation detector using Raspberry Pi with cameras, IR, GPS, AI, OpenCV, and cloud computing],
    [Detected traffic-light, speed, and lane violations using OpenCV and automatically presented them on Azure],
    [Used the Google Maps API for location and speed, and built a Python Flask website connected to an Azure database for user access],
    [Reduced road-crash risks through advanced violation detection],
    [GPA: 3.4 (US GPA)],
  ),
  tags: ("Computer Science", "Software Engineering", "Computer Vision"),
)
