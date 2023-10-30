import {Link} from "expo-router";
import {View} from "react-native";

export default function PrivatePage() {
  return (<View><Link href="/private/stuff">Private stuff</Link></View>);
}