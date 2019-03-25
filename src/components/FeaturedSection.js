import React from "react";
import Featured from '../components/Featured'
import VideoPopup from '../components/VideoPopup'

const featuredImage1 = require('../images/featured-1.jpg')
const featuredImage2 = require('../images/featured-2.jpg')
const featuredImage3 = require('../images/featured-3.jpg')
const featuredImage4 = require('../images/featured-4.jpg')

export default class featuredSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isVideoVisible: false }
    }

    showVideo = () => this.setState({ isVideoVisible: true })

    hideVideo = () => this.setState({ isVideoVisible: false })

    render() {
        return (
            <div className="featuredSection">
                <div className="featuredStrip">
                    <Featured src={featuredImage1} open={this.showVideo} />
                    <Featured src={featuredImage2} open={this.showVideo} />
                    <Featured src={featuredImage3} open={this.showVideo} />
                    <Featured src={featuredImage4} open={this.showVideo} />
                </div>
                <div className="featuredStrip">
                    <Featured src={featuredImage3} open={this.showVideo} />
                    <Featured src={featuredImage4} open={this.showVideo} />
                    <Featured src={featuredImage1} open={this.showVideo} />
                    <Featured src={featuredImage2} open={this.showVideo} />
                </div>
                <div className="featuredStrip">
                    <Featured src={featuredImage1} open={this.showVideo} />
                    <Featured src={featuredImage2} open={this.showVideo} />
                    <Featured src={featuredImage3} open={this.showVideo} />
                    <Featured src={featuredImage4} open={this.showVideo} />
                </div>
                <div className="featuredStrip">
                    <Featured src={featuredImage3} open={this.showVideo} />
                    <Featured src={featuredImage4} open={this.showVideo} />
                    <Featured src={featuredImage1} open={this.showVideo} />
                    <Featured src={featuredImage2} open={this.showVideo} />
                </div>
                {this.state.isVideoVisible && <VideoPopup close={this.hideVideo} />}
            </div>
        )
    }
}