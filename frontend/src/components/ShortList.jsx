import * as React from "react";
import DaycareProfile from "./DaycareProfile";

// hardcoded data mimicking axios call to children database, testing if props are sending to component
const testData = {
  shortList: [
    {
      id: 1,
      guardian_id: 1,
      daycare_id: 2
    },
    {
      id: 2,
      guardian_id: 2,
      daycare_id: 1
    },
    {
      id: 3,
      guardian_id: 1,
      daycare_id: 1
    },
    {
      id: 4,
      guardian_id: 2,
      daycare_id: 2
    },
    {
      id: 5,
      guardian_id: 1,
      daycare_id: 3
    }
  ]
}

const testUser = {
  guardian: [
    {
      id: 1,
      name: "Allen Miller",
      phone: "555 555 5555",
      email: "allen.miller@email.com",
      child: [1, 2]
    }
  ]
}

export default function ShortList(props) {

  // should be from the cookie, will have to harcode
  const guardian_id = testUser.guardian[0].id;

  const guardianShortList = testData.shortList.filter((data) => data.guardian_id === guardian_id );

  return (
    <div className="child-profile_list">
      {guardianShortList.map((data) => {
        return (
          <DaycareProfile
            key={data.id}
            id={data.id}
            guardian={testUser.guardian[0]} // should be a cookie
            daycare={data.daycare_id}
          />
        );
      })}
    </div>
  )

}
