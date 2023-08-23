import React from "react";
import {Text,View} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

const Splash =() =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>100k+Premium Recipe</Text>
            <Button>Start Cooking</Button>
        </View>
    )
} 

export default React.memo(Splash);