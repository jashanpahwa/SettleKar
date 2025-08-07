export type RootStackParamList = {
  Home: undefined;
  Listings: undefined;
  Contact: { owner: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}