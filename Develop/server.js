const express = require("express");
const fs = require("fs");

app.get('/public/notes', (req, res) => {

  import {promises as fs} from `fs`;
  export default async function Page() {
    const file = await fs.readFile(process.cwd() + `/public/notes.html`, `utf8`);
    const data = JSON.parse(file);
    
    return{
      [
        {
            "title":"Test Title",
            "text":"Test text"
        }
    ]
    };

  }

  });

app.get(`/public/index.html`, (req, res) => {

  

});