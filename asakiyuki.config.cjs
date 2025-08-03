/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
    compiler: {
        autoCompress: false,
        fileExtension: "class",
        encodeJson: false,
        UI: {
            nameLength: 32,
            namespaceAmount: 1,
            namespaceLength: 32,
            obfuscateName: true,
            obfuscateType: true,
        },
    },
    installer: {
        autoInstall: true,
        developEvironment: true,
        previewVersion: false,
        customPath: false,
        installPath: "/your/minecraft/data/path",
    },
    manifest: {
        name: "Sodium [UI] [Dev]",
        description: "Build with AsaJS <3",
        version: [0, 0, 2],
        baseGameVersion: [1, 21, 80],
    },
};

module.exports = { config }
