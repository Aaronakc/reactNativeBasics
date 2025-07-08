interface RememberUserProps {
  onPress: () => void;
  remember: boolean;
}




import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'


const RememberUser = ({ onPress, remember }: RememberUserProps) => {

  return (

    <View style={{ marginLeft: 25, marginRight: 10, marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 3 }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              remember
                ? require("../../assets/checkedbox.png")
                : require("../../assets/uncheckbox.png")
            }
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
        <Text>Remember for 30 days</Text>

      </View>

      <Text style={{ color: "#ffcc00", textDecorationLine: "underline" }}>Forgot password</Text>


    </View>
  )
}

export default RememberUser