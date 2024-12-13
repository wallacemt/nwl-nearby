import { View, Text } from "react-native";
import {colors} from '@/styles/theme'
import { styles } from "./style";
import { IconProps } from "@tabler/icons-react-native";

export function Step({title, description, icon: Icon}: {title: string, description: string, icon:React.ComponentType<IconProps>}){
    return(
        <View style={styles.container}>
        {Icon && <Icon size={32} color={colors.red.base}/>}
        
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}
