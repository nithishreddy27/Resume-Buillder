import React from 'react'
export const editProfile = () => {
  return (
    <div className="min-h-screen">
        <div class="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className=" bg-gray-100 p-5 w-11/12  mx-auto my-24  rounded-xl px-10 ">
        <div className="mt-10 sm:mt-0">
           <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div>
                <p className="text-lg mt-2 font-medium tracking-wider">PERSONAL INFORMATION</p>
                <p className="text-gray-600 mt-1  text-sm">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="md:col-span-2 mt-6 md:mt-0">
              <div>
                <div className="sm:rounded-md shadow overflow-hidden rounded-sm">
                  <div className="px-4 py-5 rounded-md bg-white sm:p-6">
                  <form>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label className="text-md  text-black">First name</label>
                      <input type="text" 
                             name="fname"
                             id="fname"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <label className="text-md  text-black  ">Last name</label>
                      <input type="text" 
                             name="lname"
                             id="lname"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div> 
                      <div className="col-span-6 sm:col-span-3">
                      <label className="text-md  text-black  ">College</label>
                      <input type="text" 
                             name="clg"
                             id="clg"
                             required=""
                             value=""
                             className="mt-1 bg-gray-100 cursor-not-allowed focus:outline-none focus:shadow-outline focus:border-gray-300 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div> 
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label className="text-md  text-black  ">Roll Number</label>
                      <input type="text" 
                             name="rno"
                             id="rno"
                             required=""
                             value=""
                             className="mt-1 bg-gray-100 cursor-not-allowed focus:outline-none focus:shadow-outline focus:border-gray-300 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Date Of Birth</label>
                      <input type="date" 
                             name="dob"
                             id="dob"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-gray-300	 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div>   
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Phone Number</label>
                      <input type="text" 
                             name="phno"
                             id="phno"
                             required=""
                             className="mt-1 bg-gray-100 focus:outline-none focus:shadow-outline  focus:border-orange-500	 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div> 
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Registered Email Address</label>
                      <input type="text" 
                             name="email"
                             id="email"
                             required=""
                             value=""
                             className="mt-1 bg-gray-100 cursor-not-allowed focus:outline-none focus:shadow-outline focus:border-gray-300  block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <label className="text-md  text-black  ">Father name</label>
                      <input type="text" 
                             name="faname"
                             id="faname"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <label className="text-md  text-black  ">Mothers name</label>
                      <input type="text" 
                             name="mname"
                             id="mname"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Father&apos;s Email address</label>
                      <input type="text" 
                             name="femail"
                             id="femail"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border font-mediumborder border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Father&apos;s Phone Number</label>
                      <input type="text" 
                             name="fphno"
                             id="fphno"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Father&apos;s Occupation</label>
                      <input type="text" 
                             name="focc"
                             id="focc"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Mother&apos;s Email address</label>
                      <input type="text" 
                             name="memail"
                             id="memail"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Mother&apos;s Phone Number</label>
                      <input type="text" 
                             name="mphno"
                             id="mphno"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Mother&apos;s Occupation</label>
                      <input type="text" 
                             name="mocc"
                             id="mocc"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">Country</label>
                      <select
                      name="country"
                      className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    >
    
    <option value="Afghanistan">Afghanistan</option>
   <option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D&apos;Ivoire">Cote d&apos;Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India"selected>India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People&apos;s Republic of Korea">Korea, Democratic People&apos;s Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People&apos;s Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" >Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">City</label>
                      <input type="text" 
                             name="city"
                             id="city"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">State / Province</label>
                      <input type="text" 
                             name="state"
                             id="state"
                             required=""
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border  border-gray-300 py-2 px-3 rounded-md"
                             />
                      </div>
                       
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md-gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <p className="text-lg mt-2 font-medium tracking-wider">PROFILE</p>
                <p  className="text-gray-600 mt-1  text-sm">Be cautious while sharing this information because it will be visible to everyone.</p>
               </div>
            </div>
            <div className="md:col-span-2 mt-5 md:mt-0">
                <div>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white px-4 py-5 sm:p-6 space-y-6">
                       <div className="grid grid-cols-3 gap-6">
                           <div className="col-span-3 sm:col-span-6">
                             <label  className="text-md  text-black  ">Website</label>
                             <input type="text" 
                             name="mocc"
                             id="mocc"
                             required=""
                             placeholder="https://www.example.com"
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border  border-gray-300 py-2 px-3 rounded-md"
                             />
                             </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                           <div className="col-span-3 sm:col-span-6">
                             <label  className="text-md  text-black  ">Linkedin URL</label>
                             <input type="text" 
                             name="linkedin"
                             id="linkedin"
                             required=""
                             placeholder="https://www.linkedin.com/in/username/"
                             className="mt-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border  border-gray-300 py-2 px-3 rounded-md"
                             />
                             </div>
                            </div>
                          <div className="mt-3 sm:colspan-6 ">
                            <label className=" block mb-1 text-md  text-black  ">Photo</label>
                              <div class="flex items-center">
                                <div class="relative box">
                                 <button class="overflow-hidden">
                                   <span class="absolute left-0 top-0 pointer-events-none inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100 hover:bg-gray-800">
                                     <div class="relative h-full w-full object-fit hover:bg-gray-800">
                                     <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                                        
                                     </span>
                                     </div>
                                     </span>
                                 </button>
                                 <input type="file" className=" w-16 h-16 left-0 rounded-full -top-0 opacity-1 border-0 hover:bg-gray-800 outline-none mr-7 cursor-pointer"/>
                                    
                                   </div>
                                   <input 
                                    name="url"
                                    id="url"
                                    required=""
                                    value='http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png'
                                    className="mt font-semibold-1 focus:outline-none focus:shadow-outline focus:border-orange-500 block w-full shadow-sm sm:text-sm border  border-gray-300 py-2 px-3 rounded-md"/>
                                    </div>
                                  </div>
                                  </div>
                         </div>
                      </div>
                   </div>
           </div>
      </div>
      <div className="hidden sm:block">
        <div className='py-5'>
          <div className='borter-t border-gray-200'></div>
        </div>
      </div>
      <div className="pt-5">
        <div className='flex justify-end'>
          <button type='button' className=' bg-white text-sm font-medium text-gray-700 hover:bg-gray-300 py-2 px-4 border border-gray-300 rounded-md shadow-sm'>Cancel</button>
          <button type="submit"  className='bg-orange-600 text-sm ml-3 text-white font-medium  hover:bg-orange-700 py-2 px-4 border border-gray-300 rounded-md shadow-sm'>Save</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
export default editProfile;