import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="(employee)" />
            <Tabs.Screen name="(guard)" />
            <Tabs.Screen name="(owner)" />
            <Tabs.Screen name="(rh)" />
        </Tabs>
    )
}

export default TabsLayout;
