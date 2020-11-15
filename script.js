var output = document.getElementById('output')

var a = "";
  function getRandom (from, to) {
  return Math.floor(from + Math.random()*(to + 1 - from))
}

FilePond.registerPlugin(
  FilePondPluginImagePreview,
);

var someobj = FilePond.create(
  document.querySelector('input'),
);

var track = ""
console.log(someobj);

someobj.on('addfile',function(error, file){
    a = "File Uploaded";
    console.log(a)
});




var gayBtn = document.getElementById('pidor') 

gayBtn.addEventListener('click', ifGay)

function ifGay () {

if (a === "File Uploaded") {
  document.getElementById("pidor").disabled = true;
var random = getRandom(1,3) 
if (random == 1) {
  output.innerText = "You are PRETTY"
 
}
else {
  output.innerText = "Oups, you are just beautiful"

} 
} 
else {output.innerText = "Please upload your photo" } 
} 
/*document.addEventListener('FilePond:loaded', e => {
  console.log('FilePond ready for use', e.detail);
}); */
/*if (FilePond.Status === 4) {console.log("Ready")}
else console.log("else") */