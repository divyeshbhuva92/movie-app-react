import { Counter } from "./Counter";

function Msg({ name, pic }) {
  return (
    <div>
      <img className="profilepic" src={pic} alt={name} />
      <h1>Hello, {name} 🙂 🌟 </h1>
      <Counter />
    </div>
  );
}
