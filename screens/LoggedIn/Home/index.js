import React, { useState } from 'react'
import { Content, Thumbnail, View, Text } from 'native-base'
import { images, GlobalStyles } from '@components'
import styles from './style'
import enhancer from './enhancer'

let Home = ({ profile }) => {
  const [missions, setMissions] = useState([])
  return (
    <Content
      contentContainerStyle={[
        GlobalStyles.verticalAlignCenter,
        GlobalStyles.pageBackground
      ]}>
      <View style={GlobalStyles.alignCenterItem}>
        <Thumbnail style={GlobalStyles.size150} source={images['logo']} />
      </View>
      {missions.map(mission => (
        <View>
          <View>
            <Thumbnail style={GlobalStyles.size150} source={mission.thumb} />
            <Text>{mission.name}</Text>
          </View>
          <View>
            <Text>Progresso:</Text>
            <Text>{mission.progress}</Text>
          </View>
        </View>
      ))}
      <View style={GlobalStyles.alignCenterItem}>
        <Thumbnail style={GlobalStyles.size150} source={images['logo']} />
      </View>
      <Text style={styles.heading}>Welcome {profile.name} </Text>
    </Content>
  )
}

export default enhancer(Home)
