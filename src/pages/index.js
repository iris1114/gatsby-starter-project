import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"



export default function Home() {
  return (
    <Container>
    <div style={{ color: `purple` }}>
      <div><Link to="/contact/">Contact</Link></div>
      <div><Link to="/about/"> about </Link>  </div> 
      <div><Link to="/about-css-modules/">about-css-modules</Link></div>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      {/* <button className="primary-button">Click me</button> */}
    </div>

    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
    </Container>

  )
}



//Linking between pages use  <Link /> component
