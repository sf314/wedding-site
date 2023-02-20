import './Homepage.css'
import logAnalytics from '../analytics/FirebaseAnalytics.js'

function Homepage() {
    logAnalytics("page_render_homepage")
    return (
        <div className="Homepage-border">
            <div className="Homepage-content">
                <h2>
                    Mark Your Calendars!
                </h2>
                <p>
                    We will be celebrating our special day on Deecmber 15th, 2023!
                    We are super excited all of you to join us in our wedding! This
                    day has been in the making since September 10th 2021, and we've
                    come so far since then.
                </p>
                <p>
                    Please check out the tabs on top to view more information about
                    us, travel, the venue itself, the food, and more!
                </p>
                <h2>
                    The Venue
                </h2>
                <p>
                    Our wedding will take place at The Ashley Castle
                    at <a href='https://theashleycastle.com'>The Ashley Castle</a> in
                    Chandler, AZ. It is a small castle designed specifically for
                    weddings, including built-in groom and bride rooms along the left
                    and right towers. With a maximum indoor capacity of 300, 
                </p>
                <p>
                    Click "The Venue" at the top to view more information about the
                    Ashley Castle.
                </p>
            </div>
        </div>
    );
}

export default Homepage;