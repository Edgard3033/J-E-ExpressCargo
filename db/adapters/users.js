const client = require("../client");

async function createUser(userObj) {
  const {
    rows: [user],
  } = await client.query(
    `
  INSERT INTO users(email, password)
  VALUES($1, $2)
  ON CONFLICT (email) DO NOTHING
  RETURNING *;
    `,
    [userObj.email, userObj.password]
  );
  return user;
}

module.exports = {
  createUser,
};
