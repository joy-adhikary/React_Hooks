import Component2 from "../component/Component2";
import { useState } from "react";

export default function Component1() {
  const [user, setUser] = useState({
    name: "Joy",
    age: 24,
    email: "ychag@example.com",
    pro: "engineer",
  });

  const Pagestyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  };

  return (
    <div className="parent" style={Pagestyle}>
      {    `{
                Name: ${user.name}
            }`
      }
      <Component2 user={user} />
    </div>
  );
}

// ! Example of Props drilling  here
// ? App => comment1 ( parent ) => component2 ( child )=> component3 ( child )
