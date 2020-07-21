import React from "react"
// import containerStyles from "./container.module.css"
// import containerStyles from "../styles/components/container.scss"
import "../styles/components/container.scss"

export default function Container({ children }) {
  return <div className="container">{children}</div>
}