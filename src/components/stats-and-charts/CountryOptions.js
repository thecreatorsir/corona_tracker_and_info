import React from "react";
import { Component } from "react";

class CountryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { value_country: "india", value_graph: "india" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.call_by === "graph") {
      console.log("called");
      this.props.get_country_graph(event.target.value);
    } else {
      this.props.get_country(event.target.value);
    }
  }

  render() {
    return (
      <div className='select-button'>
        <select
          className='dropdown-select'
          defaultValue='India'
          onChange={this.handleChange}
        >
          <option value='Afganistan'>Afghanistan</option>
          <option value='Albania'>Albania</option>
          <option value='Algeria'>Algeria</option>
          <option value='Andorra'>Andorra</option>
          <option value='Angola'>Angola</option>
          <option value='Anguilla'>Anguilla</option>
          <option value='Argentina'>Argentina</option>
          <option value='Armenia'>Armenia</option>
          <option value='Aruba'>Aruba</option>
          <option value='Australia'>Australia</option>
          <option value='Austria'>Austria</option>
          <option value='Azerbaijan'>Azerbaijan</option>
          <option value='Bahamas'>Bahamas</option>
          <option value='Bahrain'>Bahrain</option>
          <option value='Bangladesh'>Bangladesh</option>
          <option value='Barbados'>Barbados</option>
          <option value='Belarus'>Belarus</option>
          <option value='Belgium'>Belgium</option>
          <option value='Belize'>Belize</option>
          <option value='Benin'>Benin</option>
          <option value='Bermuda'>Bermuda</option>
          <option value='Bhutan'>Bhutan</option>
          <option value='Bolivia'>Bolivia</option>
          <option value='Bonaire'>Bonaire</option>
          <option value='Botswana'>Botswana</option>
          <option value='Brazil'>Brazil</option>
          <option value='Brunei'>Brunei</option>
          <option value='Bulgaria'>Bulgaria</option>
          <option value='Burundi'>Burundi</option>
          <option value='Cambodia'>Cambodia</option>
          <option value='Cameroon'>Cameroon</option>
          <option value='Canada'>Canada</option>
          <option value='Chad'>Chad</option>
          <option value='Chile'>Chile</option>
          <option value='China'>China</option>
          <option value='Colombia'>Colombia</option>
          <option value='Comoros'>Comoros</option>
          <option value='Congo'>Congo</option>
          <option value='Costa Rica'>Costa Rica</option>
          <option value='Croatia'>Croatia</option>
          <option value='Cuba'>Cuba</option>
          <option value='Curaco'>Curacao</option>
          <option value='Cyprus'>Cyprus</option>
          <option value='Denmark'>Denmark</option>
          <option value='Djibouti'>Djibouti</option>
          <option value='Dominica'>Dominica</option>
          <option value='Ecuador'>Ecuador</option>
          <option value='Egypt'>Egypt</option>
          <option value='Eritrea'>Eritrea</option>
          <option value='Estonia'>Estonia</option>
          <option value='Ethiopia'>Ethiopia</option>
          <option value='Fiji'>Fiji</option>
          <option value='Finland'>Finland</option>
          <option value='France'>France</option>
          <option value='Gabon'>Gabon</option>
          <option value='Gambia'>Gambia</option>
          <option value='Georgia'>Georgia</option>
          <option value='Germany'>Germany</option>
          <option value='Ghana'>Ghana</option>
          <option value='Gibraltar'>Gibraltar</option>
          <option value='Greece'>Greece</option>
          <option value='Greenland'>Greenland</option>
          <option value='Grenada'>Grenada</option>
          <option value='Guadeloupe'>Guadeloupe</option>
          <option value='Guatemala'>Guatemala</option>
          <option value='Guinea'>Guinea</option>
          <option value='Guyana'>Guyana</option>
          <option value='Haiti'>Haiti</option>
          <option value='Hawaii'>Hawaii</option>
          <option value='Honduras'>Honduras</option>
          <option value='Hong Kong'>Hong Kong</option>
          <option value='Hungary'>Hungary</option>
          <option value='Iceland'>Iceland</option>
          <option value='Indonesia'>Indonesia</option>
          <option value='India'>India</option>
          <option value='Iran'>Iran</option>
          <option value='Iraq'>Iraq</option>
          <option value='Ireland'>Ireland</option>
          <option value='Isle of Man'>Isle of Man</option>
          <option value='Israel'>Israel</option>
          <option value='Italy'>Italy</option>
          <option value='Jamaica'>Jamaica</option>
          <option value='Japan'>Japan</option>
          <option value='Jordan'>Jordan</option>
          <option value='Kazakhstan'>Kazakhstan</option>
          <option value='Kenya'>Kenya</option>
          <option value='Kiribati'>Kiribati</option>
          <option value='Korea North'>Korea North</option>
          <option value='Korea Sout'>Korea South</option>
          <option value='Kuwait'>Kuwait</option>
          <option value='Kyrgyzstan'>Kyrgyzstan</option>
          <option value='Laos'>Laos</option>
          <option value='Latvia'>Latvia</option>
          <option value='Lebanon'>Lebanon</option>
          <option value='Lesotho'>Lesotho</option>
          <option value='Liberia'>Liberia</option>
          <option value='Libya'>Libya</option>
          <option value='Liechtenstein'>Liechtenstein</option>
          <option value='Lithuania'>Lithuania</option>
          <option value='Luxembourg'>Luxembourg</option>
          <option value='Macau'>Macau</option>
          <option value='Macedonia'>Macedonia</option>
          <option value='Madagascar'>Madagascar</option>
          <option value='Malaysia'>Malaysia</option>
          <option value='Malawi'>Malawi</option>
          <option value='Maldives'>Maldives</option>
          <option value='Mali'>Mali</option>
          <option value='Malta'>Malta</option>
          <option value='Martinique'>Martinique</option>
          <option value='Mauritania'>Mauritania</option>
          <option value='Mauritius'>Mauritius</option>
          <option value='Mayotte'>Mayotte</option>
          <option value='Mexico'>Mexico</option>
          <option value='Moldova'>Moldova</option>
          <option value='Monaco'>Monaco</option>
          <option value='Mongolia'>Mongolia</option>
          <option value='Montserrat'>Montserrat</option>
          <option value='Morocco'>Morocco</option>
          <option value='Mozambique'>Mozambique</option>
          <option value='Myanmar'>Myanmar</option>
          <option value='Nambia'>Nambia</option>
          <option value='Nauru'>Nauru</option>
          <option value='Nepal'>Nepal</option>
          <option value='Netherlands'>Netherlands (Holland, Europe)</option>
          <option value='Nevis'>Nevis</option>
          <option value='New Caledonia'>New Caledonia</option>
          <option value='New Zealand'>New Zealand</option>
          <option value='Nicaragua'>Nicaragua</option>
          <option value='Niger'>Niger</option>
          <option value='Nigeria'>Nigeria</option>
          <option value='Niue'>Niue</option>
          <option value='Norway'>Norway</option>
          <option value='Oman'>Oman</option>
          <option value='Pakistan'>Pakistan</option>
          <option value='Palestine'>Palestine</option>
          <option value='Panama'>Panama</option>
          <option value='Paraguay'>Paraguay</option>
          <option value='Peru'>Peru</option>
          <option value='Phillipines'>Philippines</option>
          <option value='Poland'>Poland</option>
          <option value='Portugal'>Portugal</option>
          <option value='Qatar'>Qatar</option>
          <option value='Reunion'>Reunion</option>
          <option value='Romania'>Romania</option>
          <option value='Russia'>Russia</option>
          <option value='Rwanda'>Rwanda</option>
          <option value='Saipan'>Saipan</option>
          <option value='Samoa'>Samoa</option>
          <option value='Samoa American'>Samoa American</option>
          <option value='San Marino'>San Marino</option>
          <option value='Sao Tome and Principe'>Sao Tome & Principe</option>
          <option value='Saudi Arabia'>Saudi Arabia</option>
          <option value='Senegal'>Senegal</option>
          <option value='Seychelles'>Seychelles</option>
          <option value='Sierra Leone'>Sierra Leone</option>
          <option value='Singapore'>Singapore</option>
          <option value='Slovakia'>Slovakia</option>
          <option value='Slovenia'>Slovenia</option>
          <option value='Solomon Islands'>Solomon Islands</option>
          <option value='Somalia'>Somalia</option>
          <option value='South Africa'>South Africa</option>
          <option value='Spain'>Spain</option>
          <option value='Sri Lanka'>Sri Lanka</option>
          <option value='Sudan'>Sudan</option>
          <option value='Suriname'>Suriname</option>
          <option value='Swaziland'>Swaziland</option>
          <option value='Sweden'>Sweden</option>
          <option value='Switzerland'>Switzerland</option>
          <option value='Syria'>Syria</option>
          <option value='Tahiti'>Tahiti</option>
          <option value='Taiwan'>Taiwan</option>
          <option value='Tajikistan'>Tajikistan</option>
          <option value='Tanzania'>Tanzania</option>
          <option value='Thailand'>Thailand</option>
          <option value='Togo'>Togo</option>
          <option value='Tokelau'>Tokelau</option>
          <option value='Tonga'>Tonga</option>
          <option value='Trinidad and Tobago'>Trinidad & Tobago</option>
          <option value='Tunisia'>Tunisia</option>
          <option value='Turkey'>Turkey</option>
          <option value='Turkmenistan'>Turkmenistan</option>
          <option value='Turks and Caicos Is'>Turks & Caicos Is</option>
          <option value='Tuvalu'>Tuvalu</option>
          <option value='Uganda'>Uganda</option>
          <option value='UK'>United Kingdom</option>
          <option value='Ukraine'>Ukraine</option>
          <option value='UAE'>United Arab Emirates</option>
          <option value='USA'>United States of America</option>
          <option value='Uraguay'>Uruguay</option>
          <option value='Uzbekistan'>Uzbekistan</option>
          <option value='Vanuatu'>Vanuatu</option>
          <option value='Vatican City'>Vatican City State</option>
          <option value='Venezuela'>Venezuela</option>
          <option value='Vietnam'>Vietnam</option>
          <option value='Yemen'>Yemen</option>
          <option value='Zaire'>Zaire</option>
          <option value='Zambia'>Zambia</option>
          <option value='Zimbabwe'>Zimbabwe</option>
        </select>
      </div>
    );
  }
}

export default CountryOptions;