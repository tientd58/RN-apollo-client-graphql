import AsyncStorage from '@react-native-community/async-storage';

export enum StorageKey {
  AuthToken = 'AuthToken'
}

export const Storage = {
  set: async (key: StorageKey, value: any) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (error) {} // tslint:disable-line: no-empty
  },
  get: async (key: StorageKey) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {} // tslint:disable-line: no-empty
  },
  remove: async (key: StorageKey) => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (err) {} // tslint:disable-line: no-empty
  }
};