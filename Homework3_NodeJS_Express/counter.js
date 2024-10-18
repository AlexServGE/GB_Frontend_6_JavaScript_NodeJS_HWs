const fs = require(`fs`);

function getFileInfo(path) {
    try {
        return {
            isFileExist: true,
            data: fs.readFileSync(path, 'utf-8'),
        };
    } catch (error) {
        return {
            isFileExist: false,
            data: null,
        };
    }
}

function counterToFile(path) {
    let { isFileExist, data } = getFileInfo(path);
    if (isFileExist) {
        data++;
        fs.writeFileSync(path, data.toString());
    } else {
        fs.writeFileSync(path, '1');
    }
}

module.exports = { counterToFile };
