import React from "react";
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import { useSelector} from 'react-redux';
import {  useDispatch } from 'react-redux';
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem } from "./MyCartSlice";
import { increaseQty,decreaseQty } from "./MyProductSlice";

const MyCart = () => {
    const myCartItems=useSelector(state=>state.cart);
    const dispatch=useDispatch();
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
                <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>Cart</Text>

            </View>
            <FlatList
                data={myCartItems}
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
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 5
                                    }}>


                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',
                                                borderRadius: 7,

                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginLeft: 10
                                            }}
                                            
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

                                        <Text 
                                        style={{ 
                                            marginLeft: 10,
                                             fontSize: 16, 
                                             fontWeight: '600' 
                                             }}>
                                                {item.qty}
                                                </Text>)}

                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',

                                                borderRadius: 7,
                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',

                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginLeft: 10
                                            }}
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


        </View>
    )
}
export default MyCart;