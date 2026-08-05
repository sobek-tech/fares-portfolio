// Imports
#import "@preview/brilliant-cv:4.1.0": cv-entry, cv-section


#cv-section("Projects")

#cv-entry(
  title: [Advanced Practical Course - Enterprise Software Engineering using SAP],
  society: [TUM & Capgemini],
  date: [Oct 2023 - Feb 2024],
  location: [Munich, Germany],
  description: list(
    [Implemented a sustainability cockpit using ABAP for backend functionality, OData for data exchange, and SAPUI5 for frontend visualization],
    [Met with stakeholders to collect project requirements and translate them into a product],
    [Created an Agile roadmap, data model, and software architecture],
    [Held weekly stakeholder meetings to present progress and refine the roadmap],
    [Built a company visualization dashboard with high-level reporting, recent-data tracing, and goal-achievement analysis],
  ),
  tags: ("SAP ABAP", "OData", "SAPUI5"),
)

#cv-entry(
  title: [High-Level Feature Extraction Application],
  society: [TUM - Data Processing],
  date: [Nov 2024 - May 2025],
  location: [Munich, Germany],
  description: list(
    [Developed an application to extract high-level features from images using advanced machine-learning models],
    [Leveraged BLIP-2 for image captioning and integrated models from Hugging Face and Model Zoo, with plans for BLIP-3 video captioning and fine-tuning enhancements],
    [Implemented PySceneDetect to identify and select keyframes from video scenes],
    [Combined keyframes into composite images for comprehensive feature extraction],
    [Stored extracted high-level features and integrated the module with an existing tool],
  ),
  tags: ("Machine Learning", "BLIP-2", "PySceneDetect"),
)

#cv-entry(
  title: [Online IDE Development],
  society: [TUM - Advanced Topics in Software Engineering],
  date: [Oct 2024 - Apr 2025],
  location: [Munich, Germany],
  description: list(
    [Collaborated on an online Integrated Development Environment as part of an advanced software engineering course],
    [Used Docker, Docker Compose, and GitLab CI/CD for virtualization, orchestration, and continuous integration],
    [Designed Angular component architecture and user interfaces, applying the Observer Pattern for distributed event handling],
    [Implemented Spring Cloud service discovery, API gateway patterns, load balancing, and a container-per-service approach],
    [Developed Spring Boot RESTful services, applied Spring Security, managed data access with JDBC/JPA/Hibernate, implemented OAuth 2.0, and conducted unit and integration testing],
  ),
  tags: ("Angular", "Spring Boot", "Docker", "GitLab CI/CD"),
)
