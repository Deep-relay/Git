import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
const baseurl = "/api/persons";
// const baseurl="http://localhost:3001/api/persons/"
const Filter = ({ persons, constraint }) => {
    if (constraint === "") return "";
    return persons.map((item) => {
        if (item.name.includes(constraint))
            return (
                <p key={item.id}>
                    {item.name} {item.number}
                </p>
            );
    });
};
const Number = ({ persons, item, setPersons, setDeletedMessage }) => {
    return (
        
        <div className="div_class_number">
            <button className="button_class_number"
            onClick={()=>{
                if(window.confirm('Copy Number'))
                navigator.clipboard.writeText(item.number)
            }}>Copy</button>
            {item.name} {item.number}
            <button
                className="button_class_number"
                onClick={() => {
                    if (window.confirm("Do you want to delete this contact")) {
                        console.log(item.id);
                        axios
                            .delete(baseurl + "/" + item.id)
                            .then(() => {
                                setPersons(
                                    persons.filter((data) => {
                                        if (data.id !== item.id) return data;
                                    })
                                );
                            })
                            .then(setDeletedMessage(`Deleted the contents of ${item.name}`));
                        setTimeout(() => {
                            setDeletedMessage("");
                        }, 1500);
                    } else {
                        return;
                    }
                }}
            >
                Delete
            </button>
        </div>
    );
};
const Numbers = ({ persons, setPersons, setDeletedMessage }) => {
    console.log("numbers rendered");
    console.log("inside Numbers persons is ");
    console.log(Array.isArray(persons));
    return persons.map((item) => {
        return (
            <Number
                key={item.id}
                item={item}
                persons={persons}
                setPersons={setPersons}
                setDeletedMessage={setDeletedMessage}
            ></Number>
        );
    });
};
const Input = ({ input_for, func_to_call, display_name, display_number }) => {
    if (input_for === "string") {
        return (
            <div className="div_for_input">
                name:<br></br>
                <input value={display_name} onChange={func_to_call} />
            </div>
        );
    } else if (input_for === "number") {
        return (
            <div className="div_for_input">
                no:<br></br>
                <input value={display_number} onChange={func_to_call} />
            </div>
        );
    }
};
const Notif = () => {};
const App = () => {
    console.log("app rendered");
    const [AcceptedMessage, setAcceptedMessage] = useState("");
    const [DeletedMessage, setDeletedMessage] = useState("");
    const [persons, setPersons] = useState([]);
    const [display_name, setDisplay_name] = useState("");
    const [display_number, setDisplay_number] = useState("");
    useEffect(() => {
        console.log("inside effect");
        axios.get(baseurl).then((response) => {
            setPersons(() => response.data);
            console.log("currently in use effect");
            console.log(typeof persons);
            console.log(`persons is ${persons}`);
            console.log(persons.length);
        });
    }, []);
    const func_for_name_add = (event) => {
        setNewName((prev) => {
            prev["name"] = event.target.value;
            return prev;
        });
        setDisplay_name(event.target.value);
        console.log(newName);
    };
    const func_for_no_add = (event) => {
        console.log("type of event value in no_add " + typeof event.target.value);
        setNewName((prev) => {
            prev["number"] = event.target.value;
            return prev;
        });
        setDisplay_number(event.target.value);
        console.log(newName);
    };
    const [newName, setNewName] = useState({});
    const [check, setCheck] = useState("");
    const change_check = (event) => {
        event.preventDefault();
        setCheck(event.target.value);
    };
    const find_func = (object, to_be_found, data_type) => {
        console.log("object= ");
        console.log(object);
        let result = {};
        if (data_type === "string") {
            console.log("inside name find");
            for (let i in object) {
                if (object[i].name === to_be_found) {
                    console.log("id in find_func= " + object[i].id);

                    result = { bool: true, id: object[i].id };
                    return result;
                }
            }
            console.log("result inside name find");
            console.log(result);
            console.log("type of result inside name find");
            console.log(typeof result);
            if (Object.keys(result).length === 0) {
                console.log("inside of keys checking statement");
                result = { bool: false, id: -1 };
                return result;
            }
            console.log("result inside name find");
            console.log(result);
        } else if (data_type === "number") {
            console.log("inside number find");
            for (let i in object) {
                if (object[i].number == to_be_found) {
                    console.log("id in find_func= " + object[i].id);

                    result = { bool: true, id: object[i].id };
                    return result;
                }
            }
            if (Object.keys(result).length === 0) result = { bool: false, id: -1 };
            return result;
        }
    };
    const func_to_submit = (event) => {
        event.preventDefault();
        setDisplay_name("");
        setDisplay_number("");
        console.log("event target");
        console.log(newName);
        if (!(("name" in newName) & ("number" in newName))) {
            if ("number" in newName) alert("No Name given");
            else if ("name" in newName) alert("No Number given");
            else alert("None given");
            return;
        }
        console.log("name type " + typeof newName.name);
        console.log("number type" + typeof newName.number);
        let temp_var_for_find_func_return_name = find_func(persons, newName["name"], "string");
        let temp_var_for_find_func_return_number = find_func(persons, newName["number"], "number");
        console.log("name object");
        console.log(temp_var_for_find_func_return_name);
        console.log("number object");
        console.log(temp_var_for_find_func_return_number);
        if (
            temp_var_for_find_func_return_name["bool"] === true &&
            temp_var_for_find_func_return_number["bool"] === true &&
            temp_var_for_find_func_return_name["id"] === temp_var_for_find_func_return_number["id"]
        ) {
            alert("Same entry present");
            return;
        } else if (temp_var_for_find_func_return_name["bool"] === true) {
            alert("Same name present");
            if (window.confirm("Do you want to replace")) {
                axios
                    .put(baseurl + "/" + String(temp_var_for_find_func_return_name["id"]), {
                        name: newName["name"],
                        number: newName["number"],
                    })
                    .then((result) => {
                        setPersons((prev) => {
                            let temp_for_persons = [];
                            for (let i of prev) {
                                console.log(
                                    "i.id= " +
                                        typeof i.id +
                                        "  temp.id= " +
                                        typeof temp_var_for_find_func_return_name.id
                                );
                                if (i.id == temp_var_for_find_func_return_name.id) {
                                    console.log("newName wala number= " + String(newName.number));
                                    temp_for_persons.push({
                                        id: i.id,
                                        number: newName.number,
                                        name: i.name,
                                    });
                                } else {
                                    temp_for_persons.push(i);
                                }
                            }
                            console.log("temp for persons");
                            console.log(temp_for_persons);
                            return temp_for_persons;
                        });
                    });
            }
            return;
        } else if (temp_var_for_find_func_return_number["bool"] === true) {
            console.log("checking for same number");
            alert("Same number present");
            if (window.confirm("Do you want to replace")) {
                axios
                    .put(baseurl + "/" + String(temp_var_for_find_func_return_number["id"]), {
                        name: newName["name"],
                        number: newName["number"],
                    })
                    .then((result) => {
                        setPersons((prev) => {
                            let temp_for_persons = [];
                            for (let i of prev) {
                                console.log(
                                    "i.id= " +
                                        typeof i.id +
                                        "  temp.id= " +
                                        typeof temp_var_for_find_func_return_number.id
                                );
                                if (i.id == temp_var_for_find_func_return_number.id) {
                                    console.log("newName wala number= " + String(newName.number));
                                    temp_for_persons.push({
                                        number: i.number,
                                        name: newName.name,
                                    });
                                } else {
                                    temp_for_persons.push(i);
                                }
                            }
                            console.log("temp for persons");
                            console.log(temp_for_persons);
                            return temp_for_persons;
                        });
                    });
            }
            return;
        }
        axios
            .post(baseurl, newName)
            .then((response) => {
                axios.get(baseurl).then((response) => setPersons(response.data));
                console.log(response);
            })
            .then(setAcceptedMessage("New Person Added"));
        setTimeout(() => {
            setAcceptedMessage("");
        }, 1350);

        setNewName({ name: "", number: 0 });
    };

    return (
        <div className="ye-div-sab-kuch-contain-krta-hai">
            <div className="ye-andar-ka-box-banane-ke-liye-div">
                <h2 style={{ textAlign: "center" }}>PhoneBook</h2>
                {AcceptedMessage.length !== 0 && (
                    <div className="notif_accepted">
                        <p>{AcceptedMessage} </p>
                    </div>
                )}
                {DeletedMessage.length !== 0 && (
                    <div className="notif_deleted">
                        <p>{DeletedMessage} </p>
                    </div>
                )}
                <div className="div_for_input">
                    Filter shown with:<br></br>
                    <input onChange={change_check}></input>
                    <Filter persons={persons} constraint={check}></Filter>
                </div>
                <h2 style={{ textAlign: "center" }}>Phonebook</h2>
                <form onSubmit={func_to_submit}>
                    <div className="div-class-for-form-and-add-button">
                        <Input
                            input_for={"string"}
                            func_to_call={func_for_name_add}
                            display_name={display_name}
                            display_number={display_number}
                        ></Input>
                        <br></br>
                        <Input
                            input_for={"number"}
                            func_to_call={func_for_no_add}
                            display_name={display_name}
                            display_number={display_number}
                        ></Input>
                        <br></br>

                        <button className="div-for-submit-button" type="submit">
                            add
                        </button>
                    </div>
                </form>

                <div className="div-class-for-number-and-name-display">
                    <Numbers
                        persons={persons}
                        setPersons={setPersons}
                        setDeletedMessage={setDeletedMessage}
                    ></Numbers>
                </div>
            </div>
        </div>
    );
};

export default App;
