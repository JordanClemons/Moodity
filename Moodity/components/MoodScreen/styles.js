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
        marginBottom: '120%',
        width: '100%'
      },
    
      title:{
        color: '#FFFB00',
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
        //position: 'absolute', // add if dont work with above
        color: '#FFF',
        //backgroundColor: '#FFF',
        //height: '1%'
      }

})

export default styles;