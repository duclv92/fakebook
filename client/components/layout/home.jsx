HomeLayout = React.createClass({
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <FeatureList/>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <SignupForm />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
});