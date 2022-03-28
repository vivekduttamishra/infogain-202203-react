import React from 'react'
import Clock from './Clock';
function Home() {
    return (
        <div>
            <section id="book-info">
                <Clock className="clock"/>
                <div className="container">
                    <h2 className="bokname">The Accursed God </h2>
                    <div className="book-img">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/I/41xektjU1NL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
                    </div>
                    <div className="book-content">
                        <p>
                            The story of the epic battle of Kurukshetra has been told and retold for ages.
                            Millennia of dust, fables, imaginations — and the epic itself is lost.
                            What remained is the story of a family feud and ambition of Kauravas and Pandavas.
                            But why, then, was this an epic war? Why entire Aryavart plunged into this first
                            real world-war? Why the echo of this ancient war still resonates after all those
                            centuries?
                        </p>
                        <h4 className="authorname"> - by Vivek Dutta Mishra</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home