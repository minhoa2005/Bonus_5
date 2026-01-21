import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CameraIcon from './assets/ic_camera.svg';
import UserProfile from './assets/ic_user_profile_new.svg'
import ArrowRight from './assets/arrow.svg'
import FAQIcon from './assets/ic_question.svg'
import LogoutIcon from './assets/ic_logout.svg'
import SettingsIcon from './assets/ic_setting.svg'
import SupportIcon from './assets/ic_support.svg'
import AdminIcon from './assets/ic_admin.svg'

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <View style={{ position: "relative", paddingHorizontal: 16 }}>
                <Image source={require('./assets/profile_cover.png')} style={{ width: '100%', height: 150, resizeMode: 'cover', borderRadius: 8 }} />
                <View style={{ backgroundColor: '#dbf1fe', alignSelf: 'center', position: 'absolute', bottom: -50, borderRadius: "50%", width: 100, height: 100, borderWidth: 2, borderColor: '#fefefe', overflow: 'hidden' }}>
                    <Text style={{ color: '#1294e8', textAlign: 'center', lineHeight: 100, fontSize: 40, fontWeight: 'bold' }}>K</Text>
                </View>
                <CameraIcon width={30} height={30} style={{ position: 'absolute', bottom: -50, right: 165 }} />
            </View>
            <View style={{ marginTop: 60, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Phạm Quang Khang (KHANGPQ3)</Text>
                <Text style={{ color: '#7f7d80', fontWeight: 'bold' }}>(BM SE)</Text>
            </View>
            <ScrollView style={{ display: 'flex', paddingHorizontal: 16, marginTop: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <UserProfile />
                        <Text style={{ fontWeight: 'bold' }}>My Profile</Text>
                    </View>
                    <ArrowRight />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <SettingsIcon />
                        <Text style={{ fontWeight: 'bold' }}>Settings</Text>
                    </View>
                    <ArrowRight />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <SupportIcon />
                        <Text style={{ fontWeight: 'bold' }}>Support</Text>
                    </View>
                    <ArrowRight />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <FAQIcon />
                        <Text style={{ fontWeight: 'bold' }}>FAQ</Text>
                    </View>
                    <ArrowRight />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <AdminIcon />
                        <Text style={{ fontWeight: 'bold' }}>Admin</Text>
                    </View>
                    <ArrowRight />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <LogoutIcon />
                        <Text style={{ fontWeight: 'bold' }}>Logout</Text>
                    </View>
                    <ArrowRight />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
