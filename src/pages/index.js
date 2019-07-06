import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import db from "../../db.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="heroGroup">
        <h1>
          Learn to <br /> design and code React Apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/">Watch the video</Link>
        <div className="logos">
          <img
            src={require("../images/logo-sketch.png")}
            alt="Sketch"
            width="50"
          />
          <img
            src={require("../images/logo-figma.png")}
            alt="Sketch"
            width="50"
          />
          <img
            src={require("../images/logo-studio.png")}
            alt="Sketch"
            width="50"
          />
          <img
            src={require("../images/logo-framer.png")}
            alt="Sketch"
            width="50"
          />
          <img
            src={require("../images/logo-react.png")}
            alt="Sketch"
            width="50"
          />
          <img
            src={require("../images/logo-swift.png")}
            alt="Sketch"
            width="50"
          />
        </div>
        <Wave />
      </div>
      <div className="cards">
        <h2>11 Courses, more coming</h2>
        <div className="cardGroup">
          <Card
            title="Design Systems"
            text="10 sections"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="React for Designers"
            text="12 sections"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Sound Design"
            text="5 sections"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="ARKit 2"
            text="10 sections"
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      {db.cells.map(cell => {
        ;<div>{cell.title}</div>
      })}
    </div>
  </Layout>
)

export default IndexPage
