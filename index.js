/**
 * The actions toolkit is a collection of Node.js packages that allow you to quickly build JavaScript actions with more consistency.
 * 
 * The toolkit @actions/core package provides an interface to the workflow commands, input and output variables, exit statuses, and debug messages.
 * 
 * The toolkit also offers a @actions/github package that returns an authenticated Octokit REST client and access to GitHub Actions contexts.
 * 
 * The toolkit offers more than the core and github packages. For more information, see the actions/toolkit repository.
 * 
 */

 // https://github.com/actions/toolkit/tree/master/packages/core
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);
  const time = (new Date()).toTimeString();
  core.setOutput('time', time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
}
catch (err) {
  core.setFailed(err.message);
}