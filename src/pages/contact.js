import {View, } from "react-native-web";
import styles from "../styles/styleforms";
import HeaderPrincipal from "../components/header";
import Rodape from "../components/rodape";


function Contact() {
  return (
    <View style={styles.container}>
        <HeaderPrincipal />
        <Rodape/>
    </View>
  );
}

export default Contact;
