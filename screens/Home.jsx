import {
    Image,
    Alert,
    StatusBar,
    View,
    FlatList,
    ActivityIndicator,
    refreshControl,
    Text,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import Post from '../components/Post';
import axios from 'axios';
import React from 'react';

const Home = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    const axiosPosts = () => {

        setIsLoading(true);

        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(({ data }) => {
                console.log('success')
                setItems(data)
            }).catch(err => {
                console.log(err)
                Alert.alert('｡ﾟ･ (>_<) ･ﾟ｡', 'Ошибка при получении данных')
            }).finally(() => {
                setIsLoading(false)
            });
    }

    React.useEffect(axiosPosts, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View>
            {/* вывод данных */}
            {/* {items.map((item) => (
          <Post key={item.id} title={item.title} image={item.url} />
        ))} */}


            {/* компонент для скролла */}
            <FlatList
                // параметр и компонент для скролла сверху экрана
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={axiosPosts} />}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Post key={item.id} title={item.title} image={item.url} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home