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
import { fetchCountryDetails } from "../actions/countryDetailsAction"
import { fetchTimeZoneDetails } from "../actions/timeZoneAction"
import { fetchLanguageDetails } from "../actions/languageAction"
import { handleChangeCountry, handleChangeTimeZone , handleChangeLanguage} from "../actions/handleChangeAction"

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
    this.handleChangeSeat = this.handleChangeSeat.bind(this);
    this.handleChangeMeal = this.handleChangeMeal.bind(this);
  }
  componentDidMount(){
    this.state = {value1: 1,value2:1}
    	
  }
  componentWillMount() {
    this.props.fetchUserDetails()
    this.props.fetchCountryDetails()
    this.props.fetchTimeZoneDetails()
    this.props.fetchLanguageDetails()
    this.props.handleChangeCountry()
    this.props.handleChangeTimeZone()
    this.props.handleChangeLanguage()
  }
  handleChangeSeat = (event,index,value1) => this.setState({value1});
  handleChangeMeal = (event,index,value2) => this.setState({value2});
  render() {
  // console.log("rohit",this.props.userDetails[0]);
  // 	console.log("raman",this.props.userDetails);
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
            {/*<div>{numbers.country}</div>*/}
            <div>
	            	<SelectField floatingLabelText="Country" style={styleFloatLabel} value={this.props.countryName} >
                   {this.props.countryDetails.map((city,index)=>
                      /*<div key={index} >*/
                        <MenuItem  key={index} value={index} primaryText={city.country} onClick={()=>this.props.handleChangeCountry(index)}/>
                      /*</div>*/
                    )}
                     
                </SelectField> 
	          </div>
            <div>
	            <SelectField floatingLabelText="TimeZone" style={styleDropdown} value={this.props.timeZone}>
                {this.props.timeZoneDetails.map((time,index)=>
                <MenuItem key ={index} value={index} primaryText={time}  onClick={()=>this.props.handleChangeTimeZone(index)}/>  
                )} 
              </SelectField> 
	          </div>
            <div >
	            <SelectField floatingLabelText="Language" style={styleFloatLabel}  value={this.props.language}>
                 {this.props.languageDetails.map((lang,index)=>
                <MenuItem key ={index} value={index} primaryText={lang.language}  onClick={()=>this.props.handleChangeLanguage(index)}/>  
                )} 
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
                    <SelectField floatingLabelText="Airline Seat Preference" style={styleFloatLabel} value={this.state.value1} onChange={this.handleChangeSeat}>
                      <MenuItem value={1} primaryText="Window" />  
                      <MenuItem value={2} primaryText='Aisle' />   
                    </SelectField> 
                  </div>
                  <div>
                    <SelectField floatingLabelText="Meal" style={styleDropdown} value={this.state.value2} onChange={this.handleChangeMeal}>
                       <MenuItem value={1} primaryText="Asian Vegetarian Meal (AVML)" />
                       <MenuItem value={2} primaryText="Infant/Baby Food (BBML)" />
                       <MenuItem value={3} primaryText="Bland Meal (BLML)" />
                       <MenuItem value={4} primaryText="Child Meal (CHML)" />
                       <MenuItem value={5} primaryText="Diabetic Meal (DBML)" />
                       <MenuItem value={6} primaryText="Fruit Platter (FPML)" />
                       <MenuItem value={7} primaryText="Gluten-Free Meal (GFML)" />
                       <MenuItem value={8} primaryText="Hindu (Non Vegetarian) Meal (HNML)" />
                       <MenuItem value={9} primaryText="Japanese Meal (Lh Specific) (JPML)" />
                       <MenuItem value={10} primaryText="Kosher Meal (KSML)" />
                       <MenuItem value={11} primaryText="Low Calorie Meal (LCML)" />
                       <MenuItem value={12} primaryText="Low Cholesterol/Low Fat Meal (LFML)" />
                       <MenuItem value={13} primaryText="Low Sodium, No Salt Added (LSML)" />
                       <MenuItem value={14} primaryText="Moslem Meal (MOML)" />
                       <MenuItem value={15} primaryText="No Fish Meal (Lh Specific) (NFML)" />
                       <MenuItem value={16} primaryText="Non Lactose Meal (NLML)" />
                       <MenuItem value={17} primaryText="Japanese Obento Meal (Ua Specific) (OBML)" />
                       <MenuItem value={18} primaryText="Oriental Meal (ORML)" />
                       <MenuItem value={19} primaryText="Raw Vegetarian Meal (RVML)" />
                       <MenuItem value={20} primaryText="Sea Food Meal (SFML)" />
                       <MenuItem value={21} primaryText="Special Meal, Specify Food (SPML)" />
                       <MenuItem value={22} primaryText="Vegetarian Meal (Non-Dairy) (VGML)" />
                       <MenuItem value={23} primaryText="Vegetarian Meal (Lacto-Ovo)  (VLML)" />
                       <MenuItem value={24} primaryText="Vegetarian Oriental Meal (VOML)" />
                    </SelectField> 
                  </div>
                    <div>
                      <TextField style={styleFloatLabelLeft} floatingLabelText='Freqent Flier' defaultValue={numbers.frequentFlierNo[0].number}/>
                  </div>
                  <div>
                      <TextField style={styleFloatLabelRight} floatingLabelText='Airline Code' defaultValue={numbers.frequentFlierNo[0].carrierName} />
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
	                      <TextField  style={styleFloatLabelLeft} floatingLabelText='Special Assistance' defaultValue={numbers.specialAssistance}/>
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
	                      <TextField style={styleFloatLabelLeft} floatingLabelText='Other Special Assistance' defaultValue={numbers.otherSpclAsst}/>
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
	                 <TextField style={styleFloatLabelLeft} floatingLabelText='Name' defaultValue={numbers.emergencyContName}/>
	                </div>
	                <div>
	                  <TextField style={styleFloatLabelRight} floatingLabelText='Contact Number' defaultValue={numbers.emergencyContPhNo} />
	                </div>   
	                <div>
	            	    <SelectField floatingLabelText='Relationship' style={styleFloatLabel} value={numbers.emergencyContRltnshp} >
                      <MenuItem value='Spouse'  primaryText="Spouse" />     
                      <MenuItem value='Parent' primaryText="Parent" />     
                      <MenuItem value='Guardian' primaryText="Guardian" />     
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
		userDetails:state.userDetails.userDetails,
		countryDetails: state.countryDetails.countryDetails,
    countryName:state.countryName.countryName,
    timeZoneDetails: state.timeZoneDetails.timeZoneDetails,
    timeZone:state.timeZone.timeZone,
    languageDetails:state.languageDetails.languageDetails,
    language:state.language.language
		};
}
export default connect(mapToprops,{fetchUserDetails, fetchCountryDetails ,fetchTimeZoneDetails,fetchLanguageDetails, handleChangeCountry, handleChangeTimeZone, handleChangeLanguage})(Layout);


