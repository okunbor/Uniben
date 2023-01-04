
import {courses,level,year_of_entry ,session,session_of_entry} from "./Courses";


function StudentCourses() {

  const course = Object.entries(courses).map(([key, values]) => 
    
      <option value={key}>{courses[key]}</option>  )

   const Level  = level.map((key) => <option value={key}>{key}</option>)
   const Year_of_entry = year_of_entry.map((key) => <option value={key}>{key}</option>)  
   const Session =  session.map((key) => <option value={key}>{key}</option>)
   const Session_of_entry = session_of_entry.map((key) => <option value={key}>{key}</option>)

    return(

     

<div>
        <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">Dept ID (eg 1 for CPE)</label>
          <input type="text" className="form-control" id="student_dept_idr" name="student_dept_idr" value = "1" hidden/>
          <select id="dept_idr" name="dept_idr" className="form-control">

                 {course}
            
          </select>
        </div>
        <div className="form-group col-md-3">
          <label for="inputState">Session</label>
          <select id="session_idr" name="session_idr" className="form-control">
            <option selected>2020/2021</option>
            {Session}
            
          </select>
        </div>
        <div className="form-group col-md-3">
          <label for="level">Level</label>
          <select id="level" name="level" className="form-control">
            <option selected>100</option>
            {Level}
           
          </select>
        </div>
    </div>

    
    <div className="form-row">
        <div className="form-group col-md-4">
          <label for="year_of_entry">Year of Entry (e.g 2019)</label>
          <select id="dept_idr" name="dept_idr" className="form-control">
            <option selected>2016</option>
            {Year_of_entry}
           
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="session_idr_of_entry">Session of Entry</label>
          <select id="session_idr_of_entry" name="session_idr_of_entry" className="form-control">
            <option selected>2016/2017</option>
            {Session_of_entry}
           
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="mode_of_entry">Mode of Entry (UME or DE)</label>
          <select id="mode_of_entry" name="mode_of_entry" className="form-control">
            <option value="UME" selected>UME</option>
            <option value="DE">DE</option>
          </select>
        </div>
    </div>

    <div className="row">

<div className="form-group col-md-6">
    <label for="psw"><b>Password</b></label>
    <input type="password" className="form-control" placeholder="Enter Password" name="psw" id="psw" required/>       
</div>
<div className="form-group col-md-6">
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" className="form-control"  placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
</div>

</div>                                    


<hr/>

</div>
    )
    
}


export default StudentCourses;