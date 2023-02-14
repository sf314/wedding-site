import './Homepage.css'
import logAnalytics from '../analytics/FirebaseAnalytics.js'

function Homepage() {
    logAnalytics("page_render_homepage")
    return (
        <div className="Homepage">
            Welcome home! This is Homepage.js
        </div>
    );
}

export default Homepage;