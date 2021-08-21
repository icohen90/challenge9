function generateMarkdown(data) {
  return `
  # ${data.title}
  <img src="https://img.shields.io/badge/license-${data.license}-blue.svg">

  # Description
  ${data.description}

  # Table of Contents 
    <ul>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#License">License</a></li>
      <li><a href="#Contributing">Contributing</a></li>
      <li><a href="#Tests">Tests</a></li>
      <li><a href="#Questions">Questions</a></li>
    </ul>
  
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}

  # Usage
​  This application is used for ${data.usage}

  # License
  This project is license under the ${data.license} license.

  # Contributing
  ​Contributors: ${data.contributing}

  # Tests
  To run tests, you need to run the following command: ${data.tests}

  # Questions
  If you have any questions about the repo, open an issue or contact medirectly at <a href="mailto:${data.email}"> ${data.email}</a>. You can find more of my work at ${data.Github}.

`;
}

module.exports = generateMarkdown;
