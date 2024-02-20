import * as fileSystemModule from "./fileSystemModule.js";


async function run(){

    fileSystemModule.listDirectoryContents("./");

    fileSystemModule.makeDir();

    fileSystemModule.fileData();

    fileSystemModule.writeToFile();

}

run();