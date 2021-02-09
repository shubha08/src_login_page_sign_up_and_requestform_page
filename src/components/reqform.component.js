import React, { Component } from "react";


export default class Request extends Component {

    onChange(e){
        let files=e.target.files;
        console.warn("data file",files)

    }
    render() {
        return (
            <form>
                <h3>Application</h3>
                <div class="row">
                <div class="col-6">
                <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="col-6">
                <input type="text" class="form-control" placeholder="Last name"/>
                 </div>
                </div> 
                <br />      

                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Aadhar"/> Aadhar
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>
                

                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="GST"/> GST
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>

                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Trade Certificate"/> Trade Certificate
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>
                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Drug Certificate"/> Drug Certificate 
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>

                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Drug Certificate"/> FSSAI
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>
                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Canclled Cheque"/> Canclled Cheque
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>
                {/* <div className=""> */}
                <div class="formBlock">
                <div class="row">
                    <div class="col-6">
                <input type="checkbox" name="Shop Est. Certificate"/> Shop Est. Certificate
                </div>

                <div class="col-6">
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                </div>
                </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                    
            </form>
        );
    }
}