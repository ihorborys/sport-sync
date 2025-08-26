import { Text, View } from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      {/*<Text>Edit app/index.tsx to edit this screen.</Text>*/}
      <PrimaryButton title={"Next"} onPress={()=> console.log('Pressed')}></PrimaryButton>
    </View>
  );
}
