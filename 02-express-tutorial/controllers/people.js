const { people } = require("../data");

//GET - get all people entry
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

//POST - add a person
const addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
  people.push({ id: people.length + 1, name: req.body.name });
  res.status(201).json({ success: true, msg: `Hello ${req.body.name}` });
};

//GET - get one particular person
const findPerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `Cannot find the person with id ${id}` });
  }
  return res.status(200).json({ success: true, data: person });
};

//PUT - update a person's name
const updatePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(req.params.id)) {
      person.name = req.body.name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

//DELETE - delete a person from people entry
const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `Could not find the person with id ${req.params.id}`,
    });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPerson,
  findPerson,
  updatePerson,
  deletePerson,
};
