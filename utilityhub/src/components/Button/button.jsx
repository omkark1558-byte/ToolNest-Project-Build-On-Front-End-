import "./Button.css";

function Button({ children, ...props }) {
  return (
    <button className="primary-btn" {...props}>
      {children}
    </button>
  );
}

export default Button;