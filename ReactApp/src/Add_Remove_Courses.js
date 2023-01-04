

function AddOrRemoveCourses() {
    

    return (
<div>
        <h3>Add/Remove Courses</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <input className="btn btn-outline-info btn-lg btn-block" type="button" id="btnGenerate" value="Load Courses" onclick="PopulateDropDownList(700,0)" />
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                          {/* <!-- <li className="page-item disabled">
                                            <a className="page-link" href="#" tabindex="-1">Previous</a>
                                          </li> --> */}
                                          <li className="page-item active"><a className="page-link" onclick="PopulateDropDownList(201,0)">1<span className="sr-only">(current)</span></a></li>
                                          <li className="page-item" onclick="PopulateDropDownList(201,200)" ><a className="page-link">2 </a></li>
                                          <li className="page-item" onclick="PopulateDropDownList(201,400)"><a className="page-link" >3</a></li>
                                          <li className="page-item" onclick="PopulateDropDownList(201,600)"><a className="page-link" >4</a></li>
                                          <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                          </li>
                                        </ul>
                                      </nav>
                                </div>
                               
                            </div>

                            



                            <div className="row p-l-5">
                                <div className="input_fields_wrap_1 col-md-6">
                                    <h5>First Semester Courses</h5>
                                    <input type="text" name="CourseCode_1" id="CourseCode_1" className="CourseCode_1" readonly />

                                   
                                    <div className="input-group mb-3"><select className="js-example-basic-single w-75 p-1"  id="comboCourses_1"></select><div className="input-group-append"><button className="btn btn-outline-success add_field_button_1" type="button">Add</button></div></div>
                                </div>
                                <div className="input_fields_wrap_2 col-md-6">
                                    <h5>Second Semester Courses</h5>
                                    <input type="text"  className="CourseCode_2" id="CourseCode_2" name="CourseCode_2" value="" readonly />

                                    <div className="input-group mb-3"><select className="w-75 p-1"  id="comboCourses_2"></select><div className="input-group-append_2"><button className="btn btn-outline-success add_field_button_2" type="button">Add</button></div></div>
                                </div>
                                
                                <hr />
                                <br/>
                                <p>TODO: NA Courses</p>
                            </div>
    </div>                        
    )


}

export default AddOrRemoveCourses; 