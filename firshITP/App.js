import React from "react";
import {TouchableOpacity, View} from "react-native";
import HolaMundo from "./src/componets/HolaMundo";
import Title from "./src/componets/Title";
import styles from "./src/styles/styles";

const App = () => {
  return (
    <View style={styles.main}>
      <HolaMundo
        parametro1="hola"
        propiedad2="red"
        fontSize={18}
        value={true}
      />
      <TouchableOpacity>
        <HolaMundo
          parametro1="adios"
          propiedad2="blue"
          fontSize={24}
          value={true}
        />
      </TouchableOpacity>
      <HolaMundo
        parametro1="qué tal!!!"
        propiedad2="green"
        fontSize={28}
        value={false}
      />
      <Title />
    </View>
  );
};

export default App;