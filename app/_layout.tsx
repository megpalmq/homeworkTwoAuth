import { Stack } from "expo-router";
import {ClerkProvider, ClerkLoaded, SignedIn, SignedOut} from "@clerk/clerk-expo";

export default function RootLayout() {
  return (
    <ClerkProvider>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </ClerkProvider>
  );
}
