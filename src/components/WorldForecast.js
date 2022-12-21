import React from 'react';
import aus from '../flags/aus.svg'
import usa from '../flags/usa.webp'
import ind from '../flags/india.webp'
import eng from '../flags/eng.webp'
import uae from '../flags/uae.jpg'
import china from '../flags/china.webp'
import jpn from '../flags/jap.webp'

export default function WorldForecast() {
    return (
        <div className='my-5'>
            <hr></hr>
            <h2 className="display-6 fw-bold pt-5 pb-3">World Forecast</h2>
            <div className="row d-flex gap-5 gap-md-0">
                <div className="col-md-5 me-auto">
                    <div className="d-flex align-items-center gap-3 gap-md-5">
                        <img src={aus} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">AUS</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Sydney</p>
                        <a href={'/q=sydney'}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src={usa} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">USA</p>
                        <p className="text-muted pb-0 mb-0 me-auto">New york</p>
                        <a href={`/q=new york`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src={ind} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">IND</p>
                        <p className="text-muted pb-0 mb-0 me-auto">New Delhi</p>
                        <a href={`/q=delhi`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src={eng} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">ENG</p>
                        <p className="text-muted pb-0 mb-0 me-auto">London</p>
                        <a href={`/q=london`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src={uae} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">UAE</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Dubai</p>
                        <a href={`/q=dubai`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-center gap-3 gap-md-5">
                        <img src={china} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">CHN</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Beijing</p>
                        <a href={`/q=beijing`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src={jpn} alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">JPN</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Tokyo</p>
                        <a href={`/q=tokyo`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src='https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg' alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">FRN</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Paris</p>
                        <a href={`/q=paris`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src='https://www.flagcolorcodes.com/images/gif/italy.gif' alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">ITL</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Milan</p>
                        <a href={`/q=milan`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-5 mt-5">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png' alt="" className="img-fluid" width='30' />
                        <p className="fw-bold pb-0 mb-0">ESP</p>
                        <p className="text-muted pb-0 mb-0 me-auto">Madrid</p>
                        <a href={`/q=madrid`}><iconify-icon icon="material-symbols:arrow-outward-rounded" style={{fontSize:'22px'}}></iconify-icon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
