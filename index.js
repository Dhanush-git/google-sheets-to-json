const arrayToJSON = require('./array-to-json');

const isRequired = (param) => { throw new Error(`${param} is required`); };

async function googleSheetsToJSON(apiKey=isRequired("ApiKey"),sheetId=isRequired("SheetId")) {
  const API_KEY = apiKey;
  const SHEET_ID = sheetId;
  try {
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
    const data = await fetch(sheetsUrl)
      .then((res)=> res.json())
      .then((data)=> {
        if (data.error){
          throw new Error(data.error.message)
        }
        return data
      }).catch((error)=>{
        throw new Error(error.message)
      });
    return arrayToJSON(data.values);
  } catch (error) {
    return error.message
  }
}

module.exports = googleSheetsToJSON