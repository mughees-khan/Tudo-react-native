import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, FlatList ,Modal,Pressable} from 'react-native';
import { useState, useRef } from 'react';
export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [updateText,setUpdateText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [changeText,setChangeText] = useState();
  const [updateChangeIndex,setupdateChangeIndex] = useState();

  const AddItem = () => {
    console.log(text)
    const sample = [...list]

    sample.push(text)
    setList(sample)
  }


  const Delete_todu = (index) => {
    console.log(text)
    const sample = [...list]
    sample.splice(index, 1)
    setList(sample)
  }

  const Update = (index,item)=>{
    
    setupdateChangeIndex(index)
    console.log(item)
    setUpdateText(item)
    setModalVisible(!modalVisible)

  }

  const UpdatedText = () =>{
    setModalVisible(!modalVisible)
    const sample = [...list]
    sample[updateChangeIndex] = changeText
    setList(sample)
  }
  return (
    <View style={styles.container}>

      <TextInput
      
        style={styles.input}
        onChangeText={(e) => setText(e)}
        defaultValue={text}

      />

      <TouchableOpacity
        style={styles.btn}
        onPress={AddItem}>
        <Text>Add Todo</Text>
      </TouchableOpacity>


      <FlatList
        data={list}
        renderItem={({ item, index }) =>
          <>
            <View style={styles.listcss}>
              <Text style={styles.listText}>

                {item}

              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={(index) => Delete_todu(index)}
              ><Text>Delete_todu</Text></TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => Update(index,item)}
              ><Text>Update</Text></TouchableOpacity>



            </View>
          </>


        }
      />

<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{updateText}</Text>
            <TextInput
              onChangeText={(text) => setChangeText(text)}
              placeholder="Change The Text"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={UpdatedText}
            >
              <Text style={styles.textStyle}>Update Text</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "black",
    marginTop: 20
  },
  listcss: {
    flexDirection: 'row',
    width: 350,
    height: 90,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "black"
  }
  , btn: {
    width: 100,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor:"#3498db"
  }
  , listText: {
    width: 100,
    height: 40,
    borderRadius: 4,
    borderWidth: 5,
    marginTop: 20 ,
    paddingLeft:10,
    paddingTop:10
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
