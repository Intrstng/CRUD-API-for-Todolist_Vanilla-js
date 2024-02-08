## Simple CRUD API written on Vanilla js for Todolist app
### Start server
node index.js

**Use Postman with:**

***GET***

``http://localhost:5000/api/todos``


``http://localhost:5000/api/todos/2``

***POST***

``http://localhost:5000/api/todos``

_body:_
```sh
{
  "title": "new title",
  "completed": false
}
```

***PATCH*** - changes status of completed property of ToDo (**set true**)

``http://localhost:5000/api/todos/3``

***DELETE***

``http://localhost:5000/api/todos/3``
