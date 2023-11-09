import { StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import Search from '../components/search/Search';

import { UserIcon } from 'react-native-heroicons/outline';

MOCK_DATA = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Horror' },
    { id: 5, name: 'Thriller' },
]

const Home = () => {
    const [movieName, setMovieName] = useState('');
    const categories = MOCK_DATA; // ['Action', 'Comedy', 'Drama', 'Horror', 'Thriller']
    const [category, setCatgeory] = useState('');
    const [activeCategory, setActiveCategory] = useState(1);
    const search = (input) => {
        console.log(input);
        setMovieName(input);
    }

    return (
        <SafeAreaView>
            {/*Title*/}
            <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl font-semibold">Watched</Text>
                <TouchableOpacity className="rounded-full p-2 bg-blue-700">
                    <UserIcon size="20" strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>

            {/* Search Bar for Movies */}
            <View>
                <Search onSearch={search} />
            </View>

            {/* Categories */}
            <View className="px-5 mt-6">
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    className="overflow-visible"
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        let isActive = item.id == activeCategory;
                        let activeTextClass = isActive ? "text-white" : "text-gray-700";
                        return (
                            <TouchableOpacity
                                onPress={() => setActiveCategory(item.id)}
                                style={{ backgroundColor: isActive ? 'rgb(59 130 246)' : 'rgba(0,0,0,0.09)' }}
                                className="p-4 px-5 rounded-full mr-2 shadow"
                            >
                                <Text className={"font-semibold " + activeTextClass}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            {/* Movie Cards */}
            <View>
                
            </View>
        </SafeAreaView>
    )
}

export default Home;