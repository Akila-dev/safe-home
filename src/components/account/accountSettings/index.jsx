import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BasicInfoComp from './basicInfo'
import PasswordComp from './password'

export default function AccountSettingsComp() {
    return (
        <div>
            <h4 style={{ color: "#8D4000" }}>Account Settings</h4>
            <p style={{ color: "#1A374D" }}>
                Simply fill and upload the required information below,
                and we’ll take it from here.
            </p>

            <div className="main-tabs mt-3">
                <Tabs defaultActiveKey="basic"
                    id="subTabs"
                    className=" main-tab-card" >
                    <Tab eventKey="basic" title="Basic Information">
                        <BasicInfoComp />
                    </Tab>
                    <Tab eventKey="password" title="Password">
                        <PasswordComp />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
