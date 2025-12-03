import React, { useState } from "react";

export default function useActivities() {
  const [activity, setActivity] = useState("Todo");
  const [filter, setFilter] = useState(null);
  const [start, setStart] = useState(null);

  const handleActive = (state) => {
    setActivity(state);
  };
  return {
    activity,
    setActivity,
    filter,
    setFilter,
    start,
    setStart,
    handleActive,
  };
}
