# same backend 2 interfaces !

## Ui/Ux

#### Phone ui/ux ( React Native shi ? )

- top bar

  - Title
  - search & setting ==>sticky till here

  - x scrollable peoples /x scrollable stories?

- main disp
  - y scrollable chatlist sticky/fixed
    - icon -- name -- last
    - last message/connected
- bottom bar

  - home
  - stories
  - settings
  - profile

- chat page

  - top
    - round pfp -- name --phn--vidcall--info
    - username
  - main chat shits | Y scrollable
    - with buncha cutom method
    - themes/fonts/text-size
    - message/bubbles
    - reply
    - edit
  - bottom input bar (Nav bottom disappear)
    - emote-- message---- mic--img--stickcer--default emote

- bottom nav bar
  - home
  - stories
  - profie
  - setting

#### Desktop ui/ux

- homepage ( overflow none)

  - header

    - icon/title -- search user icon
    - violet blueish color theme !?

  - Main box (two separate overflow y set up)
    - sm -> full display
      - sidebar only face icons
      - message panel top bar fixing
      - loading add!?
      - scrollable y on message box only (seperately)
  - footer
    - as basics and contact us

### websockets connecting

- events
  - connect
  - activeUsers => socketUserMap
  - //userId?
  - disconnect
  - **send receiver id as params**

- send message needs (newMessage)
  - user.\_id
  - id/receiverId in params
  - msg on body
- get messsage
  - id/receiverId
  - user.\_id
  -

### Db models

- Convo
  - participants
    - user array!
  - messages
    - Msg array!
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
