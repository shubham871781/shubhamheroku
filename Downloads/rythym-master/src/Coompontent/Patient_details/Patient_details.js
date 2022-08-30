import React from 'react'
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
function Patient_details() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <div className="me-auto">
                                <h4 className="page-title">Patient Details</h4>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Patient Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Main content --> */}
                    <section className="content">

                        <div className="row">
                            <div className="col-xl-8 col-12">
                                <div className="d-md-flex align-items-center justify-content-between mb-20">
                                    <Link to="#" className="btn btn-primary me-5 mb-md-0 mb-5"><i className="fa fa-edit"></i> Edit Profile</Link>
                                    <div className="d-flex">
                                        <Link to="#" className="btn btn-outline btn-danger me-5"><i className="fa fa-times-circle-o"></i> Reject Patient</Link>
                                        <Link to="#" className="btn btn-success"><i className="fa fa-check-circle-o"></i> Accept Patient</Link>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-body text-end min-h-150" style={{backgroundImage:"url(images/landscape14.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center" , backgroundSize: "cover"}}>
                                    </div>
                                    <div className="box-body wed-up position-relative">
                                        <div className="d-md-flex align-items-center">
                                            <div className=" me-20 text-center text-md-start">
                                                <img src="images/2.jpg" className="bg-success-light rounded10" alt=""/>
                                                    <div className="text-center my-10">
                                                        <p className="mb-0">Disease</p>
                                                        <h4>Cold & Flu</h4>
                                                    </div>
                                            </div>
                                            <div className="mt-40">
                                                <h4 className="fw-600 mb-5">Mical Doe</h4>
                                                <h5 className="fw-500 mb-5">#p- 12458796</h5>
                                                <p><i className="fa fa-clock-o"></i> Admin on 15 May 2021, 10:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body pt-0">
                                        <h4>Story About Disease</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-12">
                                        <div className="box">
                                            <div className="box-body box-profile">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div>
                                                            <p>Email :<span className="text-gray ps-10">David@yahoo.com</span> </p>
                                                            <p>Phone :<span className="text-gray ps-10">+11 123 456 7890</span></p>
                                                            <p>Address :<span className="text-gray ps-10">123, Lorem Ipsum, Florida, USA</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="pb-15">
                                                            <p className="mb-10">Social Profile</p>
                                                            <div className="user-social-acount">
                                                                <button className="btn btn-circle btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                                                <button className="btn btn-circle btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                                                <button className="btn btn-circle btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div>
                                                            <div className="map-box">
                                                                <iframe title="My Daily Marathon Tracker" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329" width="100%" height="175" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.box-body --> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-12">
                                        <div className="box">
                                            <div className="box-header border-0 pb-0">
                                                <h4 className="box-title">Disease History</h4>
                                            </div>
                                            <div className="box-body">
                                                <div className="widget-timeline-icon">
                                                    <ul>
                                                        <li>
                                                            <div className="icon bg-primary fa fa-heart-o"></div>
                                                            <Link className="timeline-panel text-muted" to="#">
                                                                <h4 className="mb-2 mt-1">Diabetes</h4>
                                                                <p className="fs-15 mb-0 ">mon, 18 Mar 2021, 11:15 AM</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-primary fa fa-heart-o"></div>
                                                            <Link className="timeline-panel text-muted" to="#">
                                                                <h4 className="mb-2 mt-1">Sleep Problem</h4>
                                                                <p className="fs-15 mb-0 ">Tue, 21 Jun 2020, 03:22 PM</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-primary fa fa-heart-o"></div>
                                                            <Link className="timeline-panel text-muted" to="#">
                                                                <h4 className="mb-2 mt-1">Dental Care</h4>
                                                                <p className="fs-15 mb-0 ">Wed, 15 Mar 2020, 02:11 PM</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-primary fa fa-heart-o"></div>
                                                            <Link className="timeline-panel text-muted" to="#">
                                                                <h4 className="mb-2 mt-1">Diabetes</h4>
                                                                <p className="fs-15 mb-0 ">Sun, 11 Jan 2020, 12:24 PM</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Assigned Doctor</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="d-flex align-items-center">
                                            <img src="images/avatar-10.png" className="w-100 bg-primary-light rounded10 me-15" alt=""/>
                                                <div>
                                                    <h4 className="mb-0">Dr. Johen Doe</h4>
                                                    <p className="text-muted">Physician</p>
                                                    <div className="d-flex">
                                                        <i className="text-warning fa fa-star"></i>
                                                        <i className="text-warning fa fa-star"></i>
                                                        <i className="text-warning fa fa-star"></i>
                                                        <i className="text-warning fa fa-star"></i>
                                                        <i className="text-warning fa fa-star-half"></i>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-15">
                                            <Link to="#" className="btn btn-danger-light me-4">Unassign</Link>
                                            <Link to="#" className="btn btn-success-light ">Check</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Current Vitals</h4>
                                        <div className="box-controls pull-right">
                                            <div className="lookup lookup-circle lookup-right">
                                                <input type="text" name="s" placeholder="Patients id"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flexbox bb-1 mb-15">
                                            <div><p><span className="text-mute">Patient Name:</span> <strong>Jonsahn</strong></p></div>
                                            <div><p><span className="text-mute">Patient Id:</span> <strong>1254896</strong></p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row bb-1 pb-10">
                                                    <div className="col-4">
                                                        <img className="img-fluid float-start w-30 mt-10 me-10" src="images/weight.png" alt=""/>
                                                            <div>
                                                                <p className="mb-0"><small>Weight</small></p>
                                                                <h5 className="mb-0"><strong>230 ibs</strong></h5>
                                                            </div>
                                                    </div>
                                                    <div className="col-4 bs-1 be-1">
                                                        <img className="img-fluid float-start w-30 mt-10 me-10" src="images/human.png" alt=""/>
                                                            <div>
                                                                <p className="mb-0"><small>Height</small></p>
                                                                <h5 className=" mb-0"><strong>6’1</strong></h5>
                                                            </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="img-fluid float-start w-30 mt-10 me-10" src="images/bmi.png" alt=""/>
                                                            <div>
                                                                <p className="mb-0"><small>BMI</small></p>
                                                                <h5 className="mb-0"><strong>30.34</strong></h5>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="row pt-5">
                                                    <div className="col-12">
                                                        <span className="text-danger">Blood Pressure</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="progress progress-xs mb-0 mt-5 w-40">
                                                            <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                                                            </div>
                                                        </div>
                                                        <h2 className="float-start mt-0 mr-10"><strong>150</strong></h2>
                                                        <div>
                                                            <p className="mb-0"><small>Systolic</small></p>
                                                            <p className="mb-0 mt-0"><small className="vertical-align-super">mmHg</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 bl-1">
                                                        <div className="progress progress-xs mb-0 mt-5 w-40">
                                                            <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                                                            </div>
                                                        </div>
                                                        <h2 className="float-start mt-0 mr-10"><strong>90</strong></h2>
                                                        <div>
                                                            <p className="mb-0"><small>Diastolic</small></p>
                                                            <p className="mb-0 mt-0"><small className="vertical-align-super">mmHg</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body pt-0">
                                        <p><small>Recorded on 25/05/2018</small></p>
                                    </div>
                                    <div className="box-body bg-danger">
                                        <img src="images/smoking.png" alt="" className="float-start me-10"/>
                                            <p>Smoking Status : current every day smoker</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header no-border">
                                        <h4 className="box-title">Patient Statistic</h4>
                                    </div>
                                    <div className="box-body">
                                        <div id="chart123"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}

            <Footer/>
            {/* <!-- Control Sidebar --> */}
            <aside className="control-sidebar">

                <div className="rpanel-title"><span className="pull-right btn btn-circle btn-danger" data-toggle="control-sidebar"><i className="ion ion-close text-white"></i></span> </div> 
                <ul className="nav nav-tabs control-sidebar-tabs">
                    <li className="nav-item"><Link to="#control-sidebar-home-tab" data-bs-toggle="tab" className="active"><i className="mdi mdi-message-text"></i></Link></li>
                    <li className="nav-item"><Link to="#control-sidebar-settings-tab" data-bs-toggle="tab"><i className="mdi mdi-playlist-check"></i></Link></li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                    {/* <!-- Home tab content --> */}
                    <div className="tab-pane active" id="control-sidebar-home-tab">
                        <div className="flexbox">
                            <Link to="#" className="text-grey">
                                <i className="ti-more"></i>
                            </Link>
                            <p>Users</p>
                            <Link to="#" className="text-end text-grey"><i className="ti-plus"></i></Link>
                        </div>
                        <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input type="text" name="s" placeholder="Search" className="w-p100"/>
                        </div>
                        <div className="media-list media-list-hover mt-20">
                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-success" to="#">
                                    <img src="images/1.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Tyler</strong></Link>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-danger" to="#">
                                    <img src="images/2.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Luke</strong></Link>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-warning" to="#">
                                    <img src="images/3.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-primary" to="#">
                                    <img src="images/4.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-success" to="#">
                                    <img src="images/1.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Tyler</strong></Link>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-danger" to="#">
                                    <img src="images/2.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Luke</strong></Link>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-warning" to="#">
                                    <img src="images/3.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-primary" to="#">
                                    <img src="images/4.jpg" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <Link className="hover-primary" to="#"><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <!-- /.tab-pane -->
                    <!-- Settings tab content --> */}
                    <div className="tab-pane" id="control-sidebar-settings-tab">
                        <div className="flexbox">
                            <Link to="#" className="text-grey">
                                <i className="ti-more"></i>
                            </Link>
                            <p>Todo List</p>
                            <Link to="#" className="text-end text-grey"><i className="ti-plus"></i></Link>
                        </div>
                        <ul className="todo-list mt-20">
                            <li className="py-15 px-5 by-1">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_1" className="filled-in"/>
                                    <label for="basic_checkbox_1" className="mb-0 h-15"></label>
                                    {/* <!-- todo text --> */}
                                    <span className="text-line">Nulla vitae purus</span>
                                    {/* <!-- Emphasis label --> */}
                                    <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                    {/* <!-- General tools such as edit or delete--> */}
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_2" className="filled-in"/>
                                    <label for="basic_checkbox_2" className="mb-0 h-15"></label>
                                    <span className="text-line">Phasellus interdum</span>
                                    <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_3" className="filled-in"/>
                                    <label for="basic_checkbox_3" className="mb-0 h-15"></label>
                                    <span className="text-line">Quisque sodales</span>
                                    <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_4" className="filled-in"/>
                                    <label for="basic_checkbox_4" className="mb-0 h-15"></label>
                                    <span className="text-line">Proin nec mi porta</span>
                                    <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_5" className="filled-in"/>
                                    <label for="basic_checkbox_5" className="mb-0 h-15"></label>
                                    <span className="text-line">Maecenas scelerisque</span>
                                    <small className="badge bg-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox -->/ */}
                                <input type="checkbox" id="basic_checkbox_6" className="filled-in"/>
                                    <label for="basic_checkbox_6" className="mb-0 h-15"></label>
                                    <span className="text-line">Vivamus nec orci</span>
                                    <small className="badge bg-info"><i className="fa fa-clock-o"></i> 1 month</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_7" className="filled-in"/>
                                    <label for="basic_checkbox_7" className="mb-0 h-15"></label>
                                    {/* <!-- todo text --> */}
                                    <span className="text-line">Nulla vitae purus</span>
                                    {/* <!-- Emphasis label --> */}
                                    <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                    {/* <!-- General tools such as edit or delete--> */}
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_8" className="filled-in"/>
                                    <label for="basic_checkbox_8" className="mb-0 h-15"></label>
                                    <span className="text-line">Phasellus interdum</span>
                                    <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_9" className="filled-in"/>
                                    <label for="basic_checkbox_9" className="mb-0 h-15"></label>
                                    <span className="text-line">Quisque sodales</span>
                                    <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_10" className="filled-in"/>
                                    <label for="basic_checkbox_10" className="mb-0 h-15"></label>
                                    <span className="text-line">Proin nec mi porta</span>
                                    <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                    <div className="tools">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.tab-pane --> */}
                </div>
            </aside>
            {/* <!-- /.control-sidebar --> */}

            {/* <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar --> */}
            <div className="control-sidebar-bg"></div>
        </div>
    )
}

export default Patient_details