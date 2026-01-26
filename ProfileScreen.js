import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from './assets/arrow.svg';
import IcCamera from './icon/IcCamera';
import IcUserProfile from './icon/IcUserProfile';
import IcSetting from './icon/IcSetting';
import IcSupport from './icon/IcSupport';
import IcQuestion from './icon/IcQuestion';
import IcAdmin from './icon/IcAdmin';
import IcLogout from './icon/IcLogout';
import Arrow from './icon/Arrow';

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <View style={{ position: "relative", paddingHorizontal: 16 }}>
                <Image source={require('./assets/profile_cover.png')} style={{ width: '100%', height: 150, resizeMode: 'cover', borderRadius: 8 }} />
                <View style={{ backgroundColor: '#dbf1fe', alignSelf: 'center', position: 'absolute', bottom: -50, borderRadius: "50%", width: 100, height: 100, borderWidth: 2, borderColor: '#fefefe', overflow: 'hidden' }}>
                    <Text style={{ color: '#1294e8', textAlign: 'center', lineHeight: 100, fontSize: 40, fontWeight: 'bold' }}>K</Text>
                </View>
                <IcCamera style={{ position: 'absolute', bottom: -50, right: 165 }} />
            </View>
            <View style={{ marginTop: 60, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Phạm Quang Khang (KHANGPQ3)</Text>
                <Text style={{ color: '#7f7d80', fontWeight: 'bold' }}>(BM SE)</Text>
            </View>
            <ScrollView style={{ display: 'flex', paddingHorizontal: 16, marginTop: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcUserProfile />
                        <Text style={{ fontWeight: 'bold' }}>My Profile</Text>
                    </View>
                    <Arrow />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcSetting />
                        <Text style={{ fontWeight: 'bold' }}>Settings</Text>
                    </View>
                    <Arrow />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcSupport />
                        <Text style={{ fontWeight: 'bold' }}>Support</Text>
                    </View>
                    <Arrow />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcQuestion />
                        <Text style={{ fontWeight: 'bold' }}>FAQ</Text>
                    </View>
                    <Arrow />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e3e1e4' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcAdmin />
                        <Text style={{ fontWeight: 'bold' }}>Admin</Text>
                    </View>
                    <Arrow />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingVertical: 12 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <IcLogout />
                        <Text style={{ fontWeight: 'bold' }}>Logout</Text>
                    </View>
                    <Arrow />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
