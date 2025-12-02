import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModule } from "../context/moduleContext";

export default function useShowActivityPg() {
  const [answer, setAnswer] = useState(null);
  const { reviewModel, setReviewModel } = useModule();
  const dropdownRef = useRef(null);
  const attachButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutside(e) {
      if (
        answer &&
        dropdownRef &&
        !dropdownRef.current.contains(e.target) &&
        !attachButtonRef.current.contains(e.target)
      ) {
        setAnswer(false);
      }
    }

    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [answer]);
  return {
    answer,
    setAnswer,
    reviewModel,
    setReviewModel,
    dropdownRef,
    attachButtonRef,
    navigate,
  };
}
