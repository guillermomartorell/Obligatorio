import React from 'react';

function Home (){
    return (
    <main className="main_home">
        <h1>Welcome to Manzana!</h1>
        <h2>A comprehensive and all encompazing companion application for your campaigns!</h2>
        <div>
            <p>Go ahead and choose from your currently available campaigns below.</p>
        </div>
        <div className="campaign_container">
            {/* TO DO create component to show campaigns */}
        </div>
    </main>
     );
    }
    
export default Home;