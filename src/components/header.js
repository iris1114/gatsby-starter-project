import React from "react"
import "../styles/components/header.scss"

export default function Header(props) {
  return <h1>{props.headerText}</h1>
}