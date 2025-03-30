import React from 'react';
import './InfoCard.css'; // Ensure you import the CSS file

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="indicator-container">
        <span className="indicator-red"></span>
        <span className="indicator-yellow"></span>
        <span className="indicator-green"></span>
      </div>

      <h1>Happy 2nd Anniversary 💖💖 </h1>
      <p style={{textAlign: 'justify'}}>
      Happy 2nd Anniversary Lablab 😘💖💖"Wow, two years.But look at us now. From those humble beginnings to a place where we can look at each other and realize that we've made it through the hard times, and today, we’re able to enjoy the fruits of our labor. We can buy what we want, go where we want, and do what we love. And none of that would be possible without you.
<br></br>
Thank you for sticking by my side through every high and every low. You were there when things were tough, and you never gave up. When it felt like nothing was going our way, you were my rock, always encouraging me to keep going. We made it through the struggles, and the sacrifices together, and that bond is something I’ll always treasure.
<br></br>
So, on this special day, I want to celebrate not just the accomplishments, but us. The love, the strength, and the unwavering support that has carried us to this point. We've proven that when we work together, we can overcome anything and achieve all that we set our minds to.
<br></br>
Here's to everything we've done and everything that's still to come. Happy anniversary to us. Iloveyou more than words can express, and I can’t wait to see where this journey takes us next."
❤❤
      </p>
    </div>
  );
};

export default InfoCard;