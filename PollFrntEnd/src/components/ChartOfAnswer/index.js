import React, { useEffect } from "react";
import { Chart } from "react-charts";
import LeaveUserMutation from "../../screen/Home/mutation/LeaveUserMutation";
function index({ optionStatus }) {
  const option = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  const data = React.useMemo(() => {
    console.log({ optionStatus });
    let arr = [];
    for (const [key, value] of Object.entries(optionStatus)) {
      arr = [...arr, [option[key], !!value ? value : 0]];
    }
    console.log({ arr });
    return [
      {
        label: "Reaction 🔥 ",
        data: arr,
      },
    ];
  }, [optionStatus]);
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { type: "linear", position: "bottom" },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} series={series} tooltip />
    </div>
  );
}

export default index;
