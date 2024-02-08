### Start app
node index.js

**GET**

``http://localhost:5000/api/todos``


``http://localhost:5000/api/todos/2``

**POST**

``http://localhost:5000/api/todos``

_body:_
```sh
{
  "title": "new title",
  "completed": false
}
```

**POST** - changes status of completed property of ToDo

``http://localhost:5000/api/todos/3``

**DELETE**

``http://localhost:5000/api/todos/3``
