import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { IState } from "../shared/store/index";

interface IProps {
  data: string;
  changeData: Function;
}

class About extends React.Component<IProps, IState> {
  static loadData = store => {
    return new Promise(resolve => {
      axios
        .get("http://localhost:3001/getData")
        .then(res => {
          store.dispatch({
            type: "CHANGE_DATA",
            payLoad: {
              data: res.data.data
            }
          });
          resolve();
        })
        .catch(err => {
          console.log("报错", err);
        });
    });
  };
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (!this.props.data) {
      axios.get("http://localhost:3001/getData").then(res => {
        this.props.changeData(res.data.data);
      });
    }
  }
  render() {
    return (
      <div>
        <div>关于我们</div>
        <div>获取到的数据：{this.props.data}</div>
      </div>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    data: state.data
  };
}

function mapDiapatchToProps(dispatch) {
  return {
    changeData(data) {
      dispatch({
        type: "CHANGE_DATA",
        payLoad: {
          data: data
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDiapatchToProps)(About);
