import {Text, View} from "react-native";
import {useEffect} from "react";

export default function StuffPage() {
  useEffect(() => {
    console.log("Stuff Page Mounted")
  }, [])
  return (<View><Text>All the Stuff</Text></View>);
}