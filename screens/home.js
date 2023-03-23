import React,{useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function HOME({navigation}){
    const [reviews,setReviews]= useState([
        {title:'ဘကြီးတော် မင်း နန်းတက် သောအခါ',
         rating:'5',
         body: 'lorem ipsum',
         key:1,
        },
        {title:'ဤ သို့ တိုက်ခိုက် နေ ကြ စဉ် အတွင်း',
         rating:'4',
         body: 'lorem ipsum',
         key:2,
        },
        {title:'ငြိမ်းချမ်း မှု ကို လိုလား သဖြင့်',
         rating:'3',
         body: 'lorem ipsum',
         key:3,
        },  

    ]);
    return (
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                     <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                            <Text style={styles.item}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                     </View>       
                )}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFF5E4'
    },
    item: {
        justifyContent:'center',
        textAlign:"justify",
        //padding:15,
        margin:15

    }
});
