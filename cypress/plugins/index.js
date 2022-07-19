// const addMAtchImageSnapshotPlugin = require('cypress-image-snapshot/plugin')
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = async (on, config) => {

  on('file:preprocessor', cucumber())

  on('task', {
    log (message) {
      console.log(message)
      return null
    }
  })

  on('after:run', (results) => {
    if (results) {
      fs.mkdirSync("cypress/reports/result", { recursive: true });
      fs.writeFile("cypress/reports/result/results.json", JSON.stringify(results));
    }
  })

  const file = config.env.configFile || 'int'
  return getConfigurationByFile(file)

};
