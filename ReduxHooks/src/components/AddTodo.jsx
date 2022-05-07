import { useNavigate } from "react-router-dom";

export const AddTodo = () => {
  const navigate = useNavigate();
  return (
    <div className="mn-1">
      <button
        className="btn-1"
        onClick={() => {
          navigate("/personal", { replace: true });
        }}
      >
        Add Personal +
      </button>
      <button
        className="btn-1"
        onClick={() => {
          navigate("/official", { replace: true });
        }}
      >
        Add Official +
      </button>
      <button
        className="btn-1"
        onClick={() => {
          navigate("/others", { replace: true });
        }}
      >
        Add Others +
      </button>
    </div>
  );
};
