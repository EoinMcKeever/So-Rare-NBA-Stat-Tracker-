import React from "react"

function Nav(){
    return <div className="nav">
    <nav class="navbar navbar-dark bg-dark justify-content-between col 1">
        <a class="navbar-brand">So Rare Stats</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
}

export default Nav