import React from 'react';

function NetFlix() {
    return (
        <>
        <div className="cards">
            <div className="card">
                <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card_img" />
                <div className="card_info">
                    <span className="card_category">A Netflix Original Series</span>
                    <h3 className="card_title">Dark</h3>
                    <a href="https://www.netflix.com/bd/title/80990668?source=35" target="_blank" >
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>

    </>
      )
}

export default NetFlix;
