import React from 'react'
import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div>
            <aside className="main-sidebar">
                {/* <!-- sidebar--> */}
                <section className="sidebar position-relative">
                    <div className="help-bt">
                        <Link to="/" className="d-flex align-items-center">
                            <div className="bg-danger rounded10 h-50 w-50 l-h-50 text-center me-15">
                                <i data-feather="mic"></i>
                            </div>
                            <h4 className="mb-0">Emergency<br />help</h4>
                        </Link>
                    </div>
                    <div className="multinav">
                        <div className="multinav-scroll" style={{ height: "100%" }}>
                            {/* <!-- sidebar menu--> */}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="treeview">
                                    <Link to="#">
                                        <i data-feather="monitor"></i>
                                        <span>Dashboard</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 1</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link to="#">
                                        <i data-feather="users"></i>
                                        <span>Patients</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/patient"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Patient</Link></li>
                                        <li><Link to="/patient-details"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Patient Details</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link to="#">
                                        <i data-feather="inbox"></i>
                                        <span>Forms</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li className="treeview">
                                            <Link to="#">
                                                <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Forms
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right"></i>
                                                </span>
                                            </Link>
                                            <ul className="treeview-menu">
                                                <li><Link to="/from"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="sidebar-widgets">
                                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                                    <div className="text-center">
                                        <img src="fonts/custom-17.svg" className="sideimg p-5" alt="" />
                                        <h4 className="title-bx text-primary">Make an Appointments</h4>
                                        <Link to="#" className="py-10 fs-14 mb-0 text-primary">
                                            Best Helth Care here <i className="mdi mdi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="copyright text-center m-25">
                                    <p><strong className="d-block">Admin Dashboard</strong> © <script>document.write(new Date().getFullYear())</script> All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default Sidebar