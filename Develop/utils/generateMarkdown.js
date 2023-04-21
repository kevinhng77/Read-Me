// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function getName(){
  return "THIS THE NAME YOU WANTED"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generating markdown")
  console.log(data)
  return `# ${data.Title}
## ${data.Description}

## ${data.TableOfContents}

## ${data.Installation}

## ${data.Usage}

## ${data.License}

## ${data.Contributing}

## ${data.Tests}

## ${data.Questions}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
