import * as React from "react";

import ChildProfile from "./ChildProfile";
import AddChild from "./AddChild";

// hardcoded data mimicking axios call to children database, testing if props are sending to component
const testData = {
  child: [
    {
      id: 1,
      name: "George",
      age: "3",
      special_req: "Peanut Allergies, Eats Vegetarian, Autistic",
      guardian: 1
    },
    {
      id: 2,
      name: "Anna",
      age: "5",
      special_req: "Eats Vegetarian, Lactose Intolerant",
      guardian: 1
    }
  ]
}

export default function ChildProfileList(props) {

  return (
    <div className="child-profile_list">
      <h2> Children:</h2>
      <AddChild />
      {testData.child.map((data) => {
        return (
          <ChildProfile
            key={data.id}
            id={data.id}
            name={data.name}
            age={data.age}
            special_req={data.special_req}
            user={data.guardian} />
        );
      })}
    </div>
  )

}
