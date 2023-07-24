const client = require("../client");

async function createTruck({ truck_number, make, model, year }) {
  const {
    rows: [truck],
  } = await client.query(
    `
    INSERT INTO trucks(truck_number, make, model, year)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
    [truck_number, make, model, year]
  );
  return truck;
}

module.exports = {
  createTruck,
};
