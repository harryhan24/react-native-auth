import React, {Component} from 'react';
import {Text} from 'react-native';
import {TextInput} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component{
    state = {email: '',password: '',error:'',loading: false};

    onButtonPress(){
        const {email,password} = this.state;

        this.setState({error:'', loading: true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccsss.bind(this))
            .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccsss.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({error:'Auth fail',loading: false});
    }

    onLoginSuccsss(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });
    }

    renderButton(){
        // 로딩중일때 아래를 리턴
        if(this.state.loading){
            return <Spinner size="small" />;
        }

        //아니면 그냥 버튼 출력
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        value={this.state.email}
                        placeholder="user@gmail.com"
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                

                <CardSection>
                    <Input placeholder="password"
                           label="password"
                           value={this.state.password}
                           onChangeText={password=>this.setState({password})}
                           secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginForm;