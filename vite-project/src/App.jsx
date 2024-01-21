//import { useState } from "react";
// const App = (props) => {
//   let [counter, setit] = useState(props.arg);
//   // setTimeout(()=>{setit(counter+1)},1000)
//   // let button_function = () => {
//   //   setit(counter + 1);
//   // };
//   // let display_function = (counter) => {
//   //   alert(counter);
//   // };
//   let call = () => {
//     let button_function = () => {
//       setit(counter + 1);
//     };
//     let display_function = () => {
//       alert(counter);
//     };
//     button_function();
//     display_function();
//   };
//   let res = () => {
//     setit(0);
//     alert("Restarted\nThe value of counter is "+counter );
//   };

//   return (
//     <div>
//       <>
//         <button onClick={call}>Click Me!</button>
//       </>
//       <p></p>
//       <>
//         {" "}
//         <button onClick={res}>Click Me to Restart</button>
//       </>
//     </div>
//   );
// };
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }
// const App = () => {
//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     let temp_variable_for_state_set=counter+1;
//     setCounter(temp_variable_for_state_set)
//   }

//   const decreaseByOne = () => {

//     console.log('decreasing, value before', counter)
//     let temp_variable_for_state_set=counter-1;
//     setCounter(temp_variable_for_state_set)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     let temp_variable_for_state_set=0;
//     setCounter(temp_variable_for_state_set)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// }

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total_clicks, set_total_clicks] = useState(0);

//   const handleLeftClick = () => {
//     allClicks.push("L");
//     setAll(allClicks);
//     setLeft(left + 1);
//     set_total_clicks(total_clicks + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//     set_total_clicks(total_clicks + 1);
//   };
//   // let variable_to_print = allClicks.map((item) => {
//   //   return <p>{item}</p>;
//   // });
//   const hello = (say_hello_to) => {
//     const handler = () => console.log("hello "+say_hello_to);

//     return handler;
//   };
//   return (
//     <div>
//       'abc'
//       <p>
//         {left}
//         <button onClick={handleLeftClick}>left</button>
//         <button onClick={handleRightClick}>right</button>
//         {right}
//       </p>
//       {allClicks.map((item) => {
//         console.log(item);
//         return <p>{item}</p>;
//       })}
//       <p>{total_clicks}</p>
//       <button
//         onClick={() => {
//           console.log("The button was clicked");
//         }}
//       >
//         Click Me
//       </button>
//       <button onClick={hello('XXX')}>Another Click Me</button>
//     </div>
//   );
// };
// export default App;
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Below lies code for helsinki 1.6 to 1.11*/
//import { useState } from "react";
// const Button = ({ onClick_func, text_to_display }) => {
//   return <button onClick={onClick_func}>{text_to_display}</button>;
// };
// const Stats = ({good,bad,neutral}) => {
//   if ((good == 0) & (neutral == 0) & (bad == 0)) {
//     return (
//       <>
//         <h2>Statistics</h2>
//         <p>No Feedback yet</p>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>Statistics</h2>
//       <table>
//           <tr><td>good</td> {good}</tr>
//           <tr><td>neutral</td> {neutral}</tr>
//           <tr><td>bad</td> {bad}</tr>
//           <tr><td>all</td> <td>{good+neutral+bad}</td></tr>
//           <tr><td>average</td> <td>{bad==0&neutral==0?1:(good-bad)/(good+bad+neutral)}</td></tr>
//           <tr><td>Percentage of positive feedback </td>{(good / (good + bad + neutral)) * 100}</tr>

//       </table>
//     </>
//   );
// };
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const Func_when_good_pressed = () => {
//     setGood(good + 1);
//   };
//   const Func_when_neutral_pressed = () => {
//     setNeutral(neutral + 1);
//   };
//   const Func_when_bad_pressed = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h2>Give Feedback</h2>
//       <Button
//         onClick_func={Func_when_good_pressed}
//         text_to_display={"Good"}
//       ></Button>
//       <Button
//         onClick_func={Func_when_bad_pressed}
//         text_to_display={"Bad"}
//       ></Button>
//       <Button
//         onClick_func={Func_when_neutral_pressed}
//         text_to_display={"Neutral"}
//       ></Button>
//       <Stats good={good} neutral={neutral} bad={bad}></Stats>
//     </div>
//   );
// };

// export default App;
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Below lies code for helsinki exercise 1.12*/
// import { useState } from "react";
// const Button = ({ func_to_be_called, text_to_be_written }) => {
//   return <button onClick={func_to_be_called}>{text_to_be_written}</button>;
// };
// const Find_max_votes=({votes,anecdotes})=>{
//   if(votes.length===0){
//     return <p></p>
//   }
//   let result=0
//   let temp=0
//   for(let i in votes){
//     if(votes[i]>temp){result=i
//     temp=votes[i]}
//   }
//   return <p>{anecdotes[result]} has {votes[result]} votes</p>
// }
// const App = () => {
//   const anecdotes = [
//     "If it hurts, do it more often.",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
//     "The only way to go fast, is to go well.",
//   ];

//   const [selected, setSelected] = useState(0);
//   const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

//   const wrapper_for_set_random = (length) => {
//     const set_random = () => {
//       setSelected(Math.floor(Math.random() * length));
//     };
//     return set_random;
//   };
//   const wrapper_for_vote_function = (index) => {
//     const vote_function = () => {
//       let temp_votes = [...votes];
//       temp_votes[index]+=1;
//       setVotes(temp_votes)
//     };
//     return vote_function
//   };
//   return (
//     <div>
//       <p>{anecdotes[selected]}</p>
//       <p>Has total votes {votes[selected]}</p>
//       <Button
//         func_to_be_called={wrapper_for_set_random(anecdotes.length)}
//         text_to_be_written={"Random"}
//       ></Button>
//       <Button func_to_be_called={wrapper_for_vote_function(selected)} text_to_be_written={'Vote'}></Button>
//       <>
//       <h2>Anecdote with most votes</h2>
//       <Find_max_votes anecdotes={anecdotes} votes={votes}></Find_max_votes>
//       {/* <p>{anecdotes[votes.findIndex(votes.reduce((a, b) => Math.max(a, b), -Infinity))]}</p> */}
//       </>
//     </div>
//   );
// };

// export default App;

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Below lies code till 2.5

// const Course=({course})=>{
//   let temp_var_for_display_of_parts=course.parts.map((item)=>{
//     return (<li key={item.id}>{item.name} {item.exercises}</li>)
//   })
//   let var_for_sum_of_exercises=course.parts.reduce((result,curr)=>{
//     console.log(result,'  ',curr)
//     if(typeof result ==='object') {
//         return (result.exercises+curr.exercises)
//     }
//     else{
//         return (result+curr.exercises)
//     }})
//   return(
//     <div>
//       <h2>{course.name}</h2>
//       <ul>
//         {temp_var_for_display_of_parts}
//       </ul>
//       <p>Total of {var_for_sum_of_exercises} exercises</p>
//     </div>
//   )
// }
// const Course_list=({courses})=>{
//   return(
//     courses.map((item)=><Course course={item}></Course>)
//   )
// }
// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]
//   return <Course_list courses={courses} />
// }

// export default App
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// import { useState } from "react";
// const Note = ({ note }) => {
//   return <li>{note.content}</li>;
// };

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes);
//   const [newnote, setNewNote] = useState("A New Note");

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((item)=><Note key={item.id} note={item}></Note>)}
//       </ul>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault()
//             console.log(e.target)
//             let temp_notes = [...notes];
//             temp_notes.push({
//               id: 4,
//               content: newnote,
//               important: true,
//             });
//             setNotes(temp_notes);
//             setNewNote('')
//           }}
//         >
//           <input
//             value={newnote}
//             onChange={(event) => {
//               console.log(event.target.value)
//               setNewNote(event.target.value);
//             }}
//           />
//           <button type="submit">save</button>
//         </form>

//     </div>
//   );
// };

// export default App;

//Above lies code for helsinki before exercise 2.6

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// import { useState } from "react";
// const Filter = ({ persons, constraint }) => {
//   if (constraint === "") return "";
//   return persons.map((item) => {
//     if (item.name.includes(constraint)) return <p>{item.name} {item.number}</p>;
//   });
// };
// const Numbers = ({ persons }) => {
//   let temp_for_Number = persons.map((item, id) => {
//     return (
//       <p key={id}>
//         {item.name} {item.number}
//       </p>
//     );
//   });
//   return temp_for_Number;
// };
// const Input = ({ input_for, func_to_call }) => {
//   if (input_for === "string") {
//     return (
//       <div>
//         name:
//         <input onChange={func_to_call} />
//       </div>
//     );
//   } else if (input_for === "number") {
//     return (
//       <div>
//         no:
//         <input onChange={func_to_call} />
//       </div>
//     );
//   }
// };
// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: "Arto Hellas", number: "040-123456", id: 1 },
//     { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
//     { name: "Dan Abramov", number: "12-43-234345", id: 3 },
//     { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
//   ]);
//   const func_for_name_add = (event) => {
//     let temp_obj = newName;
//     temp_obj["name"] = event.target.value;
//     setNewName(temp_obj);
//     console.log(newName);
//   };
//   const func_for_no_add = (event) => {
//     // let temp_obj = newName;
//     // temp_obj["number"] = event.target.value;
//     setNewName((prev)=>{prev['number']=event.target.value
//   return(prev)});
//     console.log(newName);
//   };
//   const [newName, setNewName] = useState({});
//   const [check, setCheck] = useState("");
//   const change_check = (event) => {
//     event.preventDefault();
//     setCheck(event.target.value);
//   };
//   const find_func = (object, to_be_found) => {
//     if (typeof to_be_found === "string")
//       for (let i in object) {
//         if (object[i].name === to_be_found) {
//           return true;
//         }
//         return false;
//       }
//     else if (typeof to_be_found === "number") {
//       for (let i in object) {
//         if (object[i].number === to_be_found) {
//           return true;
//         }
//       }
//       return false;
//     }
//   };
//   const func_to_submit = (event) => {
//     event.preventDefault();
//     if (!(("name" in newName) & ("number" in newName))) {
//       if ("number" in newName) alert("No Name given");
//       else if ("name" in newName) alert("No Number given");
//       else alert("None given");
//       return;
//     }
//     if (find_func(persons, event.target.value)) {
//       alert("Already present");
//       return;
//     }

//     let temp_array_copy_of_persons = persons;
//     temp_array_copy_of_persons.push({
//       name: newName.name,
//       number: newName.number,
//     });

//     setPersons(temp_array_copy_of_persons);
//     setNewName({});
//   };
//   return (
//     <div>
//       <h2>PhoneBook</h2>
//       <div>
//         Filter shown with:
//         <input onChange={change_check}></input>
//         <Filter persons={persons} constraint={check}></Filter>
//       </div>
//       <h2>Phonebook</h2>
//       <form onSubmit={func_to_submit}>
//         <Input input_for={"string"} func_to_call={func_for_name_add}></Input>

//         <Input input_for={"number"} func_to_call={func_for_no_add}></Input>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <Numbers persons={persons}></Numbers>
//     </div>
//   );
// };

// export default App;

//Above lies code for helsinki exercises till 2.10

import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
const baseurl = "/api/persons";
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
            {item.name} {item.number}
            <button
                className="button_class_number"
                onClick={() => {
                    if (window.confirm("Do you want to delete this contact")) {
                        console.log(item.id);
                        axios
                            .delete(baseurl + "/" + String(item.id))
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
            // if(response.data!==persons)
            setPersons(() => response.data);
            console.log(response.data);
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
                    .put(
                        "http://localhost:3001/persons/" +
                            String(temp_var_for_find_func_return_name["id"]),
                        {
                            name: newName["name"],
                            number: newName["number"],
                        }
                    )
                    .then(
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
                        })
                    );
            }
            return;
        } else if (temp_var_for_find_func_return_number["bool"] === true) {
            console.log("checking for same number");
            alert("Same number present");
            if (window.confirm("Do you want to replace")) {
                axios
                    .put(
                        "http://localhost:3001/persons/" +
                            String(temp_var_for_find_func_return_number["id"]),
                        {
                            name: newName["name"],
                            number: newName["number"],
                        }
                    )
                    .then(
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
                                        id: i.id,
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
                        })
                    );
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
        }, 350);

        setNewName({ name: "", number: 0 });
    };

    return (
        <>
            <h2>PhoneBook</h2>
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
            <h2>Phonebook</h2>
            <form onSubmit={func_to_submit}>
                <Input
                    input_for={"string"}
                    func_to_call={func_for_name_add}
                    display_name={display_name}
                    display_number={display_number}
                ></Input>

                <Input
                    input_for={"number"}
                    func_to_call={func_for_no_add}
                    display_name={display_name}
                    display_number={display_number}
                ></Input>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <Numbers
                persons={persons}
                setPersons={setPersons}
                setDeletedMessage={setDeletedMessage}
            ></Numbers>
        </>
    );
};

export default App;
