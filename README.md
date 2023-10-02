# @dhanush-npm/google-sheets-to-json

A simple tool to convert Google Spreadsheets to JSON.


## Install

``` bash
npm i @dhanush-npm/google-sheets-to-json
```

## Usage

``` js
const sheetsToJson = require('@dhanush-npm/google-sheets-to-json')

sheetsToJson('API_KEY','SHEET_ID','SHEET_NAME')
.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error.message);
});
```

1. API_KEY : API credentials from google console.
2. SHEET_ID : Sheet Id of the google sheet you are trying to access.
3. SHEET_NAME ( Optional ) : Google sheet name, default Sheet1.

## License

MIT License

Copyright (c) 2023 Dhanush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<hr>

Created with 💖 by 

![Dhanush Suvarna's Github](https://github-badges.vercel.app/api/github/dhanush)