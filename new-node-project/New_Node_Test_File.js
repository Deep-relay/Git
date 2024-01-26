// let express = require("express");
// const app = express();
// app.use(express.json());
// let notes = [
//     { id: 1, content: "HTML is easy", important: true },
//     { id: 2, content: "Browser can execute only JavaScript", important: false },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true,
//     },
// ];
// app.get("/", (request, response) => {
//     response.send("<h1>Hello World!</h1>");
// });

// app.get("/api/notes", (request, response) => {
//     response.send(notes);
// });
// app.get("/api/notes/:id", (request, response) => {
//     console.log(request.params.id);
//     console.log(typeof request.params.id);
//     console.log(typeof notes[0].id);
//     const id = request.params.id;
//     const note = notes.find((note) => note.id == id);
//     if (note) response.status(201).send(note);
//     else response.status(469).send("not found").end();
// });
// app.delete("/api/notes/:id", (req, res) => {
//     const id = Number(req.params.id);
//     notes = notes.filter((item) => item.id !== id);
//     res.status(204).end();
// });
// app.post("/api/notes/:id", (req, res) => {
//     const new_note = req.body;
//     const place = Number(req.params.id);
//     console.log(new_note);
//     // const aux_var=JSON.stringify(new_note)
//     notes.splice(place - 1, 0, new_note);
//     res.status(205).end();
// });
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

//yaha se upar 3rd part ke 'a' part ke examples kre hue hain
require("dotenv").config();
const Person = require("./mongo");
let cors = require("cors");
let express = require("express");
let morgan = require("morgan");
let app = express();
app.use(express.json());
app.use(cors());
//app.use(express.static('dist'))
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
let port = process.env.port;
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
