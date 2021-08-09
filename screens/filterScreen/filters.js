import React, { useState } from "react";
import { View, Text } from "react-native";
import { Chip } from "react-native-elements";
import { COLORS } from "../../core/styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import filtersScreenStyles from "./filtersScreenStyles";
import FilterTopBar from "./components/filterTopBar";

export default function Filters() {
  const [groupedFilters, setGroupedFilters] = useState({
    availability: {
      1: { id: "1", title: "Available During", isSelected: false },
      2: { id: "2", title: "Maintenance Ending Today", isSelected: false },
      3: { id: "3", title: "All Check outs", isSelected: false },
      4: { id: "4", title: "Overdue Items", isSelected: false },
      5: { id: "5", title: "Checkin Due Today", isSelected: false },
      6: { id: "6", title: "Enabled", isSelected: false },
    },
    custom: {
      1: { id: "1", title: "Last Month Reservations", isSelected: false },
      2: { id: "2", title: "Pending Maintenance", isSelected: false },
    },
    other: {
      1: { id: "1", title: "Quantity Range", isSelected: false },
      2: { id: "2", title: "Update Time", isSelected: false },
      3: { id: "3", title: "Items in Cart", isSelected: false },
      4: { id: "4", title: "With Zendesk Tickets", isSelected: false },
    },
  });

  return (
    <View>
      <FilterTopBar title="Filter" />
      {Object.entries(groupedFilters).map(([groupKey, groupOfFilters]) => (
        <View key={groupKey} style={filtersScreenStyles.group}>
          <Text style={filtersScreenStyles.filterGroupHeading}>
            {groupKey.toUpperCase()}
          </Text>
          <View style={filtersScreenStyles.filtersList}>
            {Object.entries(groupOfFilters).map(([key, filter]) => (
              <Chip
                title={filter.title}
                key={key}
                icon={
                  filter.isSelected ? (
                    <Icon name="check" size={24} color="white" />
                  ) : undefined
                }
                buttonStyle={{
                  backgroundColor: filter.isSelected
                    ? COLORS.primary
                    : COLORS.unslectedTag,
                  ...filtersScreenStyles.chip,
                }}
                containerStyle={filtersScreenStyles.chipContainer}
                titleStyle={{
                  color: filter.isSelected ? COLORS.white : COLORS.black,
                  ...filtersScreenStyles.chipText,
                }}
                onPress={() => {
                  groupedFilters[groupKey][key].isSelected = !filter.isSelected;
                  setGroupedFilters({
                    ...groupedFilters,
                  });
                }}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
