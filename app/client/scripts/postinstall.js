const _fs = require('fs-extra');
const fs = require('fs');

console.log('Renamed urbania-library-components to urbania');
const OLD_PATH = './node_modules/urbania-library-components/';
const NEW_PATH = './node_modules/urbania';
const PATH_DIST = NEW_PATH + '/dist'

fs.renameSync(OLD_PATH, NEW_PATH);
_fs.copySync(PATH_DIST, NEW_PATH);
_fs.removeSync(PATH_DIST);