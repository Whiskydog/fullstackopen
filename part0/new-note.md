# Exercise 0.4: New note diagram

```mermaid
sequenceDiagram
  Browser ->> +Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  Server -->> -Browser: 302 Found

  Note right of Browser: Response causes a redirection to /exampleapp/notes based on 'location' header

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/notes
  Server -->> -Browser : HTML file

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server -->> -Browser : CSS file

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/main.js
  Server -->> -Browser : JS file

  Note right of Browser: JS file fetches the resource at /exampleapp/data.json

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
  Server -->> -Browser : JSON file

  Note right of Browser: Browser renders the notes based on data in the JSON file
```