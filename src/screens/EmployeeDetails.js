import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import DetailsCard from "../components/DetailsCard";
import { empoyeeInfo, GlobalColours } from "../constants/Constants";

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState(empoyeeInfo);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: employeeData.profile }} />
        <View style={styles.titleContainer}>
          <Text style={styles.nameTitle}>{employeeData.name}</Text>
          <Text style={styles.generalText}>{employeeData.department}</Text>
          <Text style={styles.blueText}>Emp. ID: {employeeData.id}</Text>
        </View>
      </View>
      <View style={styles.generalContainer}>
        <Text style={styles.generalTitle}>Profile Details</Text>
        <DetailsCard name="Full Name" value={employeeData.fullname} />
        <DetailsCard name="Personal Email" value={employeeData.email} />
        <DetailsCard name="Department" value={employeeData.department} />
      </View>
      <View style={styles.generalContainer}>
        <Text style={styles.generalTitle}>Emergency Information</Text>
        <DetailsCard name="Mobile Phone" value={employeeData.phone} />
        <DetailsCard name="Emerg Contact" value={employeeData.emgContact} />
        <DetailsCard
          name="Emerg Contact Name"
          value={employeeData.emgContactName}
        />
        <DetailsCard
          name="Current Address"
          value={employeeData.currentAddress}
        />
        <DetailsCard
          name="Permanent Address"
          value={employeeData.permanentAddress}
        />
      </View>
      <View style={styles.generalContainer}>
        <Text style={styles.generalTitle}>Company Relations</Text>
        <DetailsCard name="Department" value={employeeData.department} />
        <DetailsCard name="Designation" value={employeeData.department} />
        <DetailsCard name="Batch" value={employeeData.batch} />
        <DetailsCard name="Reports To" value={employeeData.reportsTo} />
        <DetailsCard name="Joining Date" value={employeeData.joiningDate} />
      </View>
    </ScrollView>
  );
};

export default EmployeeDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "space-evenly",
  },
  nameTitle: {
    fontSize: 20,
    color: GlobalColours.BLACK,
    fontWeight: "800",
  },
  generalText: {
    fontSize: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  blueText: {
    color: GlobalColours.BLUE,
  },
  generalContainer: {
    flex: 1,
    backgroundColor: GlobalColours.GREY,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  generalTitle: {
    color: GlobalColours.BLACK,
    fontSize: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
});
