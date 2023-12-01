# Exercise 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
  Note right of Browser: Browser sends a POST request with the note object in its body

  Browser ->> +Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Server -->> -Browser: { message: "note created" }

  Note right of Browser: Browser adds the new note to the notes list and renders it again
```
