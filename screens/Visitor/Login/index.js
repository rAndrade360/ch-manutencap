import React from 'react'
import {
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Thumbnail,
  View
} from 'native-base'
import { images, GlobalStyles as styles } from '@components'
import enhancer from './enhancer'
import { KeyboardAvoidingView } from 'react-native'
let Login = ({ navigation: { navigate }, updateForm, emailLogin }) => (
  <Content
    contentContainerStyle={[styles.verticalAlignCenter, styles.pageBackground]}>
    <View style={styles.alignCenterItem}>
      <Thumbnail style={styles.size150} source={images['logo']} />
    </View>
    <View style={styles.alignCenterItem}>
      <Text style={styles.pageMessage}>
        Olá querido funcionário, insira as suas informações para prosseguir:
      </Text>
    </View>
    <KeyboardAvoidingView behavior="padding">
      <Form style={styles.marginH15}>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Email Id"
            onChangeText={text => updateForm('email', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            keyboardType="email-address"
          />
        </Item>

        <Item regular style={styles.formItem}>
          <Input
            placeholder="Password"
            type="password"
            onChangeText={text => updateForm('password', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            secureTextEntry
          />
        </Item>
      </Form>
    </KeyboardAvoidingView>
    <Button
      transparent
      dark
      onPress={() => navigate('ForgotPassword')}
      style={styles.alignCenterSelf}>
      <Text style={styles.subHeading} uppercase={false}>
        Esqueceu a senha?
      </Text>
    </Button>
    <Button block onPress={emailLogin} style={[styles.brownBtn, styles.btn]}>
      <Text style={styles.whiteTxt}>Continuar</Text>
    </Button>
    {/* <View
      style={{
        borderBottomColor: '#543437',
        borderBottomWidth: 1,
        marginVertical: 25
      }}
    />
    <Button
      block
      onPress={() => navigate('SignUp')}
      style={[styles.btn, styles.orangeBtn]}>
      <Text style={styles.whiteTxt} uppercase={false}>
        Create New Account
      </Text>
    </Button> */}
  </Content>
)

export default enhancer(Login)
