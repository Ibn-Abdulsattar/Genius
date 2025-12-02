import React, { useState } from "react";

export default function useSurvey() {
  const [survey, setSurvey] = useState("Todo");
  const [student, setStudent] = useState(false);

  const handleActive = (state) => {
    setSurvey(state);
  };
  return { survey, setSurvey, student, setStudent, handleActive };
}
