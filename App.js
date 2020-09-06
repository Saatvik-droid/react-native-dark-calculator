/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from "react";
 import { Text, View, StyleSheet, TouchableWithoutFeedback, StatusBar } from "react-native";
 import { Grid, Row, Col} from "native-base";
 import Svg, { Circle, Text as SvgText } from "react-native-svg";
 import { evaluate }  from "mathjs";
 
 const Calci = () => {

  //declaring state constants
  //read only
   const [outputValue, setOutputValue] = useState("0");

   //calculate ouput
   //executes on hitting '+'
   const calculate = () => {
     let tempOutput = "";
     try{
       //converts to at max 4 decimal places
        tempOutput = parseFloat(evaluate(outputValue).toFixed(4)).toString();
      }
      catch(err){
        tempOutput = "Math Error";
      }    

      setOutputValue(tempOutput);
    }

    //intiatialises fresh output string
    //executes on hitting any numerical value or operator
    const appendOutputvalue = (value) => {
      let tempOutput = "";
      if(value.localeCompare("%")== 0){
        value = "/100";
      }

      if(outputValue.localeCompare("0") == 0 || outputValue.localeCompare("Math Error") == 0 || outputValue.localeCompare("Too long")== 0){
        tempOutput = value;
      }
      else{
        tempOutput = outputValue + value;
      }

      if(tempOutput.length>20){
        tempOutput = "Too long";
      }

      setOutputValue(tempOutput);
    }

    //clears output string
    //executes on hitting 'AC'
    const clearEquation = () => {
      setOutputValue("0");
    }

    //deletes last character (number or operator)
    //executes on hitting 'C'
    const delOneCharacter = () => {
      let tempOutput = outputValue.substring(0, outputValue.length-1);

      if(tempOutput.localeCompare("") == 0){
        tempOutput = "0";
      }

      setOutputValue(tempOutput);
    }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'grey'
     },
     outputBox: {
       flex: 1,
       marginBottom: '0.05%',
       backgroundColor: 'black',
       justifyContent: 'flex-end',
       alignItems: 'flex-end'
     },
     inputBox: {
       flex: 1,
       marginTop: '0.05%',
       backgroundColor: 'black'
     },
     outputValueStyling: {
       color: 'white',
       fontSize: 60,
     },
     col: {
       justifyContent: 'center'
     },
     row: {
       justifyContent: 'center',
       alignItems: 'center',
       position: 'relative',
     },
     numpadStyling1: {
       color: '#D7801D',
       fontSize: 30,
       alignSelf: 'center'
     },
     numpadStyling2: {
       color: 'white',
       fontSize: 30,
       alignSelf: 'center',
     }
    })

   return(
     <View style={styles.container}>
       <StatusBar barStyle='light-content' backgroundColor='black'/> 
       <View style={styles.outputBox}>
         <Text style={styles.outputValueStyling}> {outputValue} </Text>
       </View>
       <View style={styles.inputBox}>
         <Grid>
           <Col style={styles.col}>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { clearEquation(); }}>
                 <Text style={styles.numpadStyling1}> AC </Text>
               </TouchableWithoutFeedback>
             </Row>
             <Row style={styles.row}> 
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("7"); }}>
                 <Text style={styles.numpadStyling2}> 7 </Text>
               </TouchableWithoutFeedback>
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("4"); }}>
                 <Text style={styles.numpadStyling2}> 4 </Text>
               </TouchableWithoutFeedback>        
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("1"); }}>
                 <Text style={styles.numpadStyling2}> 1 </Text>
               </TouchableWithoutFeedback>        
             </Row>
             <Row style={styles.row}>
              <TouchableWithoutFeedback onPress={() => { appendOutputvalue("^"); }}>
                 <Text style={styles.numpadStyling2}> ^ </Text>
              </TouchableWithoutFeedback> 
             </Row>
           </Col>
           <Col style={styles.col}>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { delOneCharacter(); }}>
                 <Text style={styles.numpadStyling1}> C </Text>
               </TouchableWithoutFeedback>           
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("8"); }}>
                 <Text style={styles.numpadStyling2}> 8 </Text>
               </TouchableWithoutFeedback> 
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("5"); }}>
                 <Text style={styles.numpadStyling2}> 5 </Text>
               </TouchableWithoutFeedback>
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("2"); }}>
                 <Text style={styles.numpadStyling2}> 2 </Text>
               </TouchableWithoutFeedback>  
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("0"); }}>
                 <Text style={styles.numpadStyling2}> 0 </Text>
               </TouchableWithoutFeedback>
             </Row>
           </Col>
           <Col style={styles.col}>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("%"); }}>
                 <Text style={styles.numpadStyling1}> % </Text>
               </TouchableWithoutFeedback>
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("9"); }}>
                 <Text style={styles.numpadStyling2}> 9 </Text>
               </TouchableWithoutFeedback>              
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("6"); }}>
                 <Text style={styles.numpadStyling2}> 6 </Text>
               </TouchableWithoutFeedback>               
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("3"); }}>
                 <Text style={styles.numpadStyling2}> 3 </Text>
               </TouchableWithoutFeedback>  
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("."); }}>
                 <Text style={styles.numpadStyling2}> . </Text>
               </TouchableWithoutFeedback>
             </Row>
           </Col>
           <Col style={styles.col}>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("/"); }}>
                 <Text style={styles.numpadStyling1}> / </Text>
               </TouchableWithoutFeedback>          
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("*"); }}>
                 <Text style={styles.numpadStyling1}> * </Text>
               </TouchableWithoutFeedback>            
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("-"); }}>
                 <Text style={styles.numpadStyling1}> - </Text>
               </TouchableWithoutFeedback>         
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { appendOutputvalue("+");; }}>
                 <Text style={styles.numpadStyling1}> + </Text>
               </TouchableWithoutFeedback>             
             </Row>
             <Row style={styles.row}>
               <TouchableWithoutFeedback onPress={() => { calculate(); }}>
                <Svg width='100%' height='100%' viewBox='0 0 130 100'>
                  <Circle cx='50%' cy='50%' r='35%' fill='orange'/>
                  <SvgText x='50%' y='70%' fill='white' fontSize='60' textAnchor='middle'> = </SvgText>
                  </Svg>
               </TouchableWithoutFeedback>             
             </Row>    
           </Col>
         </Grid>
       </View>
     </View>
   );
 }

 export default Calci;