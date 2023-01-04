
import './App.css';
import MatNo from './MatNumber';
import  Details from './StudentDetails'
import  StudentCourses  from "./StudentCourses";
import Bio from './StudentBio';
import  RegBtn from './RegBtn'; 
import AddOrRemoveCourses from './Add_Remove_Courses';



function App() {

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const first = document.getElementById("student_surname").value
    const sur = document.getElementById("student_firstname").value
    const message = sur+" "+first +" thanks for testing the App. "
   alert (message);
  

 }

  return (
   
    <div className="container .bg-primary">

       <div className="row">
       <div class="col-md-2">
                    </div>

                  <div className="col-md-8 border border-primary  ml-3 mb-3 mr-3">

                      <form onSubmit = {handleSubmit}  id="reg-form" action="" method="post" className="ml-5 mb-3 mr-5 mt-5">
                      <h1>Course Registration</h1>
                                  <h3>Fill the form below and press the submit button!</h3>
                                    
                                  <MatNo />
                                  < Details />
                                  <  StudentCourses />
                                  <  Bio />
                                  <AddOrRemoveCourses />
                                  < RegBtn />

                      </form>
                  </div>

          <div className="col-md-2">

      </div>

</div>
</div>
  );
}

export default App;
