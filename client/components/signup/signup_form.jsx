SignupForm = React.createClass({
    render(){
        return(
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">Fake of the book</p>
                </div>
                <form>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" placeholder="FirstName" ref="firstName" name="firstName" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" placeholder="LastName" ref="lastName" name="lastName" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" ref="email" placeholder="Email" name="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <input type="text" ref="password" placeholder="Password" name="password" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-md btn-success"/>
                        </div>

                    </div>
                </form>

            </div>
        )
    }
})