const users = [];

//joins the user to a specific chatroom
function joinUser(id, username, room) {
  const chatUser = { id, username, room };

  users.push(chatUser);
  console.log(' joinUser', users);
  return chatUser;
}

//get a particular user id to return current user
function getCurrentUser(id) {
  return users.find((chatUser) => chatUser.id === id);
}

//calla when user leaves the chat & deletes them from an array
function deleteUser(id) {
  const index = users.findIndex((chatUser) => chatUser === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
module.exports = { joinUser, getCurrentUser, deleteUser };
