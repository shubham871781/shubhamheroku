import React from 'react'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"

function Form() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <div className="me-auto">
                                <h4 className="page-title">Advanced Form Elements</h4>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item" aria-current="page">Forms</li>
                                            <li className="breadcrumb-item active" aria-current="page">Advanced Form Elements</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Type options</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Datetime</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="datetime-local" name="datetime" />
                                                <span className="form-text text-muted">Using <code>input type="datetime-local"</code> <code> type="datetime-local" is not supported in Firefox, Safari or Internet Explorer 12 (or earlier).</code></span>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Date</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="date" name="date" />
                                                <span className="form-text text-muted">Using <code>input type="date"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Month</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="month" name="month" />
                                                <span className="form-text text-muted">Using <code>input type="month"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Time</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="time" name="time" />
                                                <span className="form-text text-muted">Using <code>input type="time"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Week</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="week" name="week" />
                                                <span className="form-text text-muted">Using <code>input type="week"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Number</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="number" name="number" />
                                                <span className="form-text text-muted">Using <code>input type="number"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Email</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="email" name="email" />
                                                <span className="form-text text-muted">Using <code>input type="email"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">URL</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="url" name="url" />
                                                <span className="form-text text-muted">Using <code>input type="url"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Search</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="search" name="search" />
                                                <span className="form-text text-muted">Using <code>input type="search"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Tel</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="tel" name="tel" />
                                                <span className="form-text text-muted">Using <code>input type="tel"</code></span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Color</label>
                                            <div className="col-md-10">
                                                <input className="form-control" type="color" name="color" />
                                                <span className="form-text text-muted">Using <code>input type="color"</code></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header">
                                        <h4 className="box-title">Basic file inputs</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="mb-3">
                                            <label for="formFile" className="form-label">Default file input example</label>
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                        <div className="mb-3">
                                            <label for="formFileDisabled" className="form-label">Disabled file input example</label>
                                            <input className="form-control" type="file" id="formFileDisabled" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label for="formFileSm" className="form-label">Small file input example</label>
                                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                                        </div>
                                        <div>
                                            <label for="formFileLg" className="form-label">Large file input example</label>
                                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                        </div>
                                    </div>
                                    <div className="box-header">
                                        <h4 className="box-title">Custom file input</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" for="inputGroupFile01">Upload</label>
                                            <input type="file" className="form-control" id="inputGroupFile01" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" for="inputGroupFile01">Upload</label>

                                            <input type="file" className="form-control" id="inputGroupFile02" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <button className="btn btn-secondary btn-sm" type="button" id="inputGroupFileAddon03">Button</button>
                                            <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                        </div>
                                        <div className="input-group">
                                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                            <button className="btn btn-secondary btn-sm" type="button" id="inputGroupFileAddon04">Button</button>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Input masks</h4>
                                    </div>
                                    <div className="box-body">
                                        {/* <!-- Date dd/mm/yyyy --> */}
                                        <div className="form-group">
                                            <label className="form-label">Date masks:</label>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar"></i>
                                                        </div>
                                                        <input type="text" className="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                                                    </div>
                                                    {/* <!-- /.input group --> */}
                                                </div>
                                                <div className="col-6">
                                                    {/* <!-- Date mm/dd/yyyy --> */}
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar"></i>
                                                        </div>
                                                        <input type="text" className="form-control" data-inputmask="'alias': 'mm/dd/yyyy'" data-mask />
                                                    </div>
                                                    {/* <!-- /.input group --> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /.form group --> */}
                                        {/* <!-- phone mask --> */}
                                        <div className="form-group">
                                            <label className="form-label">US phone mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'mask':[ '(999) 999-9999']" data-mask />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group --> */}
                                        {/* <!-- phone mask --> */}
                                        <div className="form-group">
                                            <label className="form-label">Intl US phone mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group --> */}

                                        {/* <!-- IP mask --> */}
                                        <div className="form-group">
                                            <label className="form-label">IP mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-laptop"></i>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group --> */}
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Color & Time Picker</h4>
                                    </div>
                                    <div className="box-body">
                                        {/* <!-- Color Picker --> */}
                                        <div className="form-group">
                                            <label className="form-label">Color picker:</label>
                                            <input type="text" className="form-control my-colorpicker1" />
                                        </div>
                                        {/* <!-- /.form group -->
                                        <!-- Color Picker --> */}
                                        <div className="form-group">
                                            <label className="form-label">Color picker with addon:</label>
                                            <div className="input-group my-colorpicker2">
                                                <input type="text" className="form-control" />

                                                <div className="input-group-addon">
                                                    <i className="ion ion-paintbucket"></i>
                                                </div>
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group -->
                                        <!-- time Picker --> */}
                                        <div className="bootstrap-timepicker">
                                            <div className="form-group">
                                                <label className="form-label">Time picker:</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control timepicker" />
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-clock-o"></i>
                                                    </div>
                                                </div>
                                                {/* <!-- /.input group --> */}
                                            </div>
                                            {/* <!-- /.form group --> */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-clock-o"></i>
                                                    </div>
                                                    <input type="text" className="form-control timepicker" />
                                                </div>
                                                {/* <!-- /.input group --> */}
                                            </div>
                                            {/* <!-- /.form group --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Date picker</h4>
                                    </div>
                                    <div className="box-body">
                                        {/* <!-- Date --> */}
                                        <div className="form-group">
                                            <label className="form-label">Date:</label>

                                            <div className="input-group date">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar"></i>
                                                </div>
                                                <input type="text" className="form-control pull-right" id="datepicker" />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group --> */}

                                        {/* <!-- Date range --> */}
                                        <div className="form-group">
                                            <label className="form-label">Date range:</label>

                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar"></i>
                                                </div>
                                                <input type="text" className="form-control pull-right" id="reservation" />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group --> */}

                                        {/* <!-- Date and time range --> */}
                                        <div className="form-group">
                                            <label className="form-label">Date and time range:</label>

                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-clock-o"></i>
                                                </div>
                                                <input type="text" className="form-control pull-right" id="reservationtime" />
                                            </div>
                                            {/* <!-- /.input group --> */}
                                        </div>
                                        {/* <!-- /.form group -->
                                        <!-- Date and time range --> */}
                                        <div className="form-group">
                                            <label className="form-label">Date range button:</label>
                                            <div className="input-group">
                                                <button type="button" className="btn btn-default pull-right" id="daterange-btn">
                                                    <span>
                                                        <i className="fa fa-calendar"></i> Date range picker
                                                    </span>
                                                    <i className="fa fa-caret-down"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- /.form group --> */}
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Select Elements</h4>
                                        <ul className="box-controls pull-right">
                                            <li><Link className="box-btn-close" to="#"></Link></li>
                                            <li><Link className="box-btn-slide" to="#"></Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-body pb-0">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Minimal</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Alabama</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                                {/* <!-- /.form-group --> */}
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div className="col-md-3 col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Disabled</label>
                                                    <select className="form-control select2" disabled="disabled" style={{ width: "100%" }}>
                                                        <option selected="selected">Alabama</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                                {/* <!-- /.form-group --> */}
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div className="col-md-3 col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Multiple</label>
                                                    <select className="form-control select2" multiple="multiple" data-placeholder="Select a State" style={{ width: "100%" }}>
                                                        <option>Alabama</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                                {/* <!-- /.form-group --> */}
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div className="col-md-3 col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Disabled Result</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Alabama</option>
                                                        <option>Alaska</option>
                                                        <option disabled="disabled">California (disabled)</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                                {/* <!-- /.form-group --> */}
                                            </div>
                                            {/* <!-- /.col --> */}
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Bootstrap Select boxes</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5 className="my-10">Select box</h5>
                                                <select className="selectpicker">
                                                    <option>Lorem</option>
                                                    <option>Ipsum</option>
                                                    <option>Dummy</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5 className="my-10">Select boxes with Option groups</h5>
                                                <select className="selectpicker">
                                                    <optgroup label>
                                                        <option>Lorem</option>
                                                        <option>Ipsum</option>
                                                        <option>Dummy</option>
                                                    </optgroup>
                                                    <optgroup label>
                                                        <option>Lorem</option>
                                                        <option>Ipsum</option>
                                                        <option>Dummy</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5 className="my-10">Multiple select boxes</h5>
                                                <select className="selectpicker" multiple>
                                                    <option>Lorem</option>
                                                    <option>Ipsum</option>
                                                    <option>Dummy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <h5 className="my-10">With colored Button Classes</h5>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20 me-10" data-style="btn-primary">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20 me-10" data-style="btn-info btn-outline-info">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20 me-10" data-style="btn-warning ">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20 me-10" data-style="btn-danger">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20 me-10" data-style="btn-success">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="selectpicker mb-20" data-style="btn-default">
                                                    <option data-tokens="Lorem">Sed posuere metus vel maximus fringilla.</option>
                                                    <option data-tokens="ipsum">Nam in nisl a ligula semper euismod.</option>
                                                    <option data-tokens="dolor">Ut rhoncus diam et elit tristique venenatis.</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Bootstrap TouchSpin</h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form className="pe-20">
                                                    <div className="form-group">
                                                        <label className="form-label">Vertical Touchspin</label>
                                                        <input className="vertical-spin" type="text" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" value name="vertical-spin" /> </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Postfix</label>
                                                        <input id="demo1" type="text" value="55" name="demo1" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" /> </div>
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Prefix</label>
                                                        <input id="demo2" type="text" value="0" name="demo2" className=" form-control" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" /> </div>

                                                </form>
                                            </div>
                                            <div className="col-lg-6">
                                                <form>
                                                    <div className="form-group">
                                                        <label className="form-label">Init </label>
                                                        <input id="demo3" type="text" value name="demo3" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" /> </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Value set 30 </label>
                                                        <input id="demo3_1" type="text" value="30" name="demo3_1" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" /> </div>
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Button group</label>
                                                        <div className="input-group">
                                                            <input id="demo4" type="text" className="form-control" name="demo4" value="50" data-bts-button-down-className="btn btn-secondary" data-bts-button-up-className="btn btn-secondary" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Input Tags</h4>
                                    </div>
                                    <div className="box-body">
                                        <h6 className="box-subtitle d-block mb-10">Add <code>data-role="tagsinput"</code> to your input field & its automatically change it to a tags input.</h6>
                                        <div className="tags-default">
                                            <input type="text" value="Lorem,Ipsum,Amet" data-role="tagsinput" placeholder="add tags" /> </div>
                                        <h5 className="box-title mt-20">Select Tags</h5>
                                        <h6 className="box-subtitle d-block mb-10">You can also use <code>select multiple</code> to your input field.</h6>
                                        <select multiple data-role="tagsinput">
                                            <option value="Lorem">Lorem</option>
                                            <option value="Ipsum">Ipsum</option>
                                            <option value="Amet">Amet</option>
                                        </select>
                                        <h5 className="box-title  mt-20 d-block mb-10">Input Group Tags</h5>
                                        <h6 className="box-subtitle d-block mb-10">You can also use group tag <code>data-role="tagsinput"</code> to your input field.</h6>
                                        <div className="input-group">
                                            <input type="text" value="Lorem,Ipsum,Amet" data-role="tagsinput" placeholder="add tags" /> <span className="input-group-addon">Tags</span>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <h4 className="box-title">iCheck - Checkbox &amp; Radio Inputs</h4>
                                    </div>
                                    <div className="box-body">
                                        {/* <!-- Minimal style --> */}
                                        <div className="row">
                                            <div className="col-12">
                                                {/* <!-- checkbox --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="checkbox" className="minimal" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="minimal" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="minimal" disabled />
                                                        Minimal skin checkbox
                                                    </label>
                                                </div>
                                                {/* <!-- Minimal red style -->
                                                <!-- checkbox --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="checkbox" className="minimal-red" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="minimal-red" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="minimal-red" disabled />
                                                        Minimal red skin checkbox
                                                    </label>
                                                </div>
                                                {/* <!-- Minimal red style -->
                                                <!-- checkbox --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="checkbox" className="flat-red" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="flat-red" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" className="flat-red" disabled />
                                                        Flat green skin checkbox
                                                    </label>
                                                </div>
                                                {/* <!-- radio --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="radio" name="r1" className="minimal" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r1" className="minimal" />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r1" className="minimal" disabled />
                                                        Minimal skin radio
                                                    </label>
                                                </div>
                                                {/* <!-- radio --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="radio" name="r2" className="minimal-red" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r2" className="minimal-red" />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r2" className="minimal-red" disabled />
                                                        Minimal red skin radio
                                                    </label>
                                                </div>
                                                {/* <!-- radio --> */}
                                                <div className="form-group ichack-input">
                                                    <label>
                                                        <input type="radio" name="r3" className="flat-red" defaultChecked={true} />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r3" className="flat-red" />
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="r3" className="flat-red" disabled />
                                                        Flat green skin radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-square-o text-black"></i>
                                        <h4 className="box-title">Basic Checkbox</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-checkbox">
                                            <input type="checkbox" id="basic_checkbox_1" defaultChecked={true} />
                                            <label for="basic_checkbox_1">Default</label>
                                            <input type="checkbox" id="basic_checkbox_2" className="filled-in" defaultChecked={true} />
                                            <label for="basic_checkbox_2">Filled In</label>
                                            <input type="checkbox" id="basic_checkbox_3" defaultChecked={true} disabled />
                                            <label for="basic_checkbox_3">Default - Disabled</label>
                                            <input type="checkbox" id="basic_checkbox_4" className="filled-in" defaultChecked={true} disabled />
                                            <label for="basic_checkbox_4">Filled In - Disabled</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-square-o text-black"></i>
                                        <h4 className="box-title">Basic Checkbox Design Colors</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-checkbox">
                                            <input type="checkbox" id="md_checkbox_1" className="chk-col-primary" defaultChecked={true} />
                                            <label for="md_checkbox_1">Primary</label>
                                            <input type="checkbox" id="md_checkbox_3" className="chk-col-success" defaultChecked={true} />
                                            <label for="md_checkbox_3" className='volvo'>Success</label>
                                            <input type="checkbox" id="md_checkbox_4" className="chk-col-info" defaultChecked={true} />
                                            <label for="md_checkbox_4">Info</label>
                                            <input type="checkbox" id="md_checkbox_6" className="chk-col-warning" defaultChecked={true} />
                                            <label for="md_checkbox_6">Warning</label>
                                            <input type="checkbox" id="md_checkbox_7" className="chk-col-danger" defaultChecked={true} />
                                            <label for="md_checkbox_7">Danger</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-square-o text-black"></i>
                                        <h4 className="box-title">Basic Checkbox Design Colors with Filled In</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-checkbox">
                                            <input type="checkbox" id="md_checkbox_21" className="filled-in chk-col-primary" defaultChecked={true} />
                                            <label for="md_checkbox_21">Primary</label>
                                            <input type="checkbox" id="md_checkbox_23" className="filled-in chk-col-success" defaultChecked={true} />
                                            <label for="md_checkbox_23">Success</label>
                                            <input type="checkbox" id="md_checkbox_24" className="filled-in chk-col-info" defaultChecked={true} />
                                            <label for="md_checkbox_24">Info</label>
                                            <input type="checkbox" id="md_checkbox_27" className="filled-in chk-col-warning" defaultChecked={true} />
                                            <label for="md_checkbox_27">Warning</label>
                                            <input type="checkbox" id="md_checkbox_29" className="filled-in chk-col-danger" defaultChecked={true} />
                                            <label for="md_checkbox_29">Danger</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-circle text-black"></i>

                                        <h4 className="box-title">Basic Radio Button</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-radio-button">
                                            <input name="group1" type="radio" id="radio_1" defaultChecked={true} />
                                            <label for="radio_1">Radio - 1</label>
                                            <input name="group1" type="radio" id="radio_2" />
                                            <label for="radio_2">Radio - 2</label>
                                            <input name="group1" type="radio" className="with-gap" id="radio_3" />
                                            <label for="radio_3">Radio - With Gap</label>
                                            <input name="group1" type="radio" id="radio_4" className="with-gap" />
                                            <label for="radio_4">Radio - With Gap</label>
                                            <input name="group2" type="radio" id="radio_5" defaultChecked={true} disabled />
                                            <label for="radio_5">Radio - Disabled</label>
                                            <input name="group3" type="radio" id="radio_6" className="with-gap" defaultChecked={true} disabled />
                                            <label for="radio_6">Radio - Disabled</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-circle text-black"></i>

                                        <h4 className="box-title">Basic Radio Button Design Colors</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-radio-button">
                                            <input name="group4" type="radio" id="radio_7" className="radio-col-primary" defaultChecked={true} />
                                            <label for="radio_7">Primary</label>
                                            <input name="group4" type="radio" id="radio_9" className="radio-col-success" />
                                            <label for="radio_9">Success</label>
                                            <input name="group4" type="radio" id="radio_10" className="radio-col-info" />
                                            <label for="radio_10">Info</label>
                                            <input name="group4" type="radio" id="radio_12" className="radio-col-warning" />
                                            <label for="radio_12">Warning</label>
                                            <input name="group4" type="radio" id="radio_13" className="radio-col-danger" />
                                            <label for="radio_13">Danger</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                    <div className="box-header with-border">
                                        <i className="fa fa-check-circle-o text-black"></i>
                                        <h4 className="box-title">Basic Radio Button Design Colors with Outline</h4>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">
                                        <div className="demo-radio-button">
                                            <input name="group5" type="radio" id="radio_30" className="with-gap radio-col-primary" defaultChecked={true} />
                                            <label for="radio_30">Primary</label>
                                            <input name="group5" type="radio" id="radio_32" className="with-gap radio-col-success" />
                                            <label for="radio_32">Success</label>
                                            <input name="group5" type="radio" id="radio_33" className="with-gap radio-col-info" />
                                            <label for="radio_33">Info</label>
                                            <input name="group5" type="radio" id="radio_35" className="with-gap radio-col-warning" />
                                            <label for="radio_35">Warning</label>
                                            <input name="group5" type="radio" id="radio_36" className="with-gap radio-col-danger" />
                                            <label for="radio_36">Danger</label>
                                        </div>
                                    </div>
                                    {/* <!-- /.box-body --> */}
                                </div>
                                {/* <!-- /.box --> */}
                            </div>
                            {/* <!-- ./col --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </section>
                </div >
            </div >
            <Footer />

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
                            <input type="text" name="s" placeholder="Search" className="w-p100" />
                        </div>
                        <div className="media-list media-list-hover mt-20">
                            <div className="media py-10 px-0">
                                <Link className="avatar avatar-lg status-success" to="#">
                                    <img src="images/1.jpg" alt="..." />
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
                                    <img src="images/2.jpg" alt="..." />
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
                                    <img src="images/3.jpg" alt="..." />
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
                                    <img src="images/4.jpg" alt="..." />
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
                                    <img src="images/1.jpg" alt="..." />
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
                                    <img src="images/2.jpg" alt="..." />
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
                                    <img src="images/3.jpg" alt="..." />
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
                                    <img src="images/4.jpg" alt="..." />
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
                    {/* <!-- /.tab-pane --> */}
                    {/* <!-- Settings tab content --> */}
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
                                <input type="checkbox" id="basic_checkbox_1" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_2" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_3" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_4" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_5" className="filled-in" />
                                <label for="basic_checkbox_5" className="mb-0 h-15"></label>
                                <span className="text-line">Maecenas scelerisque</span>
                                <small className="badge bg-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                <div className="tools">
                                    <i className="fa fa-edit"></i>
                                    <i className="fa fa-trash-o"></i>
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* <!-- checkbox --> */}
                                <input type="checkbox" id="basic_checkbox_6" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_7" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_8" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_9" className="filled-in" />
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
                                <input type="checkbox" id="basic_checkbox_10" className="filled-in" />
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
            <div className="control-sidebar-bg"></div>
            <div classname="sticky-toolbar">
                <Link to="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Buy Now"
                    classname="waves-effect waves-light btn btn-success btn-flat mb-5 btn-sm" target="_blank">
                    <span classname="icon-Money"><span classname="path1"></span><span classname="path2"></span></span>
                </Link>
                <Link to="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Portfolio"
                    classname="waves-effect waves-light btn btn-danger btn-flat mb-5 btn-sm" target="_blank">
                    <span classname="icon-Image"></span>
                </Link>
                <Link id="chat-popup" to="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Live Chat"
                    classname="waves-effect waves-light btn btn-warning btn-flat btn-sm">
                    <span classname="icon-Group-chat"><span classname="path1"></span><span classname="path2"></span></span>
                </Link>
            </div>
            <div id="chat-box-body">
                <div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">
                    <div id="chat-overlay"></div>
                    <span class="icon-Group-chat fs-30"><span class="path1"></span><span class="path2"></span></span>
                </div>

                <div class="chat-box">
                    <div class="chat-box-header p-15 d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button
                                class="waves-effect waves-circle btn btn-circle btn-primary-light h-40 w-40 rounded-circle l-h-45"
                                type="button" data-bs-toggle="dropdown">
                                <span class="icon-Add-user fs-22"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <div class="dropdown-menu min-w-200">
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Color me-15"></span>
                                    New Group</Link>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Clipboard me-15"><span class="path1"></span><span
                                        class="path2"></span><span class="path3"></span><span class="path4"></span></span>
                                    Contacts</Link>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Group me-15"><span class="path1"></span><span class="path2"></span></span>
                                    Groups</Link>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Active-call me-15"><span class="path1"></span><span
                                        class="path2"></span></span>
                                    Calls</Link>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Settings1 me-15"><span class="path1"></span><span
                                        class="path2"></span></span>
                                    Settings</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Question-circle me-15"><span class="path1"></span><span
                                        class="path2"></span></span>
                                    Help</Link>
                                <Link class="dropdown-item fs-16" to="#">
                                    <span class="icon-Notifications me-15"><span class="path1"></span><span
                                        class="path2"></span></span>
                                    Privacy</Link>
                            </div>
                        </div>
                        <div class="text-center flex-grow-1">
                            <div class="text-dark fs-18">Mayra Sibley</div>
                            <div>
                                <span class="badge badge-sm badge-dot badge-primary"></span>
                                <span class="text-muted fs-12">Active</span>
                            </div>
                        </div>
                        <div class="chat-box-toggle">
                            <button id="chat-box-toggle"
                                class="waves-effect waves-circle btn btn-circle btn-danger-light h-40 w-40 rounded-circle l-h-45"
                                type="button">
                                <span class="icon-Close fs-22"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                        </div>
                    </div>
                    <div class="chat-box-body">
                        <div class="chat-box-overlay">
                        </div>
                        <div class="chat-logs">
                            <div class="chat-msg user">
                                <div class="d-flex align-items-center">
                                    <span class="msg-avatar">
                                        <img src="images/2.jpg" class="avatar avatar-lg" alt=""/>
                                    </span>
                                    <div class="mx-10">
                                        <Link to="#" class="text-dark hover-primary fw-bold">Mayra Sibley</Link>
                                        <p class="text-muted fs-12 mb-0">2 Hours</p>
                                    </div>
                                </div>
                                <div class="cm-msg-text">
                                    Hi there, I'm Jesse and you?
                                </div>
                            </div>
                            <div class="chat-msg self">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="mx-10">
                                        <Link to="#" class="text-dark hover-primary fw-bold">You</Link>
                                        <p class="text-muted fs-12 mb-0">3 minutes</p>
                                    </div>
                                    <span class="msg-avatar">
                                        <img src="images/3.jpg" class="avatar avatar-lg" alt=""/>
                                    </span>
                                </div>
                                <div class="cm-msg-text">
                                    My name is Anne Clarc.
                                </div>
                            </div>
                            <div class="chat-msg user">
                                <div class="d-flex align-items-center">
                                    <span class="msg-avatar">
                                        <img src="images/2.jpg" class="avatar avatar-lg" alt=""/>
                                    </span>
                                    <div class="mx-10">
                                        <Link to="#" class="text-dark hover-primary fw-bold">Mayra Sibley</Link>
                                        <p class="text-muted fs-12 mb-0">40 seconds</p>
                                    </div>
                                </div>
                                <div class="cm-msg-text">
                                    Nice to meet you Anne.<br/>How can i help you?
                                </div>
                            </div>
                        </div>
                        {/* <!--chat-log --> */}
                    </div>
                    <div class="chat-input">
                        <form>
                            <input type="text" id="chat-input" placeholder="Send a message..."/>
                                <button type="submit" class="chat-submit" id="chat-submit">
                                    <span class="icon-Send fs-22"></span>
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form