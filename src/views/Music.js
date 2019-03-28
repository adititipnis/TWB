import React from "react";
import FeaturedSection from '../components/FeaturedSection'

export default function Music(props) {
    return (
        <div>
            <div className="stepsSection">
                <div className="step step-1">
                    <h4>CREATIVE DISCUSSION</h4>
                    <span>To start things off, we will connect over email, Skype or phone to discuss the needs of your project. This will require you to give me a description of what your vision is for your song.</span>
                </div>

                <div className="step step-2">
                    <h4>FILE DELIVERY</h4>
                    <span>You'll need to upload all the required audio files using a file transfer delivery service such as WeTransfer. This will typically consist of audio stems or project files. For a more detailed explanation, please click below.</span>
                </div>

                <div className="step step-3">
                    <h4>PRODUCTION / MIX</h4>
                    <span>After receiving all the contents, we'll begin my creative process. The delivery time will vary depending on the work being done. We will discuss deadlines from the very beginning to ensure maximum clarity.</span>
                </div>

                <div className="step step-4">
                    <h4>REVISIONS</h4>
                    <span>We would recommend all clients to give detailed feedback after careful analysis so we can have effective revisions. We do not charge extra for revisions. We work until you are completely satisfied with your product.</span>
                </div>

                <div className="step step-5">
                    <h4>APPROVAL</h4>
                    <span>Once approved we'll deliver you the necessary files. We'll also deliver any other data to satisfy artist or brand requirements such as individual stems, project files, etc.</span>
                </div>
            </div>
            <FeaturedSection />
        </div>
    )
}