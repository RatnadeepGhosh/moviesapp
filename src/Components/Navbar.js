import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', background:"#131A27", padding:'1rem', justifyContent:"center", alignItems:"center"}}>
            <h1 style={{color:"white"}}>Movies App</h1>
            <h2 style={{marginLeft:"2rem",color:"white"}}>Favourites</h2>
      </div>
    )
  }
}