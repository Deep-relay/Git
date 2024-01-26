require("dotenv").config();
const Person = require("./mongo");
let cors = require("cors");
let express = require("express");
let morgan = require("morgan");
let app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('dist'))
app.use(
    morgan(function (tokens, req, res) {
        let final_result;
        console.log(req.body);
        console.log(Object.keys(req.body).length);
        let temp_var_for_req_body_obj = req.body;
        let temp_var_for_req_body_string = JSON.stringify(req.body);
        let result_part_1 = [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, "content-length"),
            "-",
            tokens["response-time"](req, res),
            "ms",
        ].join(" ");
        console.log(temp_var_for_req_body_string);
        console.log(temp_var_for_req_body_string.length);
        if (Object.keys(temp_var_for_req_body_obj).length) {
            final_result = result_part_1 + temp_var_for_req_body_string;
        } else {
            final_result = result_part_1;
        }
        return final_result;
    })
);
let date_obj = new Date();
// let persons = [
//     {
//         id: 1,
//         name: "Arto Hellas",
//         number: "040-123456",
//     },
//     {
//         id: 2,
//         name: "Ada Lovelace",
//         number: "39-44-5323523",
//     },
//     {
//         id: 3,
//         name: "Dan Abramov",
//         number: "12-43-234345",
//     },
//     {
//         id: 4,
//         name: "Mary Poppendieck",
//         number: "39-23-6423122",
//     },
// ];
let port = process.env.port||process.env.PORT;
let persons = null;
app.get("/api", (req, res) => {
    res.send("Hi, you are on the Start page of the persons api");
});
app.get("/api/persons", (req, res) => {
    // console.log(persons)
    Person.find({}).then((result) => res.json(result));
});
app.get("/api/info", (req, res) => {
    let date = date_obj.getTime();
    let number_of_people = persons.length;
    res.send(`<p>Phonebook has info of ${number_of_people} people<br>
    ${date_obj}</p>`);
});
app.get("/api/persons/:id", (req, res) => {
    Person.findById(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((result) => {
            res.status(404).send(`<p>Doesn't exist</p>`);
        });
});
app.put("/api/persons/:id", (req, res) => {
    Person.findByIdAndUpdate(req.params.id, { name: req.body.name, number: req.body.number }).then(
        (result) => {
            res.end();
        }
    );
});

app.delete("/api/persons/:id", (request, response) => {
    console.log(typeof request.params.id);
    Person.deleteOne({ _id: request.params.id })
        .then((item) => response.send("Deleted contents"))
        .catch(() => console.log("error"));
});
app.post("/api/persons/", (request, response) => {
    const new_person = new Person({ name: request.body.name, number: request.body.number });
    new_person.save().then(() => {
        response.end();
    });
});
app.listen(port, () => {
    console.log(`running at ${port}`);
});
