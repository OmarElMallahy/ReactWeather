var React = require('react');


var About = (props)=> {
  return(
    <div>       
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used
        </li>
        <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data.
      </li>
      </ul>
    </div>
    
  );
}

module.exports = About;

// var About = React.createClass({
//   render: function(){
//     return(
//       <div>       
//         <h3>About Component</h3>
//       </div>
      
//     );
//   }
// });