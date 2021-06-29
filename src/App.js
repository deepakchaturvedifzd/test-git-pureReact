const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { text: "italics" }, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),

    React.createElement(Pet, {
      name: "x1",
      animal: "dog",
      breed: "something1",
    }),
    React.createElement(Pet, {
      name: "x2",
      animal: "cat",
      breed: "something2",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
