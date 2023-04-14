import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Master-Data/master.css"

export default class MasterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Products", link: "/master-data/products" },
        { id: 2, name: "Users", link: "/master-data/users" },
      ],
    };
  }
  render() {
    return (
      <div style={{ marginTop : '6rem'}} id="master-data" className="container" >
        <div className="row items mb-8" >
          {this.state.items.map((v, index) => (
            <div className="col-sm-12 col-lg-3 item"  key={index}>
              <NavLink to={v.link} className="card bg-white" style={{textDecoration: 'none', textDecorationColor: 'none'}}>
                <div className="card-body text-center">
                  <h3 className="text-dark text-hover-primary" class ="PRUS">{v.name}</h3>
                  <p className="mb-0 text-muted" class="contoh">Master data control {v.name}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="">
            <Outlet />
        </div>
      </div>
    );
  }
}