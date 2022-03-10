import React from 'react';
import "../css/reset.css";
import "../css/services.css";
import tableSort from "table-sort-js/table-sort.js";

const Services = () => {
   return (
      <div id="services">
         <h1>Services</h1>
         <div id="table-div">
            <table class="table-sort table-arrows">
               <thead>
                  <tr>
                     <th class="order-by-desc">Name</th>
                     <th class="order-by-desc">Time</th>
                     <th class="order-by-desc">Price</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Basic Cut</td>
                     <td>30 mins</td>
                     <td>C$40</td>
                  </tr>
                  <tr>
                     <td>Creative Cut</td>
                     <td>60 mins</td>
                     <td>C$55</td>
                  </tr>
                  <tr>
                     <td>Buzz Cut</td>
                     <td>20 mins</td>
                     <td>C$20</td>
                  </tr>
                  <tr>
                     <td>Full Colour</td>
                     <td>120 mins</td>
                     <td>C$125</td>
                  </tr>
                  <tr>
                     <td>Colour Retouch</td>
                     <td>30 mins</td>
                     <td>C$100</td>
                  </tr>
                  <tr>
                     <td>Full Foil</td>
                     <td>180 mins</td>
                     <td>C$150</td>
                  </tr>
                  <tr>
                     <td>Partial Foil</td>
                     <td>90 mins</td>
                     <td>C$130</td>
                  </tr>
                  <tr>
                     <td>Bayalage</td>
                     <td>210 mins</td>
                     <td>C$165</td>
                  </tr>
                  <tr>
                     <td>Colour Melt</td>
                     <td>240 mins</td>
                     <td>C$200</td>
                  </tr>
                  <tr>
                     <td>Blow Out</td>
                     <td>30 mins</td>
                     <td>C$35</td>
                  </tr>
                  <tr>
                     <td>Up-Do</td>
                     <td>60 mins</td>
                     <td>C$50</td>
                  </tr>
                  <tr>
                     <td>Facial Hair Detailing</td>
                     <td>15 mins</td>
                     <td>C$20</td>
                  </tr>
                  <tr>
                     <td>Toner Application</td>
                     <td>20 mins</td>
                     <td>C$30</td>
                  </tr>
                  <tr>
                     <td>Cut/Fade</td>
                     <td>0 mins</td>
                     <td>C$35</td>
                  </tr>
                  <tr>
                     <td>Shampoo &amp; Style</td>
                     <td>0 mins</td>
                     <td>C$25</td>
                  </tr>
                  <tr>
                     <td>Full Head Colour</td>
                     <td>0 mins</td>
                     <td>C$80</td>
                  </tr>
                  <tr>
                     <td>Bleach Bayalage</td>
                     <td>0 mins</td>
                     <td>C$140</td>
                  </tr>
                  <tr>
                     <td>Full Head Foil</td>
                     <td>0 mins</td>
                     <td>C$160</td>
                  </tr>
                  <tr>
                     <td>Bayalage With Foils</td>
                     <td>0 mins</td>
                     <td>C$180</td>
                  </tr>
                  <tr>
                     <td>Half Head Foil &amp; Tone</td>
                     <td>0 mins</td>
                     <td>C$115</td>
                  </tr>
                  <tr>
                     <td>Bleach Retouch &amp; Tone</td>
                     <td>0 mins</td>
                     <td>C$120</td>
                  </tr>
                  <tr>
                     <td>Formal Updo</td>
                     <td>0 mins</td>
                     <td>C$50</td>
                  </tr>
                  <tr>
                     <td>Toner &amp; Cut</td>
                     <td>0 mins</td>
                     <td>C$50</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Services;