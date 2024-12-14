import { Text, useWindowDimensions} from "react-native";
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet"
import { Place, PlaceProps } from "../place";
import { useRef } from "react";
import { s } from "./styles";
type Props = {
  data: PlaceProps[]
}
export function Places ({data}: Props){
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = {
    min: 278,
    max: dimensions.height - 228,
  }

  return (
    <BottomSheet 
      ref={bottomSheetRef} 
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}\
      enableOverDrag={false}
    >
        <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Place data={item}/>}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        >

        </BottomSheetFlatList>
    </BottomSheet>
  )
}