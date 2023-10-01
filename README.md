# google-sheets-to-json

A simple tool to export Google Spreadsheets to JSON files.


## Install

```
npm i @dhanush-npm/google-sheets-to-json
```

## Usage

```
const sheetsToJson = require('@dhanush-npm/google-sheets-to-json')

sheetsToJson('API_KEY','SHEET_ID')
.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error.message);
});
```