# Whatsapp Clone

## Functional Requirements
-  User should be able to Sign in with an profile image (BLOB storage needed)
-   User should be able to Login with the same credential thereafter (USER DATA PERSISTENT)
-   User should be able to search and view info of other users on the App
-   User should be able to initiate one-to-one chat with any other registered user
-  User should be able to create a group chat with other registered users
-  User should be able to remove other users from the group chat if he is the ADMIN
> -   **Realtime communication between Logged in user and any other user /users **
-  Realtime typing indicator is shown when the chat is active for user and somebody else is typing
-  Notification is shown for missed messages when chat is not active for any user
-  Messages are saved for all chats (CHAT DATA PERSISTENT)

## Non Functional Requirements
-  Realtime communication
-  Passwords should be encrypted and stored
-  JWT should be used as a stateless solution for authentication and authorization

## DEMOS
### ONE TO ONE CHAT
![](./one-to-one.gif)
### GROUP CHAT
![](./group-chat.gif)

## API'S
| API ENDPOINT  | TYPE  | ACCESS  | Description                  |
|---------------|-------|---------|------------------------------|
| /api/user/    | POST  | Public  | Register/SignIn new user    |
| /api/user/login| POST  | Public  | Auth the user    |
| /api/user?search=paras    | GET  | Protected  | Get or Search all users by name or email matching with the search query  |
| /api/chat/|  POST | Protected  |  Create or fetch One to One Chat,a userId is sent in the body which belongs to the other user chat is initiated to by the logged-in user ,if a chat exists with the users array containing both the logged-in user ID and the other id , that chat already exists , else we create the chat   |
| /api/chat/group| POST  | Protected  |   Create New Group Chat, a list of users ids and group name is sent in the body, the logged-in user becomes the groupAdmin  |
| /api/chat/|  GET |  Protected |    Fetch all chats for the logged-in user |
| /api/chat/rename|  PUT |  Protected |    Rename Group Chat |
| /api/chat/groupadd|  PUT |  Protected |   Add user to Group  |
| /api/chat/groupremove|  PUT | Protected  |   Remove user from Group  |
| /api/Message/    | POST  | Protected  | Create New Message and also set it as lastMessage of the corresponding chat    |
| /api/Message/:chatId    | GET  | Protected  | Get all Messages for a particular chat ID  |
| All Models-> |  ![](./images/2023-09-09-15-06-54.png)     |![](./images/2023-09-09-15-11-37.png)|![](./images/2023-09-09-15-18-42.png)|
