import React from "react";
import ClassComponent from "../ClassComponent";

function Classes() {
  return (
    <form>
      <p className="text-2xl text-left pl-7 pt-5 pb-5">My Classes</p>
      <div className="cart inline-flex  p-2 rounded-lg space-x-4 bg-slate-100 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-12 ">
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Biology 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Chemestry 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"English 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Physic 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Biology 2022"}
          />
        </div>
      </div>
    </form>
  );
}

export default Classes;
