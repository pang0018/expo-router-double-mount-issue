import {Slot, usePathname} from 'expo-router';
import {Text} from "react-native";

export default function StuffLayout() {
    return (
        <>
            <Text>Sub Header Text</Text>
            <Slot />
        </>

    );
}
