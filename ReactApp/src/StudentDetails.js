

function Details() {

       
//    
    

return(

<div>
    <br/>
    <label for="student_surname"><b>SURNAME (in capital letters)</b></label>
    <input  
         type="text" className="form-control" placeholder="SURNAME" name="surname" id="student_surname" required/>
    <div className="form-row">
        <div className="form-group col-md-6">
            <label for="dob"><b>Firstname *</b></label>
            <input   type="text" className="form-control" placeholder="Firstname *" name="firstname"  id="student_firstname"  required/>
        </div>
        <div className="form-group col-md-6">
            <label for="student_othernames"><b>Othernames</b></label>               
            <input type="text" className="form-control" placeholder="Othernames" name="student_othernames" id="student_othernames"/>                           
        </div>

    </div>
</div>
)

}



export default Details;