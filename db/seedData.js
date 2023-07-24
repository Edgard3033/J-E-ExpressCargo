// Create some seed data and export it from this file
const users = [
  { email: "ed233094@outlook.com", password: "12345678" },
  { email: "JEEXPRESSCARGO@comcast.net", password: "Joel03191" },
  { email: "je05031@comcast.net", password: "Joel03191!" },
];

const companies = [
  {
    name: "Lowes",
    address: "3033 Middleburg Ln",
    contact_email: "lowes@redvest.com",
  },
  {
    name: "RainbowSix",
    address: "3353 Rainbow Circle",
    contact_email: "Sledge123@rainbow.service.com",
  },
];

const trucks = [
  {
    truck_number: 12345,
    make: "Peterbilt",
    model: "359 Tractor Truck",
    year: 2009,
  },
  {
    truck_number: 6789,
    make: "Peterbilt",
    model: "567 SFFA Tipper Truck",
    year: 2019,
  },
];

const jobs = [
  {
    title: "Poltry Frieght",
    description:
      "We need 100lbs of frozen chicken tenders delivered to Georgia.",
    location: "Savanna, Georgia",
    compensation: 2000,
  },
  {
    title: "Clothes Frieght",
    description:
      "Our company needs 100 boxes of back to school clothes shipped in time to start school.",
    location: "Middleburg, Florida",
    compensation: 2500,
  },
];

module.exports = {
  users,
  companies,
  trucks,
  jobs,
};
