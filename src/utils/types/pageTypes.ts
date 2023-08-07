import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from './types';


export type HomeScreens = NativeStackNavigationProp<RootStackParamsList, "Home">
export type ProfileScreens = NativeStackNavigationProp<RootStackParamsList, "Profile">
export type ChatScreens = NativeStackNavigationProp<RootStackParamsList, "Chat">