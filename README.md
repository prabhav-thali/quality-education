[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/)

_INSTRUCTIONS: This GitHub repository serves as a template and example you can use to create a well documented README for your project for the [2024 Call for Code Global Challenge](https://developer.ibm.com/callforcode/global-challenge/)._

Your required deliverables and project descriptions should be officially submitted to your My Team > Submissions section of the [Call for Code Global Challenge web site](https://compete.callforcode.skillsnetwork.site/competitions/2024-call-for-code-global-challenge), but you can also optionally include them here for completeness, as it is good practice to clearly document your project in your README file. Replace the examples seen here with your own deliverable links.

Use the **Use this template** button to create a new version of this repository and start entering content for your own Call for Code submission project. Make sure you have [registered for the 2024 Call for Code Global Challenge](https://www.ibm.com/account/reg/signup?formid=urx-52643) to access resources and full project submission instructions. Remove any "INSTRUCTIONS" sections when you are ready to submit your project.

_New to Git and GitHub? This free online course will get you up to speed quickly: [Getting Started with Git and GitHub](https://www.coursera.org/learn/getting-started-with-git-and-github)_.

# WatXZBots - ShikshaMate

- [Project summary](#project-summary)
  - [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
  - [How our technology solution can help](#how-our-technology-solution-can-help)
  - [Our idea](#our-idea)
- [Technology implementation](#technology-implementation)
  - [IBM watsonx product(s) used](#ibm-ai-services-used)
  - [Other IBM technology used](#other-ibm-technology-used)
  - [Solution architecture](#solution-architecture)
- [Presentation materials](#presentation-materials)
  - [Solution demo video](#solution-demo-video)
  - [Project development roadmap](#project-development-roadmap)
- [Additional details](#additional-details)
  - [How to run the project](#how-to-run-the-project)
  - [Live demo](#live-demo)
- [About this template](#about-this-template)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

_INSTRUCTIONS: Below are the suggested sections to include in your README file to make sure your project is well documented. You can remove this instruction text._

## Project summary

### The issue we are hoping to solve

Primary and secondary school completion rates are rising, leading to lot of pressure in availability of teachers and personal assistance. Low and middle income countries facing financial gap - even in developing countries, the access to quality education is expensive and not affordable to all sections of society. Providing rich resources to all students will help in decreasing the illiteracy rates and ultimately lead to betterment of our society

### How our technology solution can help

Personal assistant using watsonx.ai to achieve equitable access to quality education and opportunities

### Our idea

Our solution focusses on addressing one of UN's sustainable development goal: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all".   
* This aims at creating a personal teacher/guide which can provide information on specific topics asked by the user. This will help student to focus on the topic by referring to reliable information sources available in the database.  
* As a next step student can test their knowledge by taking practice exams which are provided by our solution. This will also help teachers to save time needed to set up these quizzes, providing them opportunities to focus on other important tasks.  
* Along with this the model also evaluates the performance of the student and provides prompt feedback on topics which require improvement. It also highlights the strengths and weaknesses via a progress report. This will also provide a personalized plan based on their caliber. It also guides on what should be the action plan for further improvements.   

Our application is a chat interface deployed using Watsonx chat assistant and watsonx.ai which would allow students to interact and get prompt responses to their queries. It uses watsonx.data for collecting,storing the subject related documents which will be further referred for Quiz generation as well as concept clarification. Watsonx.data stores topic wise documents as well as sample questions for different grades. The foundation model used in watsonx.ai is llama3_1_70B-instruct. After analyzing through various foundation models, we opted for lama3_1_70B-instruct as this model powers complex conversations with superior contextual understanding, reasoning and text generation 

There is a wide scope to implement many things in the education field and we dream to expand this further as a **Career guide Assistant** :
- Tool to provide student with the list of universities based on the scroring pattern in practice tests.
- Tool to provide information of what it takes to get into university of choice.
- Tool to provide feature for student to navigate through the different options available and also highlight the chances of getting through based on university statistics and student performance.

## Technology implementation

### IBM watsonx product(s) used

_INSTRUCTIONS: Included here is a list of IBM watsonx products. Remove any products you did not use. Leave only those included in your solution code. In your official submission on the Call for Code Global Challenge web site, you are required to provide details on where and how you used each IBM watsonx product so judges can review your implementation. Remove these instructions._

**Featured watsonx products**

- [watsonx.ai](https://www.ibm.com/products/watsonx-ai) - This is our core product, which is used to invoke LLM calls, try grounding with documents etc.

- [watsonx.data](https://www.ibm.com/products/watsonx-data) - This can be used as DB to store our study material/sample question papers as vector embeddings instead of in memory, couldn't explore more due to limited resources of lite plan.

- [watsonx Assistant](https://cloud.ibm.com/catalog/services/watsonx-assistant) - This is part of our final solution where an assistant is integrated as part of our application to chat with end user.

### Other IBM technology used

INSTRUCTIONS: List any other IBM technology or IBM AI services used in your solution and describe how each component was used. If you can provide details on where these were used in your code, that would help the judges review your submission.

**Additional IBM AI services (Remove any that you did not use)**

- [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) - Explored the cloud pak for data and watsonx products through Studio.
- IBM developed models such as granite.13b.instruct.v2 and embedding model IBM_SLATE_30M_ENG.

### Solution architecture

Diagram and step-by-step description of the flow of our solution:

![Video transcription/translaftion app](./images/ShikshaMate_architecture_diagram.png)

1. The user navigates to the site and logs in.
2. He then runs a query on a specific topic.
3. Watsonx Assistant frames the most relevant response to user's query based on reference documents stored.

## Presentation materials

_INSTRUCTIONS: The following deliverables should be officially posted to your My Team > Submissions section of the [Call for Code Global Challenge resources site](https://cfc-prod.skillsnetwork.site/), but you can also include them here for completeness. Replace the examples seen here with your own deliverable links._

### Solution demo video

[![Watch the video](./images/App_screenshot.png)](https://youtu.be/WmlcijwhxiY)

### Project development roadmap

The project currently does the following things.

- The users query is correctly answered based on refernce documents stored.
- Sample questions presented on a topic as per users request for practise and also answers are validated by GenAI.
- UI for user login and a [!RAG pipeline](./SourceCode/RAG_implementation) to validate the output and create a setup is also ready.

In the future we plan to...

See below for our proposed schedule on next steps after Call for Code 2024 submission.

![Roadmap](./images/ShikshaMate_Roadmap.png)

## Additional details

_INSTRUCTIONS: The following deliverables are suggested, but **optional**. Additional details like this can help the judges better review your solution. Remove any sections you are not using._

### How to run the project

INSTRUCTIONS: In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

## About this template

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

### Team members
![team](./images/authors.jpeg)
- Namrata Bhave
- Prabhav Thali
- Vibhuti Sawant
- Amod Borkar

### License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
