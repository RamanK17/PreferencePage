import React from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { fetchUserDetails } from "../actions/userDetailsActions"
// import { fetchCountryDetails } from "../actions/countryDetailsAction"
// import { fetchTimeZoneDetails } from "../actions/timeZoneAction"
// import { fetchLanguageDetails } from "../actions/languageAction"
// import { handleChangeCountry, handleChangeTimeZone , handleChangeLanguage} from "../actions/handleChangeAction"

const pageAlignmnet={
  textAlign:'center'
}
const toggleStyle1 ={
  block: {
    maxWidth: 150,
    float :'left',
    marginTop: 25,
    marginLeft :45,
  },
  toggle: {
    marginTop:10,
    marginBottom: 16,

  }
};
const toggleStyle2 ={
  block: {
    maxWidth: 150,
    float :'right',
    marginTop : 25,
    marginRight: 185,
  },
  toggle: {
    marginTop:10, 
    marginBottom: 16,
  }
};
const divStyle ={
  width: '100%'
};
const style = {
  height: 200,
  width: 900,
  margin: 6,
  textAlign: 'left',
  display: 'inline-block',
};
const headStyle={
  marginLeft: 220,
  textAlign: 'left'

}
const style1={
  margin :15,
  width: '100%',
  height:'100%'
};
const hospitalityDivStyle={
  width: '100%',
}
const styleDropdown={
  marginLeft: 80,
    width: 400  
}
const styleFloatLabel={
  float:'left',
  width:400
}
const styleFloatLabelLeft={
  float:'left',
  // marginLeft:28,
  width:400
}
const styleFloatLabelRight={
  float:'right',
  marginRight:28,
    width:400
}
class Layout extends React.Component {
constructor(props) {
    super(props);
    injectTapEventPlugin();
    //  this.handleChange = this.handleChange.bind(this);
    }
  componentWillMount() {
    this.props.fetchUserDetails()
    // this.props.fetchCountryDetails()
    // this.props.fetchTimeZoneDetails()
    // this.props.fetchLanguageDetails()
    // this.props.handleChangeCountry()
    // this.props.handleChangeTimeZone()
    // this.props.handleChangeLanguage()
  }
  render() {
  	// console.log("rohit",this.props.userDetails);
  	console.log("raman",this.props);
  return(
  	<div>
      <MuiThemeProvider>
        <div style={pageAlignmnet}>
	        <div style={headStyle} >
	          <i className="material-icons">book</i>
	            Preferences
	        </div>
          <Paper style={style} zDepth={1} >
          <div style={style1}>
              <i className="material-icons">account_circle</i>
              Product
          {this.props.userDetails.map((numbers)=>
          <div key={numbers.bloodGroup} >
           <div>
	            	<SelectField floatingLabelText="Country" style={styleFloatLabel} value={numbers.country} >
                    <MenuItem value={numbers.country} primaryText={numbers.country} />
                </SelectField> 
	          </div>
            <div>
	            <SelectField floatingLabelText="TimeZone" style={styleDropdown} value={numbers.timezone}>
                <MenuItem  value={numbers.timezone} primaryText={numbers.timezone} />  
              </SelectField> 
	          </div>
            <div >
	            <SelectField floatingLabelText="Language" style={styleFloatLabel}  value={numbers.language}>
                <MenuItem value={numbers.language} primaryText={numbers.language}/>  
              </SelectField> 
	          </div>
	        </div>
          )}
	        </div>
        </Paper>
        <Paper style={style} zDepth={2} >
          <div style={style1}>
              <i className="material-icons">airplanemode_active</i>
              Travel
              {this.props.userDetails.map((numbers)=>
                <div key={numbers.bloodGroup} >
                 <div>
                    <SelectField floatingLabelText="Airline Seat Preference" style={styleFloatLabel} value={numbers.airlineSeatPref} >
                            <MenuItem value={numbers.airlineSeatPref} primaryText={numbers.airlineSeatPref} />  
                        </SelectField> 
                  </div>
                  <div>
                    <SelectField floatingLabelText="Meal" style={styleDropdown} value={numbers.mealPref} >
                            <MenuItem value={numbers.mealPref} primaryText={numbers.mealPref} />
                        </SelectField> 
                  </div>
                    <div>
                      <TextField style={styleFloatLabelLeft} floatingLabelText='Freqent Flier' value={numbers.frequentFlierNo[0].number}/>
                  </div>
                  <div>
                      <TextField style={styleFloatLabelRight} floatingLabelText='Airline Code' value={numbers.frequentFlierNo[0].carrierName} />
                  </div>
              </div>
              )}
              </div>
          </Paper>
           <Paper style={style} zDepth={3} >
	            <div style={style1}>
	              <i className="material-icons">airline_seat_individual_suite</i>
	                Hospitality
	                {this.props.userDetails.map((numbers)=>
                  <div key={numbers.bloodGroup}>
                	  <div>
	                      <TextField  style={styleFloatLabelLeft} floatingLabelText='Special Assistance' value={numbers.specialAssistance}/>
	                  </div>
	                  <div style={toggleStyle2.block}>
	                          Smoking Room
	                          <Toggle
	                          label="Yes"
	                          defaultToggled={numbers.smoking}
	                          style={toggleStyle2.toggle}
	                          />
	                  </div>	                 
	                  <div >
	                      <TextField style={styleFloatLabelLeft} floatingLabelText='Other Special Assistance' value={numbers.otherSpclAsst}/>
	                  </div>
	                </div>
                )}
                </div>
                </Paper>
                <Paper style={style} zDepth={4} >
	                <div style={style1}>
	                <i className="material-icons">notifications</i>
	                Notification
	                {this.props.userDetails.map((numbers)=>
	                <div key={numbers.bloodGroup}>
	                  <div style={divStyle}>
	                    <div style={toggleStyle1.block}>
	                      Email
	                      <Toggle
	                        label="Yes"
	                        defaultToggled={numbers.emailNotfAllwd}
	                        style={toggleStyle1.toggle}
	                      />
	                    </div>
	                    <div style={toggleStyle2.block}>
	                            SMS
	                            <Toggle
	                            label="Yes"
	                            defaultToggled={numbers.notfSMS}
	                            style={toggleStyle2.toggle}
	                            />
	                    </div>
	                  </div>
	                </div>
	            )}
	            </div>
	            </Paper>
	            <Paper style={style} zDepth={5} >
	            <div style={style1}>
	              <i className="material-icons">perm_contact_calendar</i>
	              Emergency Contact
	              {this.props.userDetails.map((numbers)=>
	              <div key={numbers.bloodGroup}>
	                <div>
	                 <TextField style={styleFloatLabelLeft} floatingLabelText='Name' value={numbers.emergencyContName}/>
	                </div>
	                <div>
	                  <TextField style={styleFloatLabelRight} floatingLabelText='Contact Number' value={numbers.emergencyContPhNo} />
	                </div>   
	                <div>
	            	    <SelectField floatingLabelText='Relationship' style={styleFloatLabel} value={numbers.emergencyContRltnshp} >
                      <MenuItem value={numbers.emergencyContRltnshp} primaryText={numbers.emergencyContRltnshp} />     
                    </SelectField> 
	                </div>
	            </div>
	            )}
	            </div>
	            </Paper>
        </div>  
      </MuiThemeProvider>
  	</div>
 )
}
}
function mapToprops(state)
{
  console.log("---------------- state",state);
	return{
		userDetails:state.userDetails.userDetails
		// countryDetails: state.countryDetails.countryDetails,
  //   countryName:state.countryName.countryName,
  //   timeZoneDetails: state.timeZoneDetails.timeZoneDetails,
  //   timeZone:state.timeZone.timeZone,
  //   languageDetails:state.languageDetails.languageDetails,
  //   language:state.language.language
		};
}
export default connect(mapToprops,{fetchUserDetails})(Layout);


