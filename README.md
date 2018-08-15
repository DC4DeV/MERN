# MERN ---->  Chatbox
Work on MongoDB Express React Node.js for fullstack App ChatBox


For use, you must clone this repository. And use command `yarn` for downloading project dependencies.

You must create file `backend/secrets.js` for connectiong you app to you database MongoDB.

```
// backend/secrets.js template
const secrets = {
  dbUri: 'mongodb+srv://<user>:<password>@<database.mongodb.net>',
};

export const getSecret = key => secrets[key];
```
