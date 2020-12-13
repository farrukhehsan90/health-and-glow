/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import Pagination from "react-js-pagination";
class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRow: false,
      activePage: 1,
      search: "",
      itemPerPage: 10,
      res: {},
      sort: "",
      selectedCateg: "",
      category: [
        {
          id: 1,
          value: "lipstick",
          check: false,
        },
      ],
      shade: [
        {
          id: 1,
          value: "Maroon",
          check: false,
        },
        {
          id: 2,
          value: "Red",
          check: false,
        },
      ],
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "15% off",
          categoryTheme: "dark",
          author: "Anas",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019",
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019",
        },
      ],
    };
  }
  componentDidMount() {
    let url =
      "https://staging.healthandglow.com/api/catalog/product/v6/search/989?app=web&version=3.0.2&page=0:20";
    this.getData(url);
  }
  getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res, 'res');
        this.setState({ res: res.data, PostsListOne: res.data.data.products });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };
  searchFun = () => {
    let { search } = this.state;

    if (search === !"") {
      let url = `https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=${this.state.search}&page=0:20`;

      this.getData(url);
    } else {
      alert("No Search Text");
    }
  };

  handleShadeFilter = () => {
    const { shade, category } = this.state;
    let selectedCateg = category.find((v) => v.check);
    let shadeTrueValue = shade.find((v) => v.check);
    let url = `https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20&category=${
      !!selectedCateg ? selectedCateg.value : ""
    }&shade=${!!shadeTrueValue ? shadeTrueValue.value : ""}`;

    this.getData(url);
  };
  handleSort = () => {
    const { shade, category, sort } = this.state;
    let selectedCateg = category.find((v) => v.check);
    let shadeTrueValue = shade.find((v) => v.check);
    let url = `https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20&category=${
      !!selectedCateg ? selectedCateg.value : ""
    }&shade=${!!shadeTrueValue ? shadeTrueValue.value : ""}&sort=discount:${
      !sort ? "" : sort
    }`;

    this.getData(url);
  };
  render() {
    const {
      PostsListOne,
      itemPerPage,
      category,
      isRow,
      activePage,
      shade,
    } = this.state;
    let indexOfLastTodo = activePage * itemPerPage;
    let indexOfFirstTodo = indexOfLastTodo - itemPerPage;
    let renderedProjects = PostsListOne.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    return (
      <Container fluid className="main-content-container px-4">
        <MainNavbar
          btn={this.searchFun}
          func={(e) => {
            this.setState({ search: e });
          }}
        />
        {/* Page Header */}

        <Col className="page-header py-4">
          <div className="row">
            <div className="col-2">
              <button
                type="button"
                onClick={() => {
                  this.setState({ isRow: !isRow });
                }}
                className="btn btn-outline-primary  btn-block"
              >
                <i style={{ marginLeft: -5 }} className="material-icons">
                  &#xE5D2;
                </i>
              </button>
            </div>
            <div className="col-5">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                className="btn btn-outline-primary  btn-block"
              >
                Sort
              </button>
            </div>
            <div className="col-5">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter1"
                className="btn btn-outline-primary  btn-block"
              >
                Filter
              </button>
            </div>
          </div>
        </Col>

        {/* First Row of Posts */}
        <Row>
          {renderedProjects.length ? (
            renderedProjects.map((post, idx) => (
              <Col
                lg={isRow ? "12" : "6"}
                md={isRow ? "12" : "6"}
                sm={isRow ? "12" : "6"}
                className="mb-4"
                key={idx}
              >
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.skuImageUrl})` }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.skuPromoText ? post.skuPromoText : null}
                    </Badge>
                    <span
                      style={{ color: "red", marginLeft: -10 }}
                      className="material-icons"
                    >
                      favorite
                    </span>
                    {/* <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div> */}
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="#" className="text-fiord-blue">
                        {post.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">
                      {post.skuName ? post.skuName : null}
                    </p>
                    <br />

                    <div className="row">
                      <div className="col">
                        <span className="text-muted">
                          <del>
                            {post.defaultPrice ? "₹" + post.defaultPrice : null}
                          </del>{" "}
                          {post.listPrice ? "₹" + post.listPrice : null}{" "}
                        </span>
                      </div>
                      <div className=" col-md-offset-2">
                        <h6>
                          <span
                            style={{ fontSize: 14 }}
                            className="material-icons"
                          >
                            star
                          </span>{" "}
                          {post.skuAverageRating ? post.skuAverageRating : 0}
                        </h6>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <Card small className="card-post card-post--1 my-10 btn-block">
              <CardBody>
                <h3 className="mx-10">Not Data Found</h3>
              </CardBody>
            </Card>
          )}
        </Row>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={PostsListOne.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
        {/* SOrt */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Sort List
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="">
                <ul className="list-group">
                  <li className="list-group-item ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sort"
                        id="popula"
                        value="asc"
                        onChange={(e) =>
                          this.setState({ sort: e.target.value })
                        }
                      />
                      <label
                        className="form-check-label w-100"
                        htmlFor="popula"
                      >
                        Popularity
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sort"
                        id="desc"
                        value="desc"
                        onChange={(e) =>
                          this.setState({ sort: e.target.value })
                        }
                      />
                      <label className="form-check-label w-100" htmlFor="desc">
                        Discount
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sort"
                        id="hlac"
                        value="asc"
                        onChange={(e) =>
                          this.setState({ sort: e.target.value })
                        }
                      />
                      <label className="form-check-label w-100" htmlFor="hlac">
                        High - Low
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sort"
                        id="lhac"
                        value="desc"
                        onChange={(e) =>
                          this.setState({ sort: e.target.value })
                        }
                      />
                      <label className="form-check-label w-100" htmlFor="lhac">
                        Low - High
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-toggle="modal"
                  data-dismiss="modal"
                  className="btn btn-outline-primary btn-block"
                  onClick={() => this.handleSort()}
                >
                  Sort
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SOrt */}
        {/* filter */}
        <div
          className="modal fade "
          id="exampleModalCenter1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered  modal-lg"
            role="document"
          >
            <div className="modal-content m-2">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Filter List
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="col-sm-12">
                <Row>
                  <div className="col">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <a>Category</a>
                      </li>
                      {category.map((v, k) => (
                        <li key={k} className="list-group-item ">
                          <div className="col-12">
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                v.check = !v.check;
                                let newShade = [...category];
                                newShade[v.id - 1] = v;
                                this.setState({ category: newShade });
                              }}
                              className="form-check-input"
                              value={v.value}
                              id={v.id}
                            />
                            <label className="form-check-label">
                              {v.value}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="list-group">
                      {shade.map((v, k) => (
                        <li key={k} className="list-group-item ">
                          <div className="col-12">
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                v.check = !v.check;
                                let newShade = [...shade];
                                newShade[v.id - 1] = v;
                                this.setState({ shade: newShade });
                              }}
                              className="form-check-input"
                              value={v.value}
                              id={v.id}
                            />
                            <label className="form-check-label">
                              {v.value}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => this.handleShadeFilter()}
                  data-toggle="modal"
                  data-dismiss="modal"
                  className="btn btn-outline-primary  btn-block"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* SOrt */}
      </Container>
    );
  }
}

export default BlogPosts;
