Node.js is Javascript runtime built on Google v8 engine.

- 'Runtime' means its not a language its use Javascript is a language
- Browser has 'window' but for node it doesn't have 'window', it has 'global'
- Browser has 'document' but node doesn't have.
- Browser have 'process' so that we can directly access the env file in react
- but for node doesn't have process so that we use dotenv to access env file in node
- 🚀 blocking vs non-blocking
  ![Alt text](Asset/blockingVsnon.png)

## ⭐️ File system module

- fs.writeFile(file,data[,options],callback) //It will be asynchronus
- fs.writeFileSync(file,data[,options],callback) //It will be synchronous
- Difference between write and append is write will replace the previous data, but append will add the data at the end of the file.
- 'writeFileSync' overwrites existing content, while 'appendFileSync' adds to existing content.
- Both methods create a file if it does not exist, but 'writeFileSync' will replace any existing content.
```javascript
const fs = require("fs");

fs.writeFileSync("notes.txt", "Notes created by node.js");

fs.appendFileSync("notesAppend.txt", " This is an new update");
```
