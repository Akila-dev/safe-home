import { visaLogo } from '../../../../assets/svgs'
import { masterCardLogo } from "../../../../assets//svgs"

export default function DebitCardComp() {
    return (
        <div className="debit-card-area">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="card card-a border-0">
                        <div className="card-body text-white">
                            <i>{visaLogo}</i>
                            <p className='my-4' style={{ fontSize: "1.2rem" }}>4173  ****  **** 2615</p>
                            <div className="row align-items-end">
                                <div className="col-7">
                                    <h6>Samson Sayed</h6>
                                </div>
                                <div className="col-5">
                                    <small className='pb-4'>VALID THRU</small>
                                    <p className='mb-0'>02/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="card card-b border-0">
                        <div className="card-body text-white">
                            <i>{masterCardLogo}</i>
                            <p className='my-4' style={{ fontSize: "1.2rem" }}>4173  ****  **** 2615</p>
                            <div className="row align-items-end">
                                <div className="col-7">
                                    <h6>Samson Sayed</h6>
                                </div>
                                <div className="col-5">
                                    <small className='pb-4'>VALID THRU</small>
                                    <p className='mb-0'>02/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-5">
                <button className='btn btn-brown my-5 w-75' > Add New Card</button>
            </div>
        </div>
    )
}
