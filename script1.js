//alert('Hello, world!');

//https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/write
async function saveTextToFile(filename, text) {

  //https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker
  const opts = {
    suggestedName: String(filename)
  };

  // create a new handle
  const newHandle = await window.showSaveFilePicker(opts);

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(text);

  // close the file and write the contents to disk.
  await writableStream.close();
}

//let url = location.href;
//alert("we are on the site: '" + String(url) + "'");

if (String(location.href).includes("/0:/")){
  //should be a bhadoo cloud index
  let htmlDoc = String(document.documentElement.outerHTML);

  //<div class="list-group-item list-group-item-action"></div>
  let fileData = "";

  const collection = document.getElementsByClassName("list-group-item list-group-item-action");

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].children){
      if (collection[i].children.length === 4){
        fileData += ( String(collection[i].children.item(2)) + "\n");
      }
    }
  }

  //alert(fileData);


  let directorypath = decodeURI(String(location.href));
  //ignore home dir
  directorypath = directorypath.substring(directorypath.indexOf("0:/")+3,directorypath.length);
  //remove trailing slash
  directorypath = directorypath.slice(0,-1);

  directorypath = directorypath.replaceAll("/"," -- ")
  directorypath += ".m3u8";

  //alert(directorypath);

  saveTextToFile(String(directorypath),String(fileData));
}
else{
  alert("this probably isn't a Bhadoo Cloud index. idk");
}
