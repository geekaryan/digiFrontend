import UserForms from "../components/Form";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();

  const naviHandler = () => {
    navigate("/users");
  };
  return (
    <div>
      <UserForms />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "22px",
        }}
      >
        <button
          onClick={naviHandler}
          style={{
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "16px",
          }}
        >
          Go to User Data Page
        </button>
      </div>
    </div>
  );
};

export default AddPage;
