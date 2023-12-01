# Exercise 0.5: Single page app diagram

```mermaid
sequenceDiagram
  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/spa
  Server -->> -Browser : HTML file

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server -->> -Browser : CSS file

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  Server -->> -Browser : JS file

  Note right of Browser: JS file fetches the resource at /exampleapp/data.json

  Browser ->> +Server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
  Server -->> -Browser : JSON file

  Note right of Browser: Browser runs XMLHttpRequest's callback that renders the list of notes from the JSON file
```