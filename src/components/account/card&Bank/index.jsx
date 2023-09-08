import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BankDetailsComp from './bankDetails'
import DebitCardComp from './debitCard'

export default function CardBankComp() {
    return (
        <div>
            <h4 style={{ color: "#8D4000" }}>Card & Bank Settings</h4>
            <p style={{ color: "#1A374D" }}>
                Simply fill and upload the required information below, and we’ll take it from here.
            </p>

            <div className="main-tabs mt-3">
                <Tabs defaultActiveKey="debit" id="cardTabs"
                    className=" main-tab-card" >
                    <Tab eventKey="debit" title="Debit Cards">
                        <DebitCardComp />
                    </Tab>
                    <Tab eventKey="bank" title="Bank Details">
                        <BankDetailsComp />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
