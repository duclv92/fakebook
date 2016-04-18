FeatureList = React.createClass({
    featureList:[
        {
            icon:"fa fa-image fa-2x",
            bigText: "Share you image",
            smallText: "with all friends"
        },
        {
            icon:"fa fa-share fa-2x",
            bigText: "Share you life",
            smallText: "with all friends"
        },
        {
            icon:"fa fa-search fa-2x",
            bigText: "Search your friend",
            smallText: "in fakebook"
        }
    ],
    render(){
        var rows = this.featureList.map(function(feature){
            return(
                <li key={feature.icon}>
                    <h3 className="btn btn-lg">
                        <i className={feature.icon}></i>
                        <span>
                            <strong>{feature.bigText}</strong>
                            <small>{feature.smallText}</small>
                        </span>
                    </h3>
                </li>
            )
        });
        return(
            <div>
                <h2 className="col-md-11 hiden-xs">
                    Fakebook, the new social network
                </h2>
                <ul className="ds-btn hidden-xs">
                    {rows}
                </ul>
            </div>
        )
    }
})