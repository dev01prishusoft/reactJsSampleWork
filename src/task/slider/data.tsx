import * as React from 'react';
import { connect } from "react-redux";
import taskActions from '../../core/redux/task/taskActions';
import ImageSlider from './slider';

export interface DataWrapperProps {
}

export interface DataWrapperState {
    data: any
}

class DataWrapper extends React.Component<any, DataWrapperState> {
    state = {
        data: []
    }

    componentDidMount(){
        this.props.getAllTaskData();
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        let update: any = {};
        switch (nextProps.taskActions.type) {
            case taskActions.GET_TASK_DATA_SUCCESS:
                update.data = nextProps.taskActions.data;
                break;
            case taskActions.GET_TASK_DATA_ERROR:
                update.data = [];
                break;
            default:
        }
        return Object.keys(update).length === 0 ? null : update;
    }

    render() {
        return (
            <ImageSlider data={this.state.data}/>
        );
    }
}

export default connect(
    (state: any) => ({
        ...state.taskReducer
    }),
    {
        ...taskActions
    }
)(DataWrapper);