import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path as needed
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define TypeScript types
type Listing = {
  id: string;
  title: string;
  price: number;
  address: string;
  owner: string;
};

type RootStackParamList = {
  Contact: { owner: string };
};

const ListingsScreen = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const listingsData: Listing[] = [];
        
        querySnapshot.forEach((doc) => {
          listingsData.push({
            id: doc.id,
            ...doc.data() as Omit<Listing, 'id'>
          });
        });

        setListings(listingsData);
      } catch (error) {
        console.error("Error fetching listings: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading properties...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listingItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>₹{item.price}/month</Text>
            <Text>{item.address}</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Contact', { owner: item.owner })}
            >
              <Text style={styles.contactLink}>Contact Owner</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Styles remain the same as before
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  // ... (other styles from previous example)
});

export default ListingsScreen;