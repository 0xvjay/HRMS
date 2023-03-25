import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { CardColours, GlobalColours } from "../constants/Constants";
import { removeToken } from "../redux/user/user";
import CustomButton from "./CustomButton";
import CustomTitle from "./CustomTitle";

const LogoutModal = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(true);

  const handleModal = () => setModalVisible(!modalVisible);

  const onSubmitHandler = () => {
    dispatch(removeToken());
  };

  return (
    <View style={styles.screen}>
      <Modal
        style={styles.modal}
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.rootContainer}>
          <View style={styles.textContainer}>
            <CustomTitle style={styles.title}>Logout</CustomTitle>
            <Text style={styles.instructionText}>
              Are you sure you want to logout?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              style={styles.generalButton}
              onPress={onSubmitHandler}
            >
              Yes, Logout
            </CustomButton>
            <CustomButton
              style={[styles.generalButton, styles.cancelButton]}
              onPress={() => {
                handleModal();
                navigation.goBack();
              }}
            >
              Cancel
            </CustomButton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    elevation: 4,
  },
  cancelButton: {
    backgroundColor: CardColours.GREY,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: 10,
    position: "absolute",
  },
  generalButton: {
    marginHorizontal: 20,
    marginVertical: 12,
    maxWidth: "40%",
  },
  textContainer: {
    height: 100,
    marginHorizontal: 10,
    padding: 10,
  },
  title: {
    alignSelf: "flex-start",
    padding: 0,
  },
  rootContainer: {
    height: "35%",
    marginTop: "auto",
    backgroundColor: GlobalColours.WHITE,
    elevation: 4,
  },
  instructionText: {
    fontSize: 16,
    color: GlobalColours.BLACK,
  },
});
