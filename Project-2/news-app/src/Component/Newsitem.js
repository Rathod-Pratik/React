import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let { title, discription, imgurl, newsurl } = this.props;
    return (
          <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={!imgurl?"https://img.atlasobscura.com/CHy46XuUoY87fCURh_3ULla7QSUaqu5JNWH3NZp1B3I/rt:fit/w:600/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy82ZDcx/NmExZC1lMTRiLTQ1/MTItOWFiNy0yMjNm/ZjY5NGU1MDgxYWJk/N2ZmYjJjYjc5YWEy/NmNfMjM3MTAyOTI4/MThfMmI5NDQzMmM1/M19rLmpwZw.jpg":imgurl} className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
              </div>
            </div>
          </div>
    )
  }
}
