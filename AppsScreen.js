import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Grid from "./assets/ic_grid.svg"
import Search from './assets/ic_search_gray.svg';
import DatingIcon from './assets/ic_app_dating.svg';
import PaySlitIcon from './assets/ic_app_payslip.svg';
export default function AppsScreen() {
    const workItems = [
        {
            icon: require('./assets/ic_approve_now.png'),
            title: "Approve Now",
            description: "Notify managers of pending requests and allow managers to approve/reject requests from internal tools"
        },
        {
            icon: require('./assets/ic_reward.png'),
            title: "Reward",
            description: "Send colleagues a thank you note or reward Gold for exceptional contribution"
        },
        {
            icon: require('./assets/ic_discipline.png'),
            title: "Discipline",
            description: "Send a discipline warning to subordinates for violation of codes of conduct"
        },
        {
            icon: require('./assets/ic_education.png'),
            title: "Learning",
            description: "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course"
        },
        {
            icon: require('./assets/ic_tasks.png'),
            title: "My Tasks",
            description: ""
        }
    ];

    const utilitiesItems = [
        {
            icon: require('./assets/ic_care.png'),
            title: "FPT Care",
            description: "FPT Care"
        },
        {
            icon: require('./assets/ic_events.png'),
            title: "Events",
            description: "Register, check-in, check-out, send feedback to company events and programs"
        },
        {
            icon: require('./assets/ic_survey.png'),
            title: "Survey",
            description: "Conduct and collect responses for company-wide or department-wide surveys"
        },
        {
            icon: require('./assets/ic_dating.png'),
            title: "FPT Dating",
            description: "Dating feature."
        },
        {
            icon: <PaySlitIcon width={40} height={40} style={{ marginRight: 10 }} />,
            isSVG: true,
            title: "Payslip",
            description: "Payslip"
        },
        {
            icon: require('./assets/ic_birthday.png'),
            title: "Birthday",
            description: "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT."
        }
    ];

    const newsItems = [
        {
            icon: require('./assets/ic_news.png'),
            title: "News",
            description: "A collection of latest news and notable events around the company"
        },
        {
            icon: require('./assets/ic_star_ave.png'),
            title: "Star Ave",
            description: "Recognise notable achievements within a business unit or within FPT"
        }
    ];

    const wikiItems = [
        {
            icon: require('./assets/ic_employee_info.png'),
            title: "Employee Info",
            description: "Basic, non-confidential employee information (name, gender, department, etc.)"
        }
    ];

    const gameItems = [
        {
            icon: require('./assets/ic_games.png'),
            title: "Game",
            description: "Community-engaging games with Gold as rewards"
        }
    ];
    return (
        <SafeAreaView style={{ display: 'flex', gap: 16 }}>
            <View style={{
                display: 'flex',
                paddingHorizontal: 10,
            }}>
                <View View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{
                        width: '90%',
                        position: 'relative',
                        justifyContent: 'center',
                    }}>
                        <Search style={{ position: 'absolute', left: 10, top: '50%', zIndex: 1, marginTop: -9 }} />
                        <TextInput
                            placeholder="Type feature's name"
                            placeholderTextColor="#d9d7da"
                            backgroundColor='#e8e6e9'
                            style={{
                                width: '100%',
                                borderRadius: 4,
                                height: 37,
                                fontSize: 14,
                                paddingLeft: 40,
                            }}
                        />
                    </View>
                    <Grid />
                </View>
            </View >
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>All Apps</Text>
                </View>
                <View style={{ backgroundColor: '#efedf0', width: '100%', padding: 8 }}>
                    <Text style={{ color: '#939393', fontWeight: 'bold' }}>WORK</Text>
                </View>
                {workItems.map((item, index) => (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#e4e2e5' }}>
                        <Image source={item.icon} style={{ width: 40, height: 40, marginRight: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, color: '#606060', flexShrink: 1, flexWrap: 'wrap' }}>{item.description}</Text>
                        </View>
                    </View>
                ))}
                <View style={{ backgroundColor: '#efedf0', width: '100%', padding: 8 }}>
                    <Text style={{ color: '#939393', fontWeight: 'bold' }}>UTILITIES</Text>
                </View>
                {utilitiesItems.map((item, index) => (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#e4e2e5' }}>
                        {item?.isSVG ? item.icon : <Image source={item.icon} style={{ width: 40, height: 40, marginRight: 10 }} />}
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, color: '#606060', flexShrink: 1, flexWrap: 'wrap' }}>{item.description}</Text>
                        </View>
                    </View>
                ))}
                <View style={{ backgroundColor: '#efedf0', width: '100%', padding: 8 }}>
                    <Text style={{ color: '#939393', fontWeight: 'bold' }}>NEWS</Text>
                </View>
                {newsItems.map((item, index) => (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#e4e2e5' }}>
                        <Image source={item.icon} style={{ width: 40, height: 40, marginRight: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, color: '#606060', flexShrink: 1, flexWrap: 'wrap' }}>{item.description}</Text>
                        </View>
                    </View>
                ))}
                <View style={{ backgroundColor: '#efedf0', width: '100%', padding: 8 }}>
                    <Text style={{ color: '#939393', fontWeight: 'bold' }}>WIKI</Text>
                </View>
                {wikiItems.map((item, index) => (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#e4e2e5'   }}>
                        <Image source={item.icon} style={{ width: 40, height: 40, marginRight: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, color: '#606060', flexShrink: 1, flexWrap: 'wrap' }}>{item.description}</Text>
                        </View>
                    </View>
                ))}
                <View style={{ backgroundColor: '#efedf0', width: '100%', padding: 8 }}>
                    <Text style={{ color: '#939393', fontWeight: 'bold' }}>GAMES</Text>
                </View>
                {gameItems.map((item, index) => (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#e4e2e5' }}>
                        {item?.isSVG ? item.icon : <Image source={item.icon} style={{ width: 40, height: 40, marginRight: 10 }} />}
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, color: '#606060', flexShrink: 1, flexWrap: 'wrap' }}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView >
    );
}
