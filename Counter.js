import { View, Text , Button} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement, reset } from './Practice/slice/counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <View style={{flex : 1,justifyContent : 'center' ,alignItems: 'center'}}>
      <Text>Counter : {count}</Text>
      <Button title='Increment' onPress={()=>dispatch(increment())} />
            <Button title='Decrement' onPress={()=> dispatch(decrement())} />
                        <Button title='Reset' onPress={()=>dispatch(reset())} />


    </View>
  )
}

export default Counter