import React from 'react';
import './styles/Form.css'


const ExcersicesForm= ({onChange,onSubmit,form})=> (
 <div className="container">
    
   <form onSubmit={onSubmit}>
       <div className="form-group">
           <input 
               type="text" 
               className="form-control" 
               placeholder="Title" 
               name="title"
               onChange={onChange}
               value={form.title}
            />
       </div>
       <div className="form-group">
           <input 
              type="text" 
              className="form-control" 
              placeholder="Description" 
              name="description"
              onChange={onChange}
              value={form.description}
           />
       </div>
       <div className="form-group">
           <input 
              type="text" 
              className="form-control" 
              placeholder="img" 
              name="img"
              onChange={onChange}
              value={form.img}
           />
        </div>
       <div className="row left form-C">
           <div className="col">
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="LeftColor" 
                  name="leftColor"
                  onChange={onChange}
                  value={form.leftColor}
                />
          </div>
          <div className="col">
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="RightColor" 
                  name="rightColor"
                  onChange={onChange}
                  value={form.rightColor}
                />    
          </div>
      </div>
      <div>
         
          <button 
               type="submit"
               className="form-B col-2 btn btn-primary">
                Submit
           </button> 
       </div>
        
        
    
    </form>

</div>
)

export default ExcersicesForm