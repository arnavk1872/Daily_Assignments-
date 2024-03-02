import * as fileSystemModule from "./fileSystemModule.js";


function run() {

    fileSystemModule.listDirectoryContents("./");

    fileSystemModule.makeDir();

    fileSystemModule.fileData();

    fileSystemModule.writeToFile();
   
}

run();