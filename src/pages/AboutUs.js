import './AboutUs.css'
import logAnalytics from '../analytics/FirebaseAnalytics.js'

function AboutUs() {
    logAnalytics("page_render_about_us")
    return (
        <div>
            About us!
        </div>
    );
}

export default AboutUs;