import "./styles.css";

function Hii({ name, year }) {
  return (
    <div>
      <h1>My name is {name}.</h1>
      <h3>I was born on {year}.</h3>
    </div>
  );
}

const hobs = ["Football", "Gaming", "Cricket"];

const hobsObjects = hobs.map((list, i) => ({
  id: i,
  title: list,
}));

function Hobbies({ hobs }) {
  return (
    <main>
      <img
        src="https://media.istockphoto.com/id/637298374/photo/view-of-soccer-ball-on-athletic-field-in-stadium-arena.jpg?s=2048x2048&w=is&k=20&c=Dhg5Bjg7qjttt3kwsD9Lrx36qrZb8hCmF6As0V8xhOk="
        height={100}
        alt="Football"
      />
      <ul>
        {hobs.map((list) => (
          <li key={list.id} style={{ listStyleType: "none" }}>
            {list.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function App() {
  return (
    <div className="App">
      <Hii name="Nilanjan" year="2002" />
      <Hobbies hobs={hobsObjects} />
    </div>
  );
}
