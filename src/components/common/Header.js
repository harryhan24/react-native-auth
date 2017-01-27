// Import Libraries for making a component
import React from "react";

//뷰는 포지션과 스타일을 관장한다. div 같은 느낌
import {Text, View} from "react-native";
// make a compontnt


//props = property ,data rendring 등의 용도로 활용
const Header = (props) => {

    const { textStyle, viewStyle} = styles;


    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};


//스타일을 아래와 같이 선언한다.
const styles = {
    viewStyle:{
      backgroundColor:'#f8f8f8',
        //가운데정렬
        justifyContent: 'center',
        //중앙정렬
        alignItems:'center',
        height:60,
        //맨 위 간격을 만들어 모바일의 시간 부분을 가리지 않도록
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
//당장 렌더를 언하지 않을수도 있기에 일단은 쪼개어 놓는다.
//make the compontnt able to other paort of the app

export { Header };