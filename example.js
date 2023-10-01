const googleSheetsToJSON = require("./index");

googleSheetsToJSON(API_KEY,SHEET_ID).then((data)=> {
  console.log(data)
}).catch((error)=>{
  console.log(error.message)
})