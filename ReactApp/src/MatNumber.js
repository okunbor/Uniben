


function MatNo() {
    
    
    return(
  
        <div className="form-row">
        <div className="form-group col-md-6">
            <label for="name">MAT. NO.</label>

            <input type="text" className="form-control" id="matno" name="matno" placeholder="ENG..." required autoFocus />
        </div>
        <div class="form-group col-md-6 hi">
            
            <label for="load_data_button">Click to load your personal data</label>

            <button className="form-control btn btn-outline-success btn-block load_data_button" id="load_reg_data_button" type="button">Load Personal Data</button>
        </div>
    </div>






    )
}


export default MatNo;