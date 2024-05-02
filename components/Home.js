import React,{useState} from 'react'
import { Button,StyleSheet, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { sideNavs } from '../data'

const Home = ({ navigation }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <SafeAreaView>
    <Button title='toggle' onPress={()=>setToggle(!toggle)}  />
      <ScrollView style={toggle?StyleSheet.Show:StyleSheet.Hide}>
        {sideNavs.map((nav, i) => (
          <Text style={{color:"gray",height:45,width:300,borderStartColor:"black",borderEndColor:"black",borderColor:"red"}}  numberOfLines={1} key={i} onPress={() => navigation.navigate(nav.href)}>{nav.title}</Text>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        {sideNavs.map((item, i) => (

          <Image src={item.imgSrc} key={i} />
        ))}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  Show:{
    width:23
  },
  Hide:{
    display:'none'
  }
})
export default Home