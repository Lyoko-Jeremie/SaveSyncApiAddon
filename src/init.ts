import {SaveSyncApiAddon} from "./SaveSyncApiAddon";

window.addonSaveSyncApi = new SaveSyncApiAddon(window.modSC2DataManager, window.modUtils);
window.addonSaveSyncApi.init();
