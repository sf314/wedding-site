import './Homepage.css'
import logAnalytics from '../analytics/FirebaseAnalytics.js'

function Homepage() {
    logAnalytics("page_render_homepage")
    return (
        <div className="Homepage">
            <h2>
                Mark Your Calendars!
            </h2>
            <p>
                We will be celebrating our special day on Deecmber 15th, 2023!
                We are super excited all of you to join us in our wedding 
                at <a href='https://theashleycastle.com'>The Ashley Castle</a> in
                Chandler, AZ.
            </p>
            <h2>
                Venue Information and Directions
            </h2>
            <h2>
                Nearby Hotels
            </h2>
        </div>
    );
}

export default Homepage;