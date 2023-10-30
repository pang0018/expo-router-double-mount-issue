import {Slot, usePathname} from 'expo-router';
import {Text} from "react-native";

export default function PrivateLayout() {
    const pathname = usePathname()
    return (
        <>
            <Text>Header Text</Text>
            <Slot />
        </>

    );
}
