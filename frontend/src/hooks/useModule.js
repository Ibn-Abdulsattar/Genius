import React from "react";
import { moduleHook } from "../context/moduleContext";

export default function useModule() {
  return moduleHook() ;
}
