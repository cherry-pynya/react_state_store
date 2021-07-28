import "./IconSwitch.css";

export default function IconSwitch({icon, onSwitch}) {
  return (
    <button className="Store-IconSwitch" onClick={onSwitch}>
      <span className="material-icons md-24">{icon}</span>
    </button>
  );
}
