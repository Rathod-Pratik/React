import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }
  async componentDidMount() {    //componentDidMount run after render method  
    let url = "https://newsapi.org/v2/everything?q=india&from=2024-07-14&to=2024-07-14&sortBy=popularity&apiKey=5fe1d1a9140e4356b44c85743240ef54&page=1&pageSize=18";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, totalArticle: parsedata.totalResults })
  }
  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/everything?q=india&from=2024-07-14&to=2024-07-14&sortBy=popularity&apiKey=5fe1d1a9140e4356b44c85743240ef54&page=${this.state.page - 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1
    })
  }

  handlenextclick = async () => {
    if(Math.ceil(this.state.page >this.state.totalArticle/18) ){

    }
    else{
    let url = `https://newsapi.org/v2/everything?q=india&from=2024-07-14&to=2024-07-14&sortBy=popularity&apiKey=5fe1d1a9140e4356b44c85743240ef54&page=${this.state.page + 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page + 1
    })
  }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News - Top headline</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <Newsitem title={element.title ? element.title : ""} newsurl={element.url} discription={element.description ? element.description : ""} imgurl={element.urlToImage} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>

          <div className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</div>
        </div>
      </div>
    )
  }
}
