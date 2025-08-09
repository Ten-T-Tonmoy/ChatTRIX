// here to document what i am doing serially

### started with backend

- setted up server.js basic
- then set the connectDB
- designing model
- making auth
- setting up user routes signup login logout
- routes and controller
-

### BE endpoints and purposes

- /api/auth
  - ## /signup =>
  - /login =>
    - makes the cookie
  - /logout =>
    - clears the cookie

### Db models

    - Convo
        - participants
            -user array!
        - messages
            -Msg array!
    - Msg
        - senderId
        - receiverId
        - msg
        -add image? ⚠️

    - User
        - fullname
        - username
        - password
        - gender (male,female)
        - profilePic
        - createdAt?

            - can be refined
                - friends
                - pfp and cover
                - about bio loca
                - bday extra info
                - add friend option
                - discovery option
