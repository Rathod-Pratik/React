import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import propType from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:3,
    category:"gernal",
  }
  static propTypes={
    category:propType.string,
    pageSize:propType.number,
    country:propType.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }
  async updatenews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2024-07-14&to=2024-07-14&sortBy=popularityy&category=${this.props.category}&apiKey=5fe1d1a9140e4356b44c85743240ef54&page=${this.state.page}&pageSize=${this.props.page}`;
    this.setState({loading :true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, totalArticle: parsedata.totalResults,loading:false })
  }
  async componentDidMount() {    //componentDidMount run after render method  
    this.updatenews();
  }
  handleprevclick = async () => {
    this.setState({
      page: this.state.page - 1,
    })
    this.updatenews();
  }

  handlenextclick = async () => {
      this.setState({
        page: this.state.page + 1
      })
      this.updatenews();
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News - Top headline</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <Newsitem title={element.title ? element.title : ""} newsurl={element.url} discription={element.description ? element.description : ""} imgurl={element.urlToImage} auther={element.author} sourse={element.source.name} publish={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-dark" disabled={this.state.page <= 1}  onClick={this.handleprevclick}>  &larr; Previous</button>

          <div disabled={(Math.ceil(this.state.page > this.state.totalArticle / this.props.page))} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</div>
        </div>
      </div>
    )
  }
}
