
function Bio() {
    
    return(
<div >
        <p>Bio Data</p>
        <label for="dob"><b>Date of birth *</b></label>
        <input type="text" className="form-control" placeholder="Date of birth *" name="dob"  id="dob" onfocus="(this.type = 'date')" required/>

       <div className="form-row">
           <div className="form-group col-md-6">
               <label for="email"><b>Email *</b></label>
               <input type="text"className="form-control" placeholder="Email *" name="email"  id="email"  required/>
           </div>
           <div className="form-group col-md-6">
               <label for="phone"><b>Phone</b></label>               
               <input type="text"  className="form-control"placeholder="Phone" name="phone" id="phone"/>                           
           </div>

       </div>



       <div className="row">
           <div className="form-group col-md-6">
             <label for="gender">Gender</label>
             <select id="gender" name="gender" className="form-control">
               <option selected>male</option>
               <option>female</option>
             </select>
           </div>
           <div className="form-group col-md-3">
             <label for="Fees_Status">Fees</label>
             <select id="Fees_Status" name="Fees_Status" className="form-control">
               <option selected>paid</option>
               <option>unpaid</option>
             </select>
           </div>
           <div className="form-group col-md-3">
             <label for="status">Status</label>
             <select id="status" name="status" className="form-control">
               <option selected>Successful</option>
               <option>Probation</option>
               <option>Carry Over</option>
               <option>Transfer</option>
             </select>
           </div>
       </div>

       <p>Upload Passport Photo (Max size 12kb)</p><input className="form-control" id="file_info"></input>
       <input type="file" className="form-control" id="file" required/>
       <br/><hr/>
</div>

    )

}


export default Bio;