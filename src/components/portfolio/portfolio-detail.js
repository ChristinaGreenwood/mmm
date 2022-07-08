import React, { Component } from 'react'
import axios from 'axios';
                                        
export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItems();
    }

    getPortfolioItems() {
        axios
        .get(`https://greenwoodc.devcamp.space/portfolio/portfolio_items/${
        this.props.match.params.slug
    }`,
        {withCredentials: true }
        )
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
                })
        .catch(error => {
            console.log("error in getPortfolioItems", error);
        });
    }


  render() {
      const {
          banner_image_url,
          category,
          description,
          logo_url,
          id,
          name,
          thumb_image_url,
          url
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + thumb_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

    return (
       <div>
           <div className='portfolio-detail-wrapper'>
               <div className='banner' style={bannerStyles}>
               <div className='portfolio-detail-description-wrapper'>
               <div className="item-title">{name}</div>
                <div className='description'>{description}</div>
                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">Visit {name}</a>
                </div>
            </div>
            </div>
               </div>
       </div>
    );
  }
}