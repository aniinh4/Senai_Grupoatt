import { View } from "react-native";
import styles from "../styles/styles";
import HeaderPrincipal from "../components/header";
import Rodape from "../components/rodape";

function Home() {
  return (

    <View style={styles.container}>

        <HeaderPrincipal/>

        <Rodape/>
    </View>
  );
}

export default Home;
