import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { capitalize, map } from "lodash";

export default function Stats(props) {
  const { stats } = props;
  console.log(stats);

  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return { backgroundColor: color, width: `${num}%` };
  };
  return (
    <View style={Styles.content}>
      <Text style={Styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={Styles.block}>
          <View style={Styles.blockTitle}>
            <Text style={Styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={Styles.blockInfo}>
            <Text style={Styles.number}>{item.base_stat}</Text>
            <View style={Styles.bgBar}>
              <View style={[Styles.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const Styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "80%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    //backgroundColor: "red",
    //width: "100%",
    height: 5,
    borderRadius: 20,
  },
});
