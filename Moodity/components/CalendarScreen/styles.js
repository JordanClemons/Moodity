import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    homeContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
      },
    
      homeText:{
        alignItems: 'center',
        marginBottom: '140%',
        width: '100%'
      },
    
      title:{
        color: '#FFF',
        opacity: .8,
        fontSize: 40,
        fontWeight: '600'
      },
    
      subtitle:{
        color: '#FFF',
        fontSize: 16
      },

      drawerButton:{
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginBottom: '200%',
        position: 'absolute', // add if dont work with above
        color: '#FFF',
      }

})

export default styles;