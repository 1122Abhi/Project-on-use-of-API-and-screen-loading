import React, { Component } from "react";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      list: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    var url = "https://jsonplaceholder.typicode.com/todos/";
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        this.setState({
          list: result.slice(0, 10),
        });
      });
  }

  render() {
    console.log("in render", this.state.isLoading);
    return (
      <>
        <div className="container">
          <div class="row">
            <div className="col-sm-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">UserID</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.list.length === 0 ? (
                    <div>Loading..</div>
                  ) : (
                    <>
                      {this.state.list.map((data, index) => (
                        <tr key={index}>
                          <td>{data.userId}</td>
                          <td>{data.id}</td>
                          <td>{data.title}</td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Api;
