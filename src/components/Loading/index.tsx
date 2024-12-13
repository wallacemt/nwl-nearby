import { ActivityIndicator  } from "react-native";
import { sty } from "./style";
import { colors } from "@/styles/theme";

export function Loading() {
    return <ActivityIndicator  color={colors.green.base} style={sty.container} />
}