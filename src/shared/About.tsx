import { IState } from './store/index'
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
interface IProps {
    data: string,
    changeData: function
}
class About extends React.Component<IProps, IState>{
    // 挂到About的静态方法上。store作为参数.
    static loadData = (store) => {
        return new Promise(resolve => {
            axios.get('http://localhost:3001/getData')
                .then(res => {
                    store.dispatch({
                        type: 'CHANGE_DATA',
                        payLoad: {
                            data: res.data.data
                        }
                    })
                    resolve()
                })
                .catch(err => {
                    console.log(err)
                })
        })

    }
    componentDidMount() {
        if (!this.props.data) {
            axios.get("http://localhost:3001/getData")
                .then(res => {
                    this.props.changeData(res.data.data)
                })
        }
    }
    render() {
        return (
            <div>
                <h4>这是About页,后端会给点东西</h4>
                <hr />
                <p>
                    {this.props.data}
                </p>
            </div>
        )
    }

}
const mapStateToProps = (state: IState) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changedata(data) {
            dispatch({
                type: 'CHANGE_DATA',
                payLoad: {
                    data
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)