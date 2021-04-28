import React from 'react';
import DataWrapper from './slider/data';
import './task.css'
import { Button } from '@material-ui/core';


export default function TaskWrapper() {

    return (
        <div className="taskMainDiv">
            <div className="pageTitle">What We Do</div>
            <div style={{ margin: "20px 0 50px 0" }}>
                <div className="pageDescription" style={{  marginTop: "5px" }}>We develope successfull apps for our clients who range from startup</div>
                <div className="pageDescription">enterpreneurs to fortune 500s</div>
            </div>
            <DataWrapper />
            <div className="bottomBtn">
                <Button size="small" variant="contained" color="secondary">
                    View all projects
                </Button>
            </div>
        </div>
    );
}
