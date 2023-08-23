import {StyleSheet} from "react-native";
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
    },
    title:{
        color: colors.white,
        fontSize: 16,
        textAlign:"center",
        fontWeight: '500'
    }
})

export default styles;