import zenithLogo from '../../../../assets/zenith.svg'

export default function BankDetailsComp() {
    return (
        <div className="bank-detail-area">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <img src={zenithLogo} width="50px" alt="" />
                            <h5 className='my-4' >ADEWALE ADEP</h5>
                            <div className="row align-items-end">
                                <div className="col-6">
                                    <small >Zenith Bank</small>
                                </div>
                                <div className="col-6">
                                    <small >2190909090</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <img src={zenithLogo} width="50px" alt="" />
                            <h5 className='my-4'>ADEWALE ADEP</h5>
                            <div className="row align-items-end">
                                <div className="col-6">
                                    <small >Zenith Bank</small>
                                </div>
                                <div className="col-6">
                                    <small >2190909090</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-5">
                <button className='btn btn-brown my-5 w-75' > Add New Bank</button>
            </div>
        </div>
    )
}
