import { useContext } from "react";
import{ UserContext} from "./UserContext";

export default function Component2() {
 
  const {user}=useContext(UserContext);
  
  const Pagestyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  };
  
  return (
    <div className="parent" style={Pagestyle}>
      {`{
                Age: ${user.age}
                Profession: ${user.pro}
            }`}
    </div>
  );
}
