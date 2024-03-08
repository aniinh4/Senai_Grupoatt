import { View} from "react-native";
import HeaderPrincipal from "../components/header";
import Rodape from "../components/rodape";
import styles from "../styles/styles";



function Sobre() {
  return (

  
    <View style={styles.container}>
        <HeaderPrincipal/>
        <Rodape/>
    </View>
  );
}

export default Sobre;