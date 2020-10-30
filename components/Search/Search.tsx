import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './SearchStyles'


interface Props {
    setFilter: React.Dispatch<React.SetStateAction<{ name: string; }>>,
    search: string
}

const Search: React.FunctionComponent<Props> = ({ setFilter, search }) => {
    const [name, setName] = useState<string>('');

    const onSubmit = () => {
        setFilter({
            name
        })
    }

    const onClear = () => {
        setName("")
        setFilter({
            name: ""
        })
    }

    const startSearch =  (text: string) => {
        if (text.length >= 3) {
            setName(text)
            onSubmit()
        }
        if (text.length === 0) {
            onClear()
            
        }
        else {
            setName(text)
        }
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder={`Search ${search}`} style={styles.search} onChangeText={text => startSearch(text)} value={name} />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.searchButton} onPress={onSubmit}>
                    <Text style={styles.text} >Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deletoButton} onPress={onClear}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search