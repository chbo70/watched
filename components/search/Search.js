import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
        // clear input 
        setSearchText('');
    };

    return (
        <View className="mt-10">
            <View className="flex flex-row justify-center items-center rounded-full p-1 bg-gray-300">
            <TextInput
                className="p-3 flex-1 font-semibold text-gray-600"
                placeholder="Search for a movie"
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={handleSearch} className="rounded-full p-2 bg-blue-500">
                <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default Search;
