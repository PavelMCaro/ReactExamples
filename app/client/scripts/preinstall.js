const package = require(process.cwd() + '/package.json');
const fs = require('fs');

const chunk = package.dependencies['urbania-library-components']
    .split('#')[0];

const env = process.env.NODE_ENV || 'dev';
const bitbucketURL = chunk + '#' + env;
console.log('link urbania-library-components', bitbucketURL);
package.dependencies['urbania-library-components'] = bitbucketURL;
fs.writeFileSync('package.json', JSON.stringify(package, null, 4));