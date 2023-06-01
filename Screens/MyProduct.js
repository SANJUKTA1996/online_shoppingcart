import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, deleteMyCartItem, removeMyCartItem } from "../src/newredux/MyCartSlice";
import { useNavigation } from '@react-navigation/native';
import { increaseQty,decreaseQty } from "../src/newredux/MyProductSlice";
const MyProduct = () => {
    const myProducts = useSelector(state => state.product);
    const myCartItem = useSelector(state => state.cart);
    console.log('added product  cart', myCartItem);
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const getTotal = () => {
        let total = 0;
        myCartItem.map(item => {
            total = total + item.qty * item.price;

        });
        return total;
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                elevation: 1,
                backgroundColor: '#fff',

            }}>
                <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>Redux ToolKit Demo</Text>

            </View>
            <FlatList
                data={myProducts}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width
                                : '94%',

                            alignSelf: 'center',
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            height: 120,
                            evalution: 1,
                            flexDirection: 'row',


                        }}>
                            <Image source={{ uri: item.image }}
                                style={{ width: 100, height: 100, borderRadius: 10, alignItems: 'center', paddingLeft: 10 }} />
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>{item.name.substring(0, 20)}</Text>
                                <Text style={{ fontWeight: '600' }}>{item.brand}</Text>
                                <Text style={{ color: 'green', fontWeight: '600', fontSize: 16 }}>
                                    {'₹' + item.price}
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    {item.qty == 0 ? (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',
                                                borderRadius: 7,
                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingLeft: 10,
                                                paddingRight: 10
                                            }}
                                            onPress={() => {
                                                dispatch(addProductToMyCart(item));
                                                dispatch(increaseQty(item.id));

                                            }}


                                        >
                                            <Text
                                                style={{
                                                    color: '#fff'
                                                }}>
                                                Add To Cart
                                            </Text>

                                        </TouchableOpacity>
                                    ) : null}
                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, height: 27, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginLeft: 10 }}
                                        onPress={()=>{
                                            if(item.qty>1){
                                                dispatch(removeMyCartItem(item)); 
                                                dispatch(decreaseQty(item.id));
                                            }
                                            else{
                                                dispatch( deleteMyCartItem(item.id));
                                                dispatch(decreaseQty(item.id));

                                            }
                                        }}>
                                            <Text style={{ color: '#fff' }}>-</Text>

                                        </TouchableOpacity>
                                    )}
                                    {item.qty == 0 ? null : (

                                        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>{item.qty}</Text>)}
                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, height: 27, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginLeft: 10 }}
                                        
                                        onPress={()=>{
                                            dispatch(addProductToMyCart(item));
                                            dispatch(increaseQty(item.id));

                                        }}>
                                            <Text style={{ color: '#fff' }}>+</Text>

                                        </TouchableOpacity>
                                    )}
                                </View>

                            </View>
                        </View>
                    )

                }}
            />
            {myCartItem.length > 0 ? (
                <View
                    style={{
                        width: '100%',
                        height: 60,
                        backgroundColor: '#fff',
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',

                    }}>
                    <View style={{

                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>{'added items' + '(' + myCartItem.length + ')'}</Text>
                        <Text style={{}}>{'Total:' + getTotal()}</Text>
                    </View>
                    <View style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',

                    }}>
                        <TouchableOpacity
                            style={{
                                width: '70%',
                                height: 40, backgroundColor: 'green',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => {
                                navigation.navigate('MyCart');
                            }}
                        >
                            <Text style={{ color: '#fff', }}>View Cart</Text>
                        </TouchableOpacity>

                    </View>



                </View>

            ) : null}
        </View>
    )
}
export default MyProduct;