import React from 'react';
import {View} from 'react-native';
//카드 섹션은 단지 데코를 위한 내용
const CardSection = (props) =>{
    return(
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

const style={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        //one line by oneline
        flexDirection:'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection };