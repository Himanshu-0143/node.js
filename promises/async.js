function downloadFile(){
  return new Promise((resolve)=>{setTimeout(()=>{ resolve('File Downlaoded successfully !');}, 3000);
});
}

async function startDownloading() {
  console.log('Downlaoding file...');
  let result = await downloadFile();
  console.log(result);
  console.log('Process finished.');
}

startDownloading();

